import React from "react";


export const CampoForm = (props) => {
  return (
    <div className="mb-1 p-2">
      <label htmlFor="exampleInputEmail1" className="form-label">{props.label}</label>
      <input type={props.type}
        className="form-control"
        placeholder={props.placeholder}
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        onChange={props.onInputChange}
        value={props.value}
        name={props.name}
      />
    </div>
  );
};

