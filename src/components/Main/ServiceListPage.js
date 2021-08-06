import React from "react";
import styled from "styled-components";

const ServiceListContainer = styled.div`
  h2 {
    text-align: center;
  }
`;

const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;

  input,
  select {
    padding: 6px 10px;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;
`;

const CardContainer = styled.div`
  background: #ddd;
  box-sizing: border-box;
  border: 1px solid black;
  padding: 0 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;

  p {
    margin-top: 0;
  }

  button {
    align-self: center;
  }
`;

export default class ServiceListPage extends React.Component {
  state = {
    listOfCards: [
      {
        id: 1,
        name: "Lavar roupa",
        price: 50,
        date: "03/11/2021",
      },
      {
        id: 2,
        name: "Dar banho",
        price: 10,
        date: "03/11/2021",
      },
      {
        id: 3,
        name: "Fazer comida",
        price: 150,
        date: "03/11/2021",
      },
      {
        id: 4,
        name: "Fazer comida",
        price: 150,
        date: "03/11/2021",
      },
      {
        id: 5,
        name: "Fazer comida",
        price: 150,
        date: "03/11/2021",
      },
      {
        id: 6,
        name: "Fazer comida",
        price: 150,
        date: "03/11/2021",
      },
    ],
  };

  render() {
    const listOfCards = this.state.listOfCards.map((card) => {
      return (
        <CardContainer key={card.id}>
          <h3>{card.name}</h3>
          <p>
            <b>Preço:</b> {card.price}
          </p>
          <p>
            <b>Prazo:</b> {card.date}
          </p>
          <button>Add ao carrinho</button>
        </CardContainer>
      );
    });

    return (
      <ServiceListContainer>
        <h2>Lista de Serviços</h2>
        <FilterGrid>
          <input placeholder="Valor Mínimo" />
          <input placeholder="Valor Máximo" />
          <input placeholder="Busca por Título" />
          <select>
            <option selected>Sem Ordenação</option>
            <option>Menor Valor</option>
            <option>Maior Valor</option>
            <option>Título</option>
            <option>Prazo</option>
          </select>
        </FilterGrid>
        <CardGrid>{listOfCards}</CardGrid>
      </ServiceListContainer>
    );
  }
}
