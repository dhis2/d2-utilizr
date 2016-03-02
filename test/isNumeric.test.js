import isNumeric from '../src/isNumeric';

describe('isNumeric', () => {
    it('should return true for a number string', () => {
        expect(isNumeric('01')).to.be.true;
    });

    it('should return true for a regular number', () => {
        expect(isNumeric(10)).to.be.true;
    });

    it('should not regard infinity as a numeric', () => {
        expect(isNumeric(Infinity)).to.be.false;
        expect(isNumeric(-Infinity)).to.be.false;
    });

    it('should return false for NaN', () => {
        expect(isNumeric(NaN)).to.be.false;
    });

    it('should return false for things other than numbers', () => {
        expect(isNumeric(arguments)).to.be.false;
        expect(isNumeric([1, 2, 3])).to.be.false;
        expect(isNumeric(true)).to.be.false;
        expect(isNumeric(new Date)).to.be.false;
        expect(isNumeric(new Error)).to.be.false;
        expect(isNumeric(undefined)).to.be.false;
        expect(isNumeric(() => {})).to.be.false;
        expect(isNumeric({ 'a': 1 })).to.be.false;
        expect(isNumeric(/x/)).to.be.false;
        expect(isNumeric('a')).to.be.false;
        expect(isNumeric(Symbol())).to.be.false;
    });
});
