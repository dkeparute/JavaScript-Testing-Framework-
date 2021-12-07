// function sum(a, b) {
//     return a + b;
// }

// module.exports = sum;

// FINITE yra baigtinė reikšmė, o finity, NaN yra nebaigtinė reikšmė
function sum(a, b) {
    if (typeof a !== 'number' ||
        typeof b !== 'number' ||
        !isFinite(a) ||
        !isFinite(b)) {
        return 'Error';
    }
    return a + b;
}

module.exports = sum;