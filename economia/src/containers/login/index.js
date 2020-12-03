import React, { Component } from 'react';
import './styles.css';

import LogoImagem from '../../assets/logo.jpg';
import FormLogin from '../../components/login';

export default class TelaLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    }
  }

  async loginInUser(values) {
    const { email, password } = values;
    const form = {
      email,
      password
    }
    //envia informação para o back
    const response = fetch(`${process.env.REACT_APP_APIURL}/login`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form),
    });
    if (response) {
      console.log(form);
      alert('Login realizado com sucesso!');
    } else {
      alert('Falha no Login');
    }
  }

  render() {
    return (
      <div className="Tela login">
        <img src={LogoImagem} className="logo" />
        <FormLogin
          loginDetails={{
            email: this.state.email,
            password: this.state.password,
            cadastro: false
          }}
          onFormSubmit={this.loginInUser}
        />
      </div>
    );
  }
}
