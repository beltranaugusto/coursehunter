import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../tools/searchBar";
import { Categories } from "../component/Categories.jsx";

import { Context } from "../store/appContext";

export const Events = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container border rounded mt-5 h-100 w-100 d-flex justify-content-end flex-column p-4">
        <div className="d-flex justify-content-between w-100">
          <h3>Eventos</h3>
          <SearchBar />
        </div>

        <div>
          <Categories type="evento" />
          <Categories type="evento" />
        </div>

        <div className="d-flex justify-content-end w-100">
          <Link to="/">
            <button className="btn btn-primary">Back home</button>
          </Link>
        </div>
      </div>
    </>
  );
};
