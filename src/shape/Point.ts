import IShape from "./Shape";

export default class Point implements IShape {
  constructor(public x: number, public y: number) {}

  toString() {
    return `(${this.x}, ${this.y})`;
  }

  get magnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
}
