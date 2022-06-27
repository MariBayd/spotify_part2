/**
 *  Limits the rate at which a function gets invoked
 *  @param {string} func - function
 *  @param {numb} timeout - delay value
 */
export function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

/**
 *  return total pages
 *  @param {numb} totalItems - total items
 *  @param {numb} limit - number of positions per page
 */
export function totalPages(totalItems, limit) {
  return Math.ceil(totalItems / limit);
}

export const getPagesArray = (totalPages) => {
  let result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }

  return result;
};
