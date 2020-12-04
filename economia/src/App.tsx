import React from 'react';
import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { RoutesContainer } from './styles/styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <RoutesContainer>
          <Routes />
        </RoutesContainer>
      </BrowserRouter>
    </>
  );
};

export default App;
