import numberToFixed from '../src/numberToFixed';

describe('numberToFixed', () => {
    let numObj;

    beforeEach(() => {
        numObj = 12345.6789;
    });

    it('should return 1 for 0.9', () => {
        expect(numberToFixed(0.95, 0)).to.equal('1');
    });

    it('should return 0 for 0.4944', () => {
        expect(numberToFixed(0.4944, 0)).to.equal('0');
    });

    it('should return a non decimal number', () => {
        expect(numberToFixed(numObj)).to.equal('12346');
    });

    it('should return a single decimal', () => {
        expect(numberToFixed(numObj, 1)).to.equal('12345.7');
    });

    it('should add zeroes if the precision is larger than the number', () => {
        expect(numberToFixed(numObj, 6)).to.equal('12345.678900');
    });

    it('should return the rounded number for minus values', () => {
        expect(numberToFixed(-2.34, 1)).to.equal('-2.3');
    });

    it('should return the rounded number for minus values', () => {
        expect(numberToFixed(-2.36, 1)).to.equal('-2.4');
    });
});
