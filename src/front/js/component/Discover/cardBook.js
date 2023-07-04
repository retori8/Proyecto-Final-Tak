import React from "react";
import "../../../styles/discover.css"

export const CardBook = (props) => {


    return (
        <div id="cardbooks" className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="cardescubre h-100">
                <img
                    src={props.img}
                    alt=""
                    className="img-fluid card-img-top"
                />
                {props.children}
                <div className="p-4">
                    <h5 className="card-titles">{props.name}</h5>
                    <p className="card-autor">
                        <strong>Autor:</strong> {props.author}
                    </p>
                    <p className="card-pages">
                        <strong>Número de páginas:</strong> {props.number_of_pages}
                    </p>
                    <p className="card-resena">
                        <strong>Reseña:</strong> {props.properties}
                    </p>
                </div>
            </div>
        </div>
    );
};