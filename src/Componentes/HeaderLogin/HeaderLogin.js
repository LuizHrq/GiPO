import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Header() {    
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuClick() {
    setShowMenu(!showMenu);
  }

  return (
    <header>

        <a href={"/"}><img id="logo" src="./img/logogipo1.png" alt="imagem logo"></img></a>

      <div className="hamburger-menu" onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`menu ${showMenu ? 'show' : ''}`}>
        <li><Link to={"/quemsomos"}>Quem somos</Link></li>
        <li><Link to={"/criarconta"}>Cadastro</Link></li>
      </ul>
    </header>
  );
}