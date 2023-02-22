import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../tools/searchBar";
import { Categories } from "../component/Categories.jsx"

import "../../styles/CourseDetail.css";

import { Context } from "../store/appContext";

export const CourseDetail = () => {
  const { store, actions } = useContext(Context);

  return (
  <>
    <div className="container border rounded mt-5 h-100 w-100 d-flex justify-content-between p-4">

      <div className="d-flex flex-column left-col">
        
        <div className="container">
          <h2 className="display-5 text-center border rounded p-4">Curso de Python</h2>
          <img className="w-100 border rounded mt-2" src="https://picsum.photos/700/250" alt="..."/>
        </div>
        <div className="container mt-4">
          <div className="border rounded p-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere accusamus incidunt dolorem neque, deleniti suscipit at libero quidem voluptates ullam, molestias iure odio sunt recusandae debitis praesentium aliquid maiores beatae.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere accusamus incidunt dolorem neque, deleniti suscipit at libero quidem voluptates ullam, molestias iure odio sunt recusandae debitis praesentium aliquid maiores beatae.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere accusamus incidunt dolorem neque, deleniti suscipit at libero quidem voluptates ullam, molestias iure odio sunt recusandae debitis praesentium aliquid maiores beatae.
            </p>
          </div>
        </div>
      </div>

      <div className="right-col">
        <div className="h-100 border rounded p-4 d-flex flex-column justify-content-between">
          <p>
            <strong>1.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
            <strong>2.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
            <strong>3.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
            <strong>4.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
          </p>
          <Link to="/">
            <button className="btn btn-primary w-100">Solicitar Informacion</button>
          </Link>
        </div>
        
      </div>

		</div>

  </> 
  );
};
