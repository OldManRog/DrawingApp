const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.querySelector('span');
const colorEl = document.getElementById('color');
const clearEl = document.querySelector('.clear');
console.log(clearEl)

const ctx = canvas.getContext('2d');

let size = 20;
let mouseClicked = false;
let color = 'black';
let x = undefined;
let y = undefined;

canvas.addEventListener('mousedown', (e) => {
    mouseClicked = true;

    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup', (e) => {
    mouseClicked = false;

     x = undefined;
     y = undefined;
})


canvas.addEventListener('mousemove', (e) => {
    if(mouseClicked){
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2, y2)
    drawLine(x, y, x2, y2);
    
    x = x2;
    y = y2;

    }
});

function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
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

colorEl.addEventListener('change', (e) => {
    color = e.target.value;
})

clearEl.addEventListener('click', () => {
    clearCanvas()
})

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updateSizeOnSpan() {
    sizeEl.innerHTML = ` ${size}`
}



/* function draw() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(x++,y);
    requestAnimationFrame(draw);

} */

/* draw(); */