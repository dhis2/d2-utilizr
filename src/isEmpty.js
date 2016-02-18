import isArray from './isArray';
import isMap from 'lodash.ismap';
import isSet from 'lodash.isset';

export default function isEmpty(param, allowEmptyString) {
    return (param == null) ||
        (!allowEmptyString ? param === '' : false) ||
        (isArray(param) && param.length === 0) ||
        ((isMap(param) || isSet(param)) && param.size === 0);
}
