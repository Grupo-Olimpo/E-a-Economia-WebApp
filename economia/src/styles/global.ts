import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    background: #fff;
    color: #949390;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, select, option, button{
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: normal;
  }
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }
  button{
    cursor: pointer;
  }

  #root{
    display: flex;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
  }
`;
