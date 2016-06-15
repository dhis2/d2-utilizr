import {numberIsFinite} from '../src';

describe('numberIsFinite', () => {
    it('should return false', () => {
        expect(numberIsFinite(Infinity)).to.equal(false);
    });
    
    it('should return false', () => {
        expect(numberIsFinite(NaN)).to.equal(false);
    });
    
    it('should return false', () => {
        expect(numberIsFinite(-Infinity)).to.equal(false);
    });
    
    it('should return true', () => {
        expect(numberIsFinite(0)).to.equal(true);
    });
    
    it('should return true', () => {
        expect(numberIsFinite(2e64)).to.equal(true);
    });
    
    it('should return false', () => {
        expect(numberIsFinite('0')).to.equal(false);
    });
    
    it('should return false', () => {
        expect(numberIsFinite(null)).to.equal(false);
    });
});
