import React from "react";
import './Fases.css'


export default function Fases(){
    return(
        <>
            <div className="blocos">
                <div className="fase1">
                    <h2>Fase 1:<br></br>O que é o IPO?</h2>
                </div>

                <div className="fase2">
                    <h2>Fase 2:<br></br>Etapas do IPO <br></br>Parte 1</h2>
                </div>

                <div className="fase3">
                    <h2>Fase 3:<br></br>Etapas do IPO <br></br>Parte 2</h2>
                </div>
                <br></br>
                <div className="fase4">
                    <h2>Fase 4:<br></br>Estudo de caso</h2>
                </div>

                <div className="fase5">
                    <h2>Fase 5:<br></br>Refresh</h2>
                </div>
            </div>
        </>
    )
}