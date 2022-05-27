/** Сlass inserts markup into html */

export default class MarkupInjector {

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