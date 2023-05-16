import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
	return (
		<div className="fixed-bottom">
			<nav id="footer" className="">
				<div className="container ">
					<div className="row align-items-center">
						<div className="col justify-content-start">
							<img src="http://localhost:3000/img/tak_beige.png" className="logo-footer" />
						</div>
						<div className="col justify-content-center">
							<h6 className="text-footer">©2023 Tak</h6>
						</div>
						<div className="col justify-content-end">
							<div className="rrss-footer">
								<a role="button" href="https://web.facebook.com" target="_blank"> <FaFacebookF /> </a>
								<a href="https://www.instagram.com/" target="_blank"> <FaInstagram /> </a>
								<a href="https://twitter.com/" target="_blank"> <FaTwitter /> </a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
