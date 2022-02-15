const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

const bird = new Image();
bird.src = './images/bird.png';
let birdX = 20;
const interval = birdSize = 24;

const pipeWidth = topPipeBottomY = 24;

let birdY = pipeGap = 200;
let dy = score = bestScore = 0;
let canvasSize = pipeX = 400;

canvas.onclick = () => (dy = 9)

setInterval(() => {
    c.beginPath();
    c.fillStyle = 'skyblue';
    c.fillRect(0, 0, canvas.width, canvas.height);
    birdY -= dy -= .5;
    c.drawImage(bird, birdX, birdY, birdSize * (524/374), birdSize);
    c.closePath();

    c.beginPath();
    pipeX -= 8;
    if(pipeX < -pipeWidth) {
        pipeX = canvas.width;
        topPipeBottomY = pipeGap * Math.random();
    }
    c.fillStyle = 'green';
    c.fillRect(pipeX, 0, pipeWidth, topPipeBottomY);
    c.fillRect(pipeX, topPipeBottomY + pipeGap, pipeWidth, canvas.height);
    c.closePath();

    c.beginPath();
    c.fillStyle = 'black';
    c.fillText(score++, 9, 25);
    bestScore = bestScore < score ? score : bestScore;
    c.fillText(`Best: ${bestScore}`, 9, 50);
    c.closePath();

    if(birdY > topPipeBottomY + pipeGap
        && pipeX < birdSize * (524/374) || birdY > canvas.height
        || birdY < topPipeBottomY
        && pipeX < birdSize * (524/374)) {
        dy = 0;
        birdY = 200;
        pipeX = canvas.width;
        score = 0;
    }
}, 24);