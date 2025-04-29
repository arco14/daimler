<?php
require_once "conexion.php";

class ModeloUnidades
{

static public function MdlMostrarUnidades($item,$valor)
{
	if($item != null)
	{		
$stmt=Conexion::conectar()->prepare("SELECT * FROM unidades_medida WHERE $item=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();
	}else
	{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM unidades_medida ORDER BY descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();
	}
$stmt->close();
$stmt=null;
}
static public function MdlMostrarUnidadesActivas()
{
	   $stmt=Conexion::conectar()->prepare("SELECT * FROM unidades_medida WHERE activa=1 ORDER BY descripcion");
	   $stmt-> execute();
	   return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}





}