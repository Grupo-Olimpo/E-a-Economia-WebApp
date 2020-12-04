import React from 'react';
import {
  Redirect,
  Route as RouteDOM,
  RouteProps as ReactDOMProps,
} from 'react-router-dom';

interface IRouteProps extends ReactDOMProps {
  isPrivate?: boolean;
  component: React.ComponentType;
  isOnlyPublic?: boolean;
}

const Route: React.FC<IRouteProps> = ({
  isPrivate = false,
  component: Component,
  isOnlyPublic = false,
  ...rest
}) => {
  const user = 'teste';

  return (isPrivate && !user) || (isOnlyPublic && user) ? (
    <Redirect to={user ? '/app' : '/'} />
  ) : (
    <RouteDOM component={Component} {...rest} />
  );
};

export default Route;
