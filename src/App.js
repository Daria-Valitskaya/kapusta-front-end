import { Suspense } from "react";
import { Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.module.css";
import HomeViews from "./views/HomeViews/HomeViews";
import Container from "./Сomponents/Container/Container";
import Header from "./Сomponents/Header/Header";
import LoginView from "./views/LoginView";
import PrivateRoute from "./Сomponents/PrivatRoute/PrivatRoute";
import PublicRoute from "./Сomponents/PublicRoute/PublicRoute";
import RegistrationView from "./views/RegistrationView";

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
