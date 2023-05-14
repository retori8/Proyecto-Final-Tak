import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/challenge21.css";

export const ButtonDay = (props) => {
    return (
        <>
             <div className="row">
                <div className="col text-center"><Link to={props.to} ><button type="button" id="next" className="circle-btn btn-lg">{props.day}</button></Link></div>
            </div>
            <br/>
        </>
    );
};