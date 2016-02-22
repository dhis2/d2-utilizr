import isIterable from '../src/isIterable';

describe('isIterable()', () => {
    it('should return true if the value is an Array', () => {
        expect(isIterable([])).to.be.true;
    });

    it('should return true if the value is a Map', () => {
        expect(isIterable(new Map())).to.be.true;
    });

    it('should return true if the value is a Set', () => {
        expect(isIterable(new Set())).to.be.true;
    });

    it('should return true if the value is a String', () => {
        expect(isIterable('My value')).to.be.true;
    });

    it('should return true for an empty string', () => {
        expect(isIterable('')).to.be.true;
    });

    it('should return false for an Object', () => {
        expect(isIterable({})).to.be.false;
    });

    it('should return true for an object with an iterator', () => {
        let iterableObject = {
            [Symbol.iterator]: () => {}
        };

        expect(isIterable(iterableObject)).to.be.true;
    });
});
