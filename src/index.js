import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './routes/HomeScreen/HomeScreen';
import LoginScreen from './routes/LoginScreen/LoginScreen';

ReactDOM.render(
  <Router>
      <Redirect to="/login" />
    <Switch>
      <Route path="/login" exact={true} component={LoginScreen} />
      <Route path="/home" component={HomeScreen} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
