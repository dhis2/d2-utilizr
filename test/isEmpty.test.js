import {isEmpty} from '../src/';

describe('isEmpty', () => {
    it('should return true for an empty Array', () => {
        expect(isEmpty([])).to.be.true;
    });

    it('should return true for null', () => {
        expect(isEmpty(null)).to.be.true;
    });

    it('should return false for an empty object', () => {
        expect(isEmpty({})).to.be.false;
    });

    it('should return true for an empty string', () => {
        expect(isEmpty('')).to.be.true;
    });

    it('should return false when the allowEmptyString flag is passed', () => {
        expect(isEmpty('', true)).to.be.false;
    });

    it('should return false when the allowEmptyString flag is passed', () => {
        expect(isEmpty('', false)).to.be.true;
    });

    it('should return true when an empty Map is passed', () => {
        expect(isEmpty(new Map())).to.be.true;
    });

    it('should return false when a map with values is passed', () => {
        const mapWithValue = new Map([['key', 'value']]);

        expect(isEmpty(mapWithValue)).to.be.false;
    });

    it('should return true when an empty Set is passed', () => {
        expect(isEmpty(new Set())).to.be.true;
    });

    it('should return false when a Set with values is passed', () => {
        const setWithValue = new Set(['value1', 'value2']);

        expect(isEmpty(setWithValue)).to.be.false;
    });
});
