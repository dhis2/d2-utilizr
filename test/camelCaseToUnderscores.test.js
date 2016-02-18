import camelCaseToUnderscores from '../src/camelCaseToUnderscores';

describe('camelCaseToUnderscores', () => {
    it('should translate a camelCase name to underscores', () => {
        expect(camelCaseToUnderscores('isString')).to.equal('is_string');
    });

    it('should translate a PascalCase name to underscores', () => {
        expect(camelCaseToUnderscores('PascalCase')).to.equal('pascal_case');
    });
});
