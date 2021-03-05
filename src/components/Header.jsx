import React from 'react';
import '../assets/styles/components/header.scss';

const Header = () => (
  <header className="header">
    <img className="header__img" src="../assets/logo-platzi-video-BW2.png" />
    <div className="header__menu">
      <div className="header_menu--profile">
        <img src="../assets/user-icon.png" alt="Platzi video" />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href="/">Cuenta</a>
        </li>
        <li>
          <a href="/">Cerrar sesion</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
