<?php 
session_start();
?>
<?php 
include( "router.php"); 
?>
<!DOCTYPE html>
<html>
<head lang="es">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>Daimler</title>
    <!-- Favicon-->
    <link rel="icon" href="vistas/img/lazlogo.png" type="image/x-icon">

     <?php include( "encabezados.php"); 

      if(isset($_GET["ruta"]))
    {
        Router::getEncabezados($_GET["ruta"]);
    }
    else
    {
    }
    ?>
</head>
<body class="theme-red">
    <?php
    $validacion=1;
if( $validacion== 1){
    include "modulos/header.php";
    include "modulos/menu.php";
    // verificamos que exista la variable y luego mandamos llamar el archivo donde se encuentra la vista
    if(isset($_GET["ruta"])) {
            Router::getVistas($_GET["ruta"]);
        }
    else 
    {

    }
}
else
{
include "modulos/login.php";
}
    ?>
</body>
</html>

