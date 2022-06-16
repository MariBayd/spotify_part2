import React, { useState, useMemo, useEffect } from "react";
import { useDebouncedValue } from "rooks";
import Header from "../UI/Header/Header";
import Nav from "../UI/Nav/Nav.jsx";
import Loader from "../UI/Loader/Loader.jsx"
import MyInput from "../UI/Input/MyInput.jsx";
import {clientId, clientSecret, urlSearch} from '../../js/ApiController/constants.js'
import APIController from '../../js/ApiController/APIController.js';
import ContentList from "../ContentList";
import MyLabel from "../UI/Label/MyLabel.jsx"
import {useSortedPosts} from "../hooks/useSortedPosts"
import PostFilter from "../PostFilter"


const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [debouncedSearchQuery] = useDebouncedValue(searchQuery, 1500);
  const [isLoading, setIsLoading ] = useState("false");
  const [auth, setAuth] = useState({curClientId: clientId, curClientSecret:clientSecret});
  const [sort, setSort] = useState('popularity')
  

  const sortedResults = useSortedPosts(searchResults, sort);

  const apiController = new APIController(auth.curClientId, auth.curClientSecret);

/** Get data if debouncedSearchQuery change*/
useEffect( () => {
    async function fetchData() {
       const token = await apiController.getToken();
    const response = await apiController.getData(urlSearch + debouncedSearchQuery + "&type=artist", token);
 
    setSearchResults(response.artists.items);
    }
    if (debouncedSearchQuery) {
      fetchData();
    }
    setIsLoading(false);
    
  }, [debouncedSearchQuery]);

/** Set searchQuery when the input changes */
  const changeSearchQuery = (event) => { 
    setIsLoading(true);     
    setSearchQuery(event.target.value);
  };

  return (
    <div className="App">
      <Header setAuth={setAuth}/>
      <div className="main">
        <Nav props={[
          {title:"Главная", link:"/", imgSrc:"icon-home_stroke-grey.svg", alt:"icon-home"},
          {title:"Поиск", link:"/search", imgSrc:"icon-search-white.svg", alt:"icon-search"}]} />

        <div className="content">
          <MyLabel>Что найти для вас?</MyLabel>
          <MyInput
            id="search__input"
            placeholder="Исполнитель"
            value={searchQuery}
            onChange={changeSearchQuery}/>
          
          <label>Упорядочить</label>
          <PostFilter
            sort={sort}
            setFilter={setSort}/>

          {isLoading
            ? <Loader />
            : <ContentList title="Результаты поиска:" posts={searchResults} />} 

          {


          //<ContentList title="Отсортированные результаты поиска:" posts={sortedResults.searchResults}/>

          }
        </div>
      </div>
    </div>
  )
}

export default Search;