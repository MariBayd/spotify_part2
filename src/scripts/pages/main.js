import APIController from '../ApiController/APIController.js';
import {urlFeturedPlaylists, urlNewReleases, clientId, clientSecret} from '../ApiController/constants.js'
import Playlist from '../Components_js/Playlist.js';
import Album from '../Components_js/Album.js';
import MarkupInjector from '../MarkupInjector.js';

(async function () {

    const apiController = new APIController(clientId, clientSecret);
    const markupInjector = new MarkupInjector();

    /** Get data */
    const token = await apiController.getToken();
    const [feturedPlaylists, newReleases] =
        await Promise.all([
            apiController.getData(urlFeturedPlaylists, token),
            apiController.getData(urlNewReleases, token)]);
    
    /* Create and insert new releases */
    markupInjector.createWrapper('Популярные новые релизы', 'new-releases','content');
    newReleases.albums.items.forEach(item =>new Album(item, 'new-releases'));

    /* Create and insert popular-playlist */
    markupInjector.createWrapper('Популярные плэйлисты', 'popular-playlists', 'content');
    feturedPlaylists.playlists.items.forEach(item => new Playlist(item, 'popular-playlists'));
}());