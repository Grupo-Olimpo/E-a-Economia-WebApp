import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import history from './history';

import { isAuthenticated } from "./services/auth";
import TelaLogin from "./containers/login";
import TelaCadastro from "./containers/cadastro";
import App from "./containers/app";
import CriarTransacao from './containers/criar_transacao'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/loginIn", state: { from: props.location } }} />
        )
    }
  />
);

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/loginIn" component={TelaLogin} />
      <Route path="/signIn" component={TelaCadastro} />
      <Route path="/app" component={App} />
      <Route path='/criar-transacao' component={CriarTransacao}/>
    </Switch>
  </Router>
);
// <PrivateRoute path="/app" component={App} />
export default Routes;
