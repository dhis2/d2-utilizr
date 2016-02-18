import {arrayTo} from '../src';

describe('arrayTo', () => {
    it('should return the passed array', () => {
        const sourceArray = [{name: 'A'}, {name: 'B'}, {name: 'B'}];

        expect(arrayTo(sourceArray)).to.equal(sourceArray);
    });

    it('should a split string', () => {
        expect(arrayTo('myData')).to.deep.equal(['myData']);
    });

    it('should return an empty array on undefined', () => {
        expect(arrayTo(undefined)).to.deep.equal([]);
    });

    it('should return an empty array for null', () => {
        expect(arrayTo(null)).to.deep.equal([]);
    });

    it('should return the values from object properties as an array', () => {
        const sourceObject = {
            name: 'ANC First Visit',
            shortName: 'ANC1',
            level: 1,
        };

        expect(arrayTo(sourceObject)).to.deep.equal(['ANC First Visit', 'ANC1', 1]);
    });

    it('should not take properties from the prototype', () => {
        const sourceObject = Object.create({
            name: 'ANC First Visit',
            shortName: 'ANC1',
            level: 1,
        });
        sourceObject.hello = 'World';

        expect(arrayTo(sourceObject)).to.deep.equal(['World']);
    });
});
