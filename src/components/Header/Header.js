import { useSelector } from "react-redux";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import s from './Header.module.css';
import { authSelectors } from '../../redux/auth';

const Header = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    console.log(isLoggedIn);
    return (
        <header className={s.header}>
            <Navigation />
            {/* {isLoggedIn && <UserMenu /> } */}
            <UserMenu />
        </header>
    );
};

export default Header;