/*
import {APIController} from './APIController.js';
import { PlaylistResponse } from './PlaylistResponse.js';
import { UIController } from './UIController.js';

const apiController = new APIController();
const uiController = new UIController();
const token = await apiController._getToken();

const playlistsJson = await apiController._getCurrentUsersPlaylists(token);

const playlistsContainer = uiController.createCardContainer('Мои плейлисты', 'my-playlists');
uiController.insertItem(playlistsContainer, 'content');
const playlists = new PlaylistResponse(playlistsJson, '5');
uiController.insertItemsToHtml(playlists, 'users-playlists');
*/
