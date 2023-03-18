import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../tools/searchBar";
import { CategoriesGrid } from "../component/CategoriesGrid.jsx";

import { Context } from "../store/appContext";

export const Courses = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.cleanInput()
  }, [])


  return (
    <>
      <div className="container border rounded mt-5 w-100 d-flex justify-content-end flex-column p-4 bg-light">
        <div className="d-flex justify-content-between w-100">
        <h1 className="display-5 mx-5 my-4">Cursos</h1>
          <SearchBar />
        </div>

        {/* Lorman - Categorias */}
        <div>
          <CategoriesGrid type="curso" />
        </div>

        <div className="d-flex justify-content-end w-100">
          <Link to="/">
            <button className="btn btn-secondary">Volver a Inicio</button>
          </Link>
        </div>
      </div>
    </>
  );
};
