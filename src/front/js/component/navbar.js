import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary mb-5">
			<div className="container-fluid">
				<a className="navbar-brand text-white navbar-brand m-3 h1 ps-4" href="#">
					TAK LOGO
				</a>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav ms-auto ps-5">
						<li className="nav-item pe-4">
							<a className="nav-link active text-white" aria-current="page" href="#">
								TAK
							</a>
						</li>
						<li className="nav-item pe-4">
							<a className="nav-link active text-white" aria-current="page" href="#">
								RESPIRA
							</a>
						</li>
						<li className="nav-item pe-4">
							<a className="nav-link active text-white" aria-current="page" href="#">
								DESAFIOS
							</a>
						</li>
						<li className="nav-item pe-4">
							<a className="nav-link active text-white" aria-current="page" href="#">
								DONA AQUI
							</a>
						</li>
						<li className="nav-item pe-4">
							<button type="button" class="btn btn-outline-light">INGRESA</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
