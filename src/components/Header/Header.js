import React from "react";
import logo from "../Header/logo.png";
import { HeaderContainer, Logo, Menu } from "./EstilosHeader";

export default class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <Logo>
          <img src={logo} alt="logo da Labeninjas" />
          <h1>Labeninjas</h1>
        </Logo>

        <Menu>
          <p onClick={this.props.goToHomePage}>Home</p>
          <p onClick={this.props.goToCartPage}>Carrinho</p>
        </Menu>
      </HeaderContainer>
    );
  }
}
