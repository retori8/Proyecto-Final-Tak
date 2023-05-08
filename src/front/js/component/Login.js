import React, { useContext, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { CampoForm } from "./CampoForm";
import { BotonUno } from "./BotonUno";
import { Context } from "../store/appContext";

export const Login = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();


    useEffect(() => {
        if (store.currentUser !== null) {
            navigate('/')
            console.log(store)
        }
    }, [])


    return (
        <div id="cardbanner" className="container col-10 row">
            <div id="cardbody" className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src="https://img.freepik.com/vector-gratis/iniciar-sesion-ilustracion-concepto_114360-5475.jpg?w=826&t=st=1682212652~exp=1682213252~hmac=5a49f58e240e934d0378ccd7e019b183516384a4039b0b4337d33b93d675e7f1" id="bannerimg" className="img-fluid rounded-start" alt="..." />
                    </div>

                    <div className="col-md-6">
                        <div className="card-body ps-4">
                            <form onSubmit={(e) => actions.getLogin(e, navigate)}>
                                <div className="mb-4">
                                    <h1 className="card-title m-2">Nos alegra tenerte aquí</h1>
                                </div>
                                <CampoForm
                                    type={"text"}
                                    label={"Email"}
                                    placeholder={"ingresa tu Email"}
                                    onInputChange={actions.handleChange}
                                    value={store.email}
                                    name={'email'}
                                />

                                <CampoForm
                                    type={"password"}
                                    label={"Password"}
                                    placeholder={"Ingresa tu password"}
                                    onInputChange={actions.handleChange}
                                    value={store.password}
                                    name={'password'}
                                />

                                <BotonUno
                                    name={"Ingresar"}
                                />

                            </form>
                            <p className="card-text m-2">
                                <small className="text-body-secondary">
                                    ¿No tienes cuenta?
                                    <Link className="ms-1" to='/register'>
                                        Crea tu cuenta aquí
                                    </Link>
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};