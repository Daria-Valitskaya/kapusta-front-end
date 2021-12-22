import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import s from "./Header.module.css";

import incomeApi from "../Table/Table";

incomeApi('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmI5MjgzMDRiOGJiNDg2ZDBiMGUyYiIsImlhdCI6MTYzOTc2ODk5NX0.85_P-ZMaWneekfqe-5TRp5xcdfXKHWbgxA4TkDvziSo')

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn && <UserMenu />}
    </header>
  );
};

export default Header;
