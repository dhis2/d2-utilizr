import isString from 'lodash.isstring';

export default function isIterable(checkForIterator) {
    return Boolean((checkForIterator || isString(checkForIterator)) && checkForIterator[Symbol.iterator]);
}
