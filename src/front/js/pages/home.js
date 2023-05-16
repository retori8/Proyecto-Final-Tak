import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Carrusel } from "../component/home/carrusel";
import { Testimonials } from "../component/Testimonials";
import { BannerCard } from "../component/home/bannerCard";



export const Home = () => {
	const { store, actions } = useContext(Context);

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