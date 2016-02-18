import {arrayReplace} from '../src';

describe('arrayReplace', () => {
    let sourceArray;

    beforeEach(() => {
        sourceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    });

    it('should remove the specified amount of values', () => {
        expect(arrayReplace(sourceArray, 0, 5)).to.deep.equal([6, 7, 8, 9, 10]);
    });

    it('should modify the original array', () => {
        arrayReplace(sourceArray, 0, 5);

        expect(sourceArray.length).to.equal(5);
        expect(sourceArray[0]).to.equal(6);
    });

    it('should replace the removed items with the provided item', () => {
        expect(arrayReplace(sourceArray, 0, 5, 'a')).to.deep.equal(['a', 6, 7, 8, 9, 10]);
    });

    it('should replace the removed items with the provided items', () => {
        expect(arrayReplace(sourceArray, 0, 5, ['a', 'b', 'c', 'd'])).to.deep.equal(['a', 'b', 'c', 'd', 6, 7, 8, 9, 10]);
    });

    it('should still insert all the items passed when the removeCount is lower', () => {
        expect(arrayReplace(sourceArray, 0, 2, ['a', 'b', 'c', 'd'])).to.deep.equal(['a', 'b', 'c', 'd', 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('should append the insert items when the index is longer than the source', () => {
        expect(arrayReplace(sourceArray, 12, 5, ['a', 'b', 'c', 'd'])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'b', 'c', 'd']);
    });

    it('should throw an error when the array is undefined', () => {
        expect(() => arrayReplace(undefined, 0, 2)).to.throw(`Cannot read property 'splice' of undefined`);
    });

    it('should not remove anything when remove count is undefined', () => {
        expect(arrayReplace(sourceArray, 0, undefined)).to.deep.equal(sourceArray);
    });

    it('should not remove anything when the index is undefined', () => {
        expect(arrayReplace(sourceArray, undefined, 2)).to.deep.equal(sourceArray);
    });
});
