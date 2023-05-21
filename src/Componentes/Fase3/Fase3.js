import React from "react";

import Header from "../Header/Header";
import ConteudoFase3 from "./ConteudoFase3/ConteudoFase3";
import './Fase3.css';
import Footer from "../Footer/Footer";
import QuizFase3 from "./QuizFase3/QuizFase3";


export default function Fase3(){
    return(
        <>
            <Header/>
                <div className="titlefase3">Você está na fase 3</div>
            <ConteudoFase3/>

            <div class="video-container">
                <iframe  src="https://www.youtube.com/embed/mXDLzS6I26U?controls=0&amp;clip=UgkxxLpm-oJ5azWYtDqxK3iKIhy_nl7IA8Wa&amp;clipt=EKfMDBijghA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <QuizFase3/>

            <Footer/>
        </>
    )
}