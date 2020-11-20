import React from 'react';
import './style.scss';
import { OutlinedInput, Button } from '@material-ui/core';
import LoginImage from '../../assets/images/login_image.jpg';
import ArrowRight from '@material-ui/icons/ArrowRight';

function LoginScreen() {
  return (
    <div class="login">
      <div class="login__container">
        <img src={LoginImage} width='400' />

        <div class="title">E a Economia?</div>

        <form>

          <div class="login-form">
            <OutlinedInput 
              placeholder="Email"
              color="secondary"
            />

            <OutlinedInput 
              id="standard-basic" 
              placeholder="Senha" 
              type="password"
            />
          </div>

          <Button 
            variant="contained" 
            color="primary" 
            endIcon={<ArrowRight />}>
            ENTRAR
          </Button>

        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
