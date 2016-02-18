import {isDefined} from '../src/index';

describe('isDefined', () => {
    it('should return true for an object', () => {
        expect(isDefined({})).to.be.true;
    });

    it('should return true for an empty string', () => {
        expect(isDefined('')).to.be.true;
    });

    it('should return true for a null value', () => {
        expect(isDefined(null)).to.be.true;
    });

    it('should return true for a false value', () => {
        expect(isDefined(false)).to.be.true;
    });

    it('should return false for undefined', () => {
        expect(isDefined(undefined)).to.be.false;
    });

    it('should return false for an undefined object property', () => {
        const object = {};

        expect(isDefined(object.value)).to.be.false;
    });

    it('should return false for a value specifically set to undefined', () => {
        const object = {
            value: undefined,
        };

        expect(isDefined(object.value)).to.be.false;
    });
});
