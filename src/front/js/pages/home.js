import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card } from "../component/Card.jsx";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {});

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* <p className="text-center bg-light text-dark fs-5">
            Página web para busca cursos y eventos disponibles relacionados con
            aprendizaje y formación personal, profesional y académica dentro del
            territorio venezolano. Ofrecemos una plataforma donde los educadores
            pueden publicar sus cursos o eventos para estudiantes interesados en
            adquirir nuevos conocimientos dentro de distintas categorías.
          </p> */}
        </div>
        <div className="col-6">
          <p className="text-center bg-light text-dark fs-5">
            Cursos <br></br>
            <Link to="/cursos">
              <button className="btn btn-secondary">Visitar</button>
            </Link>
          </p>
        </div>
        <div className="col-6">
          <p className="text-center bg-light text-dark  fs-5">
            Eventos <br />
            <a href="#" className="btn btn-secondary">
              Visitar
            </a>
          </p>
        </div>
        <div className="col-8 bg-light text-dark" id="proximos-cursos">
          <p className="fs-5">Proximos Cursos/Eventos</p>
          <Card />
        </div>
        <div className="col-4 fs-5" id="categorias">
          <p className="bg-light text-dark">Categorias</p>
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">
              A simple default list group item
            </a>

            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-primary"
            >
              A simple primary list group item
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-secondary"
            >
              A simple secondary list group item
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-success"
            >
              A simple success list group item
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-danger"
            >
              A simple danger list group item
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-warning"
            >
              A simple warning list group item
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-info"
            >
              A simple info list group item
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-light"
            >
              A simple light list group item
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-dark"
            >
              A simple dark list group item
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-primary"
            >
              A simple primary list group item
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-secondary"
            >
              A simple secondary list group item
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
