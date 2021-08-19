import axios from "axios";
import React from "react";
import { headers, BASE_URL } from "../../constants/urls";
import { CreateJobContainer } from "./styled";

const paymentOptions = [
  "Cartão de Débito",
  "Cartão de Crédito",
  "Dinheiro",
  "PayPal",
  "Pix",
  "Taokoins",
];

class CreateJobPage extends React.Component {
  state = {
    title: "",
    description: "",
    price: "",
    dueDate: "",
    paymentMethods: [],
  };

  createJob = () => {
    const body = {
      title: this.state.title,
      description: this.state.description,
      price: Number(this.state.price),
      dueDate: this.state.dueDate,
      paymentMethods: this.state.paymentMethods,
    };

    axios
      .post(`${BASE_URL}/jobs`, body, headers)
      .then((res) => {
        alert(`O serviço ${this.state.title} foi criado com sucesso.`);
        this.setState({
          title: "",
          description: "",
          price: "",
          dueDate: "",
          paymentMethods: "",
        });
      })
      .catch((err) => alert(err.response.data.message));
  };

  render() {
    return (
      <CreateJobContainer>
        <h1>Cadastre o seu serviço</h1>
        <input
          value={this.state.title}
          onChange={(e) => this.setState({ title: e.target.value })}
          type="text"
          placeholder="Título"
        />
        <input
          value={this.state.description}
          onChange={(e) => this.setState({ description: e.target.value })}
          type="text"
          placeholder="Descrição"
        />
        <input
          value={this.state.price}
          onChange={(e) => this.setState({ price: e.target.value })}
          type="number"
          placeholder="Preço"
        />
        <input
          value={this.state.dueDate}
          onChange={(e) => this.setState({ dueDate: e.target.value })}
          type="date"
          placeholder="Prazo do Serviço"
        />
        <select
          multiple
          value={this.state.paymentMethods}
          onChange={(e) => {
            let value = Array.from(
              e.target.selectedOptions,
              (option) => option.value
            );
            this.setState({ paymentMethods: value });
          }}
        >
          <option value="" disabled>
            Selecione um Método de Pagamento
          </option>
          {paymentOptions.map((pay) => {
            return <option value={pay}>{pay}</option>;
          })}
        </select>
        <button onClick={this.createJob}>Cadastrar Serviço</button>
      </CreateJobContainer>
    );
  }
}

export default CreateJobPage;
