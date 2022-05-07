import getType from "./getType.js";

/**
 * Check if a value is a plain object
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const value = {a:1, b:2};
 * isPlainObject(value); // true
 * getType(value) // "object"
 */
const isPlainObject = (value) => getType(value) === "object";

export default isPlainObject;