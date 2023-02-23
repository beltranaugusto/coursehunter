import React from "react";
import { Link } from "react-router-dom";
import { Login } from "./Login.jsx";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-transparent border">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Cursos y Eventos</span>
        </Link>
        <div className="ml-auto">
          <Link to="/cursos">
            <button className="btn btn-primary mx-1">Cursos</button>
          </Link>
          <Link to="/eventos">
            <button className="btn btn-primary mx-1">Eventos</button>
          </Link>
          <Link to="/publicar">
            <button className="btn btn-success mx-1">Publicar</button>
          </Link>

          <Link to="/login">
            <button className="btn btn-secondary mx-1">Ingresar</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
