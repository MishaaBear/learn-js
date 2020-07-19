/**
 * Функция сложения двух чисел
 * @param {number} a - первое число
 * @param {number} b - второе число
 */
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw Error('Передано не число');
  }

  return a + b;
}

const summ = sum(1, 1);
console.log(summ);

const summ2 = sum(1, 2);
console.log(summ2);

const summ3 = sum('hfhfhfh', 2);
console.log(summ3);
