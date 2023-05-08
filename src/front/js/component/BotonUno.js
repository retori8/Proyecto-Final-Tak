import React from "react";
import "../../styles/campoFormBoton.css"

export const BotonUno = (props) => {
    return (
        <button
            type="submit"
            className="btn btn-form"
            onClick={props.onClick}
        >{props.name}</button>
    );
};