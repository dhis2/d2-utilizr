import {arrayContains} from '../src';

describe('arrayContains', () => {
    it('should return true if the item is in the array', () => {
        expect(arrayContains([1, 2, 3, 4], 1)).to.be.true;
    });

    it('should return false when the item is not in the array', () => {
        expect(arrayContains([1, 2, 3, 4], 5)).to.be.false;
    });

    it('should not deep compare on objects', () => {
        const sourceArray = [{name: 'A'}, {name: 'B'}, {name: 'B'}];

        expect(arrayContains(sourceArray, {name: 'A'})).to.be.false;
    });

    it('should return true for the same actual object', () => {
        const sourceArray = [{name: 'A'}, {name: 'B'}, {name: 'B'}];

        expect(arrayContains(sourceArray, sourceArray[0])).to.be.true;
    });
});
