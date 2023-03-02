import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "./Card.jsx";

export const Categories = (props) => {
  let type = props.type;
  const [posts, setPosts] = useState([]);
  const { store, actions } = useContext(Context);
  const { postcourses, postevents } = store;

  const checkFavorites = () => {
    let favoritesPosts = []

    for(let post of postcourses){
      if(store.userData?.favorites){
        for (let favorite_id of store?.userData?.favorites){
          if(post.id == favorite_id){
            favoritesPosts.push(post)          
          }
        }
      }
    }

    for(let post of postevents){
      if(store.userData?.favorites){
        for (let favorite_id of store?.userData?.favorites){
          if(post.id == favorite_id){
            favoritesPosts.push(post)          
          }
        }
      }
    }
  
    setPosts(favoritesPosts)

  }

  const checkCreated = () => {
    let createdPosts = []

    for(let post of postcourses){
        if(post.author == store.tempUserData.id){
          createdPosts.push(post)        
        }      
    }
  
    setPosts(createdPosts)

  }
  

  useEffect(() => {

    if(props.created == "true"){
      checkCreated()
    } else if(props.favorite == "true"){
      checkFavorites()
    } else if (props.type == "curso"){
        setPosts(postcourses);
    } else {
        setPosts(postevents);
    } 

    actions.coursesandeventsbycategory();
  }, [postcourses, store.userData.favorites, store.tempUserData.posts]);


  return (
    <>
      <div className="home">
        <div className="container container-categories">
          <div className="home-card-list">
            {/* {store.searchCategory !== ""
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
                })} */}
            { store.searchValue? 
              posts.map((data) => {
                if (
                  data?.name
                    .includes(store.searchValue)
                ) {
                  return <Card key={data.id} data={data} type={props.type} />;
                }
                })
             :
              posts.map((data) => {
                  let postType = ""
                  if(data.event == true){
                    postType="evento"
                  } else {
                    postType="curso"
                  }
                  return <Card key={data.id} data={data} type={postType} />;}
                )
             }
            {posts.length == 0 ? <h3 className="fw-light">No hay publicaciones aqui!</h3>: null}
          </div>
        </div>
      </div>
    </>
  );
};
