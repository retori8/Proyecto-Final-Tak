import React, { useContext, useEffect } from "react";
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { Context } from "../../../store/appContext";
import ModalPanel from "../modalPanel/modalPanel";
import FormularioEditarUsuario from "../modalPanel/formualrioEditarUsuario";

const TablaUsers = () => {
    const { store, actions } = useContext(Context);
    const { users, modalPanelUsuarios } = store;
    return (
        <div className="table-responsive mt-5">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <td></td>
                        <td>Foto</td>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <td>Email</td>
                        <td>Cumpleaños</td>
                        <td>Rol</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, index) =>
                            <tr key={index}>
                                <td className="" style={{ maxWidth: "4rem" }}>
                                    <FaEdit role="button" className="mx-3 text-info" data-bs-toggle="modal" data-bs-target="#tablaUsersModal"
                                        onClick={e => actions.abrirModalPanel(`Editar Usuario ${user.id}`, 'Editar Usuario', index)} />
                                    <FaTrashAlt role="button" className="mx-3 text-danger" data-bs-toggle="modal" data-bs-target="#tablaUsersModal"
                                        onClick={e => actions.confirmacionEliminarUsuario(index, 'Eliminar Usuario')} />
                                </td>
                                <td> {user.image} </td>
                                <td> {user.first_name} </td>
                                <td> {user.last_name}</td>
                                <td> {user.email} </td>
                                <td> {user.birthdate} </td>
                                <td> {user.role_id} </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <ModalPanel titulo={modalPanelUsuarios.titulo} contenido={modalPanelUsuarios.contenido} id="tablaUsers">
                {
                    modalPanelUsuarios.contenido == 'Editar Usuario' ? <FormularioEditarUsuario />
                        : modalPanelUsuarios.contenido == 'Eliminar Usuario' ? 'Estas Seguro que quieres elimniar el usuario' : ''

                }

            </ModalPanel>
        </div>
    )
}

export default TablaUsers;