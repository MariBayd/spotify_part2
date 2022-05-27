import BaseView from './BaseView.js';

/** Сlass Album */
export class Album extends BaseView {
    title;
    artist;

    constructor(itemJson, idParent) {
        itemJson.images.length
            ? super(itemJson.images[1].url, itemJson.id)
            : super('artist.svg', itemJson.id); 
        
        this.title = itemJson.name;
        this.artist = itemJson.artists[0].name;
        
        this.html = `
        <div class="card-music card-music_background content-item_position">
            <img class="card-music__img" src="${this.imgUrl}"/>
            <span title="${this.title}" class="card-music__playlist-name">${this.title}</span>
            <a class="card-music__link" href="#">
            <span class="card-music__playlist-singer">${this.artist}</span></a>
        </div>`;

        this._create(idParent);
    }

}