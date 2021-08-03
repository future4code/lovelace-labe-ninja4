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


export default class Welcome extends React.Component {
    render () {
        return (
            <ContainerHome>
                <H1>LabeNinjas</H1>
                <Sub> O talento certo, no momento certo</Sub>
                <ContainerButton>
                    <button>Quero ser um ninja</button>
                    <button>Contratar um ninja</button>
                </ContainerButton>
            </ContainerHome>
        )
    }
}