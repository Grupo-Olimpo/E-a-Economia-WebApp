import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import history from './history';

import { isAuthenticated } from "./services/auth";
import TelaLogin from "./containers/login";
import TelaCadastro from "./containers/cadastro";

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
      <PrivateRoute path="/app" component={() => <h1>App</h1>} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </Router>
);

export default Routes;
