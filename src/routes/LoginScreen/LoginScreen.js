import React, { Component } from 'react';
import './style.scss';
import { OutlinedInput, Button } from '@material-ui/core';
import LoginImage from '../../assets/images/login_image.jpg';
import ArrowRight from '@material-ui/icons/ArrowRight';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingSignIn: null,
      name: null,
      email: null,
      password: null,
    }
  }

  async signInUser() {
    console.log(this.state);
    const { name, email, password } = this.state;
    const form = {
      name,
      email,
      password
    }

    console.log(form);

    //send data to API
    const response = fetch(`${process.env.REACT_APP_APIURL}/cadastro`, {
      method: "POST", 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form),
    });
    if(response) {
      this.setState({showingSignIn: false});
      alert('Conta criada com sucesso!');
    }
  }

  render() {
    return (
      <div class="login">
        <div class="login__container">
          <img src={LoginImage} width='400' alt='LoginImage'/>
  
          <div class="title">{!this.state.showingSignIn ? 'E a Economia?' : 'Insira seus dados'}</div>
  
          <form>
  
            <div class="login-form">

              {this.state.showingSignIn && (
                <OutlinedInput 
                  value={this.state.name}
                  onChange={e => this.setState({name: e.target.value})}
                  placeholder="Nome"
                  color="secondary"
                />
              )}
              <OutlinedInput 
                value={this.state.email}
                onChange={e => this.setState({email: e.target.value})}
                placeholder="Email"
                color="secondary"
              />
  
              <OutlinedInput 
                value={this.state.password}
                onChange={e => this.setState({password: e.target.value})}
                id="standard-basic" 
                placeholder="Senha" 
                type="password"
              />
            </div>
  
            <Button 
              variant="contained" 
              color="primary" 
              endIcon={<ArrowRight />}
              onClick={() => this.signInUser()}
            >
              {this.state.showingSignIn ? 'Cadastrar' : 'Entrar'}
            </Button>
  
          </form>

          <div class="sign-in__button">
            <button 
              type="button" 
              onClick={() => this.setState({showingSignIn: !this.state.showingSignIn})}
            >
                {!this.state.showingSignIn ? 'Cadastre-se aqui' : 'Voltar ao login'}
              </button>
          </div>

        </div>
      </div>
    );
  }
}