let number = prompt('Число?');

if (number > 0) {
    alert('1');
} else if (number < 0) {
    alert('-1');
} else {
    alert('0');
}

let number2 = prompt('Число?');
let msg = (number > 0) ? 1 : (number < 0) ? -1 : 0;
alert(msg);
