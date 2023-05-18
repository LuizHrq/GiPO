import React from "react";
import { Link } from "react-router-dom";

import './Fases.css'


export default function Fases(){
    return(
        <>
            <div className="blocos">
                <div className="fase1">
                    <Link to={"/fase1"}>
                        <h2>Fase 1:<br></br>O que é o IPO?</h2>
                    </Link>
                </div>
                

                <div className="fase2">
                    <Link to={"/fase2"}>   
                        <h2>Fase 2:<br></br>Etapas do IPO <br></br>Parte 1</h2>
                    </Link>
                </div>

                <div className="fase3">
                    <Link to={"/fase2"}>
                        <h2>Fase 3:<br></br>Etapas do IPO <br></br>Parte 2</h2>
                    </Link>
                </div>

                <div className="fase4">
                    <Link to={"/fase2"}>  
                        <h2>Fase 4:<br></br>Estudo de caso</h2>
                    </Link>
                </div>

                <div className="fase5">
                    <Link to={"/fase2"}>  
                        <h2>Fase 5:<br></br>Refresh</h2>
                    </Link>
                </div>
            </div>
        </>
    )
}