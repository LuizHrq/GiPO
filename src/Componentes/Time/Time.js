import React from "react";
import { Link } from "react-router-dom";

import './Time.css'


export default function Time(){
    return(
    <>
        <div className="titulotime">
            <h2>Equipe de Desenvolvimento</h2>
        </div>
        <div className="time">

            <Link to="https://www.linkedin.com/in/eduardo-correa-a44817116/" target="_blank">
                <div className="dev">
                    <img id="dev" src="./img/devs/eduardo.png" alt="img eduardo"></img>
                    <h4>Eduardo Correa</h4>
                    <h5>Desenvolvedor</h5>
                </div>
            </Link>

            <Link to="https://www.linkedin.com/in/luizhenriquejesus/" target="_blank">
                <div className="dev">
                    <img id="dev" src="./img/devs/luiz.png" alt="img luiz"></img>
                    <h4>Luiz Nascimento</h4>
                    <h5>Desenvolvedor</h5>
                </div>
            </Link>

            <Link to="https://www.linkedin.com/in/samuel-enderson-a070b11b8/" target="_blank">
                <div className="dev">
                    <img id="dev" src="./img/devs/samuel.png" alt="img samuel"></img>
                    <h4>Samuel Enderson</h4>
                    <h5>Desenvolvedor</h5>
                </div>
            </Link>

            <Link to="https://www.linkedin.com/in/murilo-reis-356b01207/" target="_blank">
                <div className="dev">
                    <img id="dev" src="./img/devs/murilo.png" alt="img murilo"></img>
                    <h4>Murilo Ariel</h4>
                    <h5>Desenvolvedor</h5>
                </div>
            </Link>
        </div>

    </>
    )
}