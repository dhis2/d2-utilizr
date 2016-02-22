import {clone} from '../src';

describe('clone', () => {
    it('should return a similar version of the object', () => {
        const sourceObject = {
            name: 'ANC First Visit',
            shortName: 'ANC1',
            level: 1,
        };

        expect(clone(sourceObject)).to.deep.equal(sourceObject);
    });

    it('should throw error on undefined', () => {
        expect(() => clone()).to.throw('Unexpected token u');
    });

    it('should return null on null', () => {
        expect(clone(null)).to.equal(null);
    });

    it('should return a sourceObject without methods', () => {
        const sourceObject = {
            name: 'ANC First Visit',
            shortName: 'ANC1',
            level: 1,

            shortNameName() {
                return this.name + this.shortName;
            }
        };

        expect(clone(sourceObject)).to.deep.equal({
            name: 'ANC First Visit',
            shortName: 'ANC1',
            level: 1,
        });
    });
});
