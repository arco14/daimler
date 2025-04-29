<?php
require_once "conexion.php";

class ModeloSubcolores
{
static public function mdlIngresarSubcolor($datos)
{
	$stmt=conexion::conectar()->prepare("INSERT INTO subcolores_tela(clave,descripcion,activo) VALUES (:clave,:descripcion,1)");
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
static public function MdlMostrarSubcolores($item,$valor)
{
	if($item != null)
	{		
$stmt=Conexion::conectar()->prepare("SELECT * FROM subcolores_tela WHERE $item=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();
	}else
	{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM subcolores_tela ORDER BY descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();
	}
$stmt->close();
$stmt=null;
}
static public function MdlMostrarSubcoloresActivos()
{
	   $stmt=Conexion::conectar()->prepare("SELECT * FROM subcolores_tela WHERE activo=1 ORDER BY descripcion");
	   $stmt-> execute();
	   return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}
//Mostrar subcolores diferentes a la que tiene el registro
static public function MdlMostrarSubcoloresSelect($item,$valor)
{
	
$stmt=Conexion::conectar()->prepare("SELECT * FROM subcolores_tela WHERE $item<>:$item AND activo=1 ORDER BY descripcion");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}
static public function mdlValidarSubcolor($datos)
{
	$stmt=Conexion::conectar()->prepare("SELECT * FROM subcolores_tela WHERE descripcion=:descripcion OR clave=:descripcion");
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	
	$stmt-> execute();
	return $stmt-> fetch();


	$stmt->close();
	$stmt=null;
}

//Actualizar talla
static public function mdlEditarSubcolor($datos){

$stmt=conexion::conectar()->prepare("UPDATE subcolores_tela SET clave=:clave,descripcion=:descripcion WHERE id=:id") ;
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
//Actualizar o desactivar subcolor
static public function mdlActualizarSubcolor($item1,$valor1,$item2,$valor2){
$stmt=conexion::conectar()->prepare("UPDATE subcolores_tela SET $item1=:$item1 WHERE $item2=:$item2") ;
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