import isString from './isString';

export default function isArrayOfStrings(arrayToCheck) {
    return Array.isArray(arrayToCheck) && arrayToCheck.reduce((currentStatus, value) => currentStatus && isString(value), true);
}
