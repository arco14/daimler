<?php
require_once "conexion.php";

class ModeloDivisiones
{


static public function MdlMostrarDivisiones($item,$valor)
{
	if($item != null)
	{
$stmt=Conexion::conectar()->prepare("SELECT * FROM divisiones WHERE $item=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();

	}else

	{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM divisiones ");
		$stmt-> execute();
		return $stmt-> fetchAll();

	}
$stmt->close();
$stmt=null;
}

//Mostrar divisiones diferentes a la que tiene el registro
static public function MdlMostrarDivisionesSelect($item,$valor)
{
	
$stmt=Conexion::conectar()->prepare("SELECT * FROM divisiones WHERE $item<>:$item AND activa=1 ORDER BY descripcion");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}

//Mostrar divisiones que están activas
static public function MdlMostrarDivisionesActivas()
{
	
		$stmt=Conexion::conectar()->prepare("SELECT * FROM divisiones WHERE activa=1 ORDER BY descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}


}