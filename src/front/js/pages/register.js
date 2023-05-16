import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';
import "../../styles/register.css"

export const Register = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();


    return (

        <>
            <body className="bodyform">
                <div className="registration-form">
                    <form onSubmit={(e) => actions.handleSubmitRegister(e, navigate)}>
                        <h1 className="registro text-center ">Crear mi
                            cuenta</h1>
                        <div className="form-group">
                            <input
                                minlength="3"
                                maxlength="12"
                                required
                                type="text"
                                label="Nombre"
                                placeholder="Ingresa tu nombre "
                                className="form-control item"
                                id="first_name"
                                onChange={actions.handleChangeObjUser}
                                value={store.newUser.name}
                                name={'first_name'}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                minlength="3"
                                maxlength="18"
                                required
                                type="text"
                                label="Apellidos"
                                placeholder="Ingresa tus apellidos"
                                className="form-control item"
                                id="last_name"
                                onChange={actions.handleChangeObjUser}
                                value={store.newUser.lastname}
                                name={'last_name'}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                required
                                maxlength="20"
                                type="email"
                                label="Email"
                                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                                placeholder="Ingresa tu email"
                                className="form-control item"
                                id="email"
                                onChange={actions.handleChangeObjUser}
                                value={store.newUser.email}
                                name={'email'}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                required
                                minlength="5"
                                maxlength="8"
                                type="password"
                                label="Constraseña"
                                placeholder="Ingresa tu constraseña"
                                className="form-control item"
                                id="password"
                                onChange={actions.handleChangeObjUser}
                                value={store.newUser.password}
                                name={'password'}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                required
                                type="password"
                                label="Validación de contraseña"
                                placeholder="Repite tu contraseña"
                                className="form-control item confirmPassword"
                                id="re_password"
                                onChange={actions.handleChangeObjUser}

                                value={store.newUser.re_password}
                                name={'re_password'}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btnSubmit btn btn-block create-account">
                                Registrarme
                            </button>
                        </div>
                    </form>
                    <br />
                    <br />
                    <br />
                </div>
            
        </body >
        </>
    );
};