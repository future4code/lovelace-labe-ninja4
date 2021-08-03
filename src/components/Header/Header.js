import React, { Component } from 'react'
import logo from '../Header/logo.png'
import { BarraDeNavegacao } from './EstilosHeader'
import { Links } from './EstilosHeader'
import { LogoETitulo } from './EstilosHeader'
import { Logo } from './EstilosHeader'

const ItensMenu = [
    {
        titulo: 'Home',
        endereço: '#',
        nomeclasse: 'linksnevegacao'
    },
    {
        titulo: 'Carrinho',
        endereço: '#',
        nomeclasse: 'linksnevegacao'
    }
]

export default class Header extends React.Component {


    render() {

        return (

            <div>

                <BarraDeNavegacao>

                    <LogoETitulo>

                        <Logo src={logo} alt="logo da Labeninjas" />

                        <h1>LabeNinjas</h1>

                    </LogoETitulo>

                    <div>

                        <ul>

                            {ItensMenu.map((item, index) => {

                                return (

                                    <div key={index}>

                                        <Links className={item.nomeclasse} href={item.endereço}>

                                            {item.titulo}

                                        </Links>

                                    </div>
                                )

                            })}

                        </ul>

                    </div>

                </BarraDeNavegacao>

            </div>

        )
    }
}