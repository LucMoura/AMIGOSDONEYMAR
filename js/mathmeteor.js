const meteoro = document.querySelector('.meteoro');
const maxHeight = 625;
const maxWidth = 1361;

function meteoroale() {
    const randomTOP = (Math.random() * 100) * (maxHeight - 80);
    const randmLeft = (Math.random() * 100) * (maxWidth - 80);

    meteoro.computedStyleMap.top = randomTOP + 'px';
}

setInterval(meteoroale, 500)