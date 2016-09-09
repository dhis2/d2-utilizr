import {isString} from '../src';
import {isBoolean} from '../src';
import {isNumber} from '../src';
import {camelCaseToUnderscores} from '../src';
import {stringReplaceAll} from '../src';
import {arrayContains} from '../src';
import {arrayPluck} from '../src';
import {arrayFrom} from '../src';
import {arrayUnique} from '../src';
import {isDefined} from '../src';
import {isPrimitive} from '../src';
import {arrayTo} from '../src';
import {arrayClean} from '../src';
import {arraySort} from '../src';
import {arrayReplace} from '../src';
import {arrayInsert} from '../src';
import {objectClean} from '../src';
import {isIE, clone, uuid, isArrayOfStrings, isIterable} from '../src';

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

    describe('isNumber', () => {
        it('should be the isNumber function', () => {
            expect(isNumber).to.equal(require('../src/isNumber').default);
        });
    });

    describe('camelCaseToUnderscores', () => {
        it('should be the camelCaseToUnderscores function', () => {
            expect(camelCaseToUnderscores).to.equal(require('../src/camelCaseToUnderscores').default);
        });
    });

    describe('stringReplaceAll', () => {
        it('should be the stringReplaceAll function', () => {
            expect(stringReplaceAll).to.equal(require('../src/stringReplaceAll').default);
        });
    });

    describe('arrayContains', () => {
        it('should be the arrayContains function', () => {
            expect(arrayContains).to.equal(require('../src/arrayContains').default);
        });
    });

    describe('arrayPluck', () => {
        it('should be the arrayPluck function', () => {
            expect(arrayPluck).to.equal(require('../src/arrayPluck').default);
        });
    });

    describe('arrayFrom', () => {
        it('should be the arrayFrom function', () => {
            expect(arrayFrom).to.equal(require('../src/arrayFrom').default);
        });
    });

    describe('arrayTo', () => {
        it('should be the arrayTo function', () => {
            expect(arrayTo).to.equal(require('../src/arrayTo').default);
        });
    });

    describe('arrayUnique', () => {
        it('should be the arrayUnique function', () => {
            expect(arrayUnique).to.equal(require('../src/arrayUnique').default);
        });
    });

    describe('arrayClean', () => {
        it('should be the arrayClean function', () => {
            expect(arrayClean).to.equal(require('../src/arrayClean').default);
        });
    });

    describe('arraySort', () => {
        it('should be the arraySort function', () => {
            expect(arraySort).to.equal(require('../src/arraySort').default);
        });
    });

    describe('arrayReplace', () => {
        it('should be the arrayReplace function', () => {
            expect(arrayReplace).to.equal(require('../src/arrayReplace').default);
        });
    });

    describe('arrayInsert', () => {
        it('should be the arrayInsert function', () => {
            expect(arrayInsert).to.equal(require('../src/arrayInsert').default);
        });
    });

    describe('isDefined', () => {
        it('should be the isDefined function', () => {
            expect(isDefined).to.equal(require('../src/isDefined').default);
        });
    });

    describe('isPrimitive', () => {
        it('should be the isPrimitive function', () => {
            expect(isPrimitive).to.equal(require('../src/isPrimitive').default);
        });
    });

    describe('isIE', () => {
        it('should be the isIE function', () => {
            expect(isIE).to.equal(require('../src/isIE').default);
        });
    });

    describe('clone', () => {
        it('should be the clone function', () => {
            expect(clone).to.equal(require('../src/clone').default);
        });
    });

    describe('uuid', () => {
        it('should be the uuid function', () => {
            expect(uuid).to.equal(require('../src/uuid').default);
        });
    });

    describe('isArrayOfStrings', () => {
        it('should be the isArrayOfStrings function', () => {
            expect(isArrayOfStrings).to.equal(require('../src/isArrayOfStrings').default);
        });
    });

    describe('isIterable', () => {
        it('should be the isIterable function', () => {
            expect(isIterable).to.equal(require('../src/isIterable').default);
        });
    });

    describe('objectClean', () => {
        it('should be the objectClean function', () => {
            expect(objectClean).to.equal(require('../src/objectClean').default);
        });
    });
});
