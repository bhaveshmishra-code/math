import IShape from "../shape/Shape";

export default class Graph {
  public ctx: CanvasRenderingContext2D;
  constructor(public canvasId: string) {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.ctx = canvas.getContext("2d")!;
  }

  addShape(shape: IShape) {
    shape.draw(this.ctx);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
}
