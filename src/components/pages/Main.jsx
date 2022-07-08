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
import ContentLists from "../ContentLists";
import { useFetching } from "../hooks/useFetching.js";
import Nav from "../UI/Nav/Nav.jsx";
import { navMain } from "../../js/Constans.js";

const Main = () => {
  const [newReleases, setNewReleases] = useState([]);
  const [feturedPlaylists, setFeturedPlaylists] = useState([]);
  const [authData, setAuthData] = useState({
    curClientId: CLIENT_ID,
    curClientSecret: CLIENT_SECRET,
  });

  const apiController = new APIController(authData.curClientId, authData.curClientSecret);

  /** Get data */
  const [fetchPosts] = useFetching(async () => {
    const token = await apiController.getToken();

    const [responseReleases, responseFeturedPlaylists] = await Promise.all([
      apiController.getData(apiController.getUrl(URL_NEW_RELEASES), token),
      apiController.getData(apiController.getUrl(URL_FETURED_PLAYLISTS), token),
    ]);

    setNewReleases(responseReleases.albums.items);
    setFeturedPlaylists(responseFeturedPlaylists.playlists.items);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  function getConfig() {
    return [
      { posts: newReleases, title: "Популярные новые релизы" },
      { posts: feturedPlaylists, title: "Популярные плейлисты" },
    ];
  }

  return (
    <div className="App">
      <Header logUser={setAuthData} />
      <div className="main">
        <Nav navItems={navMain} />

        <div className="content">
          <ContentLists items={getConfig()} />
        </div>
      </div>
    </div>
  );
};

export default Main;
