import objectApplyIf from '../src/objectApplyIf';

describe('objectApplyIf', () => {
    it('should return original properties in "object" and the different ones in "config"', () => {
        let object = {id: 1};
        const config = {id: 2, name: 'Name'};

        expect(objectApplyIf(object, config)).to.deep.equal({id: 1, name: 'Name'});
    });
});
