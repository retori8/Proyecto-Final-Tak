import React from "react";

export default function CardList(props){
    return(
        <div id="container" className="col-6 p-3 mb-5">
            <div className="card-body ">
                <p id="title" className="card-title text-center text-white fs-3">
                    Hola Jon Doe cuales son tus motivos de gratitud hoy?
                </p>
                {props.children}
            </div>
        </div>
    )
};