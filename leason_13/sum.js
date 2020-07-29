/**
 * 
 * @param {number} a - Первое число
 * @param {number} b - Второе число
 */
module.exports = function sum(a, b) {
    if (a < 1 || b < 1) {
        return (a * 10 + b * 10) / 10;
    }
    return a + b;
}

