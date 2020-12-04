import React from 'react';
import EconomiaLogo from '../../assets/img/logo.png';

import { Container, Logo } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={EconomiaLogo} alt="E-Conomia" />
        <h1>E-Conomia</h1>
      </Logo>
    </Container>
  );
};

export default Header;
