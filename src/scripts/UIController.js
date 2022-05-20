
/** Сlass requests to the api spotify */

export class UIController {

/** 
 * Create layout for card with album.
 * @param {string} imgSrc - The path for album img.
 * @param {string} singer - The album artist.
 * @param {string} title - The album title.
 */
    
    createCardContainer(title, id) {
        let  html = `
        <div class="content-item">
            <div class="content-item__header">
                <div class="content-item__title"><span>${title}</span>
            </div>
            </div>
        
            <div class="content-item__cards" id="${id}"></div>`;
        return html;
    }

/** 
* insert Item to Html
* @param {html} item - 
* @param {string} idParent - 
*/
    insertItemToHtml(item, idParent) {
        let elem = document.querySelector('#' + idParent);
        elem.insertAdjacentHTML('beforeend', item);
    }

 /** 
* insert Items to Html
* @param {html} items - items for insert to html
* @param {string} idParent - parent for items
*/
    insertItemsToHtml (items, idParent ) {

        [...items].forEach( item =>  {
            this.insertItemToHtml( item.getHtml(), idParent );
        });
    }

/** 
* Remove children by parent id
* @param {string} idParent - parent
*/
    removeChildrenById(idParent) {
        let parent = document.getElementById(idParent);
        if (parent == null) return;
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
      
}












