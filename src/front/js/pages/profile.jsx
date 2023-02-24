import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { styles } from "../../styles/profile.css";
import { Categories } from "../component/Categories.jsx";

export const Profile = () => {
  return (
    <>
      {/*Photo profile + Information */}
      <div className="container">
        <div className="row mt-3">
          <div className="col-12 col-md-3 mb-2 p-0 px-1">
            <img
              src="https://placekitten.com/590/360"
              className="img-fluid w-100"
              alt="..."
            />
          </div>
          <div className="col-12 col-md-9 mb-2 p-0 border border-3">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-9 border border-3 my-2 ">
            <Categories />
          </div>
          <div className="col-3 feedback border border-3 p-2">
            <h1>Feedback</h1>
            <div className="comment">
              <input placeholder="Introduce tu comentario"></input>
              <button type="button" className="btn btn-outline-success">
                Success
              </button>
            </div>
          </div>
        </div>
        <div className="courses-finished border border-3">
          <h1>Cursos culminados</h1>
        </div>
      </div>
    </>
  );
};
