import React from "react";

export default function ListCounter(props){
    return(
        <li className="list-group-item align-items-start">
            <span className="badge bg-secondary rounded-pill">
              {props.length} agradecimiento{props.length >= 2 ? "s" : ""}
            </span>
        </li>
    )
};