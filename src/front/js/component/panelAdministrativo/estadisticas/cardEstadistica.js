import React from "react";

const CardEstadistica = ({ cantidad, titulo }) => {
    return (
        <div className="col-6">
            <div class="card" >
                <div class="card-body">
                    <div className="card-img-top bg-secondary text-white d-flex align-items-center justify-content-center h-50">
                        <h1>{cantidad}</h1>
                    </div>
                    <div className=" d-flex align-items-center h-50 text-center">
                        <h1>{titulo}</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardEstadistica;