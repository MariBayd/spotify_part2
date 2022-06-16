import React, {useEffect, useState} from 'react';
import "./App.css"
import Header from '../UI/Header/Header.jsx';
import {urlFeturedPlaylists, urlNewReleases, clientId, clientSecret} from '../../js/ApiController/constants.js'
import APIController from '../../js/ApiController/APIController.js';
import ContentList from '../ContentList';
import {useFetching} from '../hooks/useFetching.js'
import Nav from '../UI/Nav/Nav.jsx'


const Main = () => {

  const [newReleases, setNewReleases] = useState([]);
  const [feturedPlaylists, setFeturedPlaylists] = useState([]);
  const [auth, setAuth] = useState({curClientId: clientId, curClientSecret:clientSecret});

  const apiController = new APIController(auth.curClientId, auth.curClientSecret);

  /** Get data */
  const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
    const token = await apiController.getToken();
    const responseReleases = await apiController.getData(urlNewReleases, token);
    const responseFeturedPlaylists = await apiController.getData(urlFeturedPlaylists, token);
    setNewReleases(responseReleases.albums.items); 
    setFeturedPlaylists(responseFeturedPlaylists.playlists.items);
  });
  
  useEffect(() => {
    fetchPosts();
  }, [])
  
  return (
    <div className="App">
      <Header setAuth={setAuth}/>
      <div className="main">

        <Nav props={[
          {title:"Главная", link:"/", imgSrc:"icon-home_fill-white.svg", alt:"icon-home"},
          {title:"Поиск", link:"/search", imgSrc:"icon-search-grey.svg", alt:"icon-search"}]} />

        <div className="content">
          <ContentList posts={newReleases} title="Популярные новые релизы"  />
          <ContentList posts={feturedPlaylists} title="Популярные плэйлисты"  />    
        </div>

      </div>
    </div>
  );
}

export default Main;