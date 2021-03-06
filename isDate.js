/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import getType from "./getType.js";

/**
 * Check if a value is a Date object
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = new Date();
 * isDate(v1); // true
 */
const isDate = (value) => getType(value) === "Date";

export default isDate;
