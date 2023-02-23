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
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          Datos incorrectos.
        </div>
      )}
      <div className="container border rounded h-100 w-100 d-flex flex-column p-4">
        <form onSubmit={handleSubmit}>
          <div className="col-5 mx-auto">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              id="emailInput"
              type="email"
              value={email}
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="col-5 mx-auto">
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

          <div className="col-5 mx-auto">
            <Link to="/sign_up">
              <span className="mb-3">¿Nuevo? Click aqui para registrarse</span>
            </Link>
          </div>

          <div className="col-5 mx-auto">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => actions.logIn(email, password)}
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
      )
    </>
  );
};
