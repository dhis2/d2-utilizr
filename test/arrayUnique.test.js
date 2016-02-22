import {arrayUnique} from '../src';

describe('arrayUnique', () => {
    it('should return the unique numbers', () => {
        const sourceArray = [1, 1, 2, 3, 2, 4, 4, 3];

        expect(arrayUnique(sourceArray)).to.deep.equal([1, 2, 3, 4]);
    });

    it('should not do a deep compare', () => {
        const sourceArray = [{name: 'A'}, {name: 'B'}, {name: 'B'}];

        expect(arrayUnique(sourceArray)).to.deep.equal([{name: 'A'}, {name: 'B'}, {name: 'B'}]);
    });

    it('should remove the same objects', () => {
        const A = {name: 'A'};
        const B = {name: 'B'};

        expect(arrayUnique([A, A, B, B])).to.deep.equal([A, B]);
    });

    it('should remove duplicate undefined values', () => {
        expect(arrayUnique([undefined, undefined, undefined, undefined])).to.deep.equal([undefined]);
    });

    it('should throw an error when array is not defined', () => {
        expect(() => arrayUnique()).to.throw(`Cannot read property 'length' of undefined`);
    });
});
