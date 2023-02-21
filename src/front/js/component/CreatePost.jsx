import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/CreatePost.css";

// Varias cosas por hacer faltan aqui:
// 1. ---Listo--- Validación de Campos
// 2. ---Listo--- Condicionales de Online y Siempre Disponible
// 3. Solucionar los campos cableados
//    3.1. ---Listo--- Category: Hacer la relacion en los modelos por en name y no por el id (no abran 2 categorias llamadas iguales asi que bien)
//    3.2. --Listo--- Event: Llenar este campo dependiendo del boton que se oprima al principio de la creacion del post
//    3.3. Certificate: Añadir el campo en su lugar correspondiente
//    3.4. User_id: Este quedara pendiente hasta tener el sistema de logeo

export const CreatePost = (props) => {

    const { actions } = useContext(Context);

    const [change, setChange] = useState(0)
    const [step, setStep] = useState(0)
    const [formData, setFormData] = useState({})

    const [isEvent, setIsEvent] = useState(false)
    const [inputName, setInputName] = useState("")
    const [inputDetail, setInputDetail] = useState("")
    const [inputLocation, setInputLocation] = useState("")
    const [inputDate, setInputDate] = useState("")
    const [inputDuration, setInputDuration] = useState("")
    const [inputCategory, setInputCategory] = useState("Tecnologia")

    const [online, setOnline] = useState(false)
    const [available, setAvailable] = useState(false)

    const changeOnline = (event) => {
        setInputLocation("")
        document.querySelector("#inputLocation").classList.remove("is-invalid")
        setOnline(event.target.checked);
    }

    const changeAvailable = (event) => {
        setInputDuration("")
        setInputDate("")
        document.querySelector("#inputDate").classList.remove("is-invalid")
        document.querySelector("#duration").classList.remove("is-invalid")
        setAvailable(event.target.checked);
    }

    const createEvent = () => {
        setIsEvent(true)
        setStep(step + 1)
    } 

    useEffect(() => {
        if (step == 0){
            console.log("Step 1")
       }
        if (step == 1){
            console.log("Step 2")
            if (inputName.length > 5 && inputDetail.length > 20){
                setFormData(prevFormData => ({...prevFormData, "event": isEvent})); 
                setFormData(prevFormData => ({...prevFormData, "name": inputName}));
                setFormData(prevFormData => ({...prevFormData, "detail": inputDetail}));
                setStep(step + 1)   
            }
            if (inputName.length < 5){
                document.querySelector("#nameInput").classList.add("is-invalid")
            }
            if (inputDetail.length < 20){
                document.querySelector("#detailInput").classList.add("is-invalid")
            }
        }
        if (step == 2){
            console.log("Step 3")
            if (!online){
                if (inputLocation == ""){
                    document.querySelector("#inputLocation").classList.add("is-invalid")
                }
            }
            if (!available){
                if (inputDate == ""){
                    document.querySelector("#inputDate").classList.add("is-invalid")
                    document.querySelector("#duration").classList.add("is-invalid")
                }
            }
            if ((online || inputLocation.length > 0) && (available || (inputDate.length > 0 && inputDuration.length > 0))){
                setFormData(prevFormData => ({...prevFormData, "location": inputLocation}));   
                setFormData(prevFormData => ({...prevFormData, "online": online}));   
                setFormData(prevFormData => ({...prevFormData, "date": inputDate}));   
                setFormData(prevFormData => ({...prevFormData, "alwaysAvailable": available}));   
                setFormData(prevFormData => ({...prevFormData, "duration": inputDuration}));
                setFormData(prevFormData => ({...prevFormData, "category": inputCategory})); 
                setStep(step + 1)
            }
            
        
        //Cableado
            setFormData(prevFormData => ({...prevFormData, "user_id": 1}));   
            setFormData(prevFormData => ({...prevFormData, "certificate": true}));   
        }
    }, [change])


    return (
        <>
            <div className="container"><h1 className="display-4 mx-5 my-4">Crear Publicación</h1></div>
            <div className="container border rounded h-100 w-100 d-flex flex-column p-4 create-post">

                <form>
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
                                <button type="button" onClick={()=>setStep(step + 1)} className="btn btn-success mt-4 fs-4 fw-light px-5">Crear un Curso</button>
                            </div>
                            <div className="container mx-2 py-4 border rounded text-center fw-light post-choice">
                                <h2 className="mb-3 fw-light">Eventos</h2>
                                <p className="fs-5 m-1 text-muted ">Lorem ipsum dolor sit amet.</p>
                                <p className="fs-5 m-1 text-muted ">In laoreet, libero non commodo tempor.</p>
                                <p className="fs-5 m-1 text-muted ">Felis justo vestibulum enim.</p>
                                <button type="button" onClick={()=>createEvent()} className="btn btn-success mt-4 fs-4 fw-light px-5">Crear un Evento</button>
                            </div>     
                        </div>
                    </>   
                : null}

                {step === 1 ?
                    <>
                        <div className="row mx-4">
                            <div className="col-8">
                            <h1 className="display-6 mt-2">Escoge un nombre y descripción</h1>
                            <p className="fs-4 fw-light text-muted ">El nombre tiene que tener más de 5 caracteres, y la descripción un minimo de 20.</p>
                            </div>
                        </div>

                        <div className="row mx-5 my-4 form-group">
                            <div className="col-2">
                                <h5 className="mt-2 fw-light align-center">Nombre</h5>
                            </div>
                            <div className="col-9">
                                <input
                                    id="nameInput" 
                                    name="name" 
                                    className="form-control form-control-md" 
                                    type="text"
                                    onChange={e => {
                                        setInputName(e.target.value)
                                        e.target.classList.remove("is-invalid")
                                    }}
                                    value={inputName}
                                    >
                                </input>
                                <p className="form-feedback fw-light">
                                    El nombre tiene que tener como minimo 5 caracteres.
                                </p>
                            </div>
                        </div>

                        <div className="row mx-5 my-4 form-group">
                            <div className="col-2">
                                <h5 className="mt-2 fw-light align-center">Descripción</h5>
                            </div>
                            <div className="col-9">
                                <textarea
                                    id="detailInput" 
                                    name="detail" 
                                    className="form-control"  
                                    rows="7" 
                                    onChange={e => {
                                        setInputDetail(e.target.value)
                                        e.target.classList.remove("is-invalid")
                                    }}
                                    value={inputDetail}>   
                                </textarea>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="button" onClick={()=>setChange(change + 1)} className="btn btn-success mt-4 fs-4 fw-light px-5">Siguiente</button>
                        </div>
                    </>    
                : null}

                {step === 2 ?
                    <>
                        <div className="row mx-4">
                            <div className="col-10">
                                <h1 className="display-6 mt-2">Asignale caracteristicas</h1>
                                <p className="fs-4 fw-light text-muted ">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>

                        <div className="row mx-5 my-4 form-group">
                            <div className="col-3">
                                <h5 className="mt-2 fw-light align-center">Lugar</h5>
                            </div>
                            <div className="col-4">
                                <input 
                                    name="location" 
                                    id="inputLocation"
                                    disabled={online} 
                                    className="form-control form-control-md" 
                                    type="text"
                                    onChange={e => {
                                        setInputLocation(e.target.value)
                                        e.target.classList.remove("is-invalid")
                                        }
                                    }
                                    value={inputLocation}
                                    ></input>
                            </div>
                            <div className="col-2">
                                <h5 className="mt-2 fw-light align-center">¿Online?</h5>
                            </div>
                            <div className="col-1">
                                <input name="online" onChange={changeOnline} className="form-control form-check-input em2" type="checkbox"></input>
                            </div>
                        </div>

                        <hr/>

                        <div className="row mx-5 my-4 form-group">
                            <div className="col-3">
                                <h5 className="mt-2 fw-light align-center">Fecha de Inicio</h5>
                            </div>
                            <div className="col-4">
                                <input
                                    name="date"
                                    id="inputDate" 
                                    disabled={available} 
                                    className="form-control form-control-md" 
                                    type="date" 
                                    onChange={e => {setInputDate(e.target.value)
                                                    e.target.classList.remove("is-invalid")}}
                                    value={inputDate}
                                    ></input>
                            </div>
                            <div className="col-2">
                                <h5 className="fw-light align-center">¿Siempre Disponible?</h5>
                            </div>
                            <div className="col-1">
                                <input name="alwaysAvailable" onChange={changeAvailable} className="form-control form-check-input em2" type="checkbox"></input>
                            </div>
                        </div>

                        <div className="row mx-5 my-3 form-group">
                            <div className="col-3">
                                <h5 className="mt-2 fw-light align-center">Duración</h5>
                            </div>
                            <div className="col-4">
                                <input
                                    name="duration"
                                    id="duration" 
                                    disabled={available} 
                                    className="form-control form-control-md" 
                                    type="text"
                                    onChange={e => {setInputDuration(e.target.value)
                                                    e.target.classList.remove("is-invalid")}}
                                    value={inputDuration}></input>
                            </div>
                        </div>

                        <hr/>

                        <div className="row mx-5 my-4 form-group">
                            <div className="col-3">
                                <h5 className="mt-2 fw-light align-center">Categoria</h5>
                            </div>

                            <div className="col-4">
                                <select
                                    name="category" 
                                    className="form-control"  
                                    onChange={e => setInputCategory(e.target.value)}
                                    value={inputCategory}
                                >
                                    <option>Tecnologia</option>
                                    <option>Artes Culinarias</option>
                                    <option>Automotriz</option>
                                    <option>Artes</option>
                                    <option>Blockchain</option>
                                </select>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="button" onClick={()=>{setChange(change + 1)}} className="btn btn-success mt-4 fs-4 fw-light px-5">Finalizar</button>
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
                            {/* <Link to="/curso/1">
                                <button onClick={()=>setStep(step + 1)} className="btn btn-success fs-4 fw-light px-5">Ver mi publicación</button>
                            </Link> */}
                            <button type="button" onClick={() => actions.createPost(formData)} className="btn btn-success fs-4 fw-light px-5">Crear mi publicación</button>
                        </div>
                    </div>    
                : null}
                </form>
                
                
            </div>
        </>
    );
};
