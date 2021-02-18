import { endGame } from "../index.js";
const LOW_NUMBER = Math.pow(10, -6);
export class Ball {
  constructor(radius, speed, angle, posX, posY) {
    this.radius = radius;
    this.speed = speed;
    this.angle = angle;

    this.position = {
      x: posX,
      y: posY,
    };
  }

  bonunce() {
    this.speed = -1 * this.speed;
  }
  updatePosition() {
    let magnitudeX = Math.cos((this.angle * Math.PI) / 180);
    let magnitudeY = Math.sin((this.angle * Math.PI) / 180);

    magnitudeX = magnitudeX > LOW_NUMBER ? magnitudeX : 0;
    magnitudeY = magnitudeY > LOW_NUMBER ? magnitudeY : 0;

    this.position.y += magnitudeY * this.speed;
    this.position.x += magnitudeX * this.speed;
  }
  getPos(canvasWidth, canvasHeight, player) {
    this.updatePosition();

    if (this.position.x >= canvasWidth) {
      this.bonunce();
    }

    if (this.position.x <= 0) {
      this.bonunce();
    }

    if (this.position.y >= canvasHeight) {
    }

    if (this.position.y <= 0) {
      this.bonunce();
    }
    if (this.position.y - this.radius * 2 >= canvasHeight) {
      endGame();
      console.log("miss");
    }
    if (this.position.y + this.radius + player.height >= canvasHeight) {
      if (this.position.x >= player.position.x && this.position.x <= player.position.x + player.width) {
        this.bonunce();
        const ballPosition = player.width - player.position.x + player.width - this.position.x;
        console.log(ballPosition);
        const ballProcentage = ballPosition / player.width;
        //TODO: Fix paddle bounce angle
        this.angle = ballProcentage * 180;
      }
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
  }
}
