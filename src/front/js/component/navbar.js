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
    <nav className="navbar navbar-light bg-transparent border">
      <div className="container d-flex justify-content-between">
        <Link to="/">
          <img className="logo" width="150px" height="150px" src={logo}></img>
          <button className="btn btn-primary mx-1 logo-text">CourseHunter</button>
        </Link>
        
        <div className="d-flex">
          <Link to="/cursos">
            <button className="btn btn-primary mx-1">Cursos</button>
          </Link>
          <Link to="/eventos">
            <button className="btn btn-primary mx-1">Eventos</button>
          </Link>

          <div className="divider d-flex align-items-center mx-1"></div>
          

          {token !== null ? (
            <div className="marginl-auto">
              <Link to="/publicar">
                <button className="btn btn-success mx-1">Publicar</button>
              </Link>
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
