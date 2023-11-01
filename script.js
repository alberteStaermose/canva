let canvas = document.querySelector("#myCanvas");
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d");

let colors = {
  body: "#FCF570",
  bodyTwo: "#FFE315",
  head: "#FFFEF0",
  tail: "#E8DA00",
  tipTail: "#EED100",
  legs: "#CCC514",
  eyelid: "#EED100",
};
let offsetX = 0;
let offsetY = 0;
let fontLoaded = false;
let mouseOver = false;

function draw() {
  ctx.shadowBlur = 0;
  ctx.shadowColor = null;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  offsetX += Math.round(Math.random() * 2 - 1);
  offsetY += Math.round(Math.random() * 2 - 1);

  //Baggrund
  const gradient = ctx.createRadialGradient(540, 540, 5, 540, 540, 600);
  // Farverne i gradienten
  gradient.addColorStop(0, "red");
  gradient.addColorStop(1, "blueviolet");
  //Gradienten
  ctx.beginPath();
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 1080);

  //Gradient til kroppen
  const gradientBody = ctx.createLinearGradient(
    300 + offsetX,
    500 + offsetY,
    300 + offsetX,
    700 + offsetY
  );
  // Farverne i gradienten
  gradientBody.addColorStop(0, colors.bodyTwo);
  gradientBody.addColorStop(0.5, colors.body);
  gradientBody.addColorStop(1, colors.head);

  //Gradient til benene
  const gradientLegs = ctx.createLinearGradient(
    300 + offsetX,
    400 + offsetY,
    300 + offsetX,
    700 + offsetY
  );
  // Farverne i gradienten
  gradientLegs.addColorStop(0, "black");
  gradientLegs.addColorStop(1, colors.legs);

  // Hoved
  //Dobbelhage
  ctx.beginPath();
  ctx.fillStyle = gradientBody;
  ctx.arc(350 + offsetX, 500 + offsetY, 180, 0, Math.PI * 0.815, false);
  ctx.fill();
  //Pande
  ctx.beginPath();
  ctx.fillStyle = gradientBody;
  ctx.arc(500 + offsetX, 600 + offsetY, 300, 0, Math.PI, true);
  ctx.fill();

  // Bagdel
  //Runding på bagdel
  ctx.beginPath();
  ctx.fillStyle = gradientBody;
  ctx.arc(700 + offsetX, 500 + offsetY, 200, 0, Math.PI, true);
  ctx.fill();
  //Fladt stykke efter runding på nummi og inden hale
  ctx.beginPath;
  ctx.fillStyle = gradientBody;
  ctx.fillRect(700 + offsetX, 500 + offsetY, 200, 100);

  // Krop
  //Selve kroppen
  ctx.beginPath();
  ctx.fillStyle = gradientBody;
  ctx.fillRect(500 + offsetX, 300 + offsetY, 200, 300);
  //Forben
  ctx.beginPath();
  ctx.fillStyle = gradientLegs;
  ctx.fillRect(500 + offsetX, 600 + offsetY, 50, 100);
  //Forbenfod
  ctx.beginPath();
  ctx.fillStyle = gradientLegs;
  ctx.roundRect(475 + offsetX, 650 + offsetY, 25, 50, [10, 0, 0, 10]);
  ctx.fill();
  //Bagben
  ctx.beginPath();
  ctx.fillStyle = gradientLegs;
  ctx.fillRect(650 + offsetX, 600 + offsetY, 50, 100);
  //BagbenFod
  ctx.beginPath();
  ctx.fillStyle = gradientLegs;
  ctx.roundRect(625 + offsetX, 650 + offsetY, 25, 50, [10, 0, 0, 10]);
  ctx.fill();

  //Hale
  //Den store del af halen
  //Gradient til den store del af halen deffineret
  const gradientTail = ctx.createRadialGradient(
    860 + offsetX,
    600 + offsetY,
    40,
    800 + offsetX,
    600 + offsetY,
    100
  );
  // Farverne i gradienten
  gradientTail.addColorStop(0, colors.body);
  gradientTail.addColorStop(1, colors.tipTail);
  //Den store del af halen starter
  ctx.beginPath();
  ctx.fillStyle = gradientTail;
  ctx.arc(800 + offsetX, 600 + offsetY, 100, 0, Math.PI * 1.5);
  ctx.lineTo(800 + offsetX, 600 + offsetY);
  ctx.fill();
  //Spidsen/afrundningen på halen
  ctx.beginPath();
  ctx.fillStyle = colors.tipTail;
  ctx.arc(800 + offsetX, 550 + offsetY, 50, 0, Math.PI * 2);
  ctx.fill();

  //Øje
  //øjeæble
  ctx.beginPath();
  ctx.fillStyle = "white";
  fillCirc(400 + offsetX, 450 + offsetY, 75);
  //Propil
  ctx.beginPath();
  ctx.fillStyle = "black";
  fillCirc(390 + offsetX, 460 + offsetY, 25);
  //Øjenlåg
  ctx.beginPath();
  ctx.fillStyle = colors.eyelid;
  ctx.arc(400 + offsetX, 450 + offsetY, 75, 0, Math.PI * 0.85, false);
  ctx.fill();
  //Øjenbryn
  // ctx.beginPath();
  // ctx.strokeStyle = "black";
  // ctx.lineWidth = 15;
  // ctx.arc(400, 450, 90, 5, Math.PI * 1, true);
  // ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(315 + offsetX, 450 + offsetY);
  ctx.lineTo(420 + offsetX, 360 + offsetY);
  ctx.lineWidth = 15;
  ctx.stroke();

  if (fontLoaded == true) drawText();

  document.addEventListener("click", (mouseOver) => {
    if (mouseOver == true) {
      drawNewColor();
    } else {
      requestAnimationFrame(draw);
    }
  });
}

draw();

//
//
//
//
//Helper functions
//Basic circel - en funktion til en circel, så man blot kan skrive "fillCirc" ligesom rect
function fillCirc(x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function drawText() {
  ctx.beginPath();
  console.log("Font Loaded");
  ctx.fillStyle = "orangered";
  ctx.font = "140px RacingSansOne";
  ctx.textAlign = "center";
  ctx.shadowColor = "red";
  ctx.shadowBlur = 15;
  ctx.fillText("BULLET TOUNGE", x, 210);
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "springgreen";
  ctx.shadowColor = "springgreen";
  ctx.shadowBlur = 5;
  ctx.font = "100px RacingSansOne";
  ctx.fillText("agressive", x, 900);
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = "springgreen";
  ctx.font = "60px RacingSansOne";
  ctx.lineWidth = 2;
  ctx.strokeText("EDITION", x, 970);
  ctx.closePath();
}

function drawNewColor() {
  console.log("Ny farve funktion");
  ctx.shadowBlur = 0;
  ctx.shadowColor = null;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  offsetX += Math.round(Math.random() * 2 - 1);
  offsetY += Math.round(Math.random() * 2 - 1);

  //Baggrund
  const gradient = ctx.createRadialGradient(540, 540, 5, 540, 540, 600);
  // Farverne i gradienten
  gradient.addColorStop(0, "red");
  gradient.addColorStop(1, "blueviolet");
  //Gradienten
  ctx.beginPath();
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 1080);

  //Gradient til kroppen
  const gradientBody = ctx.createLinearGradient(
    300 + offsetX,
    500 + offsetY,
    300 + offsetX,
    700 + offsetY
  );
  // Farverne i gradienten
  gradientBody.addColorStop(0, colors.bodyTwo);
  gradientBody.addColorStop(0.5, colors.body);
  gradientBody.addColorStop(1, colors.head);

  //Gradient til benene
  const gradientLegs = ctx.createLinearGradient(
    300 + offsetX,
    400 + offsetY,
    300 + offsetX,
    700 + offsetY
  );
  // Farverne i gradienten
  gradientLegs.addColorStop(0, "black");
  gradientLegs.addColorStop(1, colors.legs);

  // Hoved
  //Dobbelhage
  ctx.beginPath();
  ctx.fillStyle = gradientBody;
  ctx.arc(350 + offsetX, 500 + offsetY, 180, 0, Math.PI * 0.815, false);
  ctx.fill();
  //Pande
  ctx.beginPath();
  ctx.fillStyle = gradientBody;
  ctx.arc(500 + offsetX, 600 + offsetY, 300, 0, Math.PI, true);
  ctx.fill();

  // Bagdel
  //Runding på bagdel
  ctx.beginPath();
  ctx.fillStyle = gradientBody;
  ctx.arc(700 + offsetX, 500 + offsetY, 200, 0, Math.PI, true);
  ctx.fill();
  //Fladt stykke efter runding på nummi og inden hale
  ctx.beginPath;
  ctx.fillStyle = gradientBody;
  ctx.fillRect(700 + offsetX, 500 + offsetY, 200, 100);

  // Krop
  //Selve kroppen
  ctx.beginPath();
  ctx.fillStyle = gradientBody;
  ctx.fillRect(500 + offsetX, 300 + offsetY, 200, 300);
  //Forben
  ctx.beginPath();
  ctx.fillStyle = gradientLegs;
  ctx.fillRect(500 + offsetX, 600 + offsetY, 50, 100);
  //Forbenfod
  ctx.beginPath();
  ctx.fillStyle = gradientLegs;
  ctx.roundRect(475 + offsetX, 650 + offsetY, 25, 50, [10, 0, 0, 10]);
  ctx.fill();
  //Bagben
  ctx.beginPath();
  ctx.fillStyle = gradientLegs;
  ctx.fillRect(650 + offsetX, 600 + offsetY, 50, 100);
  //BagbenFod
  ctx.beginPath();
  ctx.fillStyle = gradientLegs;
  ctx.roundRect(625 + offsetX, 650 + offsetY, 25, 50, [10, 0, 0, 10]);
  ctx.fill();

  //Hale
  //Den store del af halen
  //Gradient til den store del af halen deffineret
  const gradientTail = ctx.createRadialGradient(
    860 + offsetX,
    600 + offsetY,
    40,
    800 + offsetX,
    600 + offsetY,
    100
  );
  // Farverne i gradienten
  gradientTail.addColorStop(0, colors.body);
  gradientTail.addColorStop(1, colors.tipTail);
  //Den store del af halen starter
  ctx.beginPath();
  ctx.fillStyle = gradientTail;
  ctx.arc(800 + offsetX, 600 + offsetY, 100, 0, Math.PI * 1.5);
  ctx.lineTo(800 + offsetX, 600 + offsetY);
  ctx.fill();
  //Spidsen/afrundningen på halen
  ctx.beginPath();
  ctx.fillStyle = colors.tipTail;
  ctx.arc(800 + offsetX, 550 + offsetY, 50, 0, Math.PI * 2);
  ctx.fill();

  //Øje
  //øjeæble
  ctx.beginPath();
  ctx.fillStyle = "white";
  fillCirc(400 + offsetX, 450 + offsetY, 75);
  //Propil
  ctx.beginPath();
  ctx.fillStyle = "black";
  fillCirc(390 + offsetX, 460 + offsetY, 25);
  //Øjenlåg
  ctx.beginPath();
  ctx.fillStyle = colors.eyelid;
  ctx.arc(400 + offsetX, 450 + offsetY, 75, 0, Math.PI * 0.85, false);
  ctx.fill();
  //Øjenbryn
  // ctx.beginPath();
  // ctx.strokeStyle = "black";
  // ctx.lineWidth = 15;
  // ctx.arc(400, 450, 90, 5, Math.PI * 1, true);
  // ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(315 + offsetX, 450 + offsetY);
  ctx.lineTo(420 + offsetX, 360 + offsetY);
  ctx.lineWidth = 15;
  ctx.stroke();

  if (fontLoaded == true) drawText();
  requestAnimationFrame(draw);
}

draw();

//FONT
//Fortæller at en font skal tilføjes til listen af fonte
let fontface = new FontFace("RacingSansOne", "url(RacingSansOne-Regular.ttf)");
document.fonts.add(fontface);

// Deffinerer bredden på cnavas / 2 for at finde midten x= midten af canvas
const x = canvas.width / 2;

//Callback function der fortæller at fonten skal laodes og inde i functionen pga "then" hvad der skal ske når den er loaded
fontface.load().then(() => {
  fontLoaded = true;
});
