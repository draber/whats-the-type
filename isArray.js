import getType from "./getType.js";

/**
 * Check if a value is an array
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = [];
 * isArray(v1); // true 
 * const v2 = new Array(9);
 * isArray(v2); // true
 * const v3 = Array.from([1, 2, 3], x => x + x));
 * isArray(v3); // true
 */
const isArray = (value) => getType(value) === "array";

export default isArray;