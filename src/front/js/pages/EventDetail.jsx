import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { SearchBar } from "../tools/searchBar";
import { Categories } from "../component/Categories.jsx";

import "../../styles/CourseDetail.css";

import { Context } from "../store/appContext";

export const EventDetail = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const { postevents } = store;
  const event = postevents.find((post) => post.id == params.id);

  return (
    <>
      <div className="container border rounded mt-5 h-100 w-100 d-flex justify-content-between p-4">
        <div className="d-flex flex-column left-col">
          <div className="container">
            <h2 className="display-5 text-center border rounded p-4">
              {event?.name}
            </h2>
            <img
              className="w-100 border rounded mt-2"
              src="https://picsum.photos/700/250"
              alt="..."
            />
          </div>
          <div className="container mt-4">
            <div className="border rounded p-4">
              <p>{event?.detail}</p>
            </div>
          </div>
        </div>

        <div className="right-col">
          <div className="h-100 border rounded p-4 d-flex flex-column justify-content-between">
            <ul className="list-group">
              {event?.categories ? (
                <li className="list-group-item">
                  <strong>Categoria: </strong>
                  {event?.categories}
                </li>
              ) : null}
              {event?.online ? (
                <li className="list-group-item">
                  <strong>Online: </strong>Sí
                </li>
              ) : (
                <li className="list-group-item">
                  <strong>Online: </strong>No
                </li>
              )}
              {event?.alwaysAvailable ? (
                <li className="list-group-item">
                  <strong>Siempre Disponible: </strong>Sí
                </li>
              ) : null}
              {event?.location ? (
                <li className="list-group-item">
                  <strong>Lugar: </strong>
                  {event?.location}
                </li>
              ) : null}
              {event?.date ? (
                <li className="list-group-item">
                  <strong>Fecha: </strong>
                  {event?.date}
                </li>
              ) : null}
              {event?.duration ? (
                <li className="list-group-item">
                  <strong>Duración: </strong>
                  {event?.duration}
                </li>
              ) : null}
              {event?.certificate ? (
                <li className="list-group-item">
                  <strong>Certificado: </strong>Sí
                </li>
              ) : null}
            </ul>
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
                  actions.addCard(event.id, 1);
                }
              }}
            >
              <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

