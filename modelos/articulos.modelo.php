<?php
require_once "conexion.php";

class ModeloArticulos
{

static public function mdlIngresarLinea($datos)
{

	$stmt=conexion::conectar()->prepare("INSERT INTO lineas(clave,descripcion,activa) VALUES (:clave,:descripcion,1)");
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
static public function MdlMostrarArticulos($item,$valor)
{
	if($item != null)
	{
$stmt=Conexion::conectar()->prepare("SELECT * FROM articulos WHERE $item=:$item ");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();

	}else

	{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM articulos ORDER BY descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();

	}
$stmt->close();
$stmt=null;
}
//Actualizar linea
static public function mdlEditarLinea($datos){

$stmt=conexion::conectar()->prepare("UPDATE lineas SET clave=:clave,descripcion=:descripcion WHERE id=:id") ;
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
//Actualizar o desactivar linea
static public function mdlActualizarLinea($item1,$valor1,$item2,$valor2){
$stmt=conexion::conectar()->prepare("UPDATE lineas SET $item1=:$item1 WHERE $item2=:$item2") ;
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