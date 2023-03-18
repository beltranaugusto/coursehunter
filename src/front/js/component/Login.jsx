import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useEffect, useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);
  const remove = sessionStorage.removeItem("token");
  const token = localStorage.getItem("token");
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const login = await actions.logIn(email, password);
    if (login) {
      setErrorMessage(false);
      navigate("/");
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <>

      <div className="container border rounded h-100 w-100 d-flex flex-column p-4 border rounded bg-light my-5">
          {errorMessage && (
            <div className="alert alert-danger container mt-4" role="alert">
              Datos incorrectos.
            </div>
          )}
        <form onSubmit={handleSubmit}>
          <div className="col-5 mx-auto my-3">
            <h4 className="display-4 my-4">Inicia Sesión</h4>
            <label for="exampleFormControlInput1" className="form-label">
              Correo Electronico
            </label>
            <input
              id="emailInput"
              type="email"
              value={email}
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="col-5 mx-auto my-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Contraseña
            </label>
            <input
              id="passwordInput"
              type="password"
              value={password}
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
            <div className="d-flex justify-content-center mt-4">
            <button
              type="submit"
              className="btn btn-primary mx-3"
              onClick={() => actions.logIn(email, password)}
            >
              Ingresar
            </button>
            <Link to="/sign_up">
              <btn className="btn btn-success mx-3">¿Nuevo? Click aqui para registrarse</btn>
            </Link>

            </div>
          <div className="col-5 mx-auto">
            
          </div>

          <div className="col-5 mx-auto">
            
          </div>
        </form>
      </div>
      )
    </>
  );
};
