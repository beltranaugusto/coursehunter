import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { SearchBar } from "../tools/searchBar";
import { Categories } from "../component/Categories.jsx";

import "../../styles/CourseDetail.css";

import { Context } from "../store/appContext";

export const CourseDetail = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const { postcourses } = store;
  const course = postcourses.find((post) => post.id == params.id);
  console.log(params);
  return (
    <>
      <div className="container border rounded mt-5 h-100 w-100 d-flex justify-content-between p-4">
        <div className="d-flex flex-column left-col">
          <div className="container">
            <h2 className="display-5 text-center border rounded p-4">
              {course?.name}
            </h2>
            <img
              className="w-100 border rounded mt-2"
              src="https://picsum.photos/700/250"
              alt="..."
            />
          </div>
          <div className="container mt-4">
            <div className="border rounded p-4">
              <p>{course?.detail}</p>
            </div>
          </div>
        </div>

        <div className="right-col">
          <div className="h-100 border rounded p-4 d-flex flex-column justify-content-between">
            <ul className="list-group">
              {course?.categories ? (
                <li className="list-group-item">
                  <strong>Categoria: </strong>
                  {course?.categories}
                </li>
              ) : null}
              {course?.online ? (
                <li className="list-group-item">
                  <strong>Online: </strong>Sí
                </li>
              ) : (
                <li className="list-group-item">
                  <strong>Online: </strong>No
                </li>
              )}
              {course?.alwaysAvailable ? (
                <li className="list-group-item">
                  <strong>Siempre Disponible: </strong>Sí
                </li>
              ) : null}
              {course?.location ? (
                <li className="list-group-item">
                  <strong>Lugar: </strong>
                  {course?.location}
                </li>
              ) : null}
              {course?.date ? (
                <li className="list-group-item">
                  <strong>Fecha: </strong>
                  {course?.date}
                </li>
              ) : null}
              {course?.duration ? (
                <li className="list-group-item">
                  <strong>Duración: </strong>
                  {course?.duration}
                </li>
              ) : null}
              {course?.certificate ? (
                <li className="list-group-item">
                  <strong>Certificado: </strong>Sí
                </li>
              ) : null}
            </ul>
            <div className="buttons d-flex flex-column">
              <Link to="/">
                <button className="btn btn-primary w-100">
                  Solicitar Informacion
                </button>
              </Link>
              <button
                type="button"
                className="btn w-100"
                onClick={() => {
                  {
                    actions.addCard(course.id, 1);
                  }
                }}
              >
                <i className="fas fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
