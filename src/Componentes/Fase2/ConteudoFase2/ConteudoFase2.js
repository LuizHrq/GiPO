import React from "react";
import './ConteudoFase2.css';

export default function ConteudoFase2(){
    return(
        <>
            <div className="container1-fase2">
                <div className="texto1-fase2">
                    <h1>PLANEJAMENTO E AUDITORIA</h1>
                    <p>A partir do momento que uma companhia decide abrir seu capital, ela precisa se preparar para o IPO.
                        É necessário que a empresa esteja em conformidade com as normas da CVM e que tenha uma boa governança corporativa.
                        Para isso, é necessário que a companhia faça uma auditoria interna e externa, para que seja possível identificar
                        possíveis falhas e corrigi-las antes de abrir seu capital.
                        Nesse momento, a companhia também deve se preparar para a transparência que o IPO exige, pois a partir do momento
                        que a empresa abrir seu capital, ela deverá divulgar seus resultados trimestralmente ao mercado.

                    </p> 
                </div>
                    <div className="texto1img-fase2">
                        <img id="imgnegocios" src="./img/img_persona_gipo/negocios.png" alt="img negocios"></img>
                    </div>
            </div>


            <div className="container2-fase2">
                <div className="texto2-fase2">
                    <h1>IMPORTÂNCIA DA AUDITORIA</h1>
                    <p>Acerca do processo de auditoria, a legislação exige que a empresa apresente 3 anos de balanços auditados.
                        Se a companhia já tinha por hábito auditar seus resultados, essa etapa fica mais fácil. Caso contrário, pode ser
                        necessário aguardar o período inteiro de 3 anos se completar para que, com os números corretos em mãos, possa abrir o capital.
                        Considerando isso feito, próximo passo é <strong className="strong">solicitar o pedido de registro de IPO na Comissão de Valores Mobiliários (CVM)</strong> e o 
                        <strong className="strong"> registro na listagem de ações na B3</strong>, neste momento a CVM e a B3 verificarão se a empresa está apta para abrir o seu capital.
                    </p>
                </div>
            </div>
        </>
    )
}