import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer(){
    return(
        <>
            <footer>
                <div className="containerSN">
                    <Link to={"/quemsomos"}>Sobre nós</Link>
                </div>
                <div className="containerInfo">
                    <p>Site criado em maio de 2023</p>
                    <p>© 2023 Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    )
}