const multip = require('../multip');

describe('Тестирование умножения двух чисел', () => {
    test('Умножение 1 на 1', () => {
        const result = multip(1, 1);
        expect(result).toBe(1);
    });

    test('Умножение 2 на 2', () => {
        const result = multip(2, 2);
        expect(result).toBe(4);
    });
});
