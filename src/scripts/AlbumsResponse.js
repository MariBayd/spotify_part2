import { Album } from "./Album.js";

export class AlbumResponse {
    
    constructor(itemsJson, lengtn) {
        let albums = new Array();
        for (let i = 0; i < lengtn; i++) {
            albums.push( new Album(itemsJson[i]) );
        }
        return albums;
    }
}