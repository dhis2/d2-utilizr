import {isPrimitive} from '../src/index';

describe('isPrimitive', () => {
    it('should return false for an object', () => {
        expect(isPrimitive({})).to.be.false;
    });

    it('should return false for an array', () => {
        expect(isPrimitive([])).to.be.false;
    });

    it('should return true for a string', () => {
        expect(isPrimitive('Mark')).to.be.true;
    });

    it('should return true for a boolean', () => {
        expect(isPrimitive(true)).to.be.true;
        expect(isPrimitive(false)).to.be.true;
    });

    it('should return true for a number', () => {
        expect(isPrimitive(1)).to.be.true;
        expect(isPrimitive(0)).to.be.true;
    });
});
