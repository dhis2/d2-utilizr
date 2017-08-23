/**
 * 
 * Repeats content of array by structure or by index, returns flattened array.
 * 
 * @param   {array}   array 
 * @param   {number}  n 
 * @param   {boolean} [byIndex=false] 
 * @returns {array}
 *
 * @example
 * const values = [1, 2, 3];
 * arrayRepeat(values, 3) // returns: [1, 2, 3, 1, 2, 3, 1, 2, 3]
 *
 * @example
 * const values = [1, 2, 3];
 * arrayRepeat(values, 3, true) // returns: [1, 1, 1, 2, 2, 2, 3, 3, 3]
 */
export default function arrayRepeat(array, n=1, byIndex=false) {
    if (typeof array === 'undefined') {
        throw `Cannot repeat array of type undefined`;
    }

    if (byIndex) {
        return [].concat.apply([], array.map((item, i) => Array(n).fill(array[i])));
    }
    return [].concat.apply([], Array.apply(null, Array(n)).map(() => array));
};

