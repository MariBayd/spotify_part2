import {APIController} from './APIController.js';
import { UIController } from './UIController.js';
import {Playlist} from './Playlist.js';
import { Album } from './Album.js';



(async function () {

const apiController = new APIController()
const uiController = new UIController();

/** Get data */
const token = await apiController.getToken();
const feturePlaylistsJson = await apiController.getFeaturedPlaylist(token, 'us');
const newReleases = await apiController.getNewReleases(token);

/** Create and insert new releases */

const newReleasesContainer = uiController.createCardContainer('Популярные новые релизы', 'new-releases');
uiController.insertItemToHtml(newReleasesContainer, 'content');
const albums = newReleases.map((item)=> new Album(item));
uiController.insertItemsToHtml(albums, 'new-releases');

/** Create and insert popular-playlist */
const featuredPlaylists = uiController.createCardContainer('Популярные плэйлисты', 'popular-playlists');
uiController.insertItemToHtml(featuredPlaylists, 'content');
const playlists = feturePlaylistsJson.map((item)=>new Playlist(item));
uiController.insertItemsToHtml(playlists, 'popular-playlists');
}());