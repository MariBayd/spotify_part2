import {APIController} from './APIController.js';
import { UIController } from './UIController.js';
import { Artist } from './Artist.js';

(async function() {

   /** Get data */ 
const apiController = new APIController();
const uiController = new UIController();
const token = await apiController.getToken();

let inputSearch = document.querySelector('#search__input');

inputSearch.addEventListener('change', onChange);

/** 
 *  Search by query and insert search result in html
 */
async function onChange() {
    const searchResults = await apiController.getArtistsBySearch(token, inputSearch.value);
    if (searchResults.length) {
        uiController.removeChildrenById('results'); 
        const artists = searchResults.map( (item) => new Artist(item));
        uiController.insertItemsToHtml(artists,'results');
    } else {
        setNoResult();
    }
}

/** 
 *  Insert message in html, if items by query not found 
 */
function setNoResult(){
    uiController.removeChildrenById('results'); 
    const NoResultText = `<span id="no-result-text">По вашему запросу ничего не найдено</span>`;
    uiController.insertItemToHtml(NoResultText, 'results');
}

}());