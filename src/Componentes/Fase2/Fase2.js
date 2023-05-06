import React from "react";
import Header from "../Header/Header";
import Conteudo2 from "./Conteudo2/Conteudo2";
import Quiz2 from "./Quiz2/Quiz2";
import './Fase2.css';
import Footer from "../Footer/Footer";


export default function Fase2(){
    return(
        <>
            <Header/>
            <div className="titlefase1">Você está na fase 2</div>
            <Conteudo2/>

            <div class="video-container">
                <iframe  src="https://www.youtube.com/embed/_Df1ycT2SVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <Quiz2/>
            <Footer/>
        </>
    )
}