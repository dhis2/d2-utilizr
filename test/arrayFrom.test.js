import arrayFrom from '../src/arrayFrom';

describe('arrayFrom', () => {
    it('should return a split string', () => {
        expect(arrayFrom('myName')).to.deep.equal(['myName']);
    });

    it('should return an empty array on null', () => {
        expect(arrayFrom(null)).to.deep.equal([]);
    });

    it('should return an empty array on undefined', () => {
        expect(arrayFrom(undefined)).to.deep.equal([]);
    });

    it('should return the same array', () => {
        const sourceArray = [{name: 'A'}, {name: 'B'}, {name: 'B'}];

        expect(arrayFrom(sourceArray)).to.equal(sourceArray);
    });

    it('should return a identical array', () => {
        const sourceArray = [{name: 'A'}, {name: 'B'}, {name: 'B'}];

        expect(arrayFrom(sourceArray, true)).to.deep.equal(sourceArray);
        expect(arrayFrom(sourceArray, true)).not.to.equal(sourceArray);
    });

    it('should return the the function in an array', () => {
        function someFunction() {}

        expect(arrayFrom(someFunction)).to.deep.equal([someFunction]);
    });
});
