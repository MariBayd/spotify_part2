import React, {useState} from "react";
import classes from "./Header.module.css"
import MyButton from "../Button/MyButton";
import MyModal from "../MyModal/MyModal"
import AuthForm from "../../AuthForm"


const Header = (props) => {
    const [modal, setModal] = useState(false);

    return (
        <header className={classes.header}>
            <img className={[classes.logo, classes.logoPosition].join(' ')} src="Spotify_logo_with_text.svg"/>
            <MyButton style={{fontSize:35}}
                onClick={()=>setModal(true)}>...</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <AuthForm create={props.setAuth}/>
            </MyModal>
        </header>
    )
}

export default Header;