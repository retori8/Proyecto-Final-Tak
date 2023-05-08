import React, { useContext } from "react";
import { ElementNavbar } from "./ElementNav";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../../img/logo.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const navitgate = useNavigate()
	return (
		<nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary mb-3">
			<div className="container-fluid">
				<Link className="navbar-brand text-white navbar-brand m-3 h1 ps-4" to={"/"}>
					<img src={logo} height={35} />
				</Link>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav ms-auto ps-5">
						{
							store.currentUser ?
								<>
									<ElementNavbar name="MI CUENTA" to="/home" />
									<ElementNavbar name="TAK?" to="/tak" />
									<ElementNavbar name="RESPIRA" to="/respira" />
									<ElementNavbar name="DESAFIOS" to="/challenges" />
									<ElementNavbar name="DESCUBRE" to="/discover" />
								</>
								:
								<></>
						}
						<li className="nav-item pe-4">
							<button type="button" className="btn btn-outline-light m-4" aria-current="page" onClick={e => actions.comprobarLogin(navitgate)}>
								{store.currentUser ? "LOGOUT" : "LOGIN"}
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
