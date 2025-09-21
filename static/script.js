/* ==============================
   ANIMACIONES DE FONDO
============================== */

// Crear estrellas estáticas
const starContainer = document.getElementById("star-background");
const starCount = 150;

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

/* ==============================
   CARRUSEL AUTOMÁTICO
============================== */
const slides = document.querySelectorAll(".slides img");
let index = 0;

function showSlide(n) {
  slides.forEach((slide, i) => slide.classList.remove("active"));
  slides[n].classList.add("active");
}

// Auto-play cada 5 segundos
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);

/* ==============================
   FILTRADO DE PRODUCTOS POR CATEGORÍA
============================== */
const categoriaMap = {
  "juegos de mesa": "juegos-mesa",
  accesorios: "accesorios",
  consolas: "consolas",
  "computadores gamers": "computadores",
  "sillas gamers": "sillas",
  mouse: "mouse",
  mousepad: "mousepad",
  "poleras personalizadas": "poleras",
};

const navLinks = document.querySelectorAll("nav ul li a");
const productos = document.querySelectorAll(".product-card");
const productSection = document.querySelector(".product-section");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const categoriaTexto = link.textContent.toLowerCase();
    const claseCategoria = categoriaMap[categoriaTexto];

    productos.forEach((p) => {
      if (!claseCategoria) {
        p.classList.remove("oculto");
      } else {
        p.classList.toggle("oculto", !p.classList.contains(claseCategoria));
      }
    });

    // Scroll suave hacia la sección de productos
    productSection.scrollIntoView({ behavior: "smooth" });
  });
});

/* ==============================
   SISTEMA DE LOGIN
============================== */
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-login");

  if (formulario) {
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();
      verificarLogin();
    });
  }

  verificarEstadoSesion();
});

function verificarLogin() {
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;
  const mensajeError = document.getElementById("mensaje-error");

  const usuarioValido = "admin";
  const contrasenaValida = "1234";

  if (usuario === usuarioValido && contrasena === contrasenaValida) {
    localStorage.setItem("usuarioLogueado", "admin");
    window.location.href = "perfiladm.html";
  } else {
    mensajeError.style.display = "block";
  }
}

/* ==============================
   GESTIÓN DEL ESTADO DE SESIÓN
============================== */
function verificarEstadoSesion() {
  const usuario = localStorage.getItem("usuarioLogueado");
  const miCuenta = document.getElementById("mi-cuenta");
  const iniciarSesion = document.getElementById("iniciar-sesion");

  if (usuario && miCuenta && iniciarSesion) {
    // Cambia "Mi cuenta" a link al perfil
    miCuenta.href = "perfiladm.html";
    miCuenta.innerHTML = '<i class="fas fa-user"></i> Perfil';

    // Reemplaza "Iniciar sesión" por "Cerrar sesión"
    iniciarSesion.href = "#";
    iniciarSesion.textContent = "Cerrar sesión";

    iniciarSesion.addEventListener("click", function (e) {
      e.preventDefault();
      localStorage.removeItem("usuarioLogueado");
      location.reload();
    });
  }
}

/* ==============================
   ANIMACIÓN DE HUELLAS (FUNCIÓN ORIGINAL)
============================== */
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
