import  BaseView  from './BaseView.js';
import {defaultViewImg} from './Constans.js'

/** Сlass Artist */
export default class Artist extends BaseView {
    name;
   
    constructor(itemJson, idParent) {
        itemJson.images.length
        ? super(itemJson.images[1].url, itemJson.id)
        : super(defaultViewImg, itemJson.id); 

        this.name = itemJson.name;

        this.html = `
        <div class="card-music card-music_background content-item_position">
            <img class="card-music__img" src="${this.imgUrl}"/>
            <span title="${this.name}" class="card-music__playlist-name">${this.name}</span>
            <a class="card-music__link" href="#">
            <span class="card-music__playlist-singer">Исполнитель</span></a>
        </div>`;

        this._create(idParent);
    }
}