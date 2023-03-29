import React from "react";
import Header from "../Header/Header";
import Fases from "../Fases/Fases";
import './Inicialuser.css'
import Footer from "../Footer/Footer";

export default function Inicialuser(){
    return(
        <>
            <Header/>
            
            <div classname="fases">
                <h2>Seja bem vindo, Luiz!</h2>
                <p>Aqui você poderá iniciar sua jornada de conhecimento sobre IPO!</p>
            </div>
            <Fases/>  
            <Footer/>
        </>
    )
}
