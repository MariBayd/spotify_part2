import React from "react";
import SpotifyButton from "../Button/SpotifyButton";
import cl from "./PageSwitch.module.css"


const PageSwitch = ({ offset, limit, itemsLength, totalItems, setOffset }) => {
  return (
    <div className={cl.pageSwitchPosition}>
      <SpotifyButton
        onClick={() => setOffset(0)}
        style={{ visibility: offset ? "visible" : "hidden" }}
      >
        В начало
      </SpotifyButton>

      <SpotifyButton
        onClick={() => setOffset({ offset: offset - limit })}
        disabled={offset < limit}
        style={{ visibility: itemsLength ? "visible" : "hidden" }}
      >
        Назад
      </SpotifyButton>

      <SpotifyButton
        onClick={() => setOffset({ offset: offset + limit })}
        disabled={totalItems <= offset + limit}
        style={{ visibility: itemsLength ? "visible" : "hidden" }}
      >
        Далее
      </SpotifyButton>

      <SpotifyButton
        onClick={() => setOffset({ offset: totalItems - limit })}
        style={{ visibility: totalItems <= offset + limit ?"hidden" : "visible"}}
      >
        В конец
      </SpotifyButton>
    </div>
  );
};

export default PageSwitch;
