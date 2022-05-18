import { Playlist } from "./Playlist.js";

export class PlaylistResponse {
    
    constructor(itemsJson, lengtn) {
        let playlists = new Array();
        for (let i = 0; i < lengtn; i++) {
            playlists.push( new Playlist(itemsJson[i]) );
        }
        return playlists;
    }

}