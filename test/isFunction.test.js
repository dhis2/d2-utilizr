import isFunction from '../src/isFunction';
import lodashIsFunction from 'lodash.isfunction';

describe('isFunction()', () => {
    it('should be lodash.isfunction', () => {
        expect(isFunction).to.equal(lodashIsFunction);
    });
});
