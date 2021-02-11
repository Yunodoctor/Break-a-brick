export default class Paddle {
  constructor(height, width, posX, posY) {
    this.width = width;
    this.height = height;

    this.position = {
      x: (posX - this.width) / 2,
      y: posY - height,
    };
  }

  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
