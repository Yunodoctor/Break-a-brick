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

  getPos(canvasWidth, canvasHeight, player) {
    this.position.y += 2 * this.speed;

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

    if (this.position.y >= -player.height + canvasHeight) {
      if (
        this.position.x === player.position.x ||
        this.position.x === player.width ||
        (this.position.x > player.position.x && this.position.x < player.position.x + player.width)
      ) {
        this.bonunce();
        const ballPosition = player.width - player.position.x + player.width - this.position.x;
        console.log(ballPosition);
        const ballProcentage = ballPosition / player.witdh;
        console.log(ballProcentage * 100 + "%");
      } else {
        console.log("miss");
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
