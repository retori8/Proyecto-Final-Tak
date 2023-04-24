import React from "react";

export const CardDiscover = (props) => {
    return(
        <div id="card" className="card m-3" style={{ width: "18rem" }}>
        <img id="picture"
          style={{ height: "30vh" }}
          src="https://i.ebayimg.com/images/g/hYIAAOSwe-FjkFbT/s-l500.jpg"
          className="card-img-top bg-white"
          alt="..."
        />
        {props.children}
        </div>
    )
};