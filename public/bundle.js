/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shape_Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape/Point */ \"./src/shape/Point.ts\");\n/* harmony import */ var _shape_Triangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shape/Triangle */ \"./src/shape/Triangle.ts\");\n\r\n\r\nlet x = 200;\r\nlet y = 200;\r\nlet color = `#000`;\r\nconst canvas = document.getElementById(\"canvas\");\r\nconst ctx = canvas.getContext(\"2d\");\r\nconst size = 400;\r\ncanvas.style.width = `${size}px`;\r\ncanvas.style.height = `${size}px`;\r\nconst scale = window.devicePixelRatio;\r\nconsole.log(scale);\r\ncanvas.width = Math.floor(size * scale);\r\ncanvas.height = Math.floor(size * scale);\r\nctx.scale(scale, scale);\r\nconst p1 = new _shape_Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"](50, 350);\r\nconst p2 = new _shape_Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"](350, 350);\r\nconst p3 = new _shape_Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"](80, 50);\r\nconst t1 = new _shape_Triangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](p1, p2, p3, \"#ef4444\");\r\nfunction init() {\r\n    t1.draw(ctx);\r\n    canvas.addEventListener(\"mousedown\", (e) => {\r\n        x = e.clientX;\r\n        y = e.clientY;\r\n        t1.C.x = x;\r\n        t1.C.y = y;\r\n    });\r\n    draw();\r\n}\r\nfunction draw() {\r\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n    ctx.save();\r\n    ctx.beginPath();\r\n    t1.draw(ctx);\r\n    window.requestAnimationFrame(draw);\r\n}\r\ninit();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWtDO0FBS007QUFFeEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ1osSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ1osSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDO0FBRW5CLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFzQixDQUFDO0FBQ3RFLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLENBQUM7QUFDckMsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUM7QUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQztBQUVsQyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQixNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDekMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFeEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxvREFBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM5QixNQUFNLEVBQUUsR0FBRyxJQUFJLG9EQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLE1BQU0sRUFBRSxHQUFHLElBQUksb0RBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFN0IsTUFBTSxFQUFFLEdBQUcsSUFBSSx1REFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBRS9DLFNBQVMsSUFBSTtJQUNYLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDYixNQUFNLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBYSxFQUFFLEVBQUU7UUFDckQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDZCxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNkLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxFQUFFLENBQUM7QUFDVCxDQUFDO0FBRUQsU0FBUyxJQUFJO0lBQ1gsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNYLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFFRCxJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hdGhzLy4vc3JjL2luZGV4LnRzP2ZmYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvaW50IGZyb20gXCIuL3NoYXBlL1BvaW50XCI7XHJcbmltcG9ydCBHZW9tZXRyeSBmcm9tIFwiLi9jb3JlL0dlb21ldHJ5XCI7XHJcbmltcG9ydCBMaW5lIGZyb20gXCIuL3NoYXBlL0xpbmVcIjtcclxuaW1wb3J0IENpcmNsZSBmcm9tIFwiLi9zaGFwZS9DaXJjbGVcIjtcclxuaW1wb3J0IEdyYXBoIGZyb20gXCIuL2NvcmUvR3JhcGhcIjtcclxuaW1wb3J0IFRyaWFuZ2xlIGZyb20gXCIuL3NoYXBlL1RyaWFuZ2xlXCI7XHJcblxyXG5sZXQgeCA9IDIwMDtcclxubGV0IHkgPSAyMDA7XHJcbmxldCBjb2xvciA9IGAjMDAwYDtcclxuXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpITtcclxuY29uc3Qgc2l6ZSA9IDQwMDtcclxuY2FudmFzLnN0eWxlLndpZHRoID0gYCR7c2l6ZX1weGA7XHJcbmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHtzaXplfXB4YDtcclxuXHJcbmNvbnN0IHNjYWxlID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcbmNvbnNvbGUubG9nKHNjYWxlKTtcclxuY2FudmFzLndpZHRoID0gTWF0aC5mbG9vcihzaXplICogc2NhbGUpO1xyXG5jYW52YXMuaGVpZ2h0ID0gTWF0aC5mbG9vcihzaXplICogc2NhbGUpO1xyXG5jdHguc2NhbGUoc2NhbGUsIHNjYWxlKTtcclxuXHJcbmNvbnN0IHAxID0gbmV3IFBvaW50KDUwLCAzNTApO1xyXG5jb25zdCBwMiA9IG5ldyBQb2ludCgzNTAsIDM1MCk7XHJcbmNvbnN0IHAzID0gbmV3IFBvaW50KDgwLCA1MCk7XHJcblxyXG5jb25zdCB0MSA9IG5ldyBUcmlhbmdsZShwMSwgcDIsIHAzLCBcIiNlZjQ0NDRcIik7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIHQxLmRyYXcoY3R4KTtcclxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgeCA9IGUuY2xpZW50WDtcclxuICAgIHkgPSBlLmNsaWVudFk7XHJcbiAgICB0MS5DLnggPSB4O1xyXG4gICAgdDEuQy55ID0geTtcclxuICB9KTtcclxuICBkcmF3KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gIGN0eC5zYXZlKCk7XHJcbiAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gIHQxLmRyYXcoY3R4KTtcclxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG59XHJcblxyXG5pbml0KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/shape/Point.ts":
/*!****************************!*\
  !*** ./src/shape/Point.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Point)\n/* harmony export */ });\nclass Point {\r\n    constructor(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    toString() {\r\n        return `(${this.x}, ${this.y})`;\r\n    }\r\n    get magnitude() {\r\n        return Math.sqrt(this.x * this.x + this.y * this.y);\r\n    }\r\n    draw(ctx) {\r\n        ctx.save();\r\n        ctx.beginPath();\r\n        ctx.strokeStyle = \"blue\";\r\n        ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);\r\n        ctx.stroke();\r\n        ctx.restore();\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hhcGUvUG9pbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVlLE1BQU0sS0FBSztJQUN4QixZQUFtQixDQUFTLEVBQVMsQ0FBUztRQUEzQixNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBUTtJQUFHLENBQUM7SUFFbEQsUUFBUTtRQUNOLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQTZCO1FBQ2hDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNYLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUN6QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0MsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2IsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL21hdGhzLy4vc3JjL3NoYXBlL1BvaW50LnRzPzBmMmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElTaGFwZSBmcm9tIFwiLi9TaGFwZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQgaW1wbGVtZW50cyBJU2hhcGUge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB4OiBudW1iZXIsIHB1YmxpYyB5OiBudW1iZXIpIHt9XHJcblxyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIGAoJHt0aGlzLnh9LCAke3RoaXMueX0pYDtcclxuICB9XHJcblxyXG4gIGdldCBtYWduaXR1ZGUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcclxuICB9XHJcblxyXG4gIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsdWVcIjtcclxuICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIDUsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/shape/Point.ts\n");

/***/ }),

/***/ "./src/shape/Triangle.ts":
/*!*******************************!*\
  !*** ./src/shape/Triangle.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Triangle)\n/* harmony export */ });\nclass Triangle {\r\n    constructor(A, B, C, fillColor = \"#000\") {\r\n        this.A = A;\r\n        this.B = B;\r\n        this.C = C;\r\n        this.fillColor = fillColor;\r\n    }\r\n    draw(ctx) {\r\n        ctx.save();\r\n        ctx.beginPath();\r\n        ctx.fillStyle = this.fillColor;\r\n        ctx.moveTo(this.A.x, this.A.y);\r\n        ctx.lineTo(this.B.x, this.B.y);\r\n        ctx.lineTo(this.C.x, this.C.y);\r\n        ctx.fill();\r\n        ctx.restore();\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hhcGUvVHJpYW5nbGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUdlLE1BQU0sUUFBUTtJQUMzQixZQUNTLENBQVEsRUFDUixDQUFRLEVBQ1IsQ0FBUSxFQUNSLFlBQW9CLE1BQU07UUFIMUIsTUFBQyxHQUFELENBQUMsQ0FBTztRQUNSLE1BQUMsR0FBRCxDQUFDLENBQU87UUFDUixNQUFDLEdBQUQsQ0FBQyxDQUFPO1FBQ1IsY0FBUyxHQUFULFNBQVMsQ0FBaUI7SUFDaEMsQ0FBQztJQUVKLElBQUksQ0FBQyxHQUE2QjtRQUNoQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWCxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNYLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoQixDQUFDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRocy8uL3NyYy9zaGFwZS9UcmlhbmdsZS50cz9iN2EzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xyXG5pbXBvcnQgSVNoYXBlIGZyb20gXCIuL1NoYXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmlhbmdsZSBpbXBsZW1lbnRzIElTaGFwZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgQTogUG9pbnQsXHJcbiAgICBwdWJsaWMgQjogUG9pbnQsXHJcbiAgICBwdWJsaWMgQzogUG9pbnQsXHJcbiAgICBwdWJsaWMgZmlsbENvbG9yOiBzdHJpbmcgPSBcIiMwMDBcIlxyXG4gICkge31cclxuXHJcbiAgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmZpbGxDb2xvcjtcclxuICAgIGN0eC5tb3ZlVG8odGhpcy5BLngsIHRoaXMuQS55KTtcclxuICAgIGN0eC5saW5lVG8odGhpcy5CLngsIHRoaXMuQi55KTtcclxuICAgIGN0eC5saW5lVG8odGhpcy5DLngsIHRoaXMuQy55KTtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/shape/Triangle.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;