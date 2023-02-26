"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint

from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
from api.models import db, User, Post, Favorites
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)



def set_password(password):
    return generate_password_hash(password)

def check_password(hash_password, password):
    return check_password_hash(hash_password, password)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/users', methods=['GET'])
def getting_users():
    if request.method =='GET':
        users = User.query.all()
        print(users)
        users_list =[]
        for user in users:
            users_list.append(user.serialize())

        return jsonify(users_list), 200
    
@api.route('/user/<int:user_id>', methods=['GET'])
def get_user(user_id=None):
    if request.method =='GET':
        user = User.query.filter_by(id=user_id).first()
        if user:
            return jsonify(user.serialize()), 200
        else:
            return jsonify({'message': "User with that id doesn't exist"}), 400

        
    
@api.route('/login', methods=['POST'])
def login():
    if request.method =='POST':
        body = request.json
        email = body.get('email', None)
        password = body.get('password', None)
        
        if email is None or password is None:
            return jsonify({'error': 'Password or email needed'}), 400
        else:
            login = User.query.filter_by(email=email).one_or_none()

            if login is None:
                return jsonify({'error': 'Bad credentials'}), 400
            else:
                if check_password(login.password, password):
                    access_token = create_access_token(identity=login.id)
                    return jsonify({ 'token': access_token, 'user_id': login.id }), 200

                else:
                    return jsonify({'error': 'Bad credentials'}), 400
                
@api.route('/sign_up', methods=['POST'])
def sign_up():
    if request.method =='POST':
        body = request.json
        username = body.get('username', None)
        email = body.get('email', None)
        password = body.get('password', None)
        publisherMode = body.get('publisherMode', False)
        publisherType = body.get('publisherType', None)
        
        form_data = [username, email, password, publisherMode, publisherType]
        for item in form_data:
            if item is None:
                return jsonify({'message': "Form incomplete."}), 400
            else:
                password = generate_password_hash(password)

                user = User(username=username, email=email, password=password, is_active=True, publisherMode=publisherMode, publisherType=publisherType)

                db.session.add(user)
                try:
                    db.session.commit()
                    return jsonify({"message": "User created successfully"}), 201
                except Exception as error:
                    print(error.args)
                    db.session.rollback()
                    return  jsonify({"message": f"Error: {error.args}"}), 500


@api.route('/courses', methods=['GET'])
def getting_courses():
    if request.method =='GET':
        courses = Post.query.filter_by(event=False).all()
        print(courses)
        courses_list =[]
        for course in courses:
            courses_list.append(course.serialize())

        return jsonify(courses_list), 200

@api.route('/events', methods=['GET'])
def getting_events():
    if request.method =='GET':
        events = Post.query.filter_by(event=True).all()
        events_list =[]
        for event in events:
            events_list.append(event.serialize())

        return jsonify(events_list), 200

@api.route('/create_event', methods=['POST'])
def create_event():
    if request.method == 'POST':

        body = request.json

        user_id = body.get('user_id', None)
        name = body.get('name', None)
        detail = body.get('detail', None)
        category = body.get('category', None)
        event = body.get('event', None)
        alwaysAvailable = body.get('alwaysAvailable', None)
        location = body.get('location', None)
        online = body.get('online', None)
        date = body.get('date', None)
        duration = body.get('duration', None)
        certificate = body.get('certificate', None)

        form_data = [user_id, name, detail, category, event, alwaysAvailable, location, online, duration, certificate]
        for item in form_data:
            if item is None:
                return jsonify({'message': "Form incomplete."}), 400

        if date == "":
            date = None

        post = Post(user_id=user_id, name=name, detail=detail, categories=category, event=event, alwaysAvailable=alwaysAvailable, location=location, online=online, date=date, duration=duration, certificate=certificate)
        db.session.add(post)
        try:
            db.session.commit()
            return jsonify({'message': "Post created"}), 201
        except Exception as error:
            print(error.args)
            db.session.rollback()
            return jsonify({"message": error.args})

@api.route('/helloo', methods=['GET'])
@jwt_required
def hello():
    email = get_jwt_identity()
    response_body = {
        "message": "Hello!" + email
    }
    return jsonify(response_body), 200
    
@api.route('/favorites/<int:user_id>/<int:post_id>', methods=['POST'])
def postfavorites(post_id=None, user_id=None):
    if request.method =='POST':
        if Favorites.query.filter_by(post_id=post_id, user_id=user_id ).first():
            favorites = Favorites.query.filter_by(post_id=post_id, user_id=user_id ).first()
            db.session.delete(favorites)
            db.session.commit()
            return jsonify ({'Message':'Favorite has been deleted'}), 200
        else:
            favorites = Favorites(user_id=user_id, post_id=post_id)
            db.session.add(favorites)
            db.session.commit()
            return jsonify({'Message': 'Favorite has been added to user'}), 201


@api.route('/favorites/<int:user_id>', methods=['GET'])
def gettingfavorites(user_id=None):
    if request.method == 'GET':
        favorites = Favorites.query.filter_by(user_id=user_id).all()
        print(favorites)
        favorites_list =[]
        for favorite in favorites:
            favorites_list.append(favorite.serialize())

        return jsonify(favorites_list), 200

    

