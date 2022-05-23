import {APIController} from './APIController.js';
import { Artist } from './Artist.js';
import BaseView from './BaseView.js';

(async function() {

   /** Get data */ 
const apiController = new APIController();
const token = await apiController.getToken();

let inputSearch = document.querySelector('#search__input');

inputSearch.addEventListener('change', onChange);

/** 
 *  Search by query and insert search result in html
 */
async function onChange() {
    const searchResults = await apiController.getArtistsBySearch(token, inputSearch.value);
    if (searchResults.length) {
        BaseView.removeChildrenById('results');
        const artists = searchResults.map( (item) => new Artist(item, 'results'));
    } else {
        setNoResult();
    }
}

/** 
 *  Insert message in html, if items by query not found 
 */
function setNoResult(){
    BaseView.removeChildrenById('results');
    const noResultText = `<span id="no-result-text">По вашему запросу ничего не найдено</span>`;
    document.getElementById('results').insertAdjacentHTML('beforeend', noResultText);
}

}());