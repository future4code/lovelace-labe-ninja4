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
    render () {
        return (
            <ContainerHome>
                <form method="post">
                <div>
                    <label for="nome-servico">Nome do serviço:</label>
                    <input type="text" id="nome-servico" />
                </div>
                <div>
                    <label for="descricao">Descrição do serviço:</label>
                    <input type="text" id="descricao" />
                </div>
                <div>
                    <label for="msg">Mensagem:</label>
                    <textarea id="msg"></textarea>
                </div>
            </form>
            </ContainerHome>
        )
    }
}