import { NavLink } from 'react-router-dom';
import logo from '../../images/other/logo.svg'

const Navigation = () => {
    return (
        <NavLink 
            to='/'
            exact
        >
            <img 
                src={logo}
                alt="logo"
            />
        </NavLink>
    );
};

export default Navigation;