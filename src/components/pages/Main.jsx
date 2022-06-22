import React, {useEffect, useState} from 'react';
import './App.css'
import Header from '../UI/Header/Header.jsx';
import {urlFeturedPlaylists, urlNewReleases, clientId, clientSecret} from '../../js/ApiController/api_constants.js'
import APIController from '../../js/ApiController/APIController.js';
import ContentLists from '../ContentLists';
import {useFetching} from '../hooks/useFetching.js'
import Nav from '../UI/Nav/Nav.jsx'
import {navMain} from '../../Constans.js'

const Main = () => {

  const [newReleases, setNewReleases] = useState([]);
  const [feturedPlaylists, setFeturedPlaylists] = useState([]);
  const [authData, setAuthData] = useState({curClientId: clientId, curClientSecret:clientSecret});

  const apiController = new APIController(authData.curClientId, authData.curClientSecret);

  /** Get data */
  const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
    const token = await apiController.getToken();

    const [responseReleases, responseFeturedPlaylists] = 
      await Promise.all([apiController.getData(urlNewReleases, token),
      apiController.getData(urlFeturedPlaylists, token)]);
      
  setNewReleases(responseReleases.albums.items); 
  setFeturedPlaylists(responseFeturedPlaylists.playlists.items);
  });
  
  useEffect(() => {
    fetchPosts();
  }, [])

  function getConfig() {
    return [
      {posts: newReleases, title: "Популярные новые релизы"},
      {posts: feturedPlaylists, title: "Популярные плейлисты"}
      ]
  }
  
  return (
    <div className='App'>
      <Header logUser={setAuthData}/>
      <div className='main'>
        <Nav props={navMain} />

        <div className="content">
          <ContentLists items={getConfig()}/>   
        </div>

      </div>
    </div>
  );
}

export default Main;