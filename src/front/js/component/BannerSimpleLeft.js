import React from "react";
import "../../styles/tak.css"

export const BannerSimpleLeft = (props) => {
    return (
        <div id="cardbanner" className="container banner-left">
            <div id="cardbody" className="container">
                <div className="row banner-left-card">
                    <div className="col-md-4">
                        <img src={props.img} className="img-banner-left" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body ps-4">
                            <div className="mb-4
                            ">
                                <h2 className="title-banner-left">{props.titulo}</h2>
                            </div>
                            <p className="text-banner-left">
                                {props.body}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

