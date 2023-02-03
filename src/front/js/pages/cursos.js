import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Cursos = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="top-part d-flex justify-content-end p-1">
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
            Filtar
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a className="dropdown-item" href="#">
                Tecnología
                <input
                  class="form-check-input mt-0float-end"
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
                  class="form-check-input mt-0 float-end"
                  type="checkbox"
                  value=""
                  aria-label="Checkbox"
                ></input>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content-part">cursos aqui</div>
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
