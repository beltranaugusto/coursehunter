import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useEffect, useState } from "react";

export const Logn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(0);
  const { store, actions } = useContext(Context);

  const handleSubmit = (event) => {
    e.preventDefault();
    store.logIn(email, password);
  };

  return (
    <>
      {/* BOTON */}
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Ingresar
      </button>

      <form onSubmit={handleSubmit}>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
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
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Contraseña
                  </label>
                  <input
                    id="emailInput"
                    type="password"
                    value={password}
                    class="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* SIGN UP CALL*/}
                <Link to="/sign_up">
                  <span className="mb-3">
                    ¿Nuevo? Click aqui para registrarse
                  </span>
                </Link>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={() => actions.logIn(email, password)}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
