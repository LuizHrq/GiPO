import React from "react";
import './ConteudoFase2.css';

export default function Conteudo2(){
    return(
        <>
            <div className="container1Fase2">
                <div className="texto1">
                    <h1>PLANEJAMENTO E AUDITORIA</h1>
                    <p>O primeiro passo da companhia será iniciar um planejamento.
                    Este momento de planejamento e preparação da empresa para costuma ser as etapas mais longas do processo.
                    <br></br>

                    Uma das razões que normalmente faz com que o processo  demore é a auditoria das finanças da empresa.
                    A legislação exige que empresa apresente três anos de balanços auditados.
                    Se a companhia já tinha por hábito auditar seus resultados – ou seja, submetê-los ao exame minucioso por uma empresa externa
                    e independente – essa etapa fica mais fácil.
                    Mas se esse não for o caso, pode ser necessário aguardar o período inteiro se completar para ter os números certos em mãos.
                    </p> 
                </div>
                    <div className="texto1img">
                        <img id="negocios" src="./img/img_persona_gipo/negocios.png" alt="imagem negocios"></img>
                    </div>
            </div>


            <div className="container2Fase2">
                <div className="texto2">
                    <h1>DEFINIÇÃO DOS DETALHES</h1>
                    <p>
                    Ainda na fase de planejamento, a companhia e seus assessores financeiros definem todas as características da operação.
                    Isso abrange desde o volume de recursos que serão captados até a composição das ações que serão
                    oferecidas ao mercado (se serão emitidos novos papéis ou se os antigos investidores venderão parte dos que possuem) e
                    a valoração da companhia.
                    </p>
                </div>
            <div className="texto2img">
                        <img id="imganalise" src="./img/img_persona_gipo/analise.png" alt="imagem analise"></img>
            </div>
            </div>
        </>
    )
}