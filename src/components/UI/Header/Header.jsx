import React, { useState } from "react";
import classes from "./Header.module.css";
import SpotifyButton from "../Button/SpotifyButton";
import SpotifyModal from "../SpotifyModal/SpotifyModal";
import AuthForm from "../../AuthForm";
import { headerImg, headerButtonFontSize } from "../../../Constans.js";

const Header = ({ logUser }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <header className={classes.header}>
      <img className={[classes.logo, classes.logoPosition].join(" ")} src={headerImg} />
      <SpotifyButton
        style={{ fontSize: headerButtonFontSize }}
        onClick={() => setModalVisible(true)}
      >
        ...
      </SpotifyButton>
      <SpotifyModal visible={isModalVisible} setVisible={setModalVisible}>
        {logUser ? <AuthForm logUser={logUser} /> : <div>Данные не получены</div>}
      </SpotifyModal>
    </header>
  );
};

export default Header;
