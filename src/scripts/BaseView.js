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
        if ( !document.getElementById(idParent) ) {
            Logger.logError('Не найден родительский элемент');
        }
        
        document.getElementById(idParent).insertAdjacentHTML('beforeend', this.html);        
    }
}