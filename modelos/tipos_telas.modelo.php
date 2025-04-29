<?php
require_once "conexion.php";

class ModeloTipos
{
static public function mdlIngresarTipo($datos)
{
	$stmt=conexion::conectar()->prepare("INSERT INTO tipos_tela(clave,descripcion,activo) VALUES (:clave,:descripcion,1)");
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);

	if($stmt->execute()){
		return "ok";
	}else
	{
		return "error";
	}
	$stmt->close();
	$stmt=null;
}
static public function MdlMostrarTipos($item,$valor)
{
	if($item != null)
	{		
$stmt=Conexion::conectar()->prepare("SELECT * FROM tipos_tela WHERE $item=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();
	}else
	{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM tipos_tela ORDER BY descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();
	}
$stmt->close();
$stmt=null;
}
static public function MdlMostrarTiposActivos()
{
	   $stmt=Conexion::conectar()->prepare("SELECT * FROM tipos_tela WHERE activo=1 ORDER BY descripcion");
	   $stmt-> execute();
	   return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}
//Mostrar tipos diferentes a la que tiene el registro
static public function MdlMostrarTiposSelect($item,$valor)
{
	
$stmt=Conexion::conectar()->prepare("SELECT * FROM tipos_tela WHERE $item<>:$item AND activo=1 ORDER BY descripcion");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}


static public function mdlValidarTipo($datos)
{
	$stmt=Conexion::conectar()->prepare("SELECT * FROM tipos_tela WHERE descripcion=:descripcion OR clave=:descripcion");
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	
	
	$stmt-> execute();
	return $stmt-> fetch();


	$stmt->close();
	$stmt=null;
}

//Actualizar tipo
static public function mdlEditarTipo($datos){

$stmt=conexion::conectar()->prepare("UPDATE tipos_tela SET clave=:clave,descripcion=:descripcion WHERE id=:id") ;
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":id", $datos["id"],PDO::PARAM_INT);

	if($stmt->execute()){
		return "ok";
	}else
	{
		return "error";
	}
	
	$stmt->close();
	$stmt=null;

}
//Actualizar o desactivar color
static public function mdlActualizarTipo($item1,$valor1,$item2,$valor2){
$stmt=conexion::conectar()->prepare("UPDATE tipos_tela SET $item1=:$item1 WHERE $item2=:$item2") ;
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