import React from 'react';
// import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom';
import './Inicial.css';



export default function Inicial(){



    return(
        <>
        <div className='imageminicial'>
            <img id="logoinicial" src="./img/logogipo2.png" alt="imagem logo"></img>
        </div>
            <h1 id="h1-inicio">Aprendendo IPO de maneira dinâmica.</h1>

        <div className='botaocomece'>
            <a href={"/criarconta"}><button className="btn btn-comece" to="/criarconta">COMECE AGORA</button></a>
        </div>
        
        <br/>

        <div className='botaoconta'>
        <a href={"/login"}><button className="btn btn-conta">JÁ TENHO UMA CONTA</button></a>
        </div>

        <a href={"/quemsomos"}><h3>quem somos?</h3></a>
        </>
    )
}