import React from "react";
import axios from "axios";
import { BASE_URL, headers } from "../../constants/urls";
import { convertDate } from "../../utils/converDate";
import { JobDetailContainer } from "./styled";

class JobDetailPage extends React.Component {
  state = {
    job: {},
  };

  componentDidMount() {
    this.getJob();
  }

  getJob = () => {
    axios
      .get(`${BASE_URL}/jobs/${this.props.jobId}`, headers)
      .then((res) => this.setState({ job: res.data }))
      .catch((err) => err.response.data.message);
  };

  render() {
    const paymentComponents =
      this.state.job.paymentMethods &&
      this.state.job.paymentMethods.map((pay) => {
        return <li key={pay}>{pay}</li>;
      });
    return (
      <JobDetailContainer>
        {this.state.job.title && <h1>{this.state.job.title}</h1>}
        {this.state.job.price && (
          <p>
            <b>Preço: </b>
            R${this.state.job.price.toFixed(2)}
          </p>
        )}
        {this.state.job.description && (
          <p>
            <b>Descrição: </b>
            {this.state.job.description}
          </p>
        )}
        {this.state.job.dueDate && (
          <p>
            <b>Prazo: </b>
            {convertDate(this.state.job.dueDate)}
          </p>
        )}
        <div>
          <b>Método de Pagamento: </b>
          {paymentComponents}
        </div>
        <button onClick={() => this.props.changePage("list")}>Voltar</button>
      </JobDetailContainer>
    );
  }
}

export default JobDetailPage;
