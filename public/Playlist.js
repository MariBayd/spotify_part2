import { DataItem } from "./DataItem.js";

export class Playlist extends DataItem {
    _title;
    _description;
    _type = 'playlist';

    constructor(itemJson) {
        super(itemJson.images[0].url, itemJson.id )
        this._title = itemJson.name;
        this._description = itemJson.description;
    }

    getHtml() {
        let  html = `
        <div class="card-music card-music_background content-item_position">
            <img class="card-music__img" src="${this._imgUrl}"/>
            <span title="${this._title}" class="card-music__playlist-name">${this._title}</span>
            <a class="card-music__link" href="#">
            <span class="card-music__playlist-singer">${this._description}</span></a>
        </div>`;
    return html;
    }

}