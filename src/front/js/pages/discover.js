import React from "react";
import "../../styles/discover.css"
import { CardBook } from "../component/Discover/cardBook";
import { CardPodcats } from "../component/Discover/cardPodcat";
import { CardMovie } from "../component/Discover/cardMovie";


export const Discover = () => {
	return (
		<div>
			<h1 className="text-center m-5">Libros</h1>
			<h5 className="text-center mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
			<div className="container-fluid">
				<div className="px-lg-5">
					<div className="row">
						<CardBook />
						<CardBook />
						<CardBook />
						<CardBook />

					</div>
				</div>
			</div>
			<h1 className="text-center m-5">Podcasts</h1>
			<h5 className="text-center mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
			<div className="container-fluid">
				<div className="px-lg-5">
					<div className="row">
						<CardPodcats />
						<CardPodcats />
						<CardPodcats />
						<CardPodcats />
					</div>
				</div>
			</div>	
			<h1 className="text-center m-5">Peliculas</h1>
			<h5 className="text-center mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
			<div className="container-fluid">
				<div className="px-lg-5">
					<div className="row">
						<CardMovie />
						<CardMovie />
						<CardMovie />
						<CardMovie />
					</div>
				</div>
			</div>			
		</div>
	);
};