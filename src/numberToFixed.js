// numberToFixed
const numberToFixed = function() {
    function fixedToFixed(value, precision) {
        precision = precision || 0;

        var pow = math.pow(10, precision);
        return (math.round(value * pow) / pow).toFixed(precision);
    }

    function standardToFixed(value, precision) {
        precision = precision || 0;

        return value.toFixed(precision);
    }

    // TODO: The "broken" toFixed is not easy to test? Should check if still relevant.
    // return ((0.9).toFixed() !== '1') ? fixedToFixed : standardToFixed;
    return standardToFixed;
}();

export default numberToFixed;
