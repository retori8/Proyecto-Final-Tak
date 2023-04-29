import React from "react";

export const BannerSimpleRight = (props) => {
    return (
        <div id="cardbanner" className="container col-10 row mb-5">
            <div id="cardbody" className="card mb-4">
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body ps-4">
                            <div className="mb-4
                            ">
                                <h2 className="card-title">{props.titulo}</h2>
                            </div>
                            <p className="card-text">
                                {props.body}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={props.img} id="bannerimg" className="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};