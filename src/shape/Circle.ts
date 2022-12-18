import Point from "./Point";
import IShape from "./Shape";

export default class Circle implements IShape {
  constructor(
    public center: Point,
    public radius: number,
    public fillColor: string = "#000"
  ) {}

  get area() {
    return Math.PI * this.radius * this.radius;
  }

  get perimeter() {
    return 2 * Math.PI * this.radius;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}
