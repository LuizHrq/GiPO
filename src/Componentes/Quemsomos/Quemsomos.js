import React from "react";
import Footer from "../Footer/Footer";
import HeaderQS from "../HeaderQuemsomos/HeaderQS";
import Time from "../Time/Time";

import './Quemsomos.css'

export default function Quemsomos(){

    return(

        <>  
            <HeaderQS/>
                <div className="proposito">
                    <p>Nosso propósito é fazer com que você
                        aprenda sobre IPO de uma forma dinâmica!
                    </p>
                </div>

                <div className="qs1">
                    <h2>Entenda termos complexos de forma simples.</h2>
                </div>

                <div className="linhaesquerda"></div>

                <div className="qs2">
                    <h2>Desenvolva capacidade analítica.</h2>
                </div>

                <div className="linhadireita"></div>

                <div className="qs3">
                    <h2>Saiba porque grandes empresas escolhem abrir IPO.</h2>
                </div>     

                <div className="linhaesquerda"></div>  

                <div className="proposito2">
                    <p>Nunca foi tão simples aprender IPO!</p>
                </div> 

                <Time/>
                <Footer/>
        </>
    )
}
