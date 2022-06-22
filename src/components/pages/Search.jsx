import React, { useState, useMemo, useEffect } from 'react';
import { useDebouncedValue } from 'rooks';
import Header from '../UI/Header/Header';
import Nav from '../UI/Nav/Nav.jsx';
import { navSearch } from '../../Constans.js';
import Loader from '../UI/Loader/Loader.jsx';
import SpotifyInput from '../UI/Input/SpotifyInput.jsx';
import {clientId, clientSecret, urlSearch} from '../../js/ApiController/api_constants.js';
import APIController from '../../js/ApiController/APIController.js';
import ContentList from '../ContentList';
import SpotifyLabel from '../UI/Label/SpotifyLabel.jsx';
import SortSelect from '../SortSelect';
import {debounceTimeout} from '../../Constans.js'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [debouncedSearchQuery] = useDebouncedValue(searchQuery, debounceTimeout);
  const [isLoading, setIsLoading ] = useState('false');
  const [auth, setAuth] = useState({curClientId: clientId, curClientSecret:clientSecret});
  const [sort, setSort] = useState('');
  
  const apiController = new APIController(auth.curClientId, auth.curClientSecret);

  /** Get data if debouncedSearchQuery change*/
  useEffect( () => {
    async function fetchData() {
      const token = await apiController.getToken();
      const response = await apiController.getData(urlSearch + debouncedSearchQuery + '&type=artist', token);
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

/** Sorting */
  useEffect( () => { 
    if (sort === 'name') {
      const sorting =  [...searchResults].sort((a, b) =>  a[sort].localeCompare(b[sort]));
      setSearchResults(sorting);
    }
    else {
      const sorting =  [...searchResults].sort((a, b) =>  a[sort] > b[sort] ? -1: 1)
      setSearchResults(sorting);
    }
  }, [sort])

  return (
    <div className='App'>
      <Header logUser={setAuth}/>
      <div className='main'>
        <Nav props={navSearch} />

        <div className='content'>
          <SpotifyLabel>Что найти для вас?</SpotifyLabel>
          <SpotifyInput
            id='search__input'
            placeholder='Исполнитель'
            value={searchQuery}
            onChange={changeSearchQuery}/>
          
          <label>Упорядочить </label>
          <SortSelect
            sort={sort}
            setSort={setSort}
            />

          {isLoading
            ? <Loader />
            : <ContentList title='Результаты поиска:' posts={searchResults} />} 
        </div>
      </div>
    </div>
  )
}

export default Search;