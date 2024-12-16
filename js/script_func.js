/*jshint esversion: 6 */
/*JavaScript para despelgar el menu de navegación cuando el tamaño de la pantalla es de movil o tablet */
//Funcion para mostrar y ocultar el barra de navegación(el nav)
function showNavBar() {
  let navbarNav = document.getElementById("navbarNav");

  //Comprobamos que el nenuNav tenga la clase collapse
  if (navbarNav.classList.contains("collapse")) {
    //Si la tiene se la quitamos
    navbarNav.classList.remove("collapse");
  } else {
    //Si no la tiene se la ponemos
    navbarNav.classList.add("collapse");
  }
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    //Evitar que el formulario se envie de forma automatica
    event.preventDefault();
    let isValid = true;

    //Elegimos los elementos del dom que usaremos de la pagina contact
    let error = document.getElementById("error");
    let nombre = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    //validamos el nombre
    if (nombre == "") {
      error.textContent = "El nombre es obligatorio";
      // Cambia el color de fondo del div con id error
      error.style.backgroundColor = "red";
      isValid = false;
    } else {
      error.textContent = "";
    }

    //Validar el correo
    let emailPattern = /^[^@\s|+@\s]+\.[^@\s]+$/;
    if (email === "") {
      error.textContent = "El correo electronico es obligatorio";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      error.textContent = "Ingresa un correo electronico válido";
      // Cambia el color de fondo del div con id error
      error.style.backgroundColor = "red";
      isValid = false;
    } else {
      error.textContent = "";
    }

    //Validamos el textArea mensaje
    if (mensaje === "") {
      error.textContent = "El mensaje no puede estar vacio";
      // Cambia el color de fondo del div con id error
      error.style.backgroundColor = "red";
      isValid = false;
    } else {
      error.textContent = "";
    }

    //Si todos los campos son validos se puede evitar el formulario
    if (!isValid) {
      error.textContent = "formulario enviado exitosamente";
      // Cambia el color de fondo del div con id error
      error.style.backgroundColor = "blue";
    } else {
      error.textContent = "";
    }
  });
