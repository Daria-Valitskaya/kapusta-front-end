import "./App.module.css";

import { lazy, Suspense, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Registration from "./Сomponents/Registration/Registration.js";
import PrivateRoute from "./Сomponents/PrivatRoute/PrivatRoute";
import Login from "./Сomponents/Login/Login";
// import { useDispatch, useSelector } from "react-redux";
import authSelectors from "./redux/auth/auth-selectors";
import authOperations from "./redux/auth/auth-operations";

import Container from "./Сomponents/Container/Container";
import Header from "./Сomponents/Header/Header";
import PublicRoute from "./Сomponents/PublicRoute/PublicRoute";
import HomeViews from "./views/HomeViews/HomeViews";

function App() {
  return (
    <div>
      <Container>
        <Suspense fallback={<h1>LOADING...</h1>}>
          <Header />
          <Switch>
            {/* <PublicRoute component={WellcomePage} exact path="/" /> */}
            <PublicRoute
              component={Login}
              exact
              path="/login"
              restricted
              redirectTo="/homeview"
            />
            <PublicRoute
              component={Registration}
              exact
              path="/registration"
              restricted
              redirectTo="/login"
            />
            <PrivateRoute
              component={HomeViews}
              exact
              path="/homeview"
              redirectTo="/login"
            />

            {/* <Route>
              <NotFoundView />
            </Route> */}
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
