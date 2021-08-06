import React from "react";
import Header from "./components/Header/Header";
import HomePage from "./components/Main/HomePage";
import CreateServicePage from "./components/Main/CreateServicePage";
import CartPage from "./components/Main/CartPage";
import ServiceListPage from "./components/Main/ServiceListPage";

export default class App extends React.Component {
  state = {
    currentPage: "homepage",
  };

  goToServiceListPage = () => this.setState({ currentPage: "servicelist" });

  goToCreateServicePage = () => this.setState({ currentPage: "servicepage" });

  goToCartPage = () => this.setState({ currentPage: "cartpage" });

  goToHomePage = () => this.setState({ currentPage: "homepage" });

  selectPage = () => {
    switch (this.state.currentPage) {
      case "homepage":
        return (
          <HomePage
            goToServiceListPage={this.goToServiceListPage}
            goToCreateServicePage={this.goToCreateServicePage}
          />
        );
      case "servicepage":
        return <CreateServicePage goToHomePage={this.goToHomePage} />;
      case "cartpage":
        return <CartPage goToServiceListPage={this.goToServiceListPage} />;
      case "servicelist":
        return <ServiceListPage />;
      default:
        return <HomePage />;
    }
  };

  render() {
    return (
      <div>
        <Header
          goToHomePage={this.goToHomePage}
          goToCartPage={this.goToCartPage}
        />
        {this.selectPage()}
      </div>
    );
  }
}
