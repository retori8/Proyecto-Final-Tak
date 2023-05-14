import React, { useContext } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Context } from "../../../store/appContext";
import ModalPanel from "../modalPanel/modalPanel";

const TablaAgradecimientos = () => {

    const { store, actions } = useContext(Context);


    return (
        <div className="table-responsive mt-5">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <td></td>
                        <td>Agradecimiento</td>
                        <td>Fecha</td>
                        <td>Usuario</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        store.thanks?.map((thank, index) =>
                            <tr key={index}>
                                <td className=" p-1" style={{ maxWidth: "3rem" }}>
                                    <FaTrashAlt role="button" className="mx-3 text-danger" data-bs-toggle="modal" data-bs-target="#tablaAgradecimientosModal"
                                        onClick={e => actions.confirmacionEliminarAgradecimiento(index, 'Eliminar Agradecimiento')} />
                                </td>
                                <td>{thank.list}</td>
                                <td>{thank.date}</td>
                                <td>{thank.users_id}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <ModalPanel id={"tablaAgradecimientos"} titulo={store.modalPanelAgradecimientos.titulo} contenido={store.modalPanelAgradecimientos.titulo}>
                ¿Estas seguro de eliminar el Agradecimiento?
            </ModalPanel>
        </div>
    )
}

export default TablaAgradecimientos;