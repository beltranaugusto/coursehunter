"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Post, Favorites
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


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
    
@api.route('/favorites/<int:user_id>/<int:post_id>', methods=['POST'])
def getfavorites(post_id=None, user_id=None):
    if request.method =='POST':
        if Favorites.query.filter_by(post_id=post_id, user_id=user_id ).first():
            return jsonify ({'Message':'Favorite already exist'}), 400
        else:
            favorites = Favorites(user_id=user_id, post_id=post_id)
            db.session.add(favorites)
            db.session.commit()
            return jsonify({'Message': 'Favorite has been added to user'}), 201

        
