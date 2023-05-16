import React, { useContext, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Context } from "../store/appContext";
import "../../styles/register.css"

export const Loginow = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();


    useEffect(() => {
        if (store.currentUser !== null) {
            navigate('/')
            console.log(store)
        }
    }, [])


    return (

        <>
            <body className="bodyform">
                <div className="registration-form">
                    <form onSubmit={(e) => actions.getLogin(e, navigate)}>
                        <h1 className="registro text-center ">Acceder a mi cuenta</h1>
                        <div className="form-group">
                            <input
                                required
                                maxlength="20"
                                type="email"
                                label="Email"
                                placeholder="Ingresa tu email"
                                className="form-control item"
                                id="email"
                                onChange={actions.handleChange}
                                value={store.email}
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
                                onChange={actions.handleChange}
                                value={store.password}
                                name={'password'}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btnSubmit btn btn-block create-account">
                                Acceder
                            </button>
                        </div>
                    </form>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </body>
        </>


    );
};