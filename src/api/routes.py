"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Post
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

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
