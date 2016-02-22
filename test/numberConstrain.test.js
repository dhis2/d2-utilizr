import {numberConstrain} from '../src';

describe('numberConstrain', () => {
    it('should return the max number', () => {
        expect(numberConstrain(15, 5, 10)).to.equal(10);
    });

    it('should return the min value', () => {
        expect(numberConstrain(4, 5, 10)).to.equal(5);
    });

    it('should return the value', () => {
        expect(numberConstrain(6, 5, 10)).to.equal(6);
    });

    it('should return the max', () => {
        expect(numberConstrain(10.0, 5, 10)).to.equal(10);
    });

    it('should return the value when the min is NaN', () => {
        expect(numberConstrain(7, NaN, 10)).to.equal(7);
    });

    it('should return the value when the max is NaN', () => {
        expect(numberConstrain(7, 5, NaN)).to.equal(7);
    });

    it('should still return the min when the max is NaN', () => {
        expect(numberConstrain(7, 10, NaN)).to.equal(10);
    });

    it('should still return the max when the min is NaN', () => {
        expect(numberConstrain(13, NaN, 12)).to.equal(12);
    });
});
