import React from "react";
import { FaHeart } from "react-icons/fa";

export const CardMovie = () => {


    return (
        <div className="cardescubre col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm">
                <img
                    src="https://bootstrapious.com/i/snippets/sn-gallery/img-3.jpg"
                    alt=""
                    className="img-fluid card-img-top"
                />
                <div className="p-4">
                    <h5 className="text-center">Titulo de la Pelicula</h5>
                    <p className=" my-1">
                        Director:
                    </p>
                    <p className=" my-1">
                        Duracion:
                    </p>
                    <p className=" my-1">
                        Resena:
                    </p>
                    <div className="py-2 mt-4 text-end">
                        <button type="button" class="btn btn-primary btn-lg">
                            <FaHeart />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};