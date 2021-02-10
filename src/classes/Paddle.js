export default class Paddle {
  constructor(height, width, posX, posY) {
    this.width = 150;
    this.height = 10;

    this.position = {
      x: posX / 2,
      y: posY - height,
    };
    console.log(this);
  }

  draw(ctx) {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
