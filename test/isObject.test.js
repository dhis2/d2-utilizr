import isObject from '../src/isObject';
import lodashIsObject from 'lodash.isobject';

describe('isObject()', () => {
    it('should return true for objects', () => {
        expect(isObject({})).to.be.true;
    });

    it('should not return true for an array', () => {
        expect(isObject([])).to.be.false;
    });

    it('should return true for functions', () => {
        expect(isObject(() => {})).to.be.true;
    });

    it('should return true for Number object', () => {
        expect(isObject(new Number(1))).to.be.true;
    });
});
