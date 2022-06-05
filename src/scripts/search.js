import APIController from './ApiController/APIController.js';
import Artist from './Artist.js';
import {debounce} from './Helpers.js'
import {debounceTimeout} from './Constans.js'
import {urlSearch, clientId, clientSecret} from './ApiController/constants.js'


(async function() {

    /** Get data */ 
    const apiController = new APIController(clientId, clientSecret);
    const token = await apiController.getToken();

    const inputSearch = document.querySelector('#search__input');
   
    const onChangeDebounce = debounce(onChange, debounceTimeout); 
    inputSearch.addEventListener('change', onChangeDebounce);

    /** 
     *  Search by query and insert search result in html
     */
    async function onChange(event) {
        const searchResults = await apiController
            .getData(urlSearch + event.target.value + '&type=artist', token);
        
        if (searchResults.artists.items.length) {
            document.getElementById('results').replaceChildren();
            searchResults.artists.items.forEach(item => new Artist(item, 'results'));
        } else {
            setNoResult();
        }
    }

    /** 
     *  Insert message in html, if items by query not found 
     */
    function setNoResult(){
        document.getElementById('results').replaceChildren();
        const noResultText = `<span id="no-result-text">По вашему запросу ничего не найдено</span>`;
        document.getElementById('results').insertAdjacentHTML('beforeend', noResultText);
    }
        
}());