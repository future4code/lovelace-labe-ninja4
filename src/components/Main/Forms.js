import React from "react";
import styled from "styled-components";


const ContainerHome = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const H1 = styled.h1 `
    font-size: 36pt;
`

const Sub = styled.p `
    font-size: 14pt;
`

const ContainerButton = styled.div `
    display: flex;
`


export default class Form extends React.Component {

    createJobs = () => {
        const url = "https://labeninjas.herokuapp.com/jobs"
        const headers = (headers: {Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e"})
        const body = {
            title: this.state.jobs.title,
            description: this.state.jobs.description
            price: this.state.jobs.price

        }
    }



    render () {
        return (
            <ContainerHome>
                <form method="post">
                <div>
                    <label for="nome-servico">Nome do serviço:</label>
                    <input type="text" id="nome-servico" />
                </div>
                <div>
                    <label for="descricao-servico">Descrição do serviço:</label>
                    <textarea id="descricao-servico"></textarea>
                </div>
                <div>
                    <label for="valor-servico">Valor do serviço:</label>
                    <input type="text" id="valor-servico" />
                </div>
                <div>
                    <label for="forma-pagamento">Meio de Pagamento:</label>
                    <select name="select-payament">
                        <option value="dinheiro1">Dinheiro (Transferência bancária)</option>
                        <option value="dinheiro2">Dinheiro (PIX)</option>
                        <option value="cartao-debito">Cartão de Débito (PIX)</option>
                        <option value="cartao-credito">Cartão de Crédito</option>
                    </select>
                </div>
                <div>
                    <label for="data">Data da oferta:</label>
                    <input type="date" id="descricao" />
                </div>
                <div>
                    <button>Cadastrar Serviço</button>
                    <button onClick={this.props.irParaWelcome}>Voltar ao Inicio</button>
                </div>
                
            </form>
            </ContainerHome>
        )
    }
}