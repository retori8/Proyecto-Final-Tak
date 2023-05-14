import React from "react";

const BotonGuardar = ({ evento, texto }) => {
    return (
        <button type="button" className="btn btn-form" data-bs-dismiss="modal" onClick={e => evento()}>
            {texto}
        </button>
    )
}

export default BotonGuardar;