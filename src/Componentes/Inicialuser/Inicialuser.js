import React from "react";
import Header from "../Header/Header";
import Fases from "../Fases/Fases";
import './Inicialuser.css'
import Footer from "../Footer/Footer";

export default function Inicialuser(){
    const nomeUsuario = localStorage.getItem("nomeUsuario");
    return(
        <>
            <Header/>
            <div className="container-inicial-user">
                <div className="container-boasvindas">
                    <h2>Olá, {nomeUsuario}!<br>
                    </br>Vamos iniciar sua jornada?</h2>
                </div>

                <div className="container-persona">
                    <img id="gipopersona" src="./img/3d_Gipo_man.png" alt="imagem persona"></img>
                </div>
            </div>

            <div className="container-instrucao">
                <h2>Aqui você poderá iniciar sua jornada de conhecimento sobre IPO!</h2>
            </div>
            
            <Fases/>  
            <Footer/>
        </>
    )
}
