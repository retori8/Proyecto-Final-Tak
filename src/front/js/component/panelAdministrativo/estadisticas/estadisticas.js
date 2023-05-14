import React, { useContext } from "react";
import CardEstadistica from "./cardEstadistica";
import { Context } from "../../../store/appContext";

const Estadisticas = () => {
    const { store } = useContext(Context);
    return (
        <div className="row mt-5">
            <CardEstadistica cantidad={store.users.length} titulo="Usuarios Registrados" />
            <CardEstadistica titulo={"Agradecimientos Realizados"} cantidad={store.thanks.length} />
            {/* <CardEstadistica titulo={"Solicitudes de Cambio de Contraseña"} /> */}
        </div>
    )
}

export default Estadisticas;