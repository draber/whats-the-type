import getType from "./getType.js";

/**
 * Check if a value is a number
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = 1;
 * isNumber(v1); // true
 * const v2 = new Number(1);
 * isNumber(v2); // true
 * const v3 = 1.1;
 * isNumber(v3); // true
 * const v4 = 42n;
 * isNumber(v4); // false
 * isBigInt(v4); // true
 */
const isNumber = (value) => getType(value) === "number";

export default isNumber;

