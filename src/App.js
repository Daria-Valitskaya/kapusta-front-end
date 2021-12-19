import { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.module.css";
import Container from "./Сomponents/Container/Container";
import Header from "./Сomponents/Header/Header";
import PrivateRoute from "./Сomponents/PrivatRoute/PrivatRoute";
import PublicRoute from "./Сomponents/PublicRoute/PublicRoute";

//lazy
const LoginView = lazy(() => import("./views/LoginView"));
const RegistrationView = lazy(() => import("./views/RegistrationView"));
const HomeViews = lazy(() => import("./views/HomeViews/HomeViews"));

function App() {
  return (
    <div>
      <Container>
        <ToastContainer />
        <Suspense fallback={<h1>LOADING...</h1>}>
          <Header />
          <Switch>
            {/* <PublicRoute component={WellcomePage} exact path="/" /> */}
            <PublicRoute
              component={LoginView}
              exact
              path="/"
              restricted
              redirectTo="/homeview"
            />
            <PublicRoute
              component={RegistrationView}
              exact
              path="/registration"
              restricted
              redirectTo="/login"
            />
            <PrivateRoute
              component={HomeViews}
              exact
              path="/homeview"
              redirectTo="/"
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
