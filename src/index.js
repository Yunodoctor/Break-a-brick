import { Ball } from "./classes/Ball.js";
import Paddle from "./classes/Paddle.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const { width: CANVAS_WIDTH, height: CANVAS_HEIGHT, left: CANVAS_LEFT } = canvas.getBoundingClientRect();
let isStart = false;
let animFrame = "";
// Create player
const player = new Paddle(10, 150, CANVAS_WIDTH, CANVAS_HEIGHT);
player.draw(ctx);

// Create ball
let ball = new Ball(10, 3, 90, 150, 100);
ball.draw(ctx);

const gameLoop = () => {
  if (isStart) {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // The loop function has reached it's end. Keep requesting new frames
    ball.getPos(CANVAS_WIDTH, CANVAS_HEIGHT, player);
    ball.draw(ctx);
    player.draw(ctx);

    animFrame = window.requestAnimationFrame(gameLoop);
  } else {
    window.cancelAnimationFrame(animFrame);
  }
};

canvas.addEventListener("mouseenter", (e) => {
  console.log("entered");
  if (!isStart) {
    isStart = true;
    gameLoop();
  }
});

canvas.addEventListener("mousemove", (e) => {
  const relativeMousePosition = e.clientX - CANVAS_LEFT;

  if (relativeMousePosition <= player.width / 2) {
    player.position.x = 0;
  } else if (relativeMousePosition >= CANVAS_WIDTH - player.width / 2) {
    player.position.x = CANVAS_WIDTH - player.width;
  } else {
    player.position.x = relativeMousePosition - player.width / 2;
  }

  ctx.restore();
});

canvas.addEventListener("mouseleave", (e) => {
  isStart = false;
});

export const endGame = () => {
  window.cancelAnimationFrame(animFrame);
  ball = new Ball(10, 3, 90, 150, 100);
  ball.draw(ctx);
};
