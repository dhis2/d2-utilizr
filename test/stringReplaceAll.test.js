import {stringReplaceAll} from '../src';

describe('stringReplaceAll', () => {
    it('should return replace all the occurances in the given value', () => {
        const value = 'MarkMark';

        expect(stringReplaceAll(value, 'Ma', 'De')).to.equal('DerkDerk');
    });

    it('should return the correct replaced string when matching case insensitive', () => {
        const value = 'MarkMark';

        expect(stringReplaceAll(value, 'mar', 'Jon', true)).to.equal('JonkJonk');
    });

    it('should replace values with the results of the replacer function', () => {
        const value = 'MarkMark';
        const replacer = (match) => {
            return match + match;
        };

        expect(stringReplaceAll(value, 'Mar', replacer)).to.equal('MarMarkMarMark');
    });
});
