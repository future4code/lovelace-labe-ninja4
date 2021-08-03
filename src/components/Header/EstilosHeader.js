import React from "react"
import styled from 'styled-components'

export const BarraDeNavegacao = styled.div`
    background-color: #8265c9;
    box-shadow: 10px 5px 5px grey;
    color: white;
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;

`
export const Links = styled.a`
    display: block;
    grid-template-columns: repeat(5, auto);
    color: white;
    text-decoration: none;
`
export const LogoETitulo = styled.div`
    display: flex;
`

export const Logo = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
    margin-top: 20px;
`

export const IconeMenu = styled.div`
    display:block;
    font-size: 1.8rem;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    transform: translate(-100%, 60%)
`