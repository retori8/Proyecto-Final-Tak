import React from "react";
import { CampoForm } from "./CampoForm";
import { BotonUno } from "./BotonUno";

export const Register = () => {
    return (
        <div className="mb-1 p-2">
            <h1 className="m-2">Formulario de Registro</h1>
            <CampoForm />
            <CampoForm />
            <CampoForm />
            <CampoForm />
            <CampoForm />
            <BotonUno />
        </div>
    );
};