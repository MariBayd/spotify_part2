import APIController from './APIController.js';
import Artist from './Artist.js';
import {debounce} from './Helpers.js'


(async function() {

    const clientId = 'd0b55c9378d0473eb89d96c3b2e1a01c';
    const clientSecret = '00f9a24f25254ee4a3313f66fdbb0968';


    /** Get data */ 
    const apiController = new APIController(clientId, clientSecret);
    const token = await apiController.getToken();

    let inputSearch = document.querySelector('#search__input');
   
    const onChangeDebounce = debounce(onChange, 500); 
    inputSearch.addEventListener('change', onChangeDebounce);

    /** 
     *  Search by query and insert search result in html
     */
    async function onChange() {
        const searchResults = await apiController
            .getData(apiController.urlSearch + inputSearch.value + '&type=artist', 0, token);
        
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