import isArrayOfStrings from '../src/isArrayOfStrings';

describe('isArrayOfStrings()', () => {
    it('should be a function', () => {
        expect(isArrayOfStrings).to.be.instanceOf(Function);
    });

    it('should return true for an array of strings', () => {
        expect(isArrayOfStrings(['Mark', 'John'])).to.be.true;
    });

    it('should return false for an array of objects', () => {
        expect(isArrayOfStrings([{}, {}])).to.be.false;
    });
});
