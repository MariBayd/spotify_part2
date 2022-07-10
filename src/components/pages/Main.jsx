import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "../UI/Header/Header.jsx";
import {
  URL_FETURED_PLAYLISTS,
  URL_NEW_RELEASES,
  CLIENT_ID,
  CLIENT_SECRET,
} from "../../js/ApiController/api_constants.js";
import APIController from "../../js/ApiController/APIController.js";
import ContentList from "../ContentList";
import { useFetching } from "../hooks/useFetching.js";
import Nav from "../UI/Nav/Nav.jsx";
import { navMain, limitItems } from "../../js/Constans.js";
import PageSwitch from "../UI/PageSwitch/PageSwitch";

const Main = () => {
  const [newReleases, setNewReleases] = useState([]);
  /**state for auth */
  const [authData, setAuthData] = useState({
    curClientId: CLIENT_ID,
    curClientSecret: CLIENT_SECRET,
  });
  /**state for page switching */
  const [pageSwitchConfig, setPageSwitchConfig] = useState({ offset: 0, totalItems: 0 });

  const apiController = new APIController(authData.curClientId, authData.curClientSecret);

  /** Get data */
  const [fetchPosts] = useFetching(async () => {
    const token = await apiController.getToken();

    const responseReleases = await apiController.getData(
      apiController.getUrl(URL_NEW_RELEASES),
      token, pageSwitchConfig.offset
    );

    setNewReleases(responseReleases.albums.items);
    setPageSwitchConfig(
      { ...pageSwitchConfig,
        totalItems: responseReleases.albums.total
      });
  });

  useEffect(() => {
    fetchPosts();
  }, [pageSwitchConfig.offset]);

  return (
    <div className="App">
      <Header logUser={setAuthData} />
      <div className="main">
        <Nav navItems={navMain} />

        <div className="content">
          <ContentList posts={newReleases} title="Популярные новые релизы" />
          <PageSwitch
            offset={pageSwitchConfig.offset}
            setOffset={setPageSwitchConfig}
            limit={limitItems}
            itemsLength={newReleases.length}
            totalItems={pageSwitchConfig.totalItems}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
