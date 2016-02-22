import arrayPluck from '../src/arrayPluck';

describe('arrayPluck', () => {
    let sourceArray;

    beforeEach(() => {
        sourceArray = [{
            shortName: 'Accute Flaccid Paral (Deaths < 5 yrs)',
            name: 'Accute Flaccid Paralysis (Deaths < 5 yrs)',
        }, {
            shortName: 'AFP follow-up',
            name: 'Acute Flaccid Paralysis (AFP) follow-up',
        }, {
            shortName: 'AFP new',
            name: 'Acute Flaccid Paralysis (AFP) new',
        }, {
            shortName: 'AFP referrals',
            name: 'Acute Flaccid Paralysis (AFP) referrals',
        }, {
            shortName: 'Additional notes related to facility',
            name: 'Additional notes related to facility',
        }];
    });

    it('should pick property from the items in the array', () => {
        expect(arrayPluck(sourceArray, 'shortName')).to.deep.equal([
            'Accute Flaccid Paral (Deaths < 5 yrs)',
            'AFP follow-up',
            'AFP new',
            'AFP referrals',
            'Additional notes related to facility',
        ]);
    });

    it('should use undefined when the value does not exist', () => {
        sourceArray.push({
            name: 'Hello',
        });

        expect(arrayPluck(sourceArray, 'shortName')).to.deep.equal([
            'Accute Flaccid Paral (Deaths < 5 yrs)',
            'AFP follow-up',
            'AFP new',
            'AFP referrals',
            'Additional notes related to facility',
            undefined,
        ]);
    });

    it('should only return undefined if the values do not exist', () => {
        expect(arrayPluck(sourceArray, 'myProperty')).to.deep.equal([
            undefined, undefined, undefined, undefined, undefined,
        ]);
    });

    it('should throw an error when an item is not an object', () => {
        sourceArray.push(undefined);

        expect(() => arrayPluck(sourceArray, 'name')).to.throw(`Cannot read property 'name' of undefined`);
    });
});
