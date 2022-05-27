import Logger from './Logger.js';

/** Base class for Artist, Album, Playlist */

export default class BaseView {
    imgUrl;
    id;
    type;
    html;

    constructor(src, id) {
        this.imgUrl = src;
        this.id = id;
    }

    /** 
     * Create new element, insert to document
     * @param {string} idParent - parent id of the new element. 
     */
    _create(idParent) {
        if ( !document.getElementById(idParent) ) {
            Logger.logCreateViewError('Не найден родительский элемент');
        }
        
        document.getElementById(idParent).insertAdjacentHTML('beforeend', this.html);        
    }

    /** 
     * Create wrapper for elements, insert wrapper to document
     * @param {string} title - wrapper title. 
     * @param {string} id - wrapper id. 
     * @param {string} idParent -  parent element id for wrapper. 
     */
    static createWrapper(title, id, idParent) {
        const  html = `
        <div class="content-item">
            <div class="content-item__header">
                <div class="content-item__title"><span>${title}</span>
            </div>
            </div>
        
            <div class="content-item__cards" id="${id}"></div>`;

        document.getElementById(idParent).insertAdjacentHTML('beforeend', html);
    }

}