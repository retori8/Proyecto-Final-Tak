import React, { useContext, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Context } from "../store/appContext";
import "../../styles/register.css"
import { Alert } from "../component/alert";


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
            <body className="bodyform">
                
                <div className="registration-form">
                    <form className="card-login" onSubmit={(e) => actions.getLogin(e, navigate)}>
                    <Alert text={store.alert?.text} show={store.alert?.show}/>
                        <h1 className="registro text-center ">Nos alegra tenerte aquí</h1>
                        <div className="form-group">
                            <input
                                required
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
                            <p className="text-crear-cuenta text-center">
                                <small className="">
                                    ¿No tienes cuenta?{" "}
                                    <Link className="link-crear-cuenta" to='/register'>
                                        Crea tu cuenta aquí
                                    </Link>
                                </small>
                            </p>
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
        
        


    );
};