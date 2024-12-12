<?php
//Verificar si el formulario fue enviado al servidor mediante el metodo POST
if($_SERVER["REQUEST_METHOD"]=="POST"){
    //Recuperar los datos enviados desde el formulario y validarlos para enviar problemas de seguridad
    $nombre=htmlspecialchars($_POST['NOMBRE']);//Eliminar caracteres especiales
    $email=htmlspecialchars($_POST['email']);//Eliminar caracteres especiales
    $mensaje=htmlspecialchars($_POST['mensaje']);//Eliminar caracteres especiales

    //Direccion donde se envia
    $destinatario="cpdpwjosueri@gmail.com";
    $asunto="Nuevo mensaje del contacto";
    $contenido="Has recibido un correo";
    $contenido="Nombre $nombre";
    $contenido="email $email";
    $contenido="mensaje $mensaje";

    //encabezado
    $headers = "De: $email";
    $headers = "Reply: $email";

    //funcion else if
    if(mail($destinatario,$asunto,$contenido,$headers)){
        echo"acceso autorizado";
        echo"!mensaje enviado con exito";
    }else{
        echo "error de envio intertarlo de nuevo";
    }
}
?>