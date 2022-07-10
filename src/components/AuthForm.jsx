import React, { useState } from "react";
import SpotifyInput from "./UI/Input/SpotifyInput";
import SpotifyButton from "./UI/Button/SpotifyButton.jsx";
import SpotifyLabel from "./UI/Label/SpotifyLabel.jsx";

const AuthForm = ({ logUser }) => {
  const [authData, setAuthData] = useState({
    curClientId: "",
    curClientSecret: "",
  });

  const addNewAuthData = (e) => {
    e.preventDefault();
    const newAuth = {
      ...authData,
      id: Date.now(),
    };
    logUser(newAuth);
  };

  return (
    <form>
      <p className="textRegular">
        Будьте внимательны, при неверных client id и client secret приложение не будет работать.
        <br />В этом случае введите данные ещё раз или перезапустите приложение.
      </p>
      <SpotifyLabel>Client id</SpotifyLabel>
      <SpotifyInput
        type="text"
        placeholder="Ввести новый client id"
        value={authData.curClientId}
        onChange={(e) => setAuthData({ ...authData, curClientId: e.target.value })}
      />
      <SpotifyLabel>Client secret</SpotifyLabel>
      <SpotifyInput
        type="text"
        placeholder="Ввести новый client secret"
        value={authData.curClientSecret}
        onChange={(e) => setAuthData({ ...authData, curClientSecret: e.target.value })}
      />
      <SpotifyButton
        onClick={addNewAuthData}
        disabled={!authData.curClientId || !authData.curClientSecret}
      >
        Отправить данные
      </SpotifyButton>
    </form>
  );
};

export default AuthForm;
