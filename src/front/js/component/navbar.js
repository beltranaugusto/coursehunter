import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-transparent border">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Cursos y Eventos</span>
        </Link>
        <div className="ml-auto">
          <Link to="/cursos">
            <button className="btn btn-primary">Cursos</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};