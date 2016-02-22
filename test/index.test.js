import {isString} from '../src';
import {isBoolean} from '../src';
import {camelCaseToUnderscores} from '../src';

describe('Utilizr index', () => {
    describe('isString ', () => {
        it('should be the isString function', () => {
            expect(isString).to.equal(require('../src/isString').default);
        });
    });

    describe('isBoolean', () => {
        it('should be the isBoolean function', () => {
            expect(isBoolean).to.equal(require('../src/isBoolean').default);
        });
    });

    describe('camelCaseToUnderscores', () => {
        it('should be the camelCaseToUnderscores function', () => {
            expect(camelCaseToUnderscores).to.equal(require('../src/camelCaseToUnderscores').default);
        });
    });
});
