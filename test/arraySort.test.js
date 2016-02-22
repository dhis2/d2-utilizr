import arraySort from '../src/arraySort';

describe('arraySort', () => {
    let sourceArray;

    beforeEach(() => {
        sourceArray = [{name: 'C'}, {name: 'A'}, {name: 'B'}];
    });

    it('should return undefined when the passed array is undefined', () => {
        expect(arraySort()).to.be.undefined;
    });

    it('should sort the array based on name for an array of objects', () => {
        expect(arraySort(sourceArray)).to.deep.equal([{name: 'A'}, {name: 'B'}, {name: 'C'}]);
    });

    it('should sort the array in the desc order when DESC is passed', () => {
        expect(arraySort(sourceArray, 'DESC')).to.deep.equal([{name: 'C'}, {name: 'B'}, {name: 'A'}]);
    });

    it('should still sort in ASC if DESC is not passsed as upper case', () => {
        expect(arraySort(sourceArray, 'desc')).to.deep.equal([{name: 'A'}, {name: 'B'}, {name: 'C'}]);
    });

    it('should sort on the specified property when the key is passed', () => {
        sourceArray = [
            {name: 'ANC', shortName: 'CNC'},
            {name: 'ANB', shortName: 'CNB'},
            {name: 'ANA', shortName: 'CNA'},
            {name: 'ANB', shortName: 'CNB'},
        ];

        expect(arraySort(sourceArray, 'asc', 'shortName')).to.deep.equal([
            {name: 'ANA', shortName: 'CNA'},
            {name: 'ANB', shortName: 'CNB'},
            {name: 'ANB', shortName: 'CNB'},
            {name: 'ANC', shortName: 'CNC'},
        ]);
    });

    it('should sort an array based on the given index ', () => {
        expect(arraySort([[1, 1], [2, 3],[4, 2]], 'asc', 1)).to.deep.equal([[1, 1], [4, 2], [2, 3]]);
    });

    it('should return empty values first', () => {
        expect(arraySort([1, null, undefined, 4, undefined, 2], undefined, undefined, false)).to.deep.equal([1, 2, 4, null, undefined, undefined]);
    });
});
