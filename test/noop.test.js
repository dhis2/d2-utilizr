import noop from '../src/noop';

describe('no-op', () => {
    it('should be a function', () => {
        expect(noop).to.be.a('function');
    });

    it('should return undefined', () => {
        expect(noop()).to.be.undefined;
    });

    it('should still return undefined when params are passed', () => {
        expect(noop(0, 1, 2)).to.be.undefined;
    });
});
