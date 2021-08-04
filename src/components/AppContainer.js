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


  render() {
    return (
      <div>
        <Header/>
        {this.escolheTela()}  
      </div>
    )
  }
}
