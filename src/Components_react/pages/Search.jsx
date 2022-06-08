import React, { useState, useMemo } from "react";
import { useDebouncedValue } from "rooks";
import Header from "../UI/Header/Header";
import Nav from "../UI/Nav/Nav";
import ContentWrapper from "../UI/ContentWrapper/ContentWrapper";
import SearchInput from "../UI/Input/SearchInput";
import {clientId, clientSecret, urlSearch} from '../../scripts/ApiController/constants.js'
import APIController from '../../scripts/ApiController/APIController.js';
import ContentList from "../ContentList";
import PostItem from "../UI/PostItem/PostItem.jsx"

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [debouncedFoo] = useDebouncedValue(searchQuery, 1100);
    const [isLoading, setIsLoading ] = useState("false");

    const apiController = new APIController(clientId, clientSecret);

    const search = useMemo( async () => {

      const token = await apiController.getToken();
      const response = await apiController.getData(urlSearch + searchQuery + "&type=artist", token);
      setIsLoading(false);
      setSearchResults(response.artists.items);
    }, [debouncedFoo]);

    const onChange = (event) => {      
      setIsLoading(true);
      setSearchQuery(event.target.value);

    };

    return (
        <div className="App">
        <Header/>
        <div className="main">

        <Nav props={[
            {title:"Главная", link:"/", imgSrc:"icon-home_stroke-grey.svg", alt:"icon-home"},
            {title:"Поиск", link:"/search", imgSrc:"icon-search-white.svg", alt:"icon-search"}]} />

          <div className="content">
            <SearchInput
              value={searchQuery}
              onChange={onChange}/>

              {isLoading
                ? <span style={{justifyContent:'center'}}>Загрузка...</span>
                : <ContentList title="Результаты поиска:" posts={searchResults} />} 


          </div>
        </div>
      </div>
    )
}

export default Search;