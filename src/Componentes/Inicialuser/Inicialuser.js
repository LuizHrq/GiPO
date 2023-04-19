import React from "react";
import Header from "../Header/Header";
import Fases from "../Fases/Fases";
import './Inicialuser.css'
import Footer from "../Footer/Footer";

export default function Inicialuser(){
    return(
        <>
            <Header/>
            <div className="blocosuperior">
                <div className="boasvindas">
                    <h2>Seja bem vindo, Luiz! <br>
                    </br>Vamos iniciar sua jornada?</h2>
                </div>
                <img id="gipopersona" src="./img/3d_Gipo_man.png" alt="imagem persona"></img>
            </div>
            <div className="fases">
                <h2>Aqui você poderá iniciar sua jornada de conhecimento sobre IPO!</h2>
            </div>
            
            <Fases/>  
            <Footer/>
        </>
    )
}
