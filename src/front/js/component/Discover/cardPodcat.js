import React from "react";
import "../../../styles/discover.css"

export const CardPodcats = (props) => {


    return (
        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
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
                        <strong>Anfitriones:</strong>{props.podcaster}
                    </p>
                    <p className="card-pages">
                        <strong>Capítulo destacado:</strong>{props.featured_episodes}
                    </p>
                    <p className="card-resena">
                        <strong>Reseña:</strong>{props.properties}
                    </p>
                    {/* <div className="py-2 mt-4 text-end">
                        <ButtonFavorite />
                    </div> */}
                </div>
            </div>
        </div>
    );
};