export default function camelCaseToUnderscores(wordToTransform) {
    return wordToTransform
        .replace(/[a-z][A-Z]/g, (match) => [match.charAt(0), match.charAt(1)].join('_'))
        .toLowerCase();
}
