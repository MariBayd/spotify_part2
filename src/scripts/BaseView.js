export default class BaseView {
    imgUrl;
    _id;
    type;

    constructor(src, id) {
        this.imgUrl = src;
        this._id = id;
    }

}