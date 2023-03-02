import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const SearchBar = () => {
  const { store, actions } = useContext(Context);
  const { coursesandeventsbycategory, searchCategory } = store;

  return (
    <div className="input-group mb-3 w-50">
      <input
        type="text"
        className="form-control"
        placeholder="¿Buscas algo en particular?"
        aria-label="Text input with dropdown button"
        value={store.searchValue}
        onChange={(e) => actions.searchPost(e.target.value.trim())}
      />
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filtrar
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        {coursesandeventsbycategory?.map((category, index) => (
          <li key={index}>
            <div className="dropdown-item d-flex align-items-center justify-content-between">
              {category}
              <input
                className="form-check-input mt-0 float-end"
                type="radio"
                name="check"
                value={`${category}`}
                aria-label="Checkbox"
                onChange={(e) => actions.filterbycategory(e.target.value)}
              ></input>
            </div>
          </li>
        ))}
        <li>
          <div
            className="text-center mt-2"
            onClick={() => actions.filterbycategory("")}
          >
            <btn className="btn btn-warning">Limpiar Filtros</btn>
          </div>
        </li>
      </ul>
    </div>
  );
};
