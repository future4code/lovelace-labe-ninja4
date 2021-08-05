import React from "react"





export default class LayoutListaServico extends React.Component {
    state = {
        carrinho: [],
    }



    adicionarAoCarrinho = (servico) => {
        const novoItem = {}
        const novoCarrinho = [...this.state.carrinho, novoItem]
        this.setState({ carrinho: novoCarrinho})
        alert("O serviço foi adicionado ao seu carrinho!")
    }

    render() {
        return (
            <div>
                {/* Filtros */}
                <div>
                    <input 
                    type="text"
                    placeholder={"Valor Mínimo"}
                    />
                    <input 
                    type="text"
                    placeholder={"Valor Máximo"}
                    />
                    <input 
                    type="text"
                    placeholder={"Busca por Título"}
                    />

                    <select name="" id=""></select>

                </div>

            {/* Lista de cards */}
            <div>
                <h3>Lista de Cards</h3>
                
                {/* Puxar essa lista de cards do cadastro de serviço */}
                <div>
                    <h3>Card Serviço</h3>
                    <p>Serviço</p>
                    <p>Valor R$ </p>
                    <p>Método de pagamento</p>
                    <p>Prazo</p>
                    <button onClick={this.adicionarAoCarrinho}>Adicionar ao Carrinho</button>
                </div>

            </div>

                
            </div>
        )
    }
}