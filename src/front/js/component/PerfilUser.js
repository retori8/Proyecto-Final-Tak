import React from "react";
import { ReactPropTypes } from "react";
import { CampoForm } from "./CampoForm";
import { BotonUno } from "./BotonUno";

const PerfilUser = () => {
  return (
    <div>
      <form>
        <h1 className="m-2">Mi Perfil</h1>
        <CampoForm />
        <CampoForm />
        <CampoForm />
        <CampoForm />
        <CampoForm />
        <CampoForm />
        <CampoForm />
        <BotonUno />
        <CampoForm />
        <CampoForm />
        <BotonUno />
      </form>
    </div>
  );
}

export default PerfilUser;
