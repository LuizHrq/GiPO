import React from "react";
import Header from "../Header/Header";
import Conteudo1 from "../Conteudo1/Conteudo1";
import Testes from "../Testes/Testes";
import './Fase1.css';
import Footer from "../Footer/Footer";


export default function Fase1(){
    return(
        <>
            <Header/>
            <div className="titlefase1">Você está na fase 1</div>
            <Conteudo1/>

            <div class="video-container">
                <iframe  src="https://www.youtube.com/embed/_Df1ycT2SVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <Testes/>
            <Footer/>
        </>
    )
}