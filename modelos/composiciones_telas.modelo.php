<?php
require_once "conexion.php";

class ModeloComposiciones
{
static public function mdlIngresarComposicion($datos)
{
	$stmt=conexion::conectar()->prepare("INSERT INTO composicion_tela(clave,descripcion,lavado,activa) VALUES (:clave,:descripcion,:lavado,1)");
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":lavado", $datos["lavado"],PDO::PARAM_STR);

	if($stmt->execute()){
		return "ok";
	}else
	{
		return "error";
	}
	$stmt->close();
	$stmt=null;
}
static public function MdlMostrarComposiciones($item,$valor)
{
	if($item != null)
	{		
$stmt=Conexion::conectar()->prepare("SELECT * FROM composicion_tela WHERE $item=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();
	}else
	{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM composicion_tela ORDER BY descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();
	}
$stmt->close();
$stmt=null;
}
static public function MdlMostrarComposicionesActivas()
{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM composicion_tela WHERE activa=1 ORDER BY descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();
		$stmt->close();
		$stmt=null;
}
//Mostrar subcolores diferentes a la que tiene el registro
static public function MdlMostrarComposicionesSelect($item,$valor)
{
	
$stmt=Conexion::conectar()->prepare("SELECT * FROM composicion_tela WHERE $item<>:$item AND activa=1 ORDER BY descripcion");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}

static public function mdlValidarComposicion($datos)
{
	$stmt=Conexion::conectar()->prepare("SELECT * FROM composicion_tela WHERE descripcion=:descripcion OR clave=:descripcion");
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	
	$stmt-> execute();
	return $stmt-> fetch();


	$stmt->close();
	$stmt=null;
}

//Actualizar talla
static public function mdlEditarComposicion($datos){

$stmt=conexion::conectar()->prepare("UPDATE composicion_tela SET clave=:clave,descripcion=:descripcion,lavado=:lavado WHERE id=:id") ;
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":lavado", $datos["lavado"],PDO::PARAM_STR);
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
//Actualizar o desactivar categoria
static public function mdlActualizarComposicion($item1,$valor1,$item2,$valor2){
$stmt=conexion::conectar()->prepare("UPDATE composicion_tela SET $item1=:$item1 WHERE $item2=:$item2") ;
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