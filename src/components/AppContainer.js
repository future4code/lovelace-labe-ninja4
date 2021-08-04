import React, { Component } from 'react';
import Main from "./Main/Welcome";
import Forms from "./Main/Forms";


export class AppContainer extends Component {
  render() {
    return (
      <div>

        <Header/>
        <Form />

      </div>
    )
  }
}
