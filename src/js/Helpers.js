import { DEBOUNCE_TIMEOUT_DEFAULT } from "./Constans";

/**
 *  Limits the rate at which a function gets invoked
 *  @param {string} func - function
 *  @param {numb} timeout - delay value
 */
export function debounce(func, timeout = DEBOUNCE_TIMEOUT_DEFAULT) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

/**
 *  Return total pages
 *  @param {numb} total - total items
 *  @param {numb} limit - number of positions per page
 */
export function getCeilDiv(total, limit) {
  return Math.ceil(total / limit);
}

/**
 *  Returns an array of objects sorted by the sort field,
 *  sort field type is number
 *  @param {array of objects} items - items for sorting
 *  @param {string} sort -field to sort by
 */

export function sortingNumber(items, sort) {
  let sortedItems = [];
  if (typeof items[0][sort] === "number") {
    sortedItems = [...items].sort((a, b) => (a[sort] > b[sort] ? -1 : 1));
  } else return sortedItems;

  return sortedItems;
}

/**
 *  Returns an array of objects sorted by the sort field, 
 *  sort field type is string
 *  @param {array of objects} items - items for sorting
 *  @param {string} sort -field to sort by
 */

export function sortingString(items, sort) {
  let sortedItems = [];
  if (typeof items[0][sort] === "string") {
    sortedItems = [...items].sort((a, b) => a[sort].localeCompare(b[sort]));
  } else return sortedItems;

  return sortedItems;
}
