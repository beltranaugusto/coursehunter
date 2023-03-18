import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card } from "../component/Card.jsx";
import { Categories } from "../component/Categories.jsx";
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
      </div>
      <div className="row border rounded bg-light my-4">
        <h5 className="display-5 m-4">Destacados</h5>
          <Categories type="curso"/>
      </div>
      <div className="row border rounded bg-light my-4">
        <h5 className="display-5 m-4">Proximamente</h5>
          <Categories type="evento"/>
      </div>
    </div>
  );
};
