import React from "react";
import './Conteudo1.css';

export default function Conteudo1(){
    return(
        <>
            <div className="container1">
                <div className="texto1">
                    <h1>O QUE É UM IPO?</h1>
                    <p>A sigla IPO significa “Initial Public Offering”, em português: “Oferta
                        Pública Inicial. Em suma, é o momento em que pela primeira vez uma
                        empresa passará a receber novos sócios através da oferta de ações na bolsa
                        de valores, tornando-se uma companhia de capital aberto. Os motivos que
                        levam as empresas a realizarem o IPO se dá por objetivos de captar mais
                        recursos, expandir os negócios ou até mesmo no intuito de agregar capital
                        para realizar aquisições de concorrentes.
                    </p> 
                </div>
                    <div className="texto1img">
                        <img id="personapensando" src="./img/img_persona_gipo/persona_ponderando.png" alt="imagem persona ponderando"></img>
                    </div>
            </div>


            <div className="container2">
                <div className="texto2">
                    <h1>JORNADA DA COMPANHIA DURANTE O IPO</h1>
                    <p>A realidade é
                        que o processo de IPO é bem complexo, rígido, regulamentado e demorado
                        que envolve vários agentes. Empresas gastam milhões para abrir seu
                        capital, podendo levar mais de 1 ano para conclusão de todas as etapas.
                        Falaremos mais sobre isso nas próximas fases.
                    </p>
                </div>
            <div className="texto2img">
                        <img id="imganalise" src="./img/img_persona_gipo/analise.png" alt="imagem analise"></img>
            </div>
            </div>
        </>
    )
}