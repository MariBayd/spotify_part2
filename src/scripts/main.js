import {APIController} from './APIController';
import { UIController } from './UIController.js';
import {PlaylistResponse} from './PlaylistResponse.js'
import { AlbumResponse } from './AlbumsResponse.js';

const apiController = new APIController();
const uiController = new UIController();

const token = await apiController._getToken();
const feturePlaylistsJson = await apiController._getFeaturedPlaylist(token, 'us');
const newReleases = await apiController._getNewReleases(token);
const artists = await apiController._getArtistsBySearch(token, 'sting');
console.log(artists);


const newReleasesContainer = uiController.createCardContainer('Популярные новые релизы', 'new-releases');
uiController.insertItemToHtml(newReleasesContainer, 'content');
const albums = new AlbumResponse(newReleases, 10);
uiController.insertItemsToHtml(albums, 'new-releases');

const featuredPlaylists = uiController.createCardContainer('Популярные плэйлисты', 'popular-playlists');
uiController.insertItemToHtml(featuredPlaylists, 'content');
const playlists = new PlaylistResponse(feturePlaylistsJson, 10);
uiController.insertItemsToHtml(playlists, 'popular-playlists');
