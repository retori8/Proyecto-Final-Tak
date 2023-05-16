import React from "react";
import { BannerSimpleLeft } from "../component/BannerSimpleLeft";
import { BannerSimpleRight } from "../component/BannerSimpleRight";
import { Carrusel } from "../component/home/carrusel";
import { Unete } from "../component/Unete";
import { Testimonials } from "../component/Testimonials";
import "../../styles/tak.css"


export const Tak = () => {
    return (
        <div className="container-fluid tak-contenedor">
            <BannerSimpleLeft
                titulo="Tak, o Gracias en Danés"
                body="Hemos tomada prestada la palabra desde el vocablo danés, ya que, es una palabra simple y precisa que conlleva una gran significancia para todos aquellos que hemos hecho de la gratitud nuestro estilo de vida. Además, es facil de recordar."
                img="http://localhost:3000/img/tak.danes.png"
            />

            <BannerSimpleRight
                titulo="Mindfulness y Agradecimiento"
                body="El Mindfulness, también conocido como atención plena, es una práctica basada en la meditación budista que fue desarrollada en la década de 1970 por Jon Kabat-Zinn en el Centro Médico de la Universidad de Massachusetts. Kabat-Zinn creó el programa de reducción del estrés basado en Mindfulness (MBSR, por sus siglas en inglés) para ayudar a las personas a manejar el dolor crónico y otros problemas de salud. Desde entonces, el Mindfulness se ha expandido a otros campos, como la psicología y el bienestar personal, y se ha convertido en una práctica popular en todo el mundo."
                img="http://localhost:3000/img/maindful.png"
            />
            <Unete />
            <Testimonials />
        </div>
    )
}