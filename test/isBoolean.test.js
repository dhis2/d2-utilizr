import isBoolean from '../src/isBoolean';
import lodashIsBoolean from 'lodash.isboolean';

describe('isBoolean()', () => {
    it('should be lodash.isboolean', () => {
        expect(isBoolean).to.equal(lodashIsBoolean);
    });
});
