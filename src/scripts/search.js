import {APIController} from './APIController.js';
import { UIController } from './UIController.js';
import {ArtistResponse} from './ArtistResponse.js';

(async function() {
const apiController = new APIController();
const uiController = new UIController();
const token = await apiController.getToken();

let inputSearch = document.querySelector('#search__input');

inputSearch.addEventListener('change', onChange());

async function onChange() {
    const searchResults = await apiController.getArtistsBySearch(token, inputSearch.value);
    if (!searchResults.length) {
        uiController.removeChildrenById('results'); 
        const artists = new ArtistResponse(searchResults, 20);
        uiController.insertItemsToHtml(artists,'results');
    } else {
        setNoResult();
    }
}

function setNoResult(){
    uiController.removeChildrenById('results'); 
    const NoResultText = `<span id="no-result-text">По вашему запросу ничего не найдено</span>`;
    uiController.insertItemToHtml(NoResultText, 'results');
}

}());