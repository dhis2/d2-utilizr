import {uuid} from '../src';

describe('uuid', () => {
    const uuidRegExp = /[A-z0-9]{8}\-[A-z0-9]{4}\-[A-z0-9]{4}\-[A-z0-9]{4}\-[A-z0-9]{12}/;

    it('should return a string', () => {
        expect(uuid()).to.be.a('string');
    });

    it('should return a string that matches the uuidRegExp', () => {
        expect(uuidRegExp.test(uuid())).to.be.true;
    });

    it('should not return the same value', () => {
        expect(uuid()).not.to.equal(uuid());
    });
});
