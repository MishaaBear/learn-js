// for (let i = 2; i < 10; i++) {
//     if (i % 2 !== 0) continue;

//     console.log(i);
// }

// for (;;) {
//     const num = prompt('Задайте число', 100);
//     if (+num === 100 || !num) {
//         break;
//     }
// }

const n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) continue nextPrime;
    }
  
    alert(i);
}
