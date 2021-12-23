import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.module.css";
import { authOperations, authSelectors } from "./redux/auth";
import Container from "./Сomponents/Container/Container";
import Header from "./Сomponents/Header/Header";
import PrivateRoute from "./Сomponents/PrivatRoute/PrivatRoute";
import PublicRoute from "./Сomponents/PublicRoute/PublicRoute";

//lazy
const LoginView = lazy(() => import("./views/LoginView"));
const RegistrationView = lazy(() => import("./views/RegistrationView"));
const HomeViews = lazy(() => import("./views/HomeViews/HomeViews"));
const ReportView = lazy(() => import("./views/ReportView/ReportView"));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
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
              <PrivateRoute
                component={ReportView}
                exact
                path="/reportview"
                redirectTo="/"
              />

              {/* <Route>
              <NotFoundView />
            </Route> */}
            </Switch>
          </Suspense>
        </Container>
      </div>
    )
  );
}

export default App;
