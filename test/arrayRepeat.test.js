import arrayRepeat from '../src/arrayRepeat';

describe('arrayRepeat', () => {
    let sourceArray;

    beforeEach(() => {
        sourceArray = [1, 2, 3];
    });

    it('should return a single array containing the original array repeated three times', () => {
        expect(arrayRepeat(sourceArray, 3)).to.deep.equal([1, 2, 3, 1, 2, 3, 1, 2, 3]);
    });

    it('should return a single array containing the original array repeated three times', () => {
        expect(arrayRepeat(sourceArray, 3, true)).to.deep.equal([1, 1, 1, 2, 2, 2, 3, 3, 3]);
    });

    it('should return original array if no number is passed', () => {
        expect(arrayRepeat(sourceArray)).to.deep.equal([1, 2, 3]);
    });

    it('should return an empty array if 0 is passed', () => {
        expect(arrayRepeat(sourceArray, 0)).to.deep.equal([]);
    });

    it('should return an empty array if 0 is passed with by index', () => {
        expect(arrayRepeat(sourceArray, 0, true)).to.deep.equal([]);
    });

    it('should throw an error when the array is undefined', () => {
        expect(() => arrayRepeat(undefined)).to.throw(`Cannot repeat array of type undefined`);
    });
});
