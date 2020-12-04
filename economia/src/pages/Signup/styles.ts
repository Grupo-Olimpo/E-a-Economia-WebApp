import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import BgLogin from '../../assets/img/background_login.png';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  min-height: 100vh;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  background: url(${BgLogin}) no-repeat center;
  background-size: cover;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  img {
    filter: drop-shadow(0 0px 1px rgba(255, 255, 255, 0.5));
    max-width: 50%;
  }

  @media (min-width: 1100px) {
    max-width: 700px;
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: ${appearFromRight} 1s;
  padding: 0 40px;
  width: 100%;
  max-width: 600px;

  img {
    width: 100%;
    margin-bottom: 24px;
  }
  form {
    width: 100%;
    margin-top: 36px;
    text-align: center;
  }
  a {
    color: #666;
    margin-top: 24px;
    width: 100%;
    display: block;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    transition: color 0.2s;

    &:hover {
      color: #00ddc0;
    }
  }
`;

export const ButtonSignIn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00ddc0;
  color: #fff;
  height: 60px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: 500;
  margin-top: 36px;
  transition: background-color 0.2s;
  &:hover {
  }
`;
