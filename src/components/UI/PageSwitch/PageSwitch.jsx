import React from "react";
import SpotifyButton from "../Button/SpotifyButton";
import cl from "./PageSwitch.module.css"


const PageSwitch = ({ offset, limit, itemsLength, totalItems, setOffset }) => {
  return (
    <div className={cl.pageSwitchPosition}>
      {offset
        ? <SpotifyButton onClick={() => setOffset(0)}>
            В начало
          </SpotifyButton>
        : <div></div>
      }
      
      {itemsLength
        ? <SpotifyButton
            onClick={() => setOffset({ offset: offset - limit })}
            disabled={offset < limit}>
            Назад
         </SpotifyButton>
        : <div></div>
      }
      
      {itemsLength
        ? <SpotifyButton
            onClick={() => setOffset({ offset: offset + limit })}
            disabled={totalItems <= offset + limit}>
            Далее
          </SpotifyButton>
        : <div></div>
      }
      
      {totalItems <= offset + limit
        ? <div></div>
        : <SpotifyButton
            onClick={() => setOffset({ offset: totalItems - limit })}>
            В конец
          </SpotifyButton>
      }
    </div>
  );
};

export default PageSwitch;
