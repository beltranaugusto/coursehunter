import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Login } from "./Login.jsx";
import { Context } from "../store/appContext";
import { useEffect, useState } from "react";
import "../../styles/navbar.css";

import logo from "../../img/logo2.png";

export const Navbar = () => {
  const token = localStorage.getItem("token");
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light border">
      <div className="container d-flex justify-content-between">
        <Link to="/">
          <img className="logo" width="150px" height="150px" src={logo}></img>
          <button className="btn btn-primary mx-1 logo-text">CourseHunter</button>
        </Link>
        
        <div className="d-flex align-items-center">
          <Link to="/cursos">
            <button className="btn btn-primary mx-1">Cursos</button>
          </Link>
          <Link to="/eventos">
            <button className="btn btn-primary mx-1">Eventos</button>
          </Link>

          <div className="divider d-flex align-items-center mx-3"></div>
          

          {token !== null ? (
            <div className="marginl-auto d-flex align-items-center">

              <div className="dropdown">
                <button className="notifications-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-regular fa-bell btn btn-warning notifications"></i>
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              
              

              {store?.userData?.publisherTypeValue != ""  ? (
                <Link to="/publicar">
                <button className="btn btn-success mx-1">Publicar</button>
              </Link>
              ): null}
    
              <Link to={"/profile/" + store.user_id}>
                <button className="btn btn-success mx-1"> Mi Perfil </button>
              </Link>
              
              <button
                className="btn btn-success mx-1 logout-btn"
                onClick={() => actions.logout()}
              >
                Salir
              </button>
            </div>
          ) : (
            <Link className="login-btn" to="/login">
              <button className="btn btn-secondary mx-1 login-btn">Ingresar</button>
            </Link>
          )}
        </div>
        
      </div>
    </nav>
  );
};
