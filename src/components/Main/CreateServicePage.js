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
