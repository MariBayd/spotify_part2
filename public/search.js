import {APIController} from './APIController.js';
import { UIController } from './UIController.js';
import {ArtistResponse} from './ArtistResponse.js';

const apiController = new APIController();
const uiController = new UIController();
const token = await apiController._getToken();

let inputSearch = document.querySelector('#search__input');

inputSearch.addEventListener('click', ()=> {
    if (inputSearch.value == 'Исполнитель') inputSearch.value = '';
});

inputSearch.addEventListener('change', ()=> {
    if (inputSearch.value == '') {
        inputSearch.value = 'Исполнитель';
    }
    else {
            search(inputSearch.value);

    }
});

async function search(query) {
    const searchResults = await apiController._getArtistsBySearch(token, query);
    if (searchResults.length != 0) {
        uiController.removeChildrenById('results'); 
        const artists = new ArtistResponse(searchResults, 20);
        uiController.insertItemsToHtml(artists,'results');
    }
    else {
        setNoResult();
    }
  
}

function setNoResult(){
    uiController.removeChildrenById('results'); 
    let NoResultText = `<span id="no-result-text">По вашему запросу ничего не найдено</span>`;
    uiController.insertItemToHtml(NoResultText, 'results');
}