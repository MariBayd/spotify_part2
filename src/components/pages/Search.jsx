import React, { useState, useEffect } from "react";
import { useDebouncedValue } from "rooks";
import Header from "../UI/Header/Header";
import Nav from "../UI/Nav/Nav.jsx";
import SpotifyLabel from "../UI/Label/SpotifyLabel.jsx";
import Loader from "../UI/Loader/Loader.jsx";
import SpotifyInput from "../UI/Input/SpotifyInput.jsx";
import { CLIENT_ID, CLIENT_SECRET, URL_SEARCH } from "../../js/ApiController/api_constants.js";
import APIController from "../../js/ApiController/APIController.js";
import ContentList from "../ContentList";
import SortSelect from "../SortSelect";
import { navSearch, selectSortOptions, debounceTimeout } from "../../js/Constans.js";
import { sorting} from "../../js/Helpers.js";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [debouncedSearchQuery] = useDebouncedValue(searchQuery, debounceTimeout);
  const [isLoading, setIsLoading] = useState("false");
  const [auth, setAuth] = useState({
    curClientId: CLIENT_ID,
    curClientSecret: CLIENT_SECRET,
  });
  const [sort, setSort] = useState("popularity");
  let sortedRes = [];

  const apiController = new APIController(auth.curClientId, auth.curClientSecret);

  /** Get data if debouncedSearchQuery change*/
  useEffect(() => {
    async function fetchData() {
      const token = await apiController.getToken();
      const response = await apiController.getData(
        apiController.getUrl(URL_SEARCH) + debouncedSearchQuery + "&type=artist",
        token
      );
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
  useEffect(() => {
    if (!searchResults.length) return;
    sortedRes = sorting(searchResults, sort);
    setSearchResults(sortedRes);
  }, [sort]);

  return (
    <div className="App">
      <Header logUser={setAuth} />
      <div className="main">
        <Nav navItems={navSearch} />

        <div className="content">
          <SpotifyLabel>Что найти для вас?</SpotifyLabel>
          <SpotifyInput
            id="search__input"
            placeholder="Исполнитель"
            value={searchQuery}
            onChange={changeSearchQuery}
          />
          <label>Упорядочить{"\u00A0"}</label>
          <SortSelect sort={sort} setSort={setSort} options={selectSortOptions} />
          {isLoading
            ? <Loader />
            : <ContentList title="Результаты поиска:" posts={searchResults} />}
        </div>
      </div>
    </div>
  );
};

export default Search;
