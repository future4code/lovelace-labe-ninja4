import React from "react";
import logo from "../Header/logo.png";
import { HeaderContainer, Menu, Logo } from "./EstilosHeader";

export default class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <Logo>
          <img src={logo} alt="logo da Labeninjas" />
          <h1>Labeninjas</h1>
        </Logo>

        <Menu>
          <a href="/">Home</a>
          <a href="/">Carrinho</a>
        </Menu>
      </HeaderContainer>
    );
  }
}
