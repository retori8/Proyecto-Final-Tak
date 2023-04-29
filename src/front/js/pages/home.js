import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Carrusel } from "../component/carrusel";
import { CardBanner } from "../component/cardBanner";
import { Testimonials } from "../component/Testimonials";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div id="home" className="text-center mt-5">
			<CardBanner />
			<Carrusel />
			<Testimonials />
		</div>
	);
};
