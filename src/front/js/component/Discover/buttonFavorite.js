import React from "react";
import { FaHeart } from "react-icons/fa";

export const ButtonFavorite = (props) => {

    return (
        <button type="button" className="btn btn-primary btn-lg" onClick={() => {
            actions.addFavorite(props?.name);
        }}>
            <FaHeart />
        </button>

    );
};