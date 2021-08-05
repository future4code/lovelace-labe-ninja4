import React, { Component } from 'react';
import Welcome from "./Main/Welcome";
import Forms from "./Main/Forms";
import Header from "./Header/Header"


export class AppContainer extends Component {
  state = {
    telaAtual: "welcome"
  }
  escolheTela = () => {
    switch (this.state.telaAtual){
      case "welcome":
        return <Welcome irParaForms={this.selecionaForms}/>
      case "forms":
        return <Forms irParaWelcome={this.selecionaWelcome}/>  
      case "cart":
        return <Cart irParaWelcome={this.selecionaCart}/>  
      default:
        return <Welcome/>
    }
  }
  selecionaForms = () => {
    this.setState({telaAtual: "forms"})
  }
  selecionaWelcome = () =>{
    this.setState({telaAtual: "welcome"})
  }

  selecionaCart = () =>{
    this.setState({telaAtual: "cart"})
  }


  render() {
    return (
      <div>
        <Header irParaWelcome={this.selecionaWelcome} irParaCart={this.selecionaCart} />
        {this.escolheTela()}  
      </div>
    )
  }
}
