import arrayDifference from '../src/arrayDifference';

describe('arrayDifference', () => {
    let sourceArray1;
    let sourceArray2;

    beforeEach(() => {
        sourceArray1 = [1, 2];
        sourceArray2 = [1, 3];
    });

    it('should return "sourceArray1 - sourceArray2" when biDirectional is falsy', () => {
        expect(arrayDifference(sourceArray1, sourceArray2)).to.deep.equal([2]);
    });

    it('should return "sourceArray1 - sourceArray2 concat sourceArray2 - sourceArray1" when biDirectional is true', () => {
        expect(arrayDifference(sourceArray1, sourceArray2, true)).to.deep.equal([2, 3]);
    });
});
