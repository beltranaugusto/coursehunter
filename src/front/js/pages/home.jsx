import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Categories } from "../component/Categories.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Categories />

      <Categories />
    </>
  );
};
