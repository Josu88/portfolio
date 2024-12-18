<?php
// Datos de conexión a la base de datos
$servidor = "localhost";
$usuario = "zvlcambv_emailDB";
$contraseña = "TPYqaECZ9CkmfZDJv3Ze";
$baseDeDatos = "zvlcambv_emailDB";
// Crear conexión
$conn = new mysqli($servidor, $usuario, $contraseña, $baseDeDatos);
// Verificar la conexión
if ($conn->connect_error) {
die("Conexión fallida: " . $conn->connect_error);
}
// Recibir datos del formulario


$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];
// Insertar los datos en la base de datos
$sql = "INSERT INTO usuarios (nombre, email, mensaje) VALUES ('$nombre',
'$email', '$mensaje')";
if ($conn->query($sql) === TRUE) {
echo "Datos insertados correctamente.";
} else {
echo "Error al insertar los datos: " . $conn->error;
}
// Cerrar la conexión
$conn->close();
?>