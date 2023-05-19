import React from "react";

import Header from "../Header/Header";
import ConteudoFase2 from "./ConteudoFase2/ConteudoFase2";
import './Fase2.css';
import Footer from "../Footer/Footer";
import QuizFase2 from "./QuizFase2/QuizFase2";


export default function Fase2(){
    return(
        <>
            <Header/>
                <div className="titlefase2">Você está na fase 2</div>
            <ConteudoFase2/>

            <div class="video-container">
                <iframe  src="https://www.youtube.com/embed/Cd1Z_znsros?controls=0&amp;start=268" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <QuizFase2/>

            <Footer/>
        </>
    )
}