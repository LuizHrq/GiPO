import React from "react";
import { Link } from "react-router-dom";
import './Parceiros.css'

export default function Parceiros(){

    return(
        <>
        <div className="tituloparceiros">
            <h2>PARCEIROS</h2>
        </div>
            <div className="parceiros">
                    <div className="containerfiap">
                    <Link to="https://www.fiap.com.br/" target="_blank">
                        <img id="fiap" src="./img/FIAP_LOGO.png" alt="logo fiap"></img>
                    </Link>
                    </div>

                    <div className="containerb3">
                    <Link to="https://www.b3.com.br/pt_br/" target="_blank">
                        <img id="b3" src="./img/B3_LOGO.png" alt="logo b3"></img>
                    </Link>
                    </div>

            </div>
        </>
    )
}