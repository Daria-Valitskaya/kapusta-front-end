// import { routes } from "utils/routes";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authSelectors } from "../../redux/auth";
import { logIn } from "../../redux/auth/auth-operations";
import { resetAuth } from "../../redux/auth/auth-slice";
import s from "./LoginView.module.css";

const INITIAL_VALUES = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const errorMessage = useSelector(authSelectors.getErrorMessage);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const validate = useCallback((values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8 || values.password.length > 16) {
      errors.password =
        "Invalid password. Password should be greater then 8 symbols and less then 16 symbols";
    }
    return errors;
  }, []);

  const notify = (message, type) => {
    type(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    if (!isLoggedIn && errorMessage) {
      notify(errorMessage, toast.error);
    }
    return () => dispatch(resetAuth());
  }, [dispatch, errorMessage, isLoggedIn]);

  const handleSubmit = useCallback(
    (values, { setSubmitting, resetForm }) => {
      dispatch(resetAuth());
      dispatch(logIn(values));
      setSubmitting(false);
      resetForm();
    },
    [dispatch]
  );

  const resetAuthState = useCallback(() => {
    dispatch(resetAuth());
  }, [dispatch]);

  const togglePassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  return (
    <div className={s.background}>
      <div className={s.container}>
        <div className={s.title}>
          <h1 className={s.mainTitle}>
            Kapu<span className={s.dollarSymbol}>$</span>ta
          </h1>
          <p className={s.subTitle}>Smart Finance</p>
        </div>
        <div className={s.loginWindow}>
          <div className="with-google">
            <p className={s.description}>
              Вы можете авторизоваться с помощью Google Account:
            </p>

            <a
              href="https://kapusta-team-project-back.herokuapp.com/api/auth/google"
              alt="GoogleAuth"
            >
              <button className={s.googleButton} type="button">
                <FcGoogle size="20px" />
                Google
              </button>
            </a>
            <p className={s.description}>
              Или зайти с помощью e-mail и пароля, предварительно
              зарегистрировавшись:
            </p>
          </div>
          <Formik
            initialValues={INITIAL_VALUES}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              handleBlur,
              isSubmitting,
              isValidating,
              isValid,
              dirty,
            }) => (
              <form className={s.form} onSubmit={handleSubmit}>
                <div className={s.emailField}>
                  <InputLabel className={s.label} htmlFor="email">
                    Электронная почта:
                  </InputLabel>
                  <TextField
                    className={s.input}
                    variant="filled"
                    fullWidth
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    margin="normal"
                    placeholder="your@email.com"
                    helperText={touched.email && errors.email}
                  />
                </div>
                <InputLabel className={s.label} htmlFor="password">
                  Пароль:
                </InputLabel>
                <div className={s.passwordField}>
                  <TextField
                    className={s.input}
                    fullWidth
                    variant="filled"
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    margin="normal"
                    helperText={touched.password && errors.password}
                  />
                  <div className={s.passwordIconButton}>
                    {values.password && (
                      <IconButton
                        aria-label="visibility"
                        onClick={togglePassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    )}
                  </div>
                </div>
                <div className={s.confirmButton}>
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={!isValid || !dirty}
                  >
                    Войти
                  </Button>
                  <Link to={"/registration"}>
                    <Button type="button" onClick={resetAuthState}>
                      Регистрация
                    </Button>
                  </Link>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <div className={s.bottomBackground}></div>
    </div>
  );
};

export default Login;
