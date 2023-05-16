/* import React, { useContext } from "react";
import { ElementNavbar } from "../ElementNav";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../../../../dist/img/logo_tak.png"; */

/* export const NavbarZaimon = () => {
    const { store, actions } = useContext(Context)
    const navitgate = useNavigate()

    return (
        <nav class="navbar sticky-top navbar-light bg-light">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <Link className="navbar-brand m-3 ps-4" to={"/"}>
                        <img src={logo} height={35} />
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse m" id="menutak">
                        <ul className="navbar-nav ms-auto ps-5">
                            {
                                store.currentUser ?
                                    <>
                                        <ElementNavbar name="Mi Cuenta" to="/home" />
                                        <ElementNavbar name="Tak?" to="/tak" />
                                        <ElementNavbar name="Respira" to="/respira" />
                                        <ElementNavbar name="Desafíos" to="/challenges" />
                                        <ElementNavbar name="Descubre" to="/discover" />
                                    </>
                                    :
                                    <>
                                        <ElementNavbar name="Tak?" to="/tak" />
                                    </>
                            }
                            <li className="nav-item pe-4">
                                <button type="button" className="btn btnNavbar" aria-current="page" onClick={e => actions.comprobarLogin(navitgate)}>
                                    {store.currentUser ? "Cerrar Sesión" : "Ingresar"}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </nav>
    )
} */