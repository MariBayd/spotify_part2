import React, {useState} from 'react';
import classes from './Header.module.css';
import SpotifyButton from '../Button/SpotifyButton';
import MyModal from '../MyModal/MyModal';
import AuthForm from '../../AuthForm';
import {headerImg, headerButtonFontSize} from '../../../Constans.js'

const Header = ({logUser}) => {
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <header className={classes.header}>
            <img className={[classes.logo, classes.logoPosition].join(' ')} src={headerImg}/>
            <SpotifyButton style={{fontSize: headerButtonFontSize}}
                onClick={()=>setModalVisible(true)}>...</SpotifyButton>
            <MyModal visible={isModalVisible} setVisible={setModalVisible}>
                <AuthForm logUser={logUser}/>
            </MyModal>
        </header>
    )
}

export default Header;