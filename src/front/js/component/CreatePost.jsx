import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/CreatePost.css";

export const CreatePost = (props) => {

    const [step, setStep] = useState(0)

    return (
        <>
            <div className="container"><h1 className="display-4 mx-5 my-4">Crear Publicación</h1></div>
            <div className="container border rounded h-100 w-100 d-flex flex-column p-4 create-post">

                {step === 0 ?
                    <>
                        <h1 className="display-6 mx-4 mt-2">Elige que tipo de publicación será</h1>
                        <p className="mx-4 fs-4 fw-light text-muted ">Lorem ipsum dolor sit amet.</p>
                        <div className="container mt-4 d-flex justify-content-center">
                            <div className="container mx-2 py-4 border rounded text-center fw-light post-choice">
                                <h2 className="mb-3 fw-light">Cursos</h2>
                                <p className="fs-5 m-1 text-muted ">Lorem ipsum dolor sit amet.</p>
                                <p className="fs-5 m-1 text-muted ">In laoreet, libero non commodo tempor.</p>
                                <p className="fs-5 m-1 text-muted ">Felis justo vestibulum enim.</p>
                                <button className="btn btn-success mt-4 fs-4 fw-light px-5">Crear un Curso</button>
                            </div>
                            <div className="container mx-2 py-4 border rounded text-center fw-light post-choice">
                                <h2 className="mb-3 fw-light">Eventos</h2>
                                <p className="fs-5 m-1 text-muted ">Lorem ipsum dolor sit amet.</p>
                                <p className="fs-5 m-1 text-muted ">In laoreet, libero non commodo tempor.</p>
                                <p className="fs-5 m-1 text-muted ">Felis justo vestibulum enim.</p>
                                <button onClick={()=>setStep(step + 1)} className="btn btn-success mt-4 fs-4 fw-light px-5">Crear un Evento</button>
                            </div>     
                        </div>
                    </>   
                : null}


                {step === 1 ?
                    <>
                        <div className="row mx-4">
                            <div className="col-6">
                            <h1 className="display-6 mt-2">Escoge un nombre</h1>
                            <p className="fs-4 fw-light text-muted ">Lorem ipsum dolor sit amet.</p>
                            <input className="form-control form-control-lg" type="text"></input>
                            </div>
                        </div>
                            
                        <div className="row mx-4">
                            <div className="col-10">
                            <h1 className="display-6 mt-4">Escribe una descripción</h1>
                            <p className="fs-4 fw-light text-muted ">Lorem ipsum dolor sit amet.</p>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <button onClick={()=>setStep(step + 1)} className="btn btn-success mt-4 fs-4 fw-light px-5">Siguiente</button>
                        </div>
                    </>    
                : null}

                {step === 2 ?
                    <>
                        <div className="row mx-4">
                            <div className="col-10">
                                <h1 className="display-6 mt-2">Por ultimo, asignale caracteristicas</h1>
                                <p className="fs-4 fw-light text-muted ">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                
                        <div className="row mx-5 my-4 form-group">
                            <div className="col-6 d-flex">
                                <h5 className="mt-2 fw-light">Lugar</h5>
                                <input className="form-control form-control-md mx-3" type="text"></input>
                            </div>
                            <div className="col-1 text-center"><h5 className="mt-2 fw-light">o</h5></div>
                            <div className="col-3 d-flex">
                                <h5 className="mt-2 fw-light">¿Online?</h5>
                                <input className="form-control form-check-input mx-3 em2" type="checkbox"></input>
                            </div>
                        </div>
                
                        <hr className="mx-5 my-2"/>
                
                        <div className="row mx-5 my-4 form-group">
                            <div className="col-7 d-flex flex-column">
                                <div className="d-flex mb-4">
                                    <h5 className="mt-2 fw-light">Duración</h5>
                                    <input className="form-control form-control-md mx-3" type="text"></input>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                    <h5 className="mt-2 fw-light">Fecha de Inicio</h5>
                                    <input className="form-control form-control-md mx-3 w-50" type="text"></input>
                                </div> 
                            </div>
                
                            <div className="col-1 text-center"><h5 className="mt-2 fw-light">o</h5></div>
                
                            <div className="col-4 d-flex">
                                <h5 className="mt-2 fw-light">¿Siempre Disponible?</h5>
                                <input className="form-control form-check-input mx-3 em2" type="checkbox"></input>
                            </div>
                        </div>
                
                        <hr className="mx-5 my-1"/>
                        
                        <div className="row mx-5 my-4 form-group d-flex">
                            <div className="col-7 d-flex">
                                <h5 className="mt-2 fw-light">Categoria</h5>
                                <select class="form-control mx-3">
                                <option>Tecnologia</option>
                                <option>Artes Culinarias</option>
                                <option>Automotriz</option>
                                <option>Artes</option>
                                <option>Blockchain</option>
                                </select>
                            </div>
                        </div>
                
                        <div className="d-flex justify-content-center">
                            <button onClick={()=>setStep(step + 1)} className="btn btn-success mt-4 fs-4 fw-light px-5">Finalizar</button>
                        </div>
                  </>    
                : null}

                {step === 3 ?
                    <div className="d-flex flex-column justify-content-center align-items-center text-center">
                        <h1 className="display-6 mx-4 mt-2">¡Estamos Listos!</h1>
                        <div className="w-50">
                            <p className="mx-4 fs-5 fw-light text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam bibendum dolor eget ornare. Curabitur vitae vulputate lorem.</p>
                        </div>
                        <div className="mb-4">
                            <Link to="/curso/1">
                                <button onClick={()=>setStep(step + 1)} className="btn btn-success fs-4 fw-light px-5">Ver mi publicación</button>
                            </Link>
                            
                        </div>
                    </div>    
                : null}
                
                
            </div>
        </>
    );
};
