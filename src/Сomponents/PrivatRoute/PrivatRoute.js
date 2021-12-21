import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";

const PrivateRoute = ({ redirectTo, children, ...routeProps }) => {
  // Комент на время тестов, чтоб не писпть постоянно логин
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  // Удалить перед продакшн
  const isLoggedIn = true;
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivateRoute;
