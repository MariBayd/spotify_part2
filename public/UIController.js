
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
        
            <div class="content-item__cards" id="${id}">
        </div>`;
        return html;
    }

/** 
* insert Item to Html
* @param {html} item - 
* @param {string} id_parent - 
*/
    insertItemToHtml(item, id_parent) {
        let elem = document.querySelector('#' + id_parent);
        elem.insertAdjacentHTML('beforeend', item);
    }
  
    insertItemsToHtml (itemsJson, id_parent ) {

        [...itemsJson].forEach( item =>  {
            this.insertItemToHtml( item.getHtml(), id_parent );
        });
    }

    removeChildrenById(id_parent) {
        let parent = document.getElementById(id_parent);
        if (parent == null) return;
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
      
}












