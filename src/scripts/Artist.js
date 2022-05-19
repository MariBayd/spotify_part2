import  BaseView  from "./BaseView.js";

export class Artist extends BaseView {
    _name;
    _type = 'artist';

      constructor(itemJson) {
        super(itemJson.images[0].url, itemJson.id);
        this._name = itemJson.name;
    }

    SetImg(imgSrc) {
        this._imgUrl = imgSrc;       
    }

    SetName(name) {
        this._name = name;      
    }

    SetId(id) {
        this._id = id; 
    }

    getHtml() {
        let  html = `
        <div class="card-music card-music_background content-item_position">
            <img class="card-music__img" src="${this._imgUrl}"/>
            <span title="${this._name}" class="card-music__playlist-name">${this._name}</span>
            <a class="card-music__link" href="#">
            <span class="card-music__playlist-singer">Исполнитель</span></a>
        </div>`;
    return html;
    }
}