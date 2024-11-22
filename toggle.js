document.getElementById("btn_iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn_registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

var formulario_login = document.querySelector(".formulario_login");
var formulario_register = document.querySelector(".formulario_register");
var contenedor_login_register = document.querySelector(".contenedor_login-register");
var caja_trasera_login = document.querySelector(".caja_trasera-login");
var caja_trasera_register = document.querySelector(".caja_trasera-register");

function anchoPage() {
    if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}
anchoPage();
function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_login.style.display = "block"; // Mostrar formulario de login
        contenedor_login_register.style.left = "10px"; // Ajustar posición
        formulario_register.style.display = "none"; // Ocultar formulario de registro
        caja_trasera_register.style.opacity = "1"; // Ajustar opacidad de la caja de registro
        caja_trasera_login.style.opacity = "0"; // Hacer que la caja de login sea invisible
    } else {
        formulario_login.style.display = "block"; // Mostrar formulario de login
        contenedor_login_register.style.left = "0px"; // Ajustar la posición para pantallas pequeñas
        formulario_register.style.display = "none"; // Ocultar formulario de registro
        caja_trasera_register.style.display = "block"; // Mostrar la caja de registro
        caja_trasera_login.style.display = "none"; // Ocultar la caja de login
    }
}
function register() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block"; // Mostrar formulario de registro
        contenedor_login_register.style.left = "410px"; // Ajustar la posición
        formulario_login.style.display = "none"; // Ocultar formulario de login
        caja_trasera_register.style.opacity = "0"; // Hacer que la caja de registro sea invisible
        caja_trasera_login.style.opacity = "1"; // Mostrar la caja de login
    } else {
        formulario_register.style.display = "block"; // Mostrar formulario de registro
        contenedor_login_register.style.left = "0px"; // Ajustar posición en pantallas pequeñas
        formulario_login.style.display = "none"; // Ocultar formulario de login
        caja_trasera_register.style.display = "none"; // Ocultar caja de registro
        caja_trasera_login.style.display = "block"; // Mostrar caja de login
        caja_trasera_login.style.opacity = "1"; // Ajustar la opacidad de la caja de login
    }
}
