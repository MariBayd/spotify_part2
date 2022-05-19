import BaseView from "./BaseView.js";


export class Album extends BaseView {
    _title;
    _artist;
    _type = 'album';


    constructor(itemJson) {
        super(itemJson.images[1].url, itemJson.id)
        this._title = itemJson.name;
        this._artist = itemJson.artists[0].name;
    }

    getHtml(){
        let  html = `
        <div class="card-music card-music_background content-item_position">
            <img class="card-music__img" src="${this._imgUrl}"/>
            <span title="${this._title}" class="card-music__playlist-name">${this._title}</span>
            <a class="card-music__link" href="#">
            <span class="card-music__playlist-singer">${this._artist}</span></a>
        </div>`;
    return html;
    }
}