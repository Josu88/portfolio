// Archivo validar.js
document.getElementById("contact-form").onsubmit = function(event) {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    if (nombre === "" || email === "" || mensaje === "") {
    alert("Todos los campos son obligatorios.");
    event.preventDefault(); // Evita el envío del formulario
    } else {
    // Realiza validaciones adicionales si es necesario (como el formato del correo)
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    event.preventDefault();
    }
    
    }
    };