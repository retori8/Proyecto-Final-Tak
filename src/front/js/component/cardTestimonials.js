import React from "react";

export const CardTestimonials = (props) => {
    return (
        <div className="col-xl-3 col-sm-6">
            <div className="card-testimonio-body">
                <img
                    src={props.img}
                    alt=""
                    width={100}
                    className="card-testimonio-img"
                />
                <h5 className="card-testimonio-title">{props.name}</h5>
                <br />
                <p className="card-testimonio-text">{props.text} </p>
            </div>
        </div>

    );
};