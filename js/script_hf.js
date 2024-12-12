//Funcion para cargar el contenido del html dentro del contenedor
function loadHTML(elementId, filePath) {
  //fetch le utiliza para obtener el contenido de archivos distintos(header,footer)
  fetch(filePath)
    //then; Procesa la  respuesta y convierte en texto html que luego se inserta en los elementos(header,footer)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error al cargar ${filePath}${response.statusText}`);
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById(elementId).innerHTML = html;
    })
    //catch; Maneja cualquier  error diferente
    .catch((error) => console.error(error));
}
//Cargar el header y el footer
loadHTML("header", "components/header.html");
loadHTML("footer", "components/footer.html");
