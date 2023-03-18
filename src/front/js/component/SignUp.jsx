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
    const [inputFile, setInputFile] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const signup = await actions.createUser(FormDataNew());
        if (signup) {
            setErrorMessage(false);
            navigate("/login");
        } else {
            setErrorMessage(true);
        }
    };

    const FormDataNew = () => {
        const formDataNew = new FormData();
        formDataNew.append("username", username)
        formDataNew.append("email", email)
        formDataNew.append("password", password)
        formDataNew.append("publisherMode", publisherMode)
        formDataNew.append("publisherType", publisherType)
        formDataNew.append("img_url", inputFile)
        return formDataNew  
    } 

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
            <div className="container border rounded h-100 w-100 d-flex flex-column p-4 border rounded bg-light my-5">
                <div className="col-5 mx-auto">
                    {errorMessage && (
                        <div className="alert alert-danger" role="alert">
                            Datos incorrectos o usuario ya existente, intente
                            nuevamente
                        </div>
                    )}
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="col-5 mx-auto ">
                    <h4 className="display-4 my-4">Registrate</h4>
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

                    <div className="col-5 mx-auto my-3">
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

                    <div className="col-5 mx-auto my-3">
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

                    <div className="col-5 mx-auto">
                                    <label htmlFor="imgInput" className="form-label">
                                            Imagen de Perfil
                                    </label>
                                    <input
                                        className="form-control"
                                        type="file"
                                        name="img_url"
                                        id="imgInput"
                                        onChange={(e) =>
                                            setInputFile(e.target.files[0])
                                        }
                                    />
                                </div>

                    <div className="col-5 form-check mx-auto my-3">
                        <input
                            id="publisherModeInput"
                            type="checkbox"
                            className="form-check-input"
                            value={publisherMode}
                            onChange={(e) => setPublisherMode(e.target.checked)}
                        />
                        <label
                            htmlFor="publisherModeInput"
                            className="form-check-label"
                        >
                            Quiero publicar cursos
                        </label>
                    </div>

                    {publisherMode && (
                        <div className="col-5 mx-auto">
                            <label
                                htmlFor="publisherTypeInput"
                                className="form-label"
                            >
                                ¿Eres una academia? Indícanos de qué tipo
                            </label>

                            <select
                                name="category"
                                className="form-control mb-4"
                                onChange={(e) =>
                                    setPublisherType(e.target.value)
                                }
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
