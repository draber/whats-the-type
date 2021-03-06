/**
 * Type detection beyond `typeof`
 * 
 * Copyright (C) 2022  Dieter Raber
 * https://opensource.org/licenses/MIT
 */
import getType from "./getType.js";

/**
 * Check if a value is a String
 * @param {*} value The value to check
 * @returns {Boolean}
 * @example
 * const v1 = "foo";
 * isString(v1); // true
 * 
 * const v2 = new String("foo");
 * isString(v2); // true
 * 
 * const v3 = String('foo');
 * isString(v3); // true
 */
const isString = (value) => getType(value) === "String";

export default isString;
