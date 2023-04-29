import React from "react";
import { Donations } from "../component/Donations";
import { ErrorPage } from "../component/ErrorPage";


export const Error401 = () => {
    return (
        <div className="container">
            <ErrorPage img={"https://img.freepik.com/vector-gratis/ilustracion-concepto-401-error-no-autorizado_114360-1903.jpg?w=826&t=st=1682292517~exp=1682293117~hmac=605b008ea70e40bb90e1285eddf8526d8d5b01434e0d7a278a5a9be81e7ba343"} />
        </div>
    )
}