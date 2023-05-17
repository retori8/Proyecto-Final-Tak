import React, { useContext } from "react";
import ModalPanel from "../modalPanel/modalPanel";
import FormularioEditarUsuario from "../modalPanel/formualrioEditarUsuario";
import { Context } from "../../../store/appContext";

const BotonesCrear = () => {

    const { actions } = useContext(Context);

    return (
        <div className="row mt-5">
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-panel" data-bs-target="#formCrearUsuarioModal" data-bs-toggle="modal" onClick={actions.abrirModalCrearUsuario}> Crear Usuario </button>
            </div>
            <ModalPanel id="formCrearUsuario" tamano="modal-xl" titulo={"Crear Usuario"}>
                <FormularioEditarUsuario />
            </ModalPanel>
        </div>
    )
}

export default BotonesCrear;