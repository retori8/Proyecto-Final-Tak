import React, { useContext } from "react";
import { CampoForm } from "./CampoForm";
import { BotonUno } from "./BotonUno";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';
import "../../styles/register.css"

export const Register = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();


    /* const validarPassword2 = () => {
        if (store.newUser.password > 0) {
            if (store.newUser.password !== store.newUser.re_password) {
                console.log("Las contraseñan no son iguales")
            } else {
                console.log("Las contraseñan son iguales")
            }
        }
    } */

    return (
        <div className="container row cont-register">
            <div id="cardbody" className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src="http://localhost:3000/img/create.png" className="img-register" alt="..." />
                    </div>

                    <div className="col-md-6">
                        <div className="form-cont">
                            <form onSubmit={(e) => actions.handleSubmitRegister(e, navigate)}>
                                <div className="">
                                    <h1 className="title-register">Formulario de Registro</h1>
                                    <CampoForm
                                        type={"text"}
                                        label={"Nombre"}
                                        placeholder={"ingresa tu nombre "}
                                        onInputChange={actions.handleChangeObjUser}
                                        value={store.newUser.name}
                                        name={'first_name'}
                                    />
                                    <CampoForm
                                        type={"text"}
                                        label={"Apellidos"}
                                        placeholder={"ingresa tus apellidos "}
                                        onInputChange={actions.handleChangeObjUser}
                                        value={store.newUser.lastname}
                                        name={'last_name'}
                                    />
                                    <CampoForm
                                        type={"text"}
                                        label={"Email"}
                                        placeholder={"ingresa tu Email "}
                                        onInputChange={actions.handleChangeObjUser}
                                        value={store.newUser.email}
                                        name={'email'}
                                    />
                                    <CampoForm
                                        type={"password"}
                                        label={"Constraseña"}
                                        placeholder={"Ingresa tu constraseña"}
                                        onInputChange={actions.handleChangeObjUser}
                                        value={store.newUser.password}
                                        name={'password'}
                                    />
                                    <CampoForm
                                        type={"password"}
                                        label={"Validación de contraseña"}
                                        placeholder={"Repite tu contraseña"}
                                        onInputChange={actions.handleChangeObjUser}
                                        value={store.newUser.re_password}
                                        name={'re_password'}
                                    />
                                    <BotonUno
                                        name={"Crear mi cuenta"}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};