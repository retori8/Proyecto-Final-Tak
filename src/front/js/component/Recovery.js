import React, { useContext } from "react";
import { CampoForm } from "./CampoForm";
import { BotonUno } from "./BotonUno";
import { Context } from "../store/appContext";

export const Recovery = () => {

    const { store, actions } = useContext(Context);

    const handleSubmit = e => {
        e.preventDefault();

        actions.getRecovery();
    }

    return (
        <div id="cardbanner" className="container col-10 row">
            <div id="cardbody" className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src="https://img.freepik.com/vector-gratis/ilustracion-concepto-olvide-contrasena_114360-1095.jpg?w=826&t=st=1682199150~exp=1682199750~hmac=086622b6d472f31037eb087ffa2557c3a72aae606d5d68771cb4261c47c3e915" id="bannerimg" className="img-fluid rounded-start" alt="..." />
                    </div>

                    <div className="col-md-6">
                        <div className="card-body ps-4">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <h1 className="card-title m-2">Calma, No todo está perdido</h1>
                                </div>
                                <p className="card-text m-2">
                                    Escribe el email asociado a tu cuenta y, haremos llegar un código para recuperar tu contraseña.
                                </p>
                                <CampoForm
                                    type={"text"}
                                    label={"Email"}
                                    placeholder={"ingresa tu Email"}
                                    onInputChange={actions.handleChange}
                                    value={store.email}
                                    name={'email'}
                                />
                                <BotonUno
                                    name={"Recuperar"}
                                />
                            </form>
                            <p className="card-text m-2">
                                <small className="text-body-secondary">Si no te ha llegado el correo, revisa la casilla de Spam</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};