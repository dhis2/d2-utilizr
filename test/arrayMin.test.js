import arrayMin from '../src/arrayMin';

describe('arrayMin', () => {
    it('should return the lowest value in the array', () => {
        const sourceArray = [1,4,2,3];

        expect(arrayMin(sourceArray)).to.equal(1);
    });

    it('should throw an error when the passed value is not an array', () => {
        expect(() => arrayMin()).to.throw(`Cannot read property 'length' of undefined`)
    });
});
