import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { CategoriesCard } from "../component/CategoriesCard.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="home">
        <div className="container">
          <h1>Category 1</h1>
          <div className="home-card-list">
            <CategoriesCard />
          </div>
        </div>
        <div className="container">
          <h1>Category 2</h1>
          <div className="home-card-list">
            <CategoriesCard />
          </div>
        </div>
      </div>
    </>
  );
};
