function add(a, b) {
    return a + b;
}
function clock() {
    var now = new Date();
    var canvas = document.getElementById("tutorial");
    var ctx = canvas.getContext("2d");
    ctx.save();
    ctx.clearRect(0, 0, 150, 150);
    ctx.translate(75, 75);
    ctx.scale(0.4, 0.4);
    ctx.rotate(-Math.PI / 2);
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
    // Hour marks
    ctx.save();
    for (var i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.rotate(Math.PI / 6);
        ctx.moveTo(100, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
    }
    ctx.restore();
    // Minute marks
    ctx.save();
    ctx.lineWidth = 5;
    for (var i = 0; i < 60; i++) {
        if (i % 5 !== 0) {
            ctx.beginPath();
            ctx.moveTo(117, 0);
            ctx.lineTo(120, 0);
            ctx.stroke();
        }
        ctx.rotate(Math.PI / 30);
    }
    ctx.restore();
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr = now.getHours() % 12;
    ctx.fillStyle = "black";
    // Write image description
    canvas.innerText = "The time is: ".concat(hr, ":").concat(min);
    // Write Hours
    ctx.save();
    ctx.rotate((Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();
    // Write Minutes
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();
    ctx.restore();
    // Write seconds
    ctx.save();
    ctx.rotate((sec * Math.PI) / 30);
    ctx.strokeStyle = "#D40000";
    ctx.fillStyle = "#D40000";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(83, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = "#325FA2";
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.restore();
    window.requestAnimationFrame(clock);
}
function draw() {
    var canvas = document.getElementById("tutorial");
    var ctx = canvas.getContext("2d");
    if (ctx) {
        // drawTriangles(ctx);
        drawTriangles(ctx);
    }
}
function drawArc(ctx) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
            ctx.beginPath();
            var x = 25 + j * 50; // x coordinate
            var y = 25 + i * 50; // y coordinate
            var radius = 20; // Arc radius
            var startAngle = 0; // Starting point on circle
            var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
            var counterclockwise = i % 2 !== 0; // clockwise or counterclockwise
            ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
            if (i > 1) {
                ctx.fill();
            }
            else {
                ctx.stroke();
            }
        }
    }
}
function drawTriangles(ctx) {
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            ctx.fillStyle = "rgb(".concat(Math.floor(255 - 42.5 * i), ", ").concat(Math.floor(255 - 42.5 * j), ", 0)");
            ctx.fillRect(j * 25, i * 25, 25, 25);
        }
    }
}
function drawSquare(ctx) {
    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(10, 10, 50, 50);
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 50, 50);
    ctx.strokeRect(100, 100, 20, 20);
}
function drawTriangle(ctx) {
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
}
function drawSmiley(ctx) {
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    ctx.stroke();
}
