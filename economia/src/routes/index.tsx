import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path={['/', '/login']} component={Login} isOnlyPublic />
    <Route exact path={'/cadastro'} component={Signup} isOnlyPublic />
    <Route exact path={'/app'} component={Dashboard} isOnlyPublic />
  </Switch>
);

export default Routes;
