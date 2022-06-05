import Logger from './Logger.js';

/** Base class for Artist, Album, Playlist */

export default class BaseView {
    imgUrl;
    id;
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
        const parentElem = document.getElementById(idParent);
        if (!parentElem) {
            Logger.logError('Не найден родительский элемент');
        }
        
       parentElem.insertAdjacentHTML('beforeend', this.html);        
    }
}