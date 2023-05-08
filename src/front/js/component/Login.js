import React, { useContext, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { CampoForm } from "./CampoForm";
import { BotonUno } from "./BotonUno";
import { Context } from "../store/appContext";
import "../../styles/login.css"

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
        <div className="container cont-login">
            <div id="cardbody" className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src="http://localhost:3000/img/login.png" id="" className="img-login" alt="..." />
                    </div>

                    <div className="col-md-6">
                        <div className="card-body ps-4">
                            <form onSubmit={(e) => actions.getLogin(e, navigate)}>
                                <div className="mb-4">
                                    <h1 className="title-register">Nos alegra tenerte aquí</h1>
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
                            <p className="text-crear-cuenta">
                                <small className="">
                                    ¿No tienes cuenta?
                                    <Link className="link-crear-cuenta" to='/register'>
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