import {APIController} from './APIController.js';
import {Playlist} from './Playlist.js';
import { Album } from './Album.js';
import BaseView from './BaseView.js';



(async function () {

const apiController = new APIController()

/** Get data */
const token = await apiController.getToken();
const feturePlaylistsJson = await apiController.getFeaturedPlaylist(token, 'us');
const newReleases = await apiController.getNewReleases(token);

/* Create and insert new releases */
BaseView.createWrapper('Популярные новые релизы', 'new-releases','content');
const albums = newReleases.map((item)=> new Album(item, 'new-releases'));

/* Create and insert popular-playlist */
BaseView.createWrapper('Популярные плэйлисты', 'popular-playlists', 'content');
const playlists = feturePlaylistsJson.map((item)=>new Playlist(item, 'popular-playlists'));
}());