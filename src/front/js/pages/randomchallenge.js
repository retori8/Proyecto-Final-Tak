import React, { useContext } from "react";
import "../../styles/random.css";
import { CardChallenge } from "../component/Challenges/cardChallenge";
import { Context } from "../store/appContext";



export const RandomChallenge = () => {

    const { store, actions } = useContext(Context);

    return (
        <div id="randomchallenge">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="title-random">Desafio Random</h1>
                        <h4 className="subtitle-random">¿Qué te parece si soltamos un poco el control y nos aventuramos a hacer un desafío aleatorio? Lo que podemos adelantarte es que será un reto a corto plazo, creado para ejercitar nuestra “conciencia plena”.</h4>
                    </div>
                    <div className="col-md-6">
                        <CardChallenge random={store.random} click={actions.getRandom} />
                    </div>
                </div>
            </div>
        </div>
    );
};