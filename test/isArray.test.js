import {isArray} from '../src';

describe('isArray', () => {
    it('should be the Array.isArray function', () => {
        expect(isArray).to.equal(Array.isArray);
    });
});
