import React from "react";
import "../../../styles/homelogeado.css";

export default function ElementsList(props) {
    return (
        <li
            id="thank"
            className="list-group-item d-flex justify-content-between"
        >{props.thank}
            <button
                id="buttonDelete"
                type="button"
                className="btn-close btn-dark btn-close-focus-shadow"
                aria-label="Close"
                onClick={props.handleDelete}
            ></button>
        </li>
    )
};