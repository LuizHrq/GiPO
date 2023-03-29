import React, { useState } from 'react';

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
        <li><a href={"/quemsomos"}>Quem somos</a></li>
        <li><a href={"/login"}>Login</a></li>
      </ul>
    </header>
  );
}