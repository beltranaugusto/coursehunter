import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Login } from "./Login.jsx";
import { Context } from "../store/appContext";
import { useEffect } from "react";
import "../../styles/navbar.css";

export const Navbar = () => {
    const token = localStorage.getItem("token");
    const { store, actions } = useContext(Context);

    const [activeButton, setActiveButton] = useState("");

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">
                        Cursos y Eventos
                    </span>
                </Link>
                <div className="ml-auto">
                    <Link to="/cursos">
                        <button
                            className={`btn btn mx-1 ${
                                activeButton === "cursos" ? "active" : ""
                            }`}
                            onClick={() => handleButtonClick("cursos")}
                        >
                            Cursos
                        </button>
                    </Link>
                    <Link to="/eventos">
                        <button
                            className={`btn btn mx-1 ${
                                activeButton === "eventos" ? "active" : ""
                            }`}
                            onClick={() => handleButtonClick("eventos")}
                        >
                            Eventos
                        </button>
                    </Link>

                    {token !== null ? (
                        <>
                            <Link to="/publicar">
                                <button
                                    className={`btn btn mx-1 ${
                                        activeButton === "publicar"
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleButtonClick("publicar")
                                    }
                                >
                                    Publicar
                                </button>
                            </Link>
                            <Link to={"/profile/" + store.user_id}>
                                <button
                                    className={`btn btn mx-1 ${
                                        activeButton === "perfil"
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() => handleButtonClick("perfil")}
                                >
                                    Mi Perfil
                                </button>
                            </Link>
                            <button
                                className="btn btn mx-1 btn-log"
                                id="log"
                                onClick={() => actions.logout()}
                            >
                                Salir
                            </button>
                        </>
                    ) : (
                        <Link to="/login">
                            <button className="btn btn mx-1 btn-log" id="log">
                                Ingresar
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};
