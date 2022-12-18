import Point from "./shape/Point";
import Geometry from "./core/Geometry";
import Line from "./shape/Line";
import Circle from "./shape/Circle";
import Graph from "./core/Graph";
import Triangle from "./shape/Triangle";

let x = 200;
let y = 200;
let color = `#000`;

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
const size = 400;
canvas.style.width = `${size}px`;
canvas.style.height = `${size}px`;

const scale = window.devicePixelRatio;
console.log(scale);
canvas.width = Math.floor(size * scale);
canvas.height = Math.floor(size * scale);
ctx.scale(scale, scale);

const p1 = new Point(50, 350);
const p2 = new Point(350, 350);
const p3 = new Point(80, 50);

const t1 = new Triangle(p1, p2, p3, "#ef4444");

function init() {
  t1.draw(ctx);
  canvas.addEventListener("mousedown", (e: MouseEvent) => {
    x = e.clientX;
    y = e.clientY;
    t1.C.x = x;
    t1.C.y = y;
  });
  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.beginPath();
  t1.draw(ctx);
  window.requestAnimationFrame(draw);
}

init();
