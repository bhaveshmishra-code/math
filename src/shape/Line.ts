import Geometry from "../core/Geometry";
import Point from "./Point";
import IShape from "./Shape";

export default class Line implements IShape {
  constructor(public a: Point, public b: Point) {}

  get length(): number {
    return Geometry.distance(this.a, this.b);
  }

  get midPoint(): Point {
    return new Point((this.a.x + this.b.x) / 2, (this.a.y + this.b.y) / 2);
  }

  get gradient(): number {
    return Geometry.radianToDegress(
      Math.atan((this.b.y - this.a.y) / (this.b.x - this.a.x))
    );
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(this.a.x, this.a.y);
    ctx.lineTo(this.b.x, this.b.y);
    ctx.stroke();
    ctx.restore();
  }
}
