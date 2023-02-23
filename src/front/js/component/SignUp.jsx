import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUp = (props) => {
  const { actions } = useContext(Context);

  const [formData, setFormData] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [publisherMode, setPublisherMode] = useState(false);
  const [publisherType, setPublisherType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.createUser(formData);
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      username: username,
      email: email,
      password: password,
      publisherMode: publisherMode,
      publisherType: publisherType,
    }));
  }, [username, email, password, publisherMode, publisherType]);

  return (
    <>
      <div className="container border rounded h-100 w-100 d-flex flex-column p-4">
        <form onSubmit={handleSubmit}>
          <div className="col-5 mx-auto">
            <label htmlFor="usernameInput" className="form-label">
              Usuario
            </label>
            <input
              id="usernameInput"
              type="text"
              value={username}
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="col-5 mx-auto">
            <label htmlFor="emailInput" className="form-label">
              Correo Electrónico
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
            <label htmlFor="passwordInput" className="form-label">
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

          <div className="col-5 form-check mx-auto">
            <input
              id="publisherModeInput"
              type="checkbox"
              className="form-check-input"
              value={publisherMode}
              onChange={(e) => setPublisherMode(e.target.checked)}
            />
            <label htmlFor="publisherModeInput" className="form-check-label">
              Quiero publicar cursos
            </label>
          </div>

          {publisherMode && (
            <div className="col-5 mx-auto">
              <label htmlFor="publisherTypeInput" className="form-label">
                ¿Eres una academia? Indícanos de qué tipo
              </label>

              <select
                name="category"
                className="form-control"
                onChange={(e) => setPublisherType(e.target.value)}
                value={publisherType}
              >
                <option value="">Selecciona una opción</option>
                <option value="universidad">Universidad</option>
                <option value="academia">Academia</option>
              </select>
            </div>
          )}

          <div className="col-5 mx-auto">
            <button
              type="submit"
              onClick={() => actions.createUser(formData)}
              className="btn btn-primary"
            >
              Registrarme
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
