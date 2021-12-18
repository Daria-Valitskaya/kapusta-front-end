import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import s from "./Header.module.css";

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // console.log(isLoggedIn);
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn && <UserMenu />}
    </header>
  );
};

export default Header;
