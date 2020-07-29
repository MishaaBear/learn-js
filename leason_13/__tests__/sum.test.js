const sum = require('../sum');

describe('Тестирование сложения двух чисел', () => {
    test('Сумма 1 и 1', () => {
        const result = sum(1, 1);
        expect(result).toBe(2);
    });

    test('Сумма 0.1 и 0.2', () => {
        const result = sum(0.1, 0.2);
        expect(result).toBe(0.3);
    });
});
