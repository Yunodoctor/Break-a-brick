export class Paddle {
  constructor(positionX, positionY) {
    this.width = 150;
    this.height = 10;

    this.position = {
      x: positionX,
      y: positionY,
    };
  }

  draw(ctx) {}
}
