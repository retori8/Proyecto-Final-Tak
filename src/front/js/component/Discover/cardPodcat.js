import React from "react";
import { FaHeart } from "react-icons/fa";

export const CardPodcats = () => {


    return (
        <div className="cardescubre col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm">
                <img
                    src="https://bootstrapious.com/i/snippets/sn-gallery/img-2.jpg"
                    alt=""
                    className="img-fluid card-img-top"
                />
                <div className="p-4">
                    <h5 className="text-center">Titulo del Podcast</h5>
                    <p className=" my-1">
                        Anfitriones:
                    </p>
                    <p className=" my-1">
                        Capítuloa destacados:
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