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
                img="https://img.freepik.com/vector-gratis/concepto-mindfulness-dibujado-mano-personajes_52683-69073.jpg?w=826&t=st=1682207784~exp=1682208384~hmac=b13759e50ffee2fd529e70bf134e82e585db377686697e43b77e78872983d06c"
            />

            <BannerSimpleRight
                titulo="Mindfulness y Agradecimiento"
                body="El Mindfulness, también conocido como atención plena, es una práctica basada en la meditación budista que fue desarrollada en la década de 1970 por Jon Kabat-Zinn en el Centro Médico de la Universidad de Massachusetts. Kabat-Zinn creó el programa de reducción del estrés basado en Mindfulness (MBSR, por sus siglas en inglés) para ayudar a las personas a manejar el dolor crónico y otros problemas de salud. Desde entonces, el Mindfulness se ha expandido a otros campos, como la psicología y el bienestar personal, y se ha convertido en una práctica popular en todo el mundo."
                img="https://img.freepik.com/fotos-premium/retrato-joven-feliz-feliz-hermosa-relajante-parque-alegre-modelo-femenino-respirando-aire-fresco-al-aire-libre-disfrutando-olor-primavera-flores-o-jardin-verano-tono-vendimia_1423-707.jpg?w=1380"
            />
            <Unete />
            <Carrusel />
            <Testimonials />
        </div>
    )
}