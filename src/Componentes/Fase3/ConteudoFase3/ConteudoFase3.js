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


            <div className="container2-fase2">
                <div className="texto2-fase2">
                    <h1>EXIGÊNCIA DA AUDITORIA</h1>
                    <p>Ainda sobre o processo de auditoria, a legislação exige que, para abrir o capital, a empresa precisa apresentar 3 anos de balanços auditados.
                        Se a companhia já tinha por hábito auditar seus resultados, essa etapa fica mais fácil. Caso contrário, pode ser
                        necessário aguardar o período inteiro de 3 anos se completar para os números certos em mãos e assim, poder abrir o capital.
                    </p>
                </div>
            </div>
        </>
    )
}