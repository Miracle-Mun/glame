import React from "react";
import { slide as Menu } from "react-burger-menu";
import './style.css';

export default (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Sobre a BeGlam
      </a>

      <a className="menu-item" href="/">
        Como usar
      </a>

      <a className="menu-item" href="/">
        Nossos Serviços
      </a>
      <a className="menu-item" href="/">
        Avaliações
      </a>
      <a className="menu-item" href="/">
        Por Aí
      </a>
      <a className="menu-item" href="/">
        Contato
      </a>
    </Menu>
  );
};
