<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura los valores enviados
    $user         = isset($_POST['user'])   ? $_POST['user']   : '';
    $token        = isset($_POST['token'])  ? $_POST['token']  : '';
    $area         = isset($_POST['area'])   ? $_POST['area']   : '';
    $nombre       = isset($_POST['nombre']) ? $_POST['nombre'] : '';
    $puesto       = isset($_POST['puesto']) ? $_POST['puesto'] : '';
    $userCorreo   = isset($_POST['userCorreo']) ? $_POST['userCorreo'] : '';
    $userImg      = isset($_POST['userImg']) ? $_POST['userImg'] : '';


    $_SESSION['userActive']   = $user;
    $_SESSION['token']        = $token;
    $_SESSION['area']         = $area;
    $_SESSION['nombre']       = $nombre;
    $_SESSION['puesto']       = $puesto;
    $_SESSION['userCorreo']   = $userCorreo;
    $_SESSION['userImg']      = $userImg;
}
?>