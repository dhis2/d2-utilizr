import numberDecimals from '../src/numberDecimals';

describe('numberDecimals', () => {
    it('should return 0 for integers', () => {
        expect(numberDecimals(15)).to.equal(0);
        expect(numberDecimals(-15e2)).to.equal(0);
    });

    it('should return the correct number of decimals for positive numbers', () => {
        expect(numberDecimals(4.3)).to.equal(1);
        expect(numberDecimals(4.000001)).to.equal(6);
        expect(numberDecimals(4e-3)).to.equal(3);
    });

    it('should return the correct number of decimals for negative numbers', () => {
        expect(numberDecimals(-4.3)).to.equal(1);
        expect(numberDecimals(-4.000001)).to.equal(6);
        expect(numberDecimals(-4e-3)).to.equal(3);
    });
});
