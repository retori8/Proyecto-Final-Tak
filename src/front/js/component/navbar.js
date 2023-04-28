import React from "react";
import { ElementNavbar } from "./ElementNav";


export const Navbar = () => {
	return (
		<nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<a className="navbar-brand  text-light m-3 h1 ps-4" href="#">
					TAK LOGO
				</a>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav ms-auto ps-5">
						<ElementNavbar />
						<ElementNavbar />
						<ElementNavbar />
						<ElementNavbar />
						<li className="nav-item pe-4">
							<button id="buttonav" type="button" class="btn-dark btn-outline-light btn-lg">INGRESA</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
