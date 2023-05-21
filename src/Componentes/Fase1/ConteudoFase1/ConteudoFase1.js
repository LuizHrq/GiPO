import React from "react";
import './ConteudoFase1.css';

export default function ConteudoFase1(){
    return(
        <>
            <div className="container1-fase1">
                <div className="texto1-fase1">
                    <h1>O QUE É UM IPO?</h1>
                    <p><strong className="strong">IPO</strong> é uma sigla utilizada para se referir ao termo em inglês: <strong className="strong">Initial Public Offering</strong>,
                        que em português significa <strong className="strong">“Oferta Pública Inicial"</strong>. De forma clara IPO é o momento em que, pela primeira vez, uma
                        empresa passará a receber novos sócios através da oferta de ações na bolsa
                        de valores, tornando-se uma companhia de capital aberto - conhecidas como S.A, Sociedade Anônima.
                        Os motivos que levam empresas a realizarem o IPO se dá por objetivos de captar mais
                        recursos financeiros, expandir os negócios ou até mesmo no intuito de agregar capital
                        para realizar aquisições de concorrentes das suas áreas de atuação no mercado - os conhecidos M&A's (Mergers and Acquisitions).
                    </p> 
                </div>
                    <div className="texto1img-fase1">
                        <img id="personapensando" src="./img/img_persona_gipo/persona_ponderando.png" alt="imagem persona ponderando"></img>
                    </div>
            </div>


            <div className="container2-fase1">
                <div className="texto2-fase1">
                    <h1>JORNADA DA COMPANHIA DURANTE O IPO</h1>
                    <p>O processo de IPO consiste em etapas complexas, rígidas e regulamentadas pela 
                        <strong className="strong"> Comissão de Valores Mobiliários (CVM)</strong>.
                        As companhias alcançam valores na casa de milhões de reais para abrir seu
                        capital, podendo levar mais de 1 ano para conclusão de todas as etapas.
                        Falaremos mais sobre isso nas próximas fases.
                    </p>
                </div>
            <div className="texto2img-fase1">
                        <img id="imganalise" src="./img/img_persona_gipo/analise.png" alt="imagem analise"></img>
            </div>
            </div>
        </>
    )
}