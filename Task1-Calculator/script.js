var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.button');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        screen.value += btntext;
    });
}

function pi() {
    screen.value = 3.14159265359;
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function clear() {
    screen.value = screen.value.substr(0, screen.value.lenght - 1);
}

function del() {
    screen.value = screen.value.toString().slice(0, -1)
}

function plusMinus() {
    if (screen.value.charAt(0) === "-") {
        screen.value = screen.value.slice(1);
    } else {
        screen.value = "-" + screen.value;
    }
}