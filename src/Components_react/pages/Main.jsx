import React, {useEffect, useState} from 'react';
import "./App.css"
import Header from '../UI/Header/Header.jsx';
import {urlFeturedPlaylists, urlNewReleases, clientId, clientSecret} from '../../scripts/ApiController/constants.js'
import APIController from '../../scripts/ApiController/APIController.js';
import ContentList from '../ContentList';
import {useFetching} from '../hooks/useFetching.js'
import Nav from '../UI/Nav/Nav.jsx'

const Main = () => {

    const [posts, setPosts] = useState([]);
    let myPosts = [];
  
    const apiController = new APIController(clientId, clientSecret);
  
    const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
      const token = await apiController.getToken();
      const response = await apiController.getData(urlNewReleases, token);
      setPosts(response.albums.items); 
    });
  
    useEffect(() => {
      fetchPosts();
      myPosts = posts;
    }, [])
  
    return (
        <div className="App">
        <Header/>
        <div className="main">

          <Nav props={[
            {title:"Главная", link:"/", imgSrc:"icon-home_fill-white.svg", alt:"icon-home"},
            {title:"Поиск", link:"/search", imgSrc:"icon-search-grey.svg", alt:"icon-search"}]} />

          <div className="content">
            <ContentList posts={posts} title="Популярные новые релизы"  />    
          </div>

        </div>
      </div>
    );
}

export default Main;