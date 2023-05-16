import React from "react";
import "../../../styles/homelogeado.css"


export default function List(props) {
    return (
        <ul /* id="lista" */ className="list-gracias">{props.children}</ul>
    )
};