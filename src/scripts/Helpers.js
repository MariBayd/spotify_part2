/** 
*  Limits the rate at which a function gets invoked
*  @param {string} func - function
*  @param {numb} timeout - delay value
*/
export function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}