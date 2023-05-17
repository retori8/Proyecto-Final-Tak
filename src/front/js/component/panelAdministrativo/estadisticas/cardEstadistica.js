import React from "react";

const CardEstadistica = ({ cantidad, titulo }) => {
    return (
        <div className="col-6 ">
            <div class="card" >
                <div class="card-body card-esta">
                    <div className="card-img number-cifra">
                        <h1 className="cifra">{cantidad}</h1>
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