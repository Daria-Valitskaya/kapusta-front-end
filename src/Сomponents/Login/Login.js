// import { routes } from "utils/routes";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Formik } from "formik";
import React, { useCallback, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../../redux/auth/auth-operations";
import s from "./Login.module.css";

const INITIAL_VALUES = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

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

  const handleSubmit = useCallback(
    (values, { setSubmitting }) => {
      dispatch(logIn(values));
      setSubmitting(false);
    },
    [dispatch]
  );

  const togglePassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  return (
    <div className={s.loginWindow}>
      <div className="with-google">
        <p className={s.description}>
          Вы можете авторизоваться с помощью Google Account:
        </p>
        <button className={s.googleButton} type="button">
          <FcGoogle size="20px" />
          Google
        </button>
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
                  <IconButton aria-label="visibility" onClick={togglePassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                )}
              </div>
            </div>
            <div className={s.confirmButton}>
              <Button
                variant="contained"
                type="submit"
                disabled={
                  isSubmitting ||
                  !(
                    Object.keys(touched).length ===
                      Object.keys(INITIAL_VALUES).length &&
                    Object.keys(errors).length === 0
                  )
                }
              >
                Войти
              </Button>
              <Link to={"/registration"}>
                <Button type="button">Регистрация</Button>
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
