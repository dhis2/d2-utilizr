import objectClean from '../src/objectClean';

describe('objectClean', () => {
    const sourceObject = {a: 1, b: undefined, c: null, d: [], e: new Map()};

    it('should remove properties that are empty according to isEmpty or the passed function', () => {

        expect(objectClean(sourceObject)).to.deep.equal({a: 1});
    });

    it('should throw an error when the passed object is undefined or null', () => {
        expect(() => objectClean()).to.throw(`Cannot convert undefined or null to object`)
    });

    it('should throw an error when the passed function is defined but not a function', () => {
        expect(() => objectClean(sourceObject, 1)).to.throw(`isEmptyFn is not a function`)
    });
});
