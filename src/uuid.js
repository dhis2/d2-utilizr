/**
 * Generates a universally unique identifier
 *
 * @see https://en.wikipedia.org/wiki/Universally_unique_identifier
 *
 * @returns {string} The uuid
 */
export default function uuid() {
    var s4 = function() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
