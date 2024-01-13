alert('Для разблокировки формы нажмите - ZXC')

    // Проверка пароля по наличию трех символов

let input = document.forms[0].Password;

input.onblur = () => {
if(!input.value.includes('$', ':', '-')) {
    input.classList.add('invalid');
    error.innerHTML = 'Пожалуйста, введите правильный пароль, содержатся символы: $ : -';
}
}

input.onfocus = () => {
if(input.classList.contains('invalid')) {
    input.classList.remove('invalid');
    error.innerHTML = '';
}
};

    // Разблокировка формы нажатием клавиш

function hotKeys(funk, ...codes) {
    let pressed = new Set();
    document.addEventListener('keydown', function (e) {
        pressed.add(e.code);
        for(let code of codes){
            if(!pressed.has(code)){
            return;
        }

    }
    pressed.clear();
    funk();
})
document.addEventListener('keyup', function (e) {
pressed.delete(e.code);
})
}
    //   Разблокировка формы нажатием клавиш
hotKeys(() => {
    //  Удаление атрибута disabled
let name = document.querySelector('.name');
name.removeAttribute('disabled');
}, 'KeyZ', 'KeyX', 'KeyC');

hotKeys(() => {
    //  Удаление атрибута disabled
    let name = document.querySelector('.name1');
    name.removeAttribute('disabled');
    }, 'KeyZ', 'KeyX', 'KeyC');

hotKeys(() => {
    //  Удаление атрибута disabled
    let name = document.querySelector('.name2');
    name.removeAttribute('disabled');
    }, 'KeyZ', 'KeyX', 'KeyC');
