import React from "react";

export const RadiosButton = () => {
    return (
        <>
            <div className="form-check mb-2">
                <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Deseo donar $5.000
                </label>
            </div>
            <div className="form-check mb-2">
                <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    defaultChecked=""
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Deseo donar $10.000
                </label>
            </div>
            <div className="form-check mb-2">
                <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Deseo donar $20.000
                </label>
            </div>
        </>

    );
};
