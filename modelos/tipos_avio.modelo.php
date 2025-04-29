<?php
require_once "conexion.php";

class ModeloTiposAvios
{
static public function mdlIngresarTipoAvio($datos)
{
	$stmt=conexion::conectar()->prepare("INSERT INTO tipos_avio(clave,descripcion,activo) VALUES (:clave,:descripcion,1)");
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
static public function MdlMostrarTiposAvios($item,$valor)
{
	if($item != null)
	{		
$stmt=Conexion::conectar()->prepare("SELECT * FROM tipos_avio WHERE $item=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();
	}else
	{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM tipos_avio ORDER BY descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();
	}
$stmt->close();
$stmt=null;
}

//Mo
static public function MdlMostrarTiposAviosActivos()
{
	
		$stmt=Conexion::conectar()->prepare("SELECT * FROM tipos_avio WHERE activo=1 ORDER BY descripcion ");
		$stmt-> execute();
		return $stmt-> fetchAll();
	
$stmt->close();
$stmt=null;
}

static public function mdlValidarTipoAvio($datos)
{
	$stmt=Conexion::conectar()->prepare("SELECT * FROM tipos_avio WHERE clave=:descripcion OR descripcion=:descripcion ");
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	
	$stmt-> execute();
	return $stmt-> fetch();

	$stmt->close();
	$stmt=null;
}

//Actualizar talla
static public function mdlEditarTipoAvio($datos){

$stmt=conexion::conectar()->prepare("UPDATE tipos_avio SET clave=:clave,descripcion=:descripcion WHERE id=:id") ;
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

static public function mdlActualizarTipoAvio($item1,$valor1,$item2,$valor2){
$stmt=conexion::conectar()->prepare("UPDATE tipos_avio SET $item1=:$item1 WHERE $item2=:$item2") ;
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