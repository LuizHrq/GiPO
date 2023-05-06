import React from "react";
import { Link } from "react-router-dom";
import './HeaderQS.css';

export default function HeaderQS(){
    return(
        <>
            <header>
                <Link to={"/"}><img id="logoqs" src="./img/logogipo1.png" alt="imagem logo"></img></Link>
            </header>
        </>
    )
}