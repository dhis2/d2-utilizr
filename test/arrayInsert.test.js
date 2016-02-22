import arrayInsert from '../src/arrayInsert';

describe('arrayInsert', () => {
    let sourceArray;

    beforeEach(() => {
        sourceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    });

    it('should append the items to the end of the array', () => {
        expect(arrayInsert(sourceArray, undefined, ['a', 'b', 'c'])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'b', 'c']);
    });

    it('should insert the items in place of the passed index', () => {
        expect(arrayInsert(sourceArray, 2, ['a', 'b', 'c'])).to.deep.equal([1, 2, 'a', 'b', 'c', 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('should not insert a undefined value if the items param is undefined', () => {
        expect(arrayInsert(sourceArray, 2, undefined)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('should throw an error when the source is not an array', () => {
        expect(() => arrayInsert(undefined, 0, 2)).to.throw(`Cannot read property 'splice' of undefined`);
    });
});
