import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import JobsListPage from "./pages/JobsListPage/JobsListPage";
import CreateJobPage from "./pages/CreateJobPage/CreateJobPage";
import CartPage from "./pages/CartPage/CartPage";
import JobDetailPage from "./pages/JobDetailPage/JobDetailPage";
import Header from "./components/Header/Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
  }
  input, select {
    width: 310px;
    margin-bottom: 12px;
    padding: 4px;
  }
`;

class App extends React.Component {
  state = {
    currentPage: "home",
    jobDetailId: "",
    cart: [],
  };

  changePage = (pageName) => {
    this.setState({ currentPage: pageName });
  };

  goToDetailPage = (jobId) => {
    this.setState({ currentPage: "detail", jobDetailId: jobId });
  };

  addToCart = (job) => {
    const newCart = [...this.state.cart, job];
    this.setState({ cart: newCart });
    alert(`O serviço ${job.title} foi adicionado ao carrinho.`);
  };

  removeFromCart = (id) => {
    const canDelete = window.confirm(
      "Tem certeza que deseja remover esse serviço?"
    );

    if (canDelete) {
      const newCart = this.state.cart.filter((cartItem) => {
        return cartItem.id !== id;
      });

      this.setState({ cart: newCart });
    }
  };

  clearCart = () => {
    this.setState({ cart: [] });
    alert("Obrigado por comprar conosco.");
  };

  choosePage = () => {
    switch (this.state.currentPage) {
      case "home":
        return <HomePage changePage={this.changePage} />;
      case "list":
        return (
          <JobsListPage
            addToCart={this.addToCart}
            goToDetailPage={this.goToDetailPage}
          />
        );
      case "form":
        return <CreateJobPage />;
      case "cart":
        return (
          <CartPage
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
            clearCart={this.clearCart}
          />
        );
      case "detail":
        return (
          <JobDetailPage
            changePage={this.changePage}
            jobId={this.state.jobDetailId}
          />
        );
      default:
        return <HomePage changePage={this.changePage} />;
    }
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header changePage={this.changePage} />
        {this.choosePage()}
      </div>
    );
  }
}

export default App;
