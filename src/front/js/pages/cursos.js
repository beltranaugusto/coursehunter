import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../tools/searchBar";

import { Context } from "../store/appContext";

export const Cursos = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="top-part d-flex justify-content-end p-1">
        <>
          <SearchBar />
        </>
      </div>
      <div className="content-part">cursos aqui</div>
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
