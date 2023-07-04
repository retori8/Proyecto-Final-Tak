import React from "react";
import "../../styles/home.css";
import { Carrusel } from "../component/home/carrusel";
import { Testimonials } from "../component/home/Testimonials";
import { BannerCard } from "../component/home/bannerCard";



export const Home = () => {

	return (
		<div id="home" className="">
			<BannerCard />
			<h2 className="sugerencias-tak-home">Algunas Sugerencias de Tak</h2>
			<Carrusel />
			<Testimonials />
			<br />
			<br />
		</div>
	);
};