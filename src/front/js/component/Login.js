import React, { useContext, useState } from "react";
import { CampoForm } from "./CampoForm";
import { BotonUno } from "./BotonUno";
import Context from "../store/appContext"

export const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleClick = () => {
        console.log("click");
    }

    return (
        <div id="cardbanner" className="container col-10 row">
            <div id="cardbody" className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src="https://img.freepik.com/vector-gratis/iniciar-sesion-ilustracion-concepto_114360-5475.jpg?w=826&t=st=1682212652~exp=1682213252~hmac=5a49f58e240e934d0378ccd7e019b183516384a4039b0b4337d33b93d675e7f1" id="bannerimg" className="img-fluid rounded-start" alt="..." />
                    </div>

                    <div className="col-md-6">
                        <div className="card-body ps-4">
                            <div className="mb-4">
                                <h1 className="card-title m-2">Nos alegra tenerte aquí</h1>
                            </div>
                            <CampoForm
                                type={"text"}
                                label={"Email"}
                                placeholder={"ingresa tu Email"}
                                onInputChange={handleEmail}
                            />
                            <p>{email}</p>

                            <CampoForm
                                type={"password"}
                                label={"Password"}
                                placeholder={"Ingresa tu password"}
                                onInputChange={handlePassword}
                            />
                            <p>{password}</p>

                            <BotonUno
                                name={"Ingresar"}
                                onClick={handleClick}
                            />

                            <p className="card-text m-2">
                                <small className="text-body-secondary">¿No tienes cuenta? Crea tu cuenta aquí</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};