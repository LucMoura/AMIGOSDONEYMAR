const nave = document.querySelector('.nave');
let isMovingup = false;
let ismovingdown = false;
let ismovingright = false;
let ismovingleft = false;
let horizontalPosition = 0;
let verticalPosition = 0;
const maxHeight = 625;
const maxWidth = 1361;

function moveNave() {
    if (isMovingup && verticalPosition > 0) {
        verticalPosition -= 5;
    }
    if (ismovingdown && verticalPosition < maxHeight) {
        verticalPosition += 5;
    }
    if (ismovingright && horizontalPosition < maxWidth) {
        horizontalPosition += 5;
    }
    if (ismovingleft && horizontalPosition > 0) {
        horizontalPosition -= 5;
    }
    nave.style.top = verticalPosition + 'px';
    nave.style.left = horizontalPosition + 'px';
    requestAnimationFrame(moveNave);
}

document.addEventListener('keydown', (event) => {
    switch (event.key.toLowerCase()) {
        case 'w':
            isMovingup = true;
            break;
        case 's':
            ismovingdown = true;
            break;
        case 'd':
            ismovingright = true;
            break;
        case 'a':
            ismovingleft = true;
            break;
    }
});

document.addEventListener('keyup', (event) => {
    switch (event.key.toLowerCase()) {
        case 'w':
            isMovingup = false;
            break;
        case 's':
            ismovingdown = false;
            break;
        case 'd':
            ismovingright = false;
            break;
        case 'a':
            ismovingleft = false;
            break;
    }
});

moveNave();
