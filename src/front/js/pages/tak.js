import React from "react";
import { BannerSimpleLeft } from "../component/BannerSimpleLeft";
import { BannerSimpleRight } from "../component/BannerSimpleRight";
import { Carrusel } from "../component/home/carrusel";
import { Unete } from "../component/Unete";
import { Testimonials } from "../component/Testimonials";


export const Tak = () => {
    return (
        <div className="container mb-5">
            <BannerSimpleLeft
                titulo="Tak, o Gracias en Danés"

                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                img="https://img.freepik.com/vector-gratis/concepto-mindfulness-dibujado-mano-personajes_52683-69073.jpg?w=826&t=st=1682207784~exp=1682208384~hmac=b13759e50ffee2fd529e70bf134e82e585db377686697e43b77e78872983d06c"
            />
            <BannerSimpleRight
                titulo="Mindfulness y agradecimiento"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                img="https://img.freepik.com/fotos-premium/retrato-joven-feliz-feliz-hermosa-relajante-parque-alegre-modelo-femenino-respirando-aire-fresco-al-aire-libre-disfrutando-olor-primavera-flores-o-jardin-verano-tono-vendimia_1423-707.jpg?w=1380"
            />
            <Carrusel />
            <Unete />
            <Testimonials />
        </div>
    )
}