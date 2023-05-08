import React from "react";
import { CardDiscoverAll } from "./cardDiscoverAll";

export const CoverDiscover = (props) => {
	return (
		<div>
			<h1 className="title-discover">{props.title}</h1>
			<h5 className="subtitle-discover">{props.caption}</h5>
			<div className="container-fluid">
				<div className="px-lg-5">
					<div className="row">
						<CardDiscoverAll
							img="http://localhost:3000/img/libros/dones.jpg"
							name="Los Dones de la Imperfección"
							author="Brene Brown"
							number_of_pages="208"
							properties="Este notable libro trata de ese viaje que es nuestra vida y que nos lleva desde el ¿qué pensará de mí la gente?..."
						/>
						<CardDiscoverAll
							img="http://localhost:3000/img/libros/elpoderdelahora.jpg"
							name="El poder del ahora"
							author="Eckhart Tolle"
							number_of_pages="208"
							properties="Escrito en un formato de preguntas y respuestas que lo hace muy accesible, El poder del ahora es una invitación a la reflexión, que le abrirá las puertas a la plenitud espiritual..."
						/>
						<CardDiscoverAll
							img="http://localhost:3000/img/libros/wasabi.jpg"
							name="Wabi sabi"
							author="Beth Kempton"
							number_of_pages="208"
							properties="Wabi sabi nos conecta con la simplicidad, con la belleza de la imperfección, con los dones de una vida slow y natural. Implica un hogar bello y acogedor, unas relaciones más reales..."
						/>
						<CardDiscoverAll
							img="http://localhost:3000/img/libros/elpoder.jpg"
							name="El poder está dentro de ti"
							author="Louise L. Hay"
							number_of_pages="208"
							properties="Todos tenemos dentro una sabiduría infinita que es capaz de proporcionarnos la mejor vida posible. Aprendiendo a confiar en esa sabiduría interior..."
						/>
						{/* {props.children} */}
					</div>
				</div>
			</div>
		</div>
	);
};

