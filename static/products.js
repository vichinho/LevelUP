/* ==============================
   BASE DE DATOS DE PRODUCTOS
============================== */
const products = {
  catan: {
    id: "JM001",
    name: "Catan",
    price: "$29.990 CLP",
    originalPrice: "$37.487 CLP",
    discount: "20%",
    image: "img/catan.jpg",
    category: "Juegos de Mesa",
    categoryLink: "index.html#categoria-juegos",
    description:
      "Un clásico juego de estrategia donde los jugadores compiten por colonizar y expandirse en la isla de Catan. Ideal para 3-4 jugadores y perfecto para noches de juego en familia o con amigos.",
    features: [
      "Para 3-4 jugadores",
      "Duración: 60-90 minutos",
      "Edad: 10+",
      "Incluye tablero modular, fichas de recursos, cartas de desarrollo y dados",
    ],
    stock: 15,
    rating: 4.8,
    reviews: 124,
  },
  carca: {
    id: "JM002",
    name: "Carcassonne",
    price: "$24.990 CLP",
    originalPrice: "$31.237 CLP",
    discount: "20%",
    image: "img/carca.jpg",
    category: "Juegos de Mesa",
    categoryLink: "index.html#categoria-juegos",
    description:
      "Un juego de colocación de fichas donde los jugadores construyen el paisaje alrededor de la fortaleza medieval de Carcassonne. Ideal para 2-5 jugadores y fácil de aprender.",
    features: [
      "Para 2-5 jugadores",
      "Duración: 30-45 minutos",
      "Edad: 8+",
      "Incluye 72 losetas de terreno y 40 seguidores en 5 colores",
    ],
    stock: 22,
    rating: 4.6,
    reviews: 89,
  },
  controlx: {
    id: "AC001",
    name: "Controlador Inalámbrico Xbox Series X",
    price: "$59.990 CLP",
    originalPrice: "$74.987 CLP",
    discount: "20%",
    image: "img/controlx.webp",
    category: "Accesorios",
    categoryLink: "index.html#categoria-accesorios",
    description:
      "Ofrece una experiencia de juego cómoda con botones mapeables y una respuesta táctil mejorada. Compatible con consolas Xbox y PC.",
    features: [
      "Compatible con Xbox Series X/S, Xbox One y Windows 10/11",
      "Conexión inalámbrica y Bluetooth",
      "Batería recargable",
      "Botones impulsados por imanes para mayor precisión",
    ],
    stock: 8,
    rating: 4.7,
    reviews: 203,
  },
  hyperx: {
    id: "AC002",
    name: "Auriculares Gamer HyperX Cloud II",
    price: "$79.990 CLP",
    originalPrice: "$99.987 CLP",
    discount: "20%",
    image: "img/hyperx.webp",
    category: "Accesorios",
    categoryLink: "index.html#categoria-accesorios",
    description:
      "Proporcionan un sonido envolvente de calidad con un micrófono desmontable y almohadillas de espuma viscoelástica para mayor comodidad durante largas sesiones de juego.",
    features: [
      "Sonido surround virtual 7.1",
      "Micrófono desmontable con cancelación de ruido",
      "Almohadillas de espuma viscoelástica",
      "Compatibilidad multiplataforma",
    ],
    stock: 12,
    rating: 4.9,
    reviews: 315,
  },
  ps5: {
    id: "CQ001",
    name: "PlayStation 5",
    price: "$549.990 CLP",
    originalPrice: "$687.487 CLP",
    discount: "20%",
    image: "img/ps5.webp",
    category: "Consolas",
    categoryLink: "index.html#categoria-consolas",
    description:
      "La consola de última generación de Sony, que ofrece gráficos impresionantes y tiempos de carga ultrarrápidos para una experiencia de juego inmersiva.",
    features: [
      "Procesador AMD Ryzen Zen 2 de 8 núcleos",
      "GPU personalizada RDNA 2 con trazado de rayos",
      "SSD ultrarrápido de 825 GB",
      "Compatibilidad con 4K a 120 Hz y 8K",
    ],
    stock: 5,
    rating: 4.9,
    reviews: 428,
  },
  rog: {
    id: "CG001",
    name: "PC Gamer ASUS ROG Strix",
    price: "$1.299.990 CLP",
    originalPrice: "$1.624.987 CLP",
    discount: "20%",
    image: "img/rog.webp",
    category: "Computadores Gamers",
    categoryLink: "index.html#categoria-computadores",
    description:
      "Un potente equipo diseñado para los gamers más exigentes, equipado con los últimos componentes para ofrecer un rendimiento excepcional en cualquier juego.",
    features: [
      "Procesador Intel Core i9-12900K",
      "NVIDIA GeForce RTX 3080 10GB",
      "32GB RAM DDR5 4800MHz",
      "SSD NVMe 1TB + HDD 2TB",
    ],
    stock: 3,
    rating: 5.0,
    reviews: 76,
  },
  silla: {
    id: "SG001",
    name: "Silla Gamer Secretlab Titan",
    price: "$349.990 CLP",
    originalPrice: "$437.487 CLP",
    discount: "20%",
    image: "img/silla.jpg",
    category: "Sillas Gamers",
    categoryLink: "index.html#categoria-sillas",
    description:
      "Diseñada para el máximo confort, esta silla ofrece un soporte ergonómico y personalización ajustable para sesiones de juego prolongadas.",
    features: [
      "Estructura de acero reforzado",
      "Espuma fría moldeada de densidad múltiple",
      "Ajuste lumbar integrado de 4 vías",
      "Inclinación de 85° a 165°",
    ],
    stock: 7,
    rating: 4.8,
    reviews: 192,
  },
  mouse: {
    id: "MS001",
    name: "Mouse Gamer Logitech G502 HERO",
    price: "$49.990 CLP",
    originalPrice: "$62.487 CLP",
    discount: "20%",
    image: "img/mouse.webp",
    category: "Mouse",
    categoryLink: "index.html#categoria-mouse",
    description:
      "Con sensor de alta precisión y botones personalizables, este mouse es ideal para gamers que buscan un control preciso y personalización.",
    features: [
      "Sensor HERO 25K con seguimiento de 400+ IPS",
      "11 botones programables",
      "Pesos ajustables (hasta 18 gramos)",
      "Iluminación RGB LIGHTSYNC",
    ],
    stock: 25,
    rating: 4.7,
    reviews: 342,
  },
  mousepad: {
    id: "MP001",
    name: "Mousepad Razer Goliathus Extended Chroma",
    price: "$29.990 CLP",
    originalPrice: "$37.487 CLP",
    discount: "20%",
    image: "img/mousepad.webp",
    category: "Mousepad",
    categoryLink: "index.html#categoria-mousepad",
    description:
      "Ofrece un área de juego amplia con iluminación RGB personalizable, asegurando una superficie suave y uniforme para el movimiento del mouse.",
    features: [
      "Iluminación RGB Chroma con 16.8 millones de colores",
      "Superficie de tela optimizada para gaming",
      "Base antideslizante de goma",
      "Dimensiones: 355 mm x 255 mm x 3 mm",
    ],
    stock: 18,
    rating: 4.5,
    reviews: 167,
  },
  polera: {
    id: "PP001",
    name: "Polera Gamer Personalizada 'Level-Up'",
    price: "$14.990 CLP",
    originalPrice: "$18.737 CLP",
    discount: "20%",
    image: "img/polera.webp",
    category: "Poleras Personalizadas",
    categoryLink: "index.html#categoria-polerasp",
    description:
      "Una camiseta cómoda y estilizada, con la posibilidad de personalizarla con tu gamer tag o diseño favorito.",
    features: [
      "100% algodón preencogido",
      "Personalización con gamertag o diseño",
      "Variedad de tallas (S, M, L, XL, XXL)",
      "Disponible en varios colores",
    ],
    stock: 50,
    rating: 4.6,
    reviews: 98,
  },
};

/* ==============================
   FUNCIONES DE UTILIDAD
============================== */
function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function formatPrice(price) {
  return `$${parseInt(price).toLocaleString("es-CL")} CLP`;
}

/* ==============================
   GESTIÓN DE DETALLES DE PRODUCTO
============================== */
function loadProductData() {
  const productId = getProductIdFromURL();

  if (productId && products[productId]) {
    const product = products[productId];
    updateProductDetails(product);
  } else {
    showProductNotFound();
  }
}

function updateProductDetails(product) {
  // Actualizar elementos de la página
  document.getElementById("product-title").textContent = product.name;
  document.getElementById("product-price").textContent = product.price;
  document.getElementById("product-img").src = product.image;
  document.getElementById("product-img").alt = product.name;
  document.getElementById("product-description").textContent =
    product.description;
  document.getElementById("category-link").textContent = product.category;
  document.getElementById("category-link").href = product.categoryLink;
  document.getElementById("product-name").textContent = product.name;

  // Cargar características
  const featuresContainer = document.getElementById("product-features");
  featuresContainer.innerHTML = "<h3>Características:</h3><ul>";

  product.features.forEach((feature) => {
    featuresContainer.innerHTML += `<li>${feature}</li>`;
  });

  featuresContainer.innerHTML += "</ul>";

  // Actualizar título de la página
  document.title = `${product.name} - LEVEL UP`;
}

function showProductNotFound() {
  document.querySelector(".product-detail-container").innerHTML = `
        <div style="text-align: center; width: 100%; padding: 50px 0;">
            <h2>Producto no encontrado</h2>
            <p>El producto que buscas no está disponible.</p>
            <a href="index.html">Volver a la página principal</a>
        </div>
    `;
}

/* ==============================
   GESTIÓN DE TABLA DE PRODUCTOS
============================== */
const tableBody = document.getElementById("product-table-body");

function cargarProductos() {
  tableBody.innerHTML = "";

  for (let key in products) {
    const p = products[key];
    tableBody.innerHTML += `
            <tr id="row-${key}">
                <td><img src="${p.image}" alt="${p.name}"></td>
                <td>${p.name}</td>
                <td>${p.price}</td>
                <td>${p.category}</td>
                <td>${p.stock ?? "N/A"}</td>
                <td>
                    <button onclick="eliminarProducto('${key}')" class="btn-eliminar">Eliminar</button>
                </td>
            </tr>
        `;
  }
}

function eliminarProducto(id) {
  if (confirm("¿Seguro que quieres eliminar este producto?")) {
    delete products[id];
    document.getElementById(`row-${id}`).remove();
    alert("Producto eliminado (no permanente)");
  }
}

/* ==============================
   FUNCIONES DE CARRITO
============================== */
function addToCart() {
  alert("Producto agregado al carrito");
  // En una implementación real, esto actualizaría el contador del carrito
}

/* ==============================
   INICIALIZACIÓN
============================== */
document.addEventListener("DOMContentLoaded", function () {
  // Cargar detalles del producto si estamos en una página de producto
  if (document.getElementById("product-title")) {
    loadProductData();
  }

  // Cargar tabla de productos si existe
  if (tableBody) {
    cargarProductos();
  }
});
