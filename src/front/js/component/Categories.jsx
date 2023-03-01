import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "./Card.jsx";

export const Categories = (props) => {
  let type = props.type;
  const [posts, setPosts] = useState([]);
  // let keyword = props.keyword;
  // console.log(keyword);
  const { store, actions } = useContext(Context);
  const { postcourses, postevents } = store;

  useEffect(() => {
    if (props.type == "curso") {
      setPosts(postcourses);
    } else {
      setPosts(postevents);
    }
    actions.coursesandeventsbycategory();
  }, [postcourses]);

  return (
    <>
      <div className="home">
        <div className="container container-categories">
          <div className="home-card-list">
            {store.searchCategory !== ""
              ? posts
                  .filter((data) => data.categories == store?.searchCategory)
                  .map((data) => {
                    if (
                      data?.name
                        .toLowerCase()
                        .includes(store.searchValue.toLowerCase())
                    ) {
                      return (
                        <Card key={data.id} data={data} type={props.type} />
                      );
                    }
                  })
              : posts.map((data) => {
                  if (
                    data?.name
                      .toLowerCase()
                      .includes(store.searchValue.toLowerCase())
                  ) {
                    return <Card key={data.id} data={data} type={props.type} />;
                  }
                })}
          </div>
        </div>
      </div>
    </>
  );
};
