<?php
require_once "conexion.php";

class ModeloTipos
{


static public function MdlMostrarTiposActivos()
{
	   $stmt=Conexion::conectar()->prepare("SELECT * FROM tipos_producto WHERE activo=1 ORDER BY descripcion");
	   $stmt-> execute();
	   return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}





}