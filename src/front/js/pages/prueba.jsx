import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Categories } from "../component/Categories.jsx";

export const Prueba = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Categories />
      <Categories />
    </>
  );
};
