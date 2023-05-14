import React from "react";
import "../../styles/panelAdministrativo.css"
import Panel from "../component/panelAdministrativo/panel/panel";
import BotonesCrear from "../component/panelAdministrativo/botonesCrear/botonesCrear";
import Estadisticas from "../component/panelAdministrativo/estadisticas/estadisticas";
import Alerta from "../component/panelAdministrativo/panel/alerta";

export const PanelAdministrativo = () => {
    return (
        <div className="container cont-panel">
            <Alerta />
            <h1 className="title-panel"> Panel Administrativo </h1>
            <Panel />
            <BotonesCrear />
            <Estadisticas />
        </div>
    )
}

export default PanelAdministrativo;