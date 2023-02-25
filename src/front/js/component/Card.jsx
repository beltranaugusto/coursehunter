import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = (props) => {
  const { store, actions } = useContext(Context);

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
          <div className="card-button">
            <Link
              to={`/${props.type}/${props.data?.id}`}
              className="btn btn-primary"
            >
              Ver mas
            </Link>
            <button
              type="button"
              className="btn w-80"
              onClick={() => {
                {
                  actions.addCard(props.data.id, 1);
                }
              }}
            >
              <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
