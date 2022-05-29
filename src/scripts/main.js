import APIController from './APIController.js';
import Playlist from './Playlist.js';
import Album from './Album.js';
import MarkupInjector from './MarkupInjector.js';


(async function () {
    const clientId = 'd0b55c9378d0473eb89d96c3b2e1a01c';
    const clientSecret = '00f9a24f25254ee4a3313f66fdbb0968';
    
    const apiController = new APIController(clientId, clientSecret);
    const markupInjector = new MarkupInjector();

    /** Get data */
    const token = await apiController.getToken();
    const [feturedPlaylists, newReleases] =
        await Promise.all([
            apiController.getData(apiController.urlFeturedPlaylists, 0, token),
            apiController.getData(apiController.urlNewReleases, 0, token)]);
    
    /* Create and insert new releases */
    markupInjector.createWrapper('Популярные новые релизы', 'new-releases','content');
    newReleases.albums.items.forEach(item =>new Album(item, 'new-releases'));

    /* Create and insert popular-playlist */
    markupInjector.createWrapper('Популярные плэйлисты', 'popular-playlists', 'content');
    feturedPlaylists.playlists.items.forEach(item => new Playlist(item, 'popular-playlists'));
}());