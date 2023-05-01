import React from "react";

export default function ElementsList(props) {
    return (
        <li
            id="thank"
            className="list-group-item d-flex justify-content-between"
            key={props.key}
        >{props.thank}
            <button
                id="buttonDelete"
                type="button"
                className="btn-close btn-close-focus-shadow"
                aria-label="Close"
                onClick={props.handleDelete}
            ></button>
        </li>
    )
};