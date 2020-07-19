// function checkAge(age) {
//   return(age >= 18) ? true : confirm('Родители разрешили?');
// }

// let age = prompt('Сколько тебе лет?', 0);
// checkAge(age);

// function checkAge(age) {
//   return (age >= 18) || confirm('Родители разрешили?');
// }

// let age = prompt('Сколько тебе лет?', 0);
// checkAge(age);

// /**
//  * Возвращает меньшее значение
//  * @param {number} a - первый аргумент
//  * @param {number} b - второй аргумент
//  */
// function min(a, b) {
//   return (a > b) ? b : a;
// }

// alert(min(2, 5));
// alert(min(3, -1));
// alert(min(1, 1));

// function pow(x, n) {
//   return Math.pow(x, n);
// }

// alert(pow(3, 2))
// alert(pow(3, 3))
// alert(pow(1, 100))

void function () {
  if (!localStorage.getItem('hello')) {
    alert('Привет новый пользователь!');
    localStorage.setItem('hello', true);
  } else {
    alert('Ооо, ты вернулся!')
  }
}();
