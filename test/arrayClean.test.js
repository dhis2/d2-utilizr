import arrayClean from '../src/arrayClean';

describe('arrayClean', () => {
    it('should remove the empty values from the array', () => {
        const sourceArray = [undefined, null, true, '', {}];

        expect(arrayClean(sourceArray)).to.deep.equal([true, {}]);
    });

    it('should throw an error when the passed value is not an array', () => {
        expect(() => arrayClean()).to.throw(`Cannot read property 'length' of undefined`)
    });
});
