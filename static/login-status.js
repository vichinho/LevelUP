document.addEventListener("DOMContentLoaded", function () {
    // Verifica si el usuario está logueado
    const usuario = localStorage.getItem("usuarioLogueado");
    const miCuenta = document.getElementById("mi-cuenta");
    const iniciarSesion = document.getElementById("iniciar-sesion");
    const mensajeError = document.getElementById("mensaje-error");

    if (usuario) {
        // Si está logueado, cambia "Mi cuenta" por "Perfil" y "Iniciar sesión" por "Cerrar sesión
        miCuenta.href = "perfil.html";
        miCuenta.innerHTML = '<i class="fas fa-user"></i> Perfil';
        iniciarSesion.href = "#";
        iniciarSesion.textContent = "Cerrar sesión";
        
        // Al hacer clic en "Cerrar sesión", eliminamos el estado del login
        iniciarSesion.addEventListener("click", function () {
            localStorage.removeItem("usuarioLogueado");
            location.reload(); // Recarga la página para actualizar el menú
        });
    } else {
        // Si no está logueado, muestra el botón de "Iniciar sesión"
        miCuenta.href = "#";
        miCuenta.innerHTML = '<i class="fas fa-user"></i> Mi cuenta';
        iniciarSesion.href = "login.html";
        iniciarSesion.textContent = "Iniciar sesión";
    }
});

// Función para verificar el login y guardar el usuario
function verificarLogin() {
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;
    
    // Usuarios válidos (provisionales)
    const usuarioValido = "admin";
    const contrasenaValida = "1234";

    // Mensaje de error
    const mensajeError = document.getElementById("mensaje-error");
    
    if (usuario === usuarioValido && contrasena === contrasenaValida) {
        // Guardamos el estado del usuario logueado en localStorage
        localStorage.setItem("usuarioLogueado", usuario);

        // Redirigir al perfil o página principal después del login
        window.location.href = "perfil.html";
    } else {
        // Mostrar mensaje de error si las credenciales son incorrectas
        mensajeError.textContent = "Usuario o contraseña incorrectos.";
        mensajeError.style.display = "block";
    }
}
