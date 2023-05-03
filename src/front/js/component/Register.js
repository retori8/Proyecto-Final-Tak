import React, { useContext } from "react";
import { CampoForm } from "./CampoForm";
import { BotonUno } from "./BotonUno";
import { Context } from "../store/appContext";

export const Register = () => {

    const { store, actions } = useContext(Context);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        actions.getRecovery();
    }

    return (
        <div id="cardbanner" className="container col-10 row mb-5">
            <div id="cardbody" className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src="https://img.freepik.com/vector-gratis/ilustracion-concepto-sesion-movil_114360-135.jpg?w=1060&t=st=1682899190~exp=1682899790~hmac=e9c781896bba4438a41f753278ed7b5adebda5333891511eeda50ab8fba71108" id="bannerimg" className="img-fluid rounded-start" alt="..." />
                    </div>

                    <div className="col-md-6">
                        <div className="card-body ps-4">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-1 p-2">
                                    <h1 className="m-2">Formulario de Registro</h1>
                                    <CampoForm
                                        type={"text"}
                                        label={"Nombre"}
                                        placeholder={"ingresa tu nombre "}
                                        onInputChange={actions.handleChange}
                                        value={store.name}
                                        name={'name'}
                                    />
                                    <CampoForm
                                        type={"text"}
                                        label={"Apellidos"}
                                        placeholder={"ingresa tus apellidos "}
                                        onInputChange={actions.handleChange}
                                        value={store.lastname}
                                        name={'lastname'}
                                    />
                                    <CampoForm
                                        type={"text"}
                                        label={"Email"}
                                        placeholder={"ingresa tu Email "}
                                        onInputChange={actions.handleChange}
                                        value={store.email}
                                        name={'email'}
                                    />
                                    <CampoForm
                                        type={"password"}
                                        label={"Constraseña"}
                                        placeholder={"Ingresa tu constraseña"}
                                        onInputChange={actions.handleChange}
                                        value={store.password}
                                        name={'password'}
                                    />
                                    <CampoForm
                                        type={"password"}
                                        label={"Validación de contraseña"}
                                        placeholder={"Repite tu contraseña"}
                                        onInputChange={actions.handleChange}
                                        value={store.re_password}
                                        name={'re_password'}
                                    />
                                    <BotonUno
                                        name={"Registrar"}
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