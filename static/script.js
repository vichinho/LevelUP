const animationContainer = document.getElementById("animal-animation");

function createPaw() {
  const paw = document.createElement("div");
  paw.classList.add("paw");
  paw.style.left = Math.random() * window.innerWidth + "px";
  paw.style.animationDuration = 2 + Math.random() * 3 + "s";
  animationContainer.appendChild(paw);

  setTimeout(() => {
    paw.remove();
  }, 5000);
}

setInterval(createPaw, 300);

// Crear estrellas estáticas
const starContainer = document.getElementById("star-background");
const starCount = 150; // Número de estrellas

for (let i = 0; i < starCount; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";
  star.style.width = star.style.height = Math.random() * 2 + 1 + "px";
  star.style.opacity = Math.random() * 0.8 + 0.2;
  starContainer.appendChild(star);
}

// Crear huellas animadas
const pawContainer = document.getElementById("paw-animation");

function createPawCircle() {
  const circle = document.createElement("div");
  circle.classList.add("paw-circle");
  circle.style.left = Math.random() * 100 + "vw";
  circle.style.animationDuration = 2 + Math.random() * 3 + "s";
  circle.style.width = circle.style.height = 5 + Math.random() * 10 + "px";

  pawContainer.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 5000);
}

setInterval(createPawCircle, 200);
