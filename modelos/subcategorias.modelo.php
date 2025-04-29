<?php
require_once "conexion.php";

class ModeloSubcategorias
{

static public function mdlIngresarSubcategoria($datos)
{
	$stmt=conexion::conectar()->prepare("INSERT INTO subcategorias(clave,descripcion,activa) VALUES (:clave,:descripcion,1)");
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
//Mostrar subcategorias que están activas
static public function MdlMostrarSubcategoriasActivas()
{
	
		$stmt=Conexion::conectar()->prepare("SELECT * FROM subcategorias WHERE activa=1 ");
		$stmt-> execute();
		return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}

//Mostrar subcategorias diferentes a la que tiene el registro
static public function MdlMostrarSubcategoriasSelect($item,$valor)
{
	
$stmt=Conexion::conectar()->prepare("SELECT * FROM subcategorias WHERE $item<>:$item AND activa=1 ORDER BY descripcion");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}


static public function MdlMostrarSubcategorias($item,$valor)
{
	if($item != null)
	{
$stmt=Conexion::conectar()->prepare("SELECT * FROM subcategorias WHERE $item=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();
	}else
	{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM subcategorias ORDER BY descripcion ");
		$stmt-> execute();
		return $stmt-> fetchAll();

	}
$stmt->close();
$stmt=null;
}
//Validar Subcategoria
static public function mdlValidarSubcategoria($datos)
{

	$stmt=conexion::conectar()->prepare("SELECT * FROM subcategorias WHERE descripcion=:descripcion OR clave=:descripcion");
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt-> execute();
    return $stmt-> fetch();
	
	$stmt->close();
	$stmt=null;
}
//Actualizar linea
static public function mdlEditarSubcategoria($datos){

$stmt=conexion::conectar()->prepare("UPDATE subcategorias SET clave=:clave,descripcion=:descripcion WHERE id=:id") ;
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
//Actualizar o desactivar subcategoria
static public function mdlActualizarSubcategoria($item1,$valor1,$item2,$valor2){
$stmt=conexion::conectar()->prepare("UPDATE subcategorias SET $item1=:$item1 WHERE $item2=:$item2") ;
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