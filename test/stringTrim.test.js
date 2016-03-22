import stringTrim from '../src/stringTrim';

describe('stringTrim', () => {
    it('should remove all spaces before first after last text char', () => {
        const value = ' str ';

        expect(stringTrim(value)).to.equal('str');
    });
    
    it('should throw an error when the passed value is not a string', () => {
        expect(() => stringTrim()).to.throw(`Cannot read property 'replace' of undefined`)
    });
});
