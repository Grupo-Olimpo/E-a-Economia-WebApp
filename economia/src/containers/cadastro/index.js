import React, { Component } from 'react';
import './styles.css';

import LogoImagem from '../../assets/logo.jpg';
import FormLogin from '../../components/login';

export default class TelaCadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      password: null,
    }
  }

  async signInUser(values) {
    const { name, email, password } = values;
    const form = {
      name,
      email,
      password
    }
    //envia informação para o back
    const response = fetch(`${process.env.REACT_APP_APIURL}/cadastro`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form),
    });
    if (response) {
      console.log(form);
      alert('Conta criada com sucesso!');
    } else {
      alert('Conta não criada!'); 
    }
  }

  render() {
    return (
      <div className="Tela Cadastro">
        <img src={LogoImagem} className="logo" />
        <FormLogin
          loginDetails={{
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            cadastro: true
          }}
          onFormSubmit={this.signInUser}
        />
      </div>
    );
  }
}
