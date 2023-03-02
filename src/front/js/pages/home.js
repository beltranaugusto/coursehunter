import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card } from "../component/Card.jsx";
import "../../styles/home.css";
import logo from "../../img/logo2.png";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.cleanInput()
  }, [])


  return (
    <div className="container">
      <div className="row d-flex justify-content-center bg-light mt-4 border rounded">
        <div className="col-12 hero-section d-flex flex-column justify-content-end mb-4">
          <img className="hero-img mx-auto" src={logo}></img>
          <h1 className="display-2 mx-5 mt-5">Todo empieza <span className="underline">aquí.</span></h1>
          <h3 className="display-5 mx-5 fw-light">Obtén el conocimiento que anhelas.</h3>
          <div className="mx-auto">
            <p className="hero-text text-dark fs-5">
              Ofrecemos una plataforma donde los educadores
              pueden publicar sus cursos o eventos para estudiantes interesados en
              adquirir nuevos conocimientos dentro de distintas categorías.
            </p>
          </div>
          
        </div>
        
          <div className="col-4 home-post-display one bg-light mx-4 my-4 mb-5">
            <p className="text-center display-5 fs-1">
              Cursos <br></br>
              <Link to="/cursos">
                <button className="btn btn-secondary">Ver</button>
              </Link>
            </p>
          </div>
            <div className="col-4 home-post-display two bg-light mx-4 my-4 mb-5">
            <p className="text-center display-5 fs-1">
              Eventos <br />
              <Link to="/eventos">
                <button className="btn btn-secondary">Ver</button>
              </Link>
            </p>
          </div>
        
        
        <div className="col-8 bg-light" id="proximos-cursos">
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
