<?php
require_once "conexion.php";

class ModeloGeneros
{
static public function MdlMostrarGeneros($item,$valor)
{
	if($item != null)
	{		
$stmt=Conexion::conectar()->prepare("SELECT * FROM generos WHERE $item=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();
	}else
	{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM generos ");
		$stmt-> execute();
		return $stmt-> fetchAll();
	}
$stmt->close();
$stmt=null;
}
//Mostrar generos que están activos
static public function MdlMostrarGenerosActivos()
{
	
		$stmt=Conexion::conectar()->prepare("SELECT * FROM generos WHERE activo=1 ORDER BY descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}
//Mostrar generos diferentes a la que tiene el registro
static public function MdlMostrarGenerosSelect($item,$valor)
{
	
$stmt=Conexion::conectar()->prepare("SELECT * FROM generos WHERE $item<>:$item AND activo=1 ORDER BY descripcion");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}

//Actualizar o desactivar genero
static public function mdlActualizarGenero($item1,$valor1,$item2,$valor2){
$stmt=conexion::conectar()->prepare("UPDATE generos SET $item1=:$item1 WHERE $item2=:$item2") ;
$stmt->bindParam(":".$item1, $valor1,PDO::PARAM_INT);
$stmt->bindParam(":".$item2, $valor2,PDO::PARAM_INT);
if($stmt->execute()){
		return "ok";
	}else
	{
		return "error";
	}
	
	$stmt->close();
	$stmt=null;

	}

}

