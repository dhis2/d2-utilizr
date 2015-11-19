// boolean

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.isString = isString;
exports.isNumber = isNumber;
exports.isNumeric = isNumeric;
exports.isBoolean = isBoolean;
exports.isDefined = isDefined;
exports.isPrimitive = isPrimitive;
exports.isIE = isIE;
exports.isEmpty = isEmpty;
exports.numberConstrain = numberConstrain;
exports.arrayPluck = arrayPluck;
exports.arrayUnique = arrayUnique;
exports.arrayContains = arrayContains;
exports.arrayFrom = arrayFrom;
exports.arrayClean = arrayClean;

function isString(param) {
    return typeof param === 'string';
}

function isNumber(param) {
    return typeof param === 'number' && isFinite(param);
}

;

function isNumeric(param) {
    return !isNaN(parseFloat(param)) && isFinite(param);
}

;

var isArray = Array.isArray;

exports.isArray = isArray;
var isObject = (function () {
    return toString.call(null) === '[object Object]' ? function (param) {
        return param !== null && param !== undefined && toString.call(param) === '[object Object]' && param.ownerDocument === undefined;
    } : function (param) {
        return toString.call(param) === '[object Object]';
    };
})();

exports.isObject = isObject;
var isFunction = (function () {
    return typeof document !== 'undefined' && typeof document.getElementsByTagName('body') === 'function' ? function (value) {
        return !!value && toString.call(value) === '[object Function]';
    } : function (value) {
        return !!value && typeof value === 'function';
    };
})();

exports.isFunction = isFunction;

function isBoolean(param) {
    return typeof param === 'boolean';
}

function isDefined(param) {
    return typeof param !== 'undefined';
}

function isPrimitive(param) {
    var type = typeof param;
    return type === 'string' || type === 'number' || type === 'boolean';
}

;

function isIE() {
    var ua = window.navigator.userAgent;

    // test values
    // IE 10: ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
    // IE 11: ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
    // IE 12 / Spartan: ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // IE 12 => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

// dependency: isArray

function isEmpty(array, allowEmptyString) {
    return array == null || (!allowEmptyString ? array === '' : false) || isArray(array) && array.length === 0;
}

// number

function numberConstrain(number, min, max) {
    number = parseFloat(number);

    if (!isNaN(min)) {
        number = Math.max(number, min);
    }
    if (!isNaN(max)) {
        number = Math.min(number, max);
    }
    return number;
}

var numberToFixed = (function () {
    return 0.9.toFixed() !== '1' ? function (value, precision) {
        precision = precision || 0;
        var pow = math.pow(10, precision);
        return (math.round(value * pow) / pow).toFixed(precision);
    } : function (value, precision) {
        return value.toFixed(precision);
    };
})();

exports.numberToFixed = numberToFixed;
// array

function arrayPluck(array, propertyName) {
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

function arrayUnique(array) {
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

function arrayContains(array, item) {
    return Array.prototype.indexOf.call(array, item) !== -1;
}

// dependency: isArray

function arrayFrom(param, isNewRef) {
    var toArray = function toArray(iterable, start, end) {
        if (!iterable || !iterable.length) {
            return [];
        }

        if (typeof iterable === 'string') {
            iterable = iterable.split('');
        }

        if (supportsSliceOnNodeList) {
            return slice.call(iterable, start || 0, end || iterable.length);
        }

        var array = [],
            i;

        start = start || 0;
        end = end ? end < 0 ? iterable.length + end : end : iterable.length;

        for (i = start; i < end; i++) {
            array.push(iterable[i]);
        }

        return array;
    };

    if (param === undefined || param === null) {
        return [];
    }

    if (isArray(param)) {
        return isNewRef ? slice.call(param) : param;
    }

    var type = typeof param;
    if (param && param.length !== undefined && type !== 'string' && (type !== 'function' || !param.apply)) {
        return toArray(param);
    }

    return [param];
}

// dependency: isEmpty

function arrayClean(array) {
    var results = [],
        i = 0,
        ln = array.length,
        item;

    for (; i < ln; i++) {
        item = array[i];

        if (!isEmpty(item)) {
            results.push(item);
        }
    }

    return results;
}
