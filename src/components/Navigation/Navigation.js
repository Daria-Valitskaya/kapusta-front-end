import { NavLink } from 'react-router-dom';
import logo from '../../images/other/logo.svg'
// import s from 'component-styles/NavLink.module.css';

const Navigation = () => {
    return (
        <NavLink 
            to='/'
            exact
            // className={s.navLink}
            // activeClassName={s.navActiveLink}
        >
            <img 
                src={logo}
                alt="logo"
            />
        </NavLink>
    );
};

export default Navigation;