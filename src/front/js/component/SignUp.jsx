import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUp = (props) => {
  const { actions } = useContext(Context);

  const [formData, setFormData] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [publisherMode, setPublisherMode] = useState(false);
  const [publisherType, setPublisherType] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const signup = await actions.createUser(formData);
    if (signup) {
      setErrorMessage(false);
      navigate("/login");
    } else {
      setErrorMessage(true);
    }
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
        <div className="col-5 mx-auto">
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              Datos incorrectos o usuario ya existente, intente nuevamente
            </div>
          )}
        </div>
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
                <option value="university">Universidad</option>
                <option value="academy">Academia</option>
              </select>
            </div>
          )}

          <div className="col-5 mx-auto">
            <button type="submit" className="btn btn-primary">
              Registrarme
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
