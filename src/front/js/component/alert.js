import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
// import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export const Alert = () => {

    const { store } = useContext(Context);
    const { alert } = store
    
    return (
        <>
            {
                alert.show ?
                    <div className="alert alert-danger text-center" role="alert" show={alert.show}>
                        <h6>
                            {alert.text}
                        </h6>
                    </div>
                    :
                    ''
            }
        </>
    );
};