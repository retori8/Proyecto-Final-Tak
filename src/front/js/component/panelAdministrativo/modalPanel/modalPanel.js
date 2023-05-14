import React, { Children, useContext } from "react";
import { Context } from "../../../store/appContext";
import BotonGuardar from "./botonGuardar";

const ModalPanel = ({ children, titulo, id, tamano }) => {

    const { store, actions } = useContext(Context)

    return (
        <div class="modal fade" id={id + "Modal"} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class={"modal-dialog " + tamano}>
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">{titulo}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {children}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-form" data-bs-dismiss="modal">Close</button>

                        {
                            store.modalPanelUsuarios?.contenido == 'Editar Usuario' ?
                                // <button type="submit" className="btn btn-form" data-bs-dismiss="modal" onClick={actions.guardarModalPanel}></button>
                                <BotonGuardar texto={"Guardar"} evento={actions.guardarModalPanel} />
                                : store.modalPanelUsuarios?.contenido == 'Eliminar Usuario' ?
                                    <BotonGuardar texto={"Eliminar"} evento={actions.eliminarUsuario} />
                                    : store.modalPanelUsuarios?.contenido == 'Crear Usuario' ?
                                        <BotonGuardar texto={"Guardar"} evento={actions.crearUsuario} />
                                        : store.modalPanelAgradecimientos.contenido == 'Eliminar Agradecimiento' ?
                                            <BotonGuardar texto={"Eliminar"} evento={actions.eliminarAgradecimiento} />
                                            : ''

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalPanel