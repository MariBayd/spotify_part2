/** Base class for Artist, Album, Playlist */

export default class BaseView {
    imgUrl;
    id;
    type;

    constructor(src, id) {
        this.imgUrl = src;
        this.id = id;
    }

}