import React from "react";
// import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export const Alert = () => {
    return (
        <div className="alert alert-success text-center" role="alert">
            <h4 className="alert-heading">Well done!</h4>
            <p>
                Aww yeah, you successfully read this important alert message. This example
                text is going to run a bit longer so that you can see how spacing within an
                alert works with this kind of content.
            </p>
            <hr/>
            <button>Crear cuenta</button>
        </div>
    );
};