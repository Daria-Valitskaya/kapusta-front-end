import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultImg from '../../images/other/avatar.svg'
import logOutImg from '../../images/other/logout.svg'
import s from './UserMenu.module.css';

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);

    return (
        <div className={s.userWrapper}>
            <img 
                src={defaultImg}
                alt="user"
                className={s.userImg}
            />
            <p className={s.userName}>{name ? {name} : 'User Name'}</p>
            <span className={s.verticalLine}></span>
            <button 
                className={s.logOutBtn}
                onClick={() => dispatch(authOperations.logOut())}
            >
                <img 
                    src={logOutImg}
                    alt="logout"
                    className={s.logOutImg}
                />
                <span className={s.logOutText}>Выйти</span>
            </button>
        </div>
    )
};

export default UserMenu;