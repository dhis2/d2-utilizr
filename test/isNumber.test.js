import isNumber from '../src/isNumber';

describe('isNumber', () => {
    it('should return true if the value is 0', () => {
        expect(isNumber(0)).to.be.true;
    });

    it('should return true if the number is negative', () => {
        expect(isNumber(-20)).to.be.true;
    });

    it('should return true if the number is a float', () => {
        expect(isNumber(2.444)).to.be.true;
    });

    it('should not regard Infinity as a number', () => {
        expect(isNumber(Infinity)).to.be.false;
        expect(isNumber(-Infinity)).to.be.false;
    });

    it('should return false for things other than numbers', () => {
        expect(isNumber(arguments)).to.be.false;
        expect(isNumber([1, 2, 3])).to.be.false;
        expect(isNumber(true)).to.be.false;
        expect(isNumber(new Date)).to.be.false;
        expect(isNumber(new Error)).to.be.false;
        expect(isNumber(undefined)).to.be.false;
        expect(isNumber(() => {})).to.be.false;
        expect(isNumber({ 'a': 1 })).to.be.false;
        expect(isNumber(/x/)).to.be.false;
        expect(isNumber('a')).to.be.false;
        expect(isNumber(Symbol())).to.be.false;
    });
});
