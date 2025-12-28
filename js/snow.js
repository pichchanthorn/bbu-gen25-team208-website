const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

let w, h;
let flakes = [];

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

function initSnow() {
  flakes = [];
  for (let i = 0; i < 160; i++) {
    flakes.push({
      x: Math.random() * w,
      y: Math.random() * h - h,
      r: Math.random() * 3 + 1,
      speed: Math.random() * 1.5 + 0.5
    });
  }
}
initSnow();

function drawSnow() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "rgba(255,255,255,0.9)";
  ctx.beginPath();

  flakes.forEach(f => {
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
  });

  ctx.fill();
  updateSnow();
}

function updateSnow() {
  flakes.forEach(f => {
    f.y += f.speed;
    if (f.y > h) {
      f.y = -10;
      f.x = Math.random() * w;
    }
  });
}

setInterval(drawSnow, 30);
