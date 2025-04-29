<?php

require_once "conexion.php";

class ModeloMarcas
{

static public function mdlIngresarMarca($datos)
{

	$stmt=conexion::conectar()->prepare("INSERT INTO marcas(clave,descripcion,tipo,activa) VALUES (:clave,:descripcion,:tipo,1)");
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":tipo", $datos["tipo"],PDO::PARAM_STR);
	
	if($stmt->execute()){
		return "ok";
	
	
	}else
	{
		return "error";
	}
	

	$stmt->close();
	$stmt=null;
}

static public function MdlMostrarMarcas($item,$valor)
{
	if($item != null)
	{
$stmt=Conexion::conectar()->prepare("SELECT * FROM marcas WHERE $item=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();

	}else

	{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM marcas ORDER BY descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();

	}
$stmt->close();
$stmt=null;
}
//Mostrar marcas que están activas
static public function MdlMostrarMarcasActivas()
{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM marcas WHERE activa=1 ORDER BY descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}
static public function MdlMostrarMarcasHilos()
{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM marcas WHERE hilo=1 ORDER BY descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}


static public function mdlValidarMarca($datos)
{

	$stmt=conexion::conectar()->prepare("SELECT * FROM marcas WHERE descripcion=:descripcion OR clave=:descripcion");
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt-> execute();
    return $stmt-> fetch();
	
	$stmt->close();
	$stmt=null;
}


static public function mdlEditarMarca($datos){

$stmt=conexion::conectar()->prepare("UPDATE marcas SET clave=:clave,descripcion=:descripcion,tipo=:tipo WHERE id=:id") ;
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":tipo", $datos["tipo"],PDO::PARAM_STR);
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
//ACTIVAR O DESACTIVAR MARCA
static public function mdlActualizarMarca($item1,$valor1,$item2,$valor2){
$stmt=conexion::conectar()->prepare("UPDATE marcas SET $item1=:$item1 WHERE $item2=:$item2") ;
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