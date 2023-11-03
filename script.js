let canvas = document.querySelector("#myCanvas");
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d");

//Et array der deffinerer de forskellige farver kamelæonen skal have
let colorArray = [
  {
    body: "#C7FC70",
    bodyTwo: "#7FFF00",
    head: "#F8FFF0",
    tail: "#ACE800",
    tipTail: "#85EE00",
    legs: "#91CC14",
    eyelid: "#85EE00",
    eyeColor: "#FFFFFF",
    background1: "#FF0000",
    background2: "#8A2BE2",
  },
  {
    body: "#E8FC70",
    bodyTwo: "#C2FF15",
    head: "#FDFFF0",
    tail: "#D5E800",
    tipTail: "#CDEE00",
    legs: "#B2CC14",
    eyelid: "#CDEE00",
    eyeColor: "#FFFFFF",
    background1: "#D30000",
    background2: "#7625C1",
  },
  {
    body: "#FCF570",
    bodyTwo: "#FFE315",
    head: "#FFFEF0",
    tail: "#E8DA00",
    tipTail: "#EED100",
    legs: "#CCBA14",
    eyelid: "#EED100",
    eyeColor: "#FFFFFF",
    background1: "#990101",
    background2: "#6920AD",
  },
  {
    body: "#FFF963",
    bodyTwo: "#FAFF00",
    head: "#FFF783",
    tail: "#F4E711",
    tipTail: "#FFE500",
    legs: "#F9E42A",
    eyelid: "#FFE500",
    eyeColor: "#FFFFFF",
    background1: "#760000",
    background2: "#4F1882",
  },
  {
    body: "#FF6363",
    bodyTwo: "#FF0000",
    head: "#FFC683",
    tail: "#F44711",
    tipTail: "#FF4D00",
    legs: "#F95C2A",
    eyelid: "#FF4D00",
    eyeColor: "#E55F5F",
    background1: "#600000",
    background2: "#380F5D",
  },
];

//deffinerer at current colors er 0
let currentColors = 0;
//deffinerer at colors/farverne som er brugt i koden til at farvegive kamelæonen er i et array, som starter ved currentColors som er 0
let colors = colorArray[currentColors];
//
//Deffinerer at offsetAmount er 0, som bruges til vibration - vibration starter ved 0
let offsetAmount = 0;
//Deffinerer at X størrelsen på skærmen er 0
let offsetX = 0;
//Deffinerer at Y størrelsen på skærmen er 0
let offsetY = 0;
//
//Deffinerer at fontLoaded er false
let fontLoaded = false;

function draw() {
  offsetX = Math.random() * offsetAmount * 2 - offsetAmount;
  offsetY = Math.random() * offsetAmount * 2 - offsetAmount;

  ctx.shadowBlur = 0;
  ctx.shadowColor = null;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //Baggrund
  const gradient = ctx.createRadialGradient(540, 540, 5, 540, 540, 600);
  // Farverne i gradienten
  gradient.addColorStop(0, colors.background1);
  gradient.addColorStop(1, colors.background2);
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
  ctx.fillRect(700 + offsetX, 499 + offsetY, 200, 105);

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
  ctx.roundRect(475 + offsetX, 650 + offsetY, 28, 50, [10, 0, 0, 10]);
  ctx.fill();
  //Bagben
  ctx.beginPath();
  ctx.fillStyle = gradientLegs;
  ctx.fillRect(650 + offsetX, 600 + offsetY, 50, 100);
  //BagbenFod
  ctx.beginPath();
  ctx.fillStyle = gradientLegs;
  ctx.roundRect(625 + offsetX, 650 + offsetY, 28, 50, [10, 0, 0, 10]);
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
  ctx.fillStyle = colors.eyeColor;
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
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.lineCap = "round";
  ctx.moveTo(315 + offsetX, 450 + offsetY);
  ctx.lineTo(420 + offsetX, 360 + offsetY);
  ctx.lineWidth = 15;
  ctx.stroke();

  if (fontLoaded == true) drawText();

  requestAnimationFrame(draw);
}

draw();

//
//
//
//
//
//
//
//
//
//
//Helper functions
//Funktion der får til at vibrere og giver kamelæon ny farve ved click
document.addEventListener("click", (e) => {
  currentColors++;
  offsetAmount += 3;
  if (currentColors == colorArray.length) {
    currentColors = 0;
    offsetAmount = 0;
    offsetX = 0;
    offsetY = 0;
  }

  colors = colorArray[currentColors];
});

//Basic circel - en funktion til en circel, så man blot kan skrive "fillCirc" ligesom rect
function fillCirc(x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}
//Funktion der indsætter fonte
function drawText() {
  ctx.beginPath();
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
