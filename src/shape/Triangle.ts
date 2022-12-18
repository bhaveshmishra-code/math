import Geometry from "../core/Geometry";
import Point from "./Point";
import IShape from "./Shape";

export default class Triangle implements IShape {
  constructor(
    public A: Point,
    public B: Point,
    public C: Point,
    public fillColor: string = "#000"
  ) {}

  get area(): number {
    const val =
      this.A.x * (this.B.y - this.C.y) +
      this.B.x * (this.C.y - this.A.y) +
      this.C.x * (this.A.y - this.B.y);
    return Math.abs(val / 2);
  }

  get sideLength(): number[] {
    const ab = Math.round(Geometry.distance(this.A, this.B));
    const bc = Math.round(Geometry.distance(this.B, this.C));
    const ca = Math.round(Geometry.distance(this.C, this.A));
    return [ab, bc, ca];
  }

  get angles(): string[] {
    const ab = Math.round(Geometry.distance(this.A, this.B));
    const bc = Math.round(Geometry.distance(this.B, this.C));
    const ca = Math.round(Geometry.distance(this.C, this.A));
    const angleA = Geometry.radianToDegress(
      Math.acos((ab * ab + ca * ca - bc * bc) / (2 * ab * ca))
    );
    const angleB = Geometry.radianToDegress(
      Math.acos((ab * ab + bc * bc - ca * ca) / (2 * ab * bc))
    );
    const angleC = Geometry.radianToDegress(
      Math.acos((ca * ca + bc * bc - ab * ab) / (2 * ca * bc))
    );
    return [angleA.toFixed(2), angleB.toFixed(2), angleC.toFixed(2)];
  }

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
