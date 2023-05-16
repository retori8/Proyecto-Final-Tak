import React from "react";
import { Link } from "react-router-dom";

export const ElementNavbar = (props) => {
    return (
        <div id="navbarli">
            <li className="nav-item pe-4">
                <Link  className="nav-link active m-3 text-dark" to={props.to}>
                    {props.name}
                </Link>
            </li>
        </div>
    );
};