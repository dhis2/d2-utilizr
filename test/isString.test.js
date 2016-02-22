import isString from '../src/isString';
import lodashIsString from 'lodash.isstring';

describe('isString()', () => {
    it('should be lodash.isstring', () => {
        expect(isString).to.equal(lodashIsString);
    });
});
