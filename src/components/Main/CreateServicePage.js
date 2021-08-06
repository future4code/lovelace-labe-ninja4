// import React from "react";
// import styled from "styled-components";

// const ContainerHome = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const H1 = styled.h1`
//   font-size: 36pt;
// `;

// const Sub = styled.p`
//   font-size: 14pt;
// `;

// const ContainerButton = styled.div`
//   display: flex;
// `;

// export default class CreateServicePage extends React.Component {
//   render() {
//     return (
//       <ContainerHome>
//         <form method="post">
//           <div>
//             <label for="nome-servico">Nome do serviço:</label>
//             <input type="text" id="nome-servico" />
//           </div>
//           <div>
//             <label for="descricao-servico">Descrição do serviço:</label>
//             <textarea id="descricao-servico"></textarea>
//           </div>
//           <div>
//             <label for="valor-servico">Valor do serviço:</label>
//             <input type="text" id="valor-servico" />
//           </div>
//           <div>
//             <label for="forma-pagamento">Meio de Pagamento:</label>
//             <select name="select-payament">
//               <option value="dinheiro1">
//                 Dinheiro (Transferência bancária)
//               </option>
//               <option value="dinheiro2">Dinheiro (PIX)</option>
//               <option value="cartao-debito">Cartão de Débito (PIX)</option>
//               <option value="cartao-credito">Cartão de Crédito</option>
//             </select>
//           </div>
//           <div>
//             <label for="data">Data da oferta:</label>
//             <input type="date" id="descricao" />
//           </div>
//           <div>
//             <button>Cadastrar Serviço</button>
//             <button onClick={this.props.irParaWelcome}>Voltar ao Inicio</button>
//           </div>
//         </form>
//       </ContainerHome>
//     );
//   }
// }
import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  label {
    text-align: left;
    display: block;
  }

  input,
  textarea,
  select {
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: block;
  }

  button {
    align-self: center;
  }
`;
const CreateServicePage = () => {
  return (
    <FormContainer>
      <h2>Cadastre o seu serviço</h2>
      <Form>
        <label>Titulo do serviço:</label>
        <input />
        <label>Descrição do serviço:</label>
        <textarea></textarea>
        <label>Valor do serviço:</label>
        <input />
        <label>Forma de pagamento:</label>
        <select>
          <option>Dinheiro</option>
          <option>PIX</option>
          <option>Cartão de Crédito</option>
          <option>Moedinhas do Mario</option>
        </select>
        <label>Data da oferta:</label>
        <input type="date" />
        <button>Cadastrar</button>
      </Form>
    </FormContainer>
  );
};

export default CreateServicePage;
