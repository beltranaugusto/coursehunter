import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "./Card.jsx";

export const Categories = (props) => {
  let type = props.type;

  const { store, actions } = useContext(Context);
  const { postcourses, postevents } = store;


  let posts = [];
  useEffect(() => {}, []);


  if (props.type == "curso") {
    posts = postcourses;
  } else {
    posts = postevents;
  }

  return (
    <>
      <div className="home">
        <div className="container container-categories">
          <div className="home-card-list">

            {posts?.map((data) => (
              <Card key={data.id} data={data} type={props.type} />
            ))}

          </div>
        </div>
      </div>
    </>
  );
};
