import React from "react";
import "../../../styles/homelogeado.css"

export default function CardList(props) {
    return (
        <div id="container" className="col-6 p-3 mb-5">
            <div className="card-body ">
                <p className="title-card-list">
                    ¿Cuales son tus motivos de gratitud hoy?
                </p>
                {props.children}
            </div>
        </div>
    )
};