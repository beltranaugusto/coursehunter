import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useEffect, useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);
  const remove = sessionStorage.removeItem("token");
  const token = localStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.logIn(email, password);
    console.log(token);
  };

  return (
    // el token se esta guardando como undefined
    <>
      {token && token != "" && token != undefined ? (
        actions.logout()
      ) : (
        <div className="container border rounded h-100 w-100 d-flex flex-column p-4">
          <form onSubmit={handleSubmit}>
            <div className="col-5 mx-auto">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                id="emailInput"
                type="email"
                value={email}
                class="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="col-5 mx-auto">
              <label for="exampleFormControlTextarea1" class="form-label">
                Contraseña
              </label>
              <input
                id="passwordInput"
                type="password"
                value={password}
                class="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="col-5 mx-auto">
              <Link to="/sign_up">
                <span className="mb-3">
                  ¿Nuevo? Click aqui para registrarse
                </span>
              </Link>
            </div>

            <div className="col-5 mx-auto">
              <button
                type="submit"
                class="btn btn-primary"
                onClick={() => actions.logIn(email, password)}
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
