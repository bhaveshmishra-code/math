import Point from "./Point";
import IShape from "./Shape";

export default class Triangle implements IShape {
  constructor(
    public A: Point,
    public B: Point,
    public C: Point,
    public fillColor: string = "#000"
  ) {}

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = this.fillColor;
    ctx.moveTo(this.A.x, this.A.y);
    ctx.lineTo(this.B.x, this.B.y);
    ctx.lineTo(this.C.x, this.C.y);
    ctx.fill();
    ctx.restore();
  }
}
