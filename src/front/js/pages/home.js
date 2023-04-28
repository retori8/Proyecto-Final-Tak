import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Carrusel } from "../component/home/carrusel";
import { CardBanner } from "../component/home/cardBanner";
import { Testimonials } from "../component/home/Testimonials";
import { BannerCard } from "../component/home/bannerCard";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div id="home" className="text-center mt-5">
			<BannerCard />
			<Carrusel />
			<Testimonials />
			<h1>Hello Rigo!!</h1>
			{/* <p>
				<img src={rigoImageUrl} />
			</p>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p> */}
		</div>
	);
};
