import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = () => {
  return (
    <>
      <div className="card">
        <img
          src="https://picsum.photos/200/200"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="div">
            <a href="#" className="btn btn-primary">
              Ver mas
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
