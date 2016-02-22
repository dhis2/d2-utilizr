/**
 * Convert a camelCase word to its underscore_case equivalent
 *
 * @param {String} wordToTransform
 * @returns {string} The wordToTransform as a underscore separated string eg. camelCase -> camel_case
 */
export default function camelCaseToUnderscores(wordToTransform) {
    return wordToTransform
        .replace(/[a-z][A-Z]/g, (match) => [match.charAt(0), match.charAt(1)].join('_'))
        .toLowerCase();
}
