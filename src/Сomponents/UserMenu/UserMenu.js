import { useState } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import defaultImg from '../../images/other/avatar.svg';
import logOutImg from '../../images/other/logout.svg';
import SureModal from '../../Сomponents/ModalWindows/SureModal';
import Modal from '../ModalWindows/Modal';
import s from './UserMenu.module.css';


const UserMenu = () => {
    const [showModal, setShowModal] = useState(false);
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
            <p className={s.userName}>{name ? name : 'User Name'}</p>
            <span className={s.verticalLine}></span>
            <button 
                className={s.logOutBtn}
                onClick={() => setShowModal(true)}
            >
                <img 
                    src={logOutImg}
                    alt="logout"
                    className={s.logOutImg}
                />
                <span className={s.logOutText}>Выйти</span>
            </button>
            {showModal && 
                <Modal onClose={closeModal}>
                    <SureModal closeModal={closeModal} />
                </Modal>
            }
        </div>
    )
};

export default UserMenu;