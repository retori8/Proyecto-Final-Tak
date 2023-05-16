import React, { useContext, useState } from "react";
import { ElementNavbar } from "./ElementNav";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../../../dist/img/logo_tak.png";
import "../../styles/index.css"

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const navitgate = useNavigate()
	const [collapsed, setCollapsed] = useState(true)

	return (

		/* Inicio del menú */

		<nav id="navbar" className="navbar navbar-expand-md fixed-top">
			<div className="container ">

				{/* LOGO */}

				<Link className="navbar-brand m-3 ps-4" to={"/"}>
					<img src={logo} height={35} />
				</Link>

				{/* TOOGLER */}

				<button
					className="navbar-toggler "
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#menutak"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={() => setCollapsed(!collapsed)}
				>
					{collapsed ? (
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height="2rem">
							<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					) : (
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height="2rem">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					)}


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
	);
};


/*import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../img/logo.png";

export const Navbar = () => {
	return (
		<nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary mb-5">
			<div className="container-fluid">
				<Link className="navbar-brand text-white navbar-brand m-3 h1 ps-4" to={"/"}>
					<img src={logo} height={35} />
				</Link>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav ms-auto ps-5">
						<li className="nav-item pe-4">
							<Link className="nav-link" aria-current="page" to="/tak">
								¿Tak?
							</Link>
						</li>
						<li className="nav-item pe-4">
							<Link className="nav-link" aria-current="page" to="/respira">
								Respira
							</Link>
						</li>
						<li className="nav-item pe-4">
							<a className="nav-link active text-white" aria-current="page" href="#">
								Desafios
							</a>
						</li>
						<li className="nav-item pe-4">
							<Link className="nav-link active text-white" aria-current="page" to="/donate">
								Dona Aquí
							</Link>
						</li>
						<li className="nav-item pe-4">
							<button type="button" className="btn btn-outline-light">Ingresa</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};*/
