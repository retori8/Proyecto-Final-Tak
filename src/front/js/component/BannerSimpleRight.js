import React from "react";
import "../../styles/tak.css"

export const BannerSimpleRight = (props) => {
    return (
        <div id="cardbanner" className="container banner-right">
            <div id="cardbody" className="container">
                <div className="row banner-right-card">
                    <div className="col-md-6">
                        <div className="card-body ps-4">
                            <div className="mb-4
                            ">
                                <h2 className="title-banner-right">{props.titulo}</h2>
                            </div>
                            <p className="text-banner-right">
                                {props.body}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={props.img} className="img-banner-right" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};