import { Artist } from "./Artist.js";

export class ArtistResponse {
    constructor(itemsJson, lengtn) {
        let artists = new Array();
        for (let i = 0; i < lengtn; i++) {
            artists.push( new Artist(itemsJson[i]) );
        }
        return artists;
    }
}