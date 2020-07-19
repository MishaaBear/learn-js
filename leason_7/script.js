let login = prompt('Введите логин!');

if (login === 'Админ') {
    alert('Отлично, теперь введите пароль!')
    let pas = prompt('Введите пароль!');
    
    if (pas === 'Я главный') {
        alert('Здравствуйте!')
    } else if (!pas) {
        alert('Отменено!');
    } else {
        alert('Неверный пароль!');
    }
} else if (!login) {
    alert('Отменено!');
} else {
    alert('Я вас не знаю!');
}
