/**
 * Check if a value is an integer
 *
 * @name isInteger
 * @param param Value that will be checked if it is an integer
 * @returns {boolean} Returns true when param is a integer otherwise false
 */
export default function isInteger(param) {
    return (typeof param === 'number') && (parseFloat(param) == parseInt(param, 10)) && ! isNaN(param);
}
