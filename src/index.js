import Paddle from './classes/Paddle.js';

let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext('2d');

const { width: CANVAS_WIDTH, height: CANVAS_HEIGHT } = canvas.getBoundingClientRect();

// Create player
const player = new Paddle(10, 150, CANVAS_WIDTH, CANVAS_HEIGHT);
player.draw(ctx);

const gameLoop = () => {
  // The loop function has reached it's end. Keep requesting new frames
  window.requestAnimationFrame(gameLoop);
};

canvas.addEventListener('mouseenter', (e) => {
  console.log('entered');
});

canvas.addEventListener('mousemove', (e) => {
  //console.log(e.clientX);
  ctx.clearRect(player.position.x, player.position.y, CANVAS_WIDTH, CANVAS_HEIGHT);
  player.position.x = e.clientX;
  player.draw(ctx);
  ctx.restore();
});

canvas.addEventListener('mouseleave', (e) => {
  console.log('left');
});
