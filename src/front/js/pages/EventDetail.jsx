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
  const infoAsked = store.userData.askedInfo?.find((item) => event?.id == item);
  const favorited = store.userData.favorites?.find((item) => event?.id == item);

  return (
    <>
      <div className="container border rounded mt-5 h-100 w-100 d-flex justify-content-between bg-light p-4">
        <div className="d-flex flex-column left-col w-100">
          <div className="container">
            <div className="text-center border rounded p-4 bg-white">
              <h2 className="display-5 ">{event?.name}</h2>
              <h1 className="small">
                Creado por:
                <Link to={`/profile/${event?.author}`}>
                  <div className="d-inline mx-1">{event?.author_name}</div>
                </Link>
              </h1>
            </div>
            <div className="img">
              <img
                className=" border rounded mt-2 bg-white"
                src={event?.img_url}
                alt="..."
              />
            </div>
          </div>
          <div className="container mt-4 ">
            <div className="detail border rounded p-5 bg-white no-overflow">
              <p>{event?.detail}</p>
            </div>
          </div>
        </div>

        <div className="right-col">
          <div className="h-100 border rounded p-4 d-flex flex-column justify-content-between bg-white">
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

            <div className="buttons d-flex justify-content-between">
              {store.user_id == "" ? null : infoAsked ? (
                <button type="button" className="btn btn-success w-50">
                  Ya solicitaste información
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    actions.askInformation(
                      store.user_id,
                      event.author,
                      event.id
                    );
                  }}
                  className="btn btn-primary w-50"
                >
                  Solicitar Informacion
                </button>
              )}

              {store.user_id == "" ? null : (
                <button
                  type="button"
                  className={
                    "btn btn-secondary w-25 " +
                    (favorited ? "btn-warning" : null)
                  }
                  onClick={() => {
                    {
                      actions.addCard(event.id, store.user_id);
                    }
                  }}
                >
                  <i class="fa-solid fa-bookmark"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
