/**@type {HTMLCanvasElement}*/

let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d')

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let x = width/2;
let y = height/2;
let circleX = x;
let circleY = y;

// linear interpolation 😮
function lerp(start, end, t) {
    return start *(1-t)+end*t;
}

window.addEventListener('mousemove', (e)=>{
    x = e.clientX;  
    y = e.clientY;
})

function moveCircle() {
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = "#181818";
    circleX = lerp(circleX, x, .1)
    circleY = lerp(circleY, y, .1)
    ctx.beginPath();
    ctx.arc(circleX, circleY, 20, 0, 2*Math.PI)
    ctx.fill();

    requestAnimationFrame(moveCircle)
}
moveCircle()