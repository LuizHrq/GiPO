import React from "react";
import './ConteudoFase3.css';

export default function ConteudoFase3(){
    return(
        <>
            <div className="container1-fase3">
                <div className="texto1-fase3">
                    <h1>FOCO NOS INVESTIDORES</h1>
                <p>Após concluir as etapas anteriores, chegou o momento de buscar os futuros novos investidores.
                    Este momento é chamado de <strong className="strong">ROADSHOW</strong> e consiste em uma série de apresentações para investidores
                    institucionais como: fundos de investimento, bancos, seguradoras e investidores individuais
                    de grande porte, como empresários e famílias ricas.
                    <br></br>
                    <br></br>
                    Este evento costuma contar com a presença do presidente e dos principais executivos da empresa, podendo durar algumas semanas.
                    Aqui, espera-se que os executivos consigam esclarecer as dúvidas dos potenciais investidores, 
                    de modo a deixa-los confortáveis com a empresa e interessados na operação.
                </p> 
                </div>
                    <div className="texto1img-fase3">
                        <img id="imgroadshow" src="./img/img_persona_gipo/roadshow.png" alt="img roadshow"></img>
                    </div>
            </div>


            <div className="container2-fase3">
                <div className="texto2-fase3">
                    <h1>IDENTIFICANDO O POTENCIAL - PROSPECTO</h1>
                    <p>Talvez você se pergunte: "porque um investidor colocaria dinheiro em uma empresa que ele não conhece?"<br></br>
                    Para justificar essa decisão, os investidores precisam ter acesso a informações sobre a empresa e a oferta.
                    E aqui chegamos no <strong className="strong">PROSPECTO</strong>, este o documento mais importante de uma oferta pública.
                    <br></br>
                    A proposta do documento é apresentar informações essenciais contendo 2 tipos de informações: sobre a empresa e a sobre a oferta em si.
                    Geralmente esse documento contém pelo menos 200 páginas e deve estar disponível na CVM e em algum veículo de comunicação da empresa, como o site.
                    </p>
                </div>

                <div className="texto2img-fase3">
                        <img id="imgprospecto" src="./img/img_persona_gipo/prospecto.png" alt="img prospecto"></img>
                    </div>
            </div>
        </>
    )
}