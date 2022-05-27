import {APIController} from './APIController.js';
import {Playlist} from './Playlist.js';
import { Album } from './Album.js';
import MarkupInjector from './MarkupInjector.js';


(async function () {

    const apiController = new APIController('d0b55c9378d0473eb89d96c3b2e1a01c', '00f9a24f25254ee4a3313f66fdbb0968');

    /** Get data */
    const token = await apiController.getToken();
    const [feturePlaylists, newReleases] =
        await Promise.all([apiController.getFeaturedPlaylist(token, 'us'), apiController.getNewReleases(token)]);
    
    /* Create and insert new releases */
    MarkupInjector.createWrapper('Популярные новые релизы', 'new-releases','content');
    newReleases.forEach(item =>new Album(item, 'new-releases'));

    /* Create and insert popular-playlist */
    MarkupInjector.createWrapper('Популярные плэйлисты', 'popular-playlists', 'content');
    feturePlaylists.forEach(item => new Playlist(item, 'popular-playlists'));
}());