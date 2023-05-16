import './Header.css'
import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Header() {    
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuClick() {
    setShowMenu(!showMenu);
  }

  return (
    <header>
      <Link to={"/user"}><img id="logo" src="./img/logogipo1.png" alt="imagem logo"></img></Link>
      
      <div className="hamburger-menu" onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`menu ${showMenu ? 'show' : ''}`}>
        <li><Link to={"/user"}>Fases</Link></li>
        <li><Link to={"/quemsomos"}>Quem somos</Link></li>
        <li><Link to={"/"}>Desconectar</Link></li>
      </ul>
    </header>
  );
}