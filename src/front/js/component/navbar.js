import React, { useContext } from "react";
import { ElementNavbar } from "./ElementNav";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../../../dist/img/logo_tak.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const navitgate = useNavigate()
	return (
		<nav id="navbar" className="navbar sticky-top navbar-expand-lg bg-body-tertiary fixed-top">
			<div className="container-fluid">
				<Link className="navbar-brand m-3 ps-4" to={"/"}>
					<img src={logo} height={35} /> 
				</Link>
				<div className="collapse navbar-collapse m" id="navbarNavDropdown">
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
						{/* <ElementNavbar name="Tak?" to="/tak" />
							<ElementNavbar name="Respira" to="/respira" />
							<ElementNavbar name="Desafíos" to="/challenges" />
							<ElementNavbar name="Descubre" to="/discover" />
							<li className="nav-item pe-4">
								<Link type="button" className="btn btnNavbar" aria-current="page" to="/login">
									<span className="">
										Login
									</span>
								</Link>
							</li> */}
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
