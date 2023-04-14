import React from "react";
import './Time.css'


export default function Time(){
    return(
    <>
    <h2>Equipe de Desenvolvimento</h2>  
        <div className="time">

            <div className="dev">
                <img id="dev" src="./img/devs/eduardo.png" alt="img eduardo"></img>
                <h4>Eduardo Correa</h4>
                <h5>Desenvolvedor</h5>
            </div>

            <div className="dev">
                <img id="dev" src="./img/devs/luiz.png" alt="img luiz"></img>
                <h4>Luiz Nascimento</h4>
                <h5>Desenvolvedor</h5>
            </div>

            <div className="dev">
                <img id="dev" src="./img/devs/samuel.png" alt="img samuel"></img>
                <h4>Samuel Enderson</h4>
                <h5>Desenvolvedor</h5>
            </div>

            <div className="dev">
                <img id="dev" src="./img/devs/eduardo.png" alt="img murilo"></img>
                <h4>Murilo Ariel</h4>
                <h5>Desenvolvedor</h5>
            </div>
        </div>

    </>
    )
}