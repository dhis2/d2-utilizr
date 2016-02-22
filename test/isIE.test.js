import {isIE} from '../src';

describe('isIE', () => {
    it('should return true for IE10 ', () => {
        const userAgent = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

        expect(isIE(userAgent)).to.equal(10);
    });

    it('should return true for IE11', () => {
        const userAgent = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

        expect(isIE(userAgent)).to.equal(11);
    });

    it('should return true for IE12', () => {
        const userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

        expect(isIE(userAgent)).to.equal(12);
    });

    it('should return false for the Chrome user agent', () => {
        const userAgent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36';

        expect(isIE(userAgent)).to.be.false;
    });

    it('should return false for the Firefox user agent', () => {
        const userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1';

        expect(isIE(userAgent)).to.be.false;
    });

    it('should use the userAgent from the window object', () => {
        const userAgent = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        global.window = {
            navigator: {
                userAgent,
            },
        };

        expect(isIE()).to.equal(10);
    });
});
