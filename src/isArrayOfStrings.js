import isString from './isString';
import isArray from './isArray';

/**
 * Check if an array consists of strings
 *
 * @param {Array} arrayToCheck The array to be checked for string values
 * @returns {boolean} True when the array contains just string otherwise false
 */
export default function isArrayOfStrings(arrayToCheck) {
    return isArray(arrayToCheck) && arrayToCheck.reduce((currentStatus, value) => currentStatus && isString(value), true);
}
