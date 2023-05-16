import React from "react";
import { CardDiscoverAll } from "./cardDiscoverAll";

export const CoverDocu = (props) => {
	return (
		<div>
			<h1 className="title-discover">{props.title}</h1>
			<h5 className="subtitle-discover">{props.caption}</h5>
			<div className="container-fluid">
				<div className="px-lg-5">
					<div className="row">
						<CardDiscoverAll
							img="http://localhost:3000/img/docus/movement.jpg"
							name="The Mindfulness Movement"
							author="Robert Beemer"
							number_of_pages="208"
							properties="Un documental que examina el creciente número de personas en toda la sociedad que están trabajando para crear un mundo más feliz ..."
						/>
						<CardDiscoverAll
							img="http://localhost:3000/img/docus/brene.jpg"
							name="Brené Brown: The Call to Courage"
							author="Sandra Restrepo"
							number_of_pages="208"
							properties="Brené Brown reflexiona con humor y empatía sobre cómo elegir la valentía en lugar de la comodidad en una cultura marcada por la escasez, el miedo y la incertidumbre."
						/>
						<CardDiscoverAll
							img="http://localhost:3000/img/docus/mind.jpg"
							name="La Mente en pocas palabras"
							author="Ora Dekornfeld"
							number_of_pages="208"
							properties="Serie documental que examina lo que sucede dentro de nuestros cerebros cuando soñamos, cuando estamos ansiosos ..."
						/>
						<CardDiscoverAll
							img="http://localhost:3000/img/docus/heal.jpg"
							name="Heal"
							author="Kelly Noonan"
							number_of_pages="208"
							properties="Un viaje científico y espiritual en el que descubriremos que si cambiamos nuestras percepciones, el cuerpo humano se puede curar a sí mismo."
						/>
						{/* {props.children} */}
					</div>
				</div>
			</div>
		</div>
	);
};

