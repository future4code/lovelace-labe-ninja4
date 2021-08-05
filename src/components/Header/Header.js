import React from 'react'
import logo from '../Header/logo.png'
import { BarraDeNavegacao } from './EstilosHeader'
import { Links } from './EstilosHeader'
import { LogoETitulo } from './EstilosHeader'
import { Logo } from './EstilosHeader'

const ItensMenu = [
    {
        titulo: 'Home',
        onClick: irParaWelcome,
        nomeclasse: 'linksnevegacao'
    },
    {
        titulo: 'Carrinho',
        onClick: irParaCart,
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

                                        <Links className={item.nomeclasse} onClick={item.onClick}>

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