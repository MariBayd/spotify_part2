import  BaseView  from "./BaseView.js";

/** Сlass Playlist */
export class Playlist extends BaseView {
    title;
    description;
    type = 'playlist';

    constructor(itemJson) {
        itemJson.images.length ? super(itemJson.images[0].url, itemJson.id) : super("artist.svg", itemJson.id); 
        this.title = itemJson.name;
        this.description = itemJson.description;
    }

    /** 
    * Get html for playlist
    */
    getHtml() {
        let html = `
        <div class="card-music card-music_background content-item_position">
            <img class="card-music__img" src="${this.imgUrl}"/>
            <span title="${this.title}" class="card-music__playlist-name">${this.title}</span>
            <a class="card-music__link" href="#">
            <span class="card-music__playlist-singer">${this.description}</span></a>
        </div>`;
        return html;
    }

}