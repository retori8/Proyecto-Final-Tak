import React from "react";


export const InputForm = (props) => {
  return (
    <div className="mb-1 p-2">
      <label htmlFor="exampleInputEmail1" className="form-label">{props.label}</label>
      <input
        type={props.type} name={props.name} id={props.id} placeholder={props.placeholder}
      />
    </div>
  );
};