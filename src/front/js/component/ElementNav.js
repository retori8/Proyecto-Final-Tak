import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css"


export const ElementNavbar = (props) => {
    return (
        <div id="navbarli">
            <li className="nav-item ">
                <Link type="button" className="nav-link m-3 text-dark" aria-current="page" to={props.to}>
                    {props.name}
                </Link>
            </li>
        </div>
    );
};