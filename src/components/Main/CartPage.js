import React from "react";
import styled from "styled-components";

const CartPageContainer = styled.div`
  h2 {
    text-align: center;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
`;

const CardContainer = styled.div`
  background: #ddd;
  box-sizing: border-box;
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;

  button {
    align-self: center;
  }
`;

export default class CartPage extends React.Component {
  state = {
    shoppingCart: [
      {
        id: 1,
        name: "Lavar roupa",
        price: 50,
        date: "03/11/2021",
      },
      {
        id: 2,
        name: "Dar banhozzzzzzzzzzzzzzzzzzzz",
        price: 10,
        date: "03/11/2021",
      },
    ],
  };

  render() {
    const shoppingCart = this.state.shoppingCart.map((card) => {
      return (
        <CardContainer key={card.id}>
          <h3>{card.name}</h3>
          <p>R${card.price}.00</p>
          <button>Remover</button>
        </CardContainer>
      );
    });
    return (
      <CartPageContainer>
        <h2>Carrinho</h2>
        <CardGrid>{shoppingCart}</CardGrid>
        <div>
          <p>Total: R$666.00</p>
          <button>Finalizar Compra</button>
          <button onClick={this.props.goToServiceListPage}>
            Voltar para Lista
          </button>
        </div>
      </CartPageContainer>
    );
  }
}
