import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultImg from '../../images/other/avatar.svg';
import logOutImg from '../../images/other/logout.svg';
import SureModal from '../../Сomponents/ModalWindows/SureModal';
import s from './UserMenu.module.css';

const UserMenu = () => {
    const [showModal, setShowModal] = useState(false);
    // const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);

    const closeModal = () => {
        setShowModal(false)
    }

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
                onClick={() => setShowModal(true)}
                // onClick={() => dispatch(authOperations.logOut())}
            >
                <img 
                    src={logOutImg}
                    alt="logout"
                    className={s.logOutImg}
                />
                <span className={s.logOutText}>Выйти</span>
            </button>
            {showModal && <SureModal closeModal={closeModal} />}
        </div>
    )
};

export default UserMenu;