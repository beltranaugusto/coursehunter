import React, { useState, useEffect, useContext } from "react";

export const SearchBar = () => {
  return (
    <div className="input-group mb-3 w-50">
      <input
        type="text"
        className="form-control"
        placeholder="¿Buscas algo en particular?"
        aria-label="Text input with dropdown button"
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
        <li>
          <a className="dropdown-item" href="#">
            Tecnología
            <input
              className="form-check-input mt-0float-end"
              type="checkbox"
              value=""
              aria-label="Checkbox"
            ></input>
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Artes culinarias
            <input
              className="form-check-input mt-0 float-end"
              type="checkbox"
              value=""
              aria-label="Checkbox"
            ></input>
          </a>
        </li>
      </ul>
    </div>
  );
};
