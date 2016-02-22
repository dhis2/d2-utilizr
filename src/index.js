import isEmpty from './isEmpty';
import isArray from './isArray';
import isObject from './isObject';
import isString from './isString';

export {default as isEmpty} from './isEmpty';
export {default as isArray} from './isArray';
export {default as camelCaseToUnderscores} from './camelCaseToUnderscores';
// Type Checks

/**
 * Check if the value is a String
 *
 * @name isString
 * @param param Value to be checked
 * @returns {boolean} Returns true when the `param` is a String
 */
export {default as isString} from './isString';

/**
 * Check if a value is a number
 *
 * @name isNumber
 * @param param Value that will be checked if it is a number
 * @returns {boolean} Returns true when param is a Number otherwise false
 */
export function isNumber(param) {
    return typeof param === 'number' && Number.isFinite(param);
}

export {default as isNumeric} from './isNumeric';
export {default as isObject} from './isObject';
export {default as isFunction} from './isFunction';
export {default as isBoolean} from './isBoolean';

// isDefined
export function isDefined(param) {
    return typeof param !== 'undefined';
}

// isPrimitive
export function isPrimitive(param) {
    var type = typeof param;
    return type === 'string' || type === 'number' || type === 'boolean';
}

export {default as isIE} from './isIE';

// STRING

// stringReplaceAll
export function stringReplaceAll(str, matchValue, replaceValue, ignore) {
    return str.replace(new RegExp(matchValue.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), (ignore ? "gi" : "g")), (typeof(replaceValue) == "string") ? replaceValue.replace(/\$/g, "$$$$") : replaceValue);
}

// NUMBER

export {default as numberConstrain} from './numberConstrain';

export {default as numberToFixed} from './numberToFixed';


// ARRAY

// arrayPluck
export function arrayPluck(array, propertyName) {
    var newArray = [];
    var i;
    var len;
    var item;

    for (i = 0, len = array.length; i < len; i++) {
        item = array[i];

        newArray.push(item[propertyName]);
    }

    return newArray;
}

// arrayUnique
// TODO: Could be written as `return [...(new Set(array))];`
export function arrayUnique(array) {
    var newArray = [];
    var i = 0;
    var len = array.length;
    var item;

    for (; i < len; i++) {
        item = array[i];

        if (newArray.indexOf(item) === -1) {
            newArray.push(item);
        }
    }

    return newArray;
}

/**
 * Check if an array contains a specified item
 *
 * @param {Array} array The array to check for the item
 * @param {*} item The item to look for in the array
 * @returns {boolean} Returns true when the item is found, otherwise false
 */
export function arrayContains(array, item) {
    return Array.prototype.indexOf.call(array, item) !== -1;
}

// arrayFrom (dependency: isArray)
/**
 * Create an array from a value
 *
 * @param {*} param Value to transform to an array
 * @param {boolean} [isNewRef] Should return a new reference than the one from the `param` value
 * @returns {Array} The resulting array
 *
 * @requires isArray
 */
export function arrayFrom(param, isNewRef) {
    var toArray = function(iterable, start, end) {
        if (!iterable || !iterable.length) {
            return [];
        }

        // FIXME: This will never be called as the if check excludes type string
        if (typeof iterable === 'string') {
            iterable = iterable.split('');
        }

        if (supportsSliceOnNodeList) { // FIXME: This does not exist
            return slice.call(iterable, start || 0, end || iterable.length);
        }

        var array = [],
            i;

        // FIXME: start and end are always 0 and iterable.length
        start = start || 0;
        end = end ? ((end < 0) ? iterable.length + end : end) : iterable.length;

        for (i = start; i < end; i++) {
            array.push(iterable[i]);
        }

        return array;
    };

    if (param === undefined || param === null) {
        return [];
    }

    if (isArray(param)) {
        return (isNewRef) ? Array.prototype.slice.call(param) : param;
    }

    var type = typeof param;
    if (param && param.length !== undefined && type !== 'string' && (type !== 'function' || !param.apply)) {
        // TODO: This function call will always fail because of supportsSliceOnNodeList being undefined
        return toArray(param);
    }

    return [param];
}

// arrayTo (dependency: isString, isArray, isObject)
export function arrayTo(param) {
    if (isArray(param)) {
        return param;
    }

    if (isObject(param)) {
        var a = [];
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                a.push(param[key]);
            }
        }
        return a;
    }

    if (isString(param)) {
        return param.split();
    }

    return [];
}

// arrayClean (dependency: isEmpty)
// TODO: Could be written as `array.filter(isEmpty);`
export function arrayClean(array) {
    var results = [],
        i = 0,
        ln = array.length,// TODO: throws if the error is undefined
        item;

    for (; i < ln; i++) {
        item = array[i];

        if (!isEmpty(item)) {
            results.push(item);
        }
    }

    return results;
}

// arraySort (dependency: isString, isNumber, isArray)
export function arraySort(array, direction, key, emptyFirst) {
    // supports [number], [string], [{key: number}], [{key: string}], [[string]], [[number]]

    if (!isArray(array)) {
        return;
    }

    key = !!key || isNumber(key) ? key : 'name';

    array.sort( function(a, b) {
        // if object, get the property values
        if (isObject(a) && isObject(b)) {
            a = a[key];
            b = b[key];
        }

        // if array, get from the right index
        if (isArray(a) && isArray(b)) {
            a = a[key];
            b = b[key];
        }

        // string
        if (isString(a) && isString(b)) {
            a = a.toLowerCase();
            b = b.toLowerCase();

            if (direction === 'DESC') { // TODO: Case sensitive really required? Why not allow `desc`, `Desc` or `dEsC`?
                return a < b ? 1 : (a > b ? -1 : 0);
            }
            else {
                return a < b ? -1 : (a > b ? 1 : 0);
            }
        }

        // number
        else if (isNumber(a) && isNumber(b)) {
            return direction === 'DESC' ? b - a : a - b;
        }

        else if (a === undefined || a === null) {
            return emptyFirst ? -1 : 1;
        }

        else if (b === undefined || b === null) {
            return emptyFirst ? 1 : -1;
        }

        return -1;
    });

    return array;
}

// arrayReplace
export function arrayReplace(array, index, removeCount, insert) {
    if (insert && insert.length) {
        if (index < array.length) {
            array.splice.apply(array, [index, removeCount].concat(insert));
        } else {
            array.push.apply(array, insert);
        }
    } else {
        array.splice(index, removeCount);
    }
    return array;
}

// arrayInsert (dependency: arrayReplace)
export function arrayInsert(array, index, items) {
    return arrayReplace(array, index, 0, items);
}

// MISC

// clone
// TODO: Throw an error on empty `item` (Unexpected token u)
export function clone(item) {
    return JSON.parse(JSON.stringify(item));
}

// uuid
export function uuid() {
    var s4 = function() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
