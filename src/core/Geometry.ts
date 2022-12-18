import Point from "../shape/Point";
export default class Geometry {
  static distance(A: Point, B: Point) {
    return Math.sqrt(Math.pow(A.x - B.x, 2) + Math.pow(A.y - B.y, 2));
  }

  static radianToDegress(rad: number) {
    return (rad * 180) / Math.PI;
  }
}
