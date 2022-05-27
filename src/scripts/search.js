import {APIController} from './APIController.js';
import { Artist } from './Artist.js';


(async function() {

    /** Get data */ 
    const apiController = new APIController('d0b55c9378d0473eb89d96c3b2e1a01c', '00f9a24f25254ee4a3313f66fdbb0968');
    const token = await apiController.getToken();

    let inputSearch = document.querySelector('#search__input');

    inputSearch.addEventListener('change', onChange);

    /** 
     *  Search by query and insert search result in html
     */
    async function onChange() {
        const searchResults = await apiController.getArtistsBySearch(token, inputSearch.value);
        
        if (searchResults.length) {
            document.getElementById('results').innerHTML="";
            searchResults.forEach(item => new Artist(item, 'results'));
        } else {
            setNoResult();
        }
    }

    /** 
     *  Insert message in html, if items by query not found 
     */
    function setNoResult(){
        document.getElementById('results').innerHTML="";
        const noResultText = `<span id="no-result-text">По вашему запросу ничего не найдено</span>`;
        document.getElementById('results').insertAdjacentHTML('beforeend', noResultText);
    }

}());