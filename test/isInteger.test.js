import isInteger from '../src/isInteger';

describe('isInteger', () => {
    it('should return true if the value is 0', () => {
        expect(isInteger(0)).to.be.true;
    });

    it('should return true if the number is positive integer', () => {
        expect(isInteger(17)).to.be.true;
        expect(isInteger(10e3)).to.be.true;
        expect(isInteger(0xFF)).to.be.true;
    });

    it('should return true if the number is negative integer', () => {
        expect(isInteger(-20)).to.be.true;
        expect(isInteger(-10e3)).to.be.true;
    });

    it('should return false if the number is a float', () => {
        expect(isInteger(2.444)).to.be.false;
        expect(isInteger(10e-3)).to.be.false;
        expect(isInteger(-4e-3)).to.be.false;
    });

    it('should not regard NaN as an integer', () => {
        expect(isInteger(NaN)).to.be.false;
    });

    it('should not regard Infinity as an integer', () => {
        expect(isInteger(Infinity)).to.be.false;
        expect(isInteger(-Infinity)).to.be.false;
    });

    it('should return false for things other than numbers', () => {
        expect(isInteger(arguments)).to.be.false;
        expect(isInteger([1, 2, 3])).to.be.false;
        expect(isInteger(true)).to.be.false;
        expect(isInteger(new Date)).to.be.false;
        expect(isInteger(new Error)).to.be.false;
        expect(isInteger(undefined)).to.be.false;
        expect(isInteger(() => {})).to.be.false;
        expect(isInteger({ 'a': 1 })).to.be.false;
        expect(isInteger(/x/)).to.be.false;
        expect(isInteger('a')).to.be.false;
        expect(isInteger(Symbol())).to.be.false;
    });
});
