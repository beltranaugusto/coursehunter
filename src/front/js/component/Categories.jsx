import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "./Card.jsx";

export const Categories = (props) => {

  let type = props.type

  return (
    <>
      <div className="home">
        <div className="container container-categories">
          <h1>Categoria</h1>
          <div className="home-card-list">
            <Card type={type} />
            <Card type={type}/>
            <Card type={type}/>
            <Card type={type}/>
            <Card type={type}/>
            <Card type={type}/>
          </div>
        </div>
      </div>
    </>
  );
};
