<?php
require_once "conexion.php";

class ModeloCategorias
{

static public function mdlIngresarCategoria($datos)
{
	$stmt=conexion::conectar()->prepare("INSERT INTO categorias(clave,descripcion,id_division,activa) VALUES (:clave,:descripcion,:id_division,1)");
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":id_division", $datos["id_division"],PDO::PARAM_STR);
	
	
	if($stmt->execute()){
		return "ok";
	}else
	{
		return "error";
	}
	$stmt->close();
	$stmt=null;
}

static public function MdlMostrarCategorias($item,$valor)
{
	if($item != null)
	{		
$stmt=conexion::conectar()->prepare("SELECT categorias.id, categorias.clave,categorias.descripcion,divisiones.descripcion as division,categorias.id_division FROM categorias INNER JOIN divisiones ON divisiones.id=categorias.id_division WHERE categorias.".$item."=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();
	}else
	{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM categorias");
		$stmt-> execute();
		return $stmt-> fetchAll();
	}
$stmt->close();
$stmt=null;
}
static public function MdlMostrarCategoriasActivas()
{
		$stmt=conexion::conectar()->prepare("SELECT categorias.id,categorias.descripcion FROM categorias   WHERE categorias.activa=1 ORDER BY categorias.descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}

static public function mdlValidarCategoria($datos)
{
	$stmt=Conexion::conectar()->prepare("SELECT * FROM categorias WHERE  clave=:descripcion OR descripcion=:descripcion");
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	

	$stmt-> execute();
	return $stmt-> fetch();


	$stmt->close();
	$stmt=null;
}


//Actualizar linea
static public function mdlEditarCategoria($datos){

$stmt=conexion::conectar()->prepare("UPDATE categorias SET clave=:clave,descripcion=:descripcion,id_division=:id_division WHERE id=:id") ;
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":id", $datos["id"],PDO::PARAM_INT);
    $stmt->bindParam(":id_division", $datos["id_division"],PDO::PARAM_INT);


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
static public function mdlActualizarCategoria($item1,$valor1,$item2,$valor2){
$stmt=conexion::conectar()->prepare("UPDATE categorias SET $item1=:$item1 WHERE $item2=:$item2") ;
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