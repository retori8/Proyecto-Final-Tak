import React, { useContext } from "react";
import { CampoForm } from "../../CampoForm";
import { Context } from "../../../store/appContext";
import { BotonUno } from "../../BotonUno";

const FormularioEditarUsuario = () => {

    const { store, actions } = useContext(Context)
    return (
        <div className="container row ">
            <div id="cardbody" className="card mb-3">
                <div className="row g-0">
                    <div className="col">
                        <div className="form-cont">
                            <form>
                                <div className="">
                                    <CampoForm
                                        type={"text"}
                                        label={"Nombre"}
                                        placeholder={"ingresa tu nombre "}
                                        onInputChange={actions.handleChangeObjUser}
                                        value={store.newUser.first_name}
                                        name={'first_name'}
                                    />
                                    <CampoForm
                                        type={"text"}
                                        label={"Apellidos"}
                                        placeholder={"ingresa tus apellidos "}
                                        onInputChange={actions.handleChangeObjUser}
                                        value={store.newUser.last_name}
                                        name={'last_name'}
                                    />
                                    <CampoForm
                                        type={"text"}
                                        label={"Email"}
                                        placeholder={"ingresa tu Email "}
                                        onInputChange={actions.handleChangeObjUser}
                                        value={store.newUser.email}
                                        name={'email'}
                                    />
                                    <CampoForm
                                        type="date"
                                        label={"Birthdate"}
                                        value={store.newUser.birthdate}
                                        name="birthdate"
                                        onInputChange={actions.handleChangeObjUser}
                                    />
                                    <CampoForm
                                        label={"Rol"}
                                        value={store.newUser.role_id}
                                        onInputChange={actions.handleChangeObjUser}
                                        name="role_id"
                                    />

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormularioEditarUsuario;