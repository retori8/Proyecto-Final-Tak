import React from "react";
import { Link } from "react-router-dom";

export const ElementNavbar = (props) => {
    return (
        <div id="navbarli">
            <li className="nav-item pe-4">
                <Link type="button" className="nav-link active m-3" aria-current="page" to={props.to}>
                    {props.name}
                </Link>
            </li>
        </div>
    );
};