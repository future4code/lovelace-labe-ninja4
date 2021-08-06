import React from "react";
import styled from "styled-components";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default class HomePage extends React.Component {
  render() {
    return (
      <HomePageContainer>
        <h1>LabeNinjas</h1>
        <p>
          O talento <b>certo</b>, na hora <b>certa</b>
        </p>
        <div>
          <button onClick={this.props.goToCreateServicePage}>
            Quero ser um Ninja
          </button>
          <button onClick={this.props.goToServiceListPage}>
            Contratar um Ninja
          </button>
        </div>
      </HomePageContainer>
    );
  }
}
