const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

canvas.addEventListener('mousedown', () => {

});

function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
}