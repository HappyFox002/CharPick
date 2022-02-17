const chars = [
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З',
    'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р',
    'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ',
    'Ы', 'Э', 'Ю', 'Я'
]

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let timer;

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function replace(time, it, elem, max) {
    window.clearTimeout(timer);
    timer = setTimeout(function () {
        const symbol = document.querySelector('.char');
        symbol.textContent = chars[elem];
        if (elem == chars.length) {
            elem = 0;
        }
        if (it < max) { 
            it = it + 1;
            elem = elem + 1;
        }
        replace(time, it, elem, max);
    }, time);
}

window.onload = function () { 
    const btn = document.querySelector('.title');

    btn.addEventListener('click', function () {
        let pick = getRandomInt(31, 93);
        console.log('Выбор символа: ' + pick);
        replace(50, 0, 0, pick);
    });
}