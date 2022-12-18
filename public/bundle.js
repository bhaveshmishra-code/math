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

eval("__webpack_require__.r(__webpack_exports__);\nlet x = 200;\r\nlet y = 200;\r\nlet color = `#000`;\r\nconst canvas = document.getElementById(\"canvas\");\r\nconst ctx = canvas.getContext(\"2d\");\r\nfunction init() {\r\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n    ctx.save();\r\n    ctx.beginPath();\r\n    ctx.moveTo(x, y);\r\n    ctx.arc(x, y, 40, 0, 2 * Math.PI);\r\n    ctx.fillStyle = color;\r\n    ctx.fill();\r\n    ctx.restore();\r\n    canvas.addEventListener(\"mousedown\", (e) => {\r\n        x = e.clientX;\r\n        y = e.clientY;\r\n        color = `rgb(${x % 255}, ${y % 255}, ${(x + y) % 255})`;\r\n    });\r\n    draw();\r\n}\r\nfunction draw() {\r\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n    ctx.save();\r\n    ctx.beginPath();\r\n    ctx.moveTo(x, y);\r\n    ctx.arc(x, y, 40, 0, 2 * Math.PI);\r\n    ctx.fillStyle = color;\r\n    ctx.fill();\r\n    ctx.restore();\r\n    window.requestAnimationFrame(draw);\r\n}\r\ninit();\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6IjtBQU9BLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNaLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNaLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQztBQUVuQixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBc0IsQ0FBQztBQUN0RSxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBRSxDQUFDO0FBRXJDLFNBQVMsSUFBSTtJQUNYLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDWCxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN0QixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDWCxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDZCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBYSxFQUFFLEVBQUU7UUFDckQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDZCxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNkLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNILElBQUksRUFBRSxDQUFDO0FBQ1QsQ0FBQztBQUVELFNBQVMsSUFBSTtJQUNYLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDWCxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN0QixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDWCxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDZCxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUVELElBQUksRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF0aHMvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9pbnQgZnJvbSBcIi4vc2hhcGUvUG9pbnRcIjtcclxuaW1wb3J0IEdlb21ldHJ5IGZyb20gXCIuL2NvcmUvR2VvbWV0cnlcIjtcclxuaW1wb3J0IExpbmUgZnJvbSBcIi4vc2hhcGUvTGluZVwiO1xyXG5pbXBvcnQgQ2lyY2xlIGZyb20gXCIuL3NoYXBlL0NpcmNsZVwiO1xyXG5pbXBvcnQgR3JhcGggZnJvbSBcIi4vY29yZS9HcmFwaFwiO1xyXG5pbXBvcnQgVHJpYW5nbGUgZnJvbSBcIi4vc2hhcGUvVHJpYW5nbGVcIjtcclxuXHJcbmxldCB4ID0gMjAwO1xyXG5sZXQgeSA9IDIwMDtcclxubGV0IGNvbG9yID0gYCMwMDBgO1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikhO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgY3R4LnNhdmUoKTtcclxuICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgY3R4Lm1vdmVUbyh4LCB5KTtcclxuICBjdHguYXJjKHgsIHksIDQwLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gIGN0eC5maWxsKCk7XHJcbiAgY3R4LnJlc3RvcmUoKTtcclxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgeCA9IGUuY2xpZW50WDtcclxuICAgIHkgPSBlLmNsaWVudFk7XHJcbiAgICBjb2xvciA9IGByZ2IoJHt4ICUgMjU1fSwgJHt5ICUgMjU1fSwgJHsoeCArIHkpICUgMjU1fSlgO1xyXG4gIH0pO1xyXG4gIGRyYXcoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhdygpIHtcclxuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgY3R4LnNhdmUoKTtcclxuICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgY3R4Lm1vdmVUbyh4LCB5KTtcclxuICBjdHguYXJjKHgsIHksIDQwLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gIGN0eC5maWxsKCk7XHJcbiAgY3R4LnJlc3RvcmUoKTtcclxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG59XHJcblxyXG5pbml0KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;