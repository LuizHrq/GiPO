import React from 'react';
import './Inicial.css';
import { Link } from "react-router-dom";

export default function Inicial(){


    return(
        <>
        <img id="logoinicial" src="./img/logogipo2.png" alt="imagem logo"></img>
        
            <h1 id="h1-inicio">Aprendendo IPO de maneira dinâmica.</h1>

        <div className='botaocomece'>
            <Link to={"/criarconta"}><button className="btn btn-comece" to="/criarconta">COMECE AGORA</button></Link>
        </div>
        
        <br/>

        <div className='botaoconta'>
            <button className="btn btn-conta">JÁ TENHO UMA CONTA</button>
        </div>

        <Link to={"/quemsomos"}><h3>Quem somos?</h3></Link>
        </>
    )
}