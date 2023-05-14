import React, { useContext } from "react";
import { Context } from "../../../store/appContext";

const Alerta = () => {

    const { store } = useContext(Context)
    const { alerta } = store
    return (
        <>
            {
                alerta.show ?
                    <div className={"alert alert-" + alerta.tipo} role="alert" >
                        {alerta.mensaje}
                    </div >
                    :
                    ''

            }
        </>
    )
}

export default Alerta;