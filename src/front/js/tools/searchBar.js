import React, { useState, useEffect, useContext } from "react";

export const SearchBar = () => {
  return (
    <div ClassName="input-group mb-3 w-50">
      <input
        type="text"
        ClassName="form-control"
        placeholder="¿Buscas algo en particular?"
        aria-label="Text input with dropdown button"
      />
      <button
        ClassName="btn btn-outline-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filtrar
      </button>
      <ul ClassName="dropdown-menu dropdown-menu-end">
        <li>
          <a ClassName="dropdown-item" href="#">
            Tecnología
            <input
              ClassName="form-check-input mt-0float-end"
              type="checkbox"
              value=""
              aria-label="Checkbox"
            ></input>
          </a>
        </li>
        <li>
          <a ClassName="dropdown-item" href="#">
            Artes culinarias
            <input
              ClassName="form-check-input mt-0 float-end"
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
