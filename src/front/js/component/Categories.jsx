import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "./Card.jsx";

export const Categories = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <h1>Category </h1>
          <div className="home-card-list">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};
