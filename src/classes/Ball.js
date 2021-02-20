import { endGame } from "../index.js";
const LOW_NUMBER = Math.pow(10, -6);
export class Ball {
  constructor(radius, speed, angle, posX, posY) {
    this.radius = radius;
    this.speed = speed;
    this.angle = angle;
    this.bounced = false;

    this.position = {
      x: posX,
      y: posY,
    };
  }

  bonunce(wall) {
    this.speed = -1 * this.speed;
    this.angle = this.angle + 90 < 360 ? this.angle + 90 : this.angle - 270;

    console.log(this.angle);
    if (false) {
      switch (wall) {
        case "right":
          this.angle = this.angle - 90;
          break;
        case "left":
          this.angle = this.angle - 90;
          this.bounced = true;
          break;
        case "top":
          this.angle = this.angle;
          break;
        case "bottom":
          this.angle = this.angle;
          break;
        default:
          break;
      }
    }
  }
  updatePosition() {
    let magnitudeX = Math.cos((this.angle * Math.PI) / 180);
    let magnitudeY = Math.sin((this.angle * Math.PI) / 180);

    this.position.y += magnitudeY * this.speed;
    this.position.x += magnitudeX * this.speed;
  }
  getPos(canvasWidth, canvasHeight, player) {
    if (this.position.x + this.radius > canvasWidth) {
      this.bonunce("right");
    } else if (this.position.x - this.radius < 0) {
      this.bonunce("left");
    } else if (this.position.y - this.radius < 0) {
      this.bonunce("top");
    }
    // if (this.position.y - this.radius >= canvasHeight) {
    //   endGame();
    //   console.log("miss");
    // }
    else if (this.position.y + this.radius >= canvasHeight) {
      this.bonunce("bottom");
      //endGame();
      //console.log("miss");
    }
    this.updatePosition();
    // if (this.position.y + this.radius + player.height >= canvasHeight) {
    //   if (this.position.x >= player.position.x && this.position.x <= player.position.x + player.width) {
    //     const ballPosition = player.width - player.position.x + player.width - this.position.x;
    //     //console.log(ballPosition);
    //     const ballProcentage = ballPosition / player.width;
    //     //TODO: Fix paddle bounce angle
    //     this.angle = ballProcentage * 180;
    //     console.log(this.angle);
    //     this.bonunce();
    //   }
    // }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
  }
}
