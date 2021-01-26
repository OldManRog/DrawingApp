const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.querySelector('span');

const ctx = canvas.getContext('2d');

let size = 20;
let mouseClicked = false;

canvas.addEventListener('mousedown', (e) => {
    mouseClicked = true;
})

canvas.addEventListener('mouseup', (e) => {
    mouseClicked = false;
})


canvas.addEventListener('mousemove', (e) => {
    if(mouseClicked){
    const x = e.offsetX
    const y = e.offsetY

    drawCircle(x,y)
    }
});

function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
}

increaseBtn.addEventListener('click',(e) => {
    size += 5;

    if(size > 50) {
        size = 50
    }

    console.log(size)
    updateSizeOnSpan()
})

decreaseBtn.addEventListener('click',(e) => {
    size -= 5;

    if(size < 5) {
        size = 5
    }

    updateSizeOnSpan()
})

function updateSizeOnSpan() {
    sizeEl.innerHTML = ` ${size}`
}

/* function draw() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(x++,y);
    requestAnimationFrame(draw);

} */

/* draw(); */