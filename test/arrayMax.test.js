import arrayMax from '../src/arrayMax';

describe('arrayMax', () => {
    it('should return the highest value in the array', () => {
        const sourceArray = [1,4,2,3];

        expect(arrayMax(sourceArray)).to.equal(4);
    });

    it('should throw an error when the passed value is not an array', () => {
        expect(() => arrayMax()).to.throw(`Cannot read property 'length' of undefined`)
    });
});
