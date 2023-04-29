import React from "react";

export const BotonUno = (props) => {
    return (
        <button
            type="submit"
            className="btn btn-primary m-2"
            onClick={props.onClick}

        >{props.name}</button>
    );
};