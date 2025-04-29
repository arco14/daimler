<?php
require_once "conexion.php";

class ModeloTallas
{

static public function mdlIngresarTalla($datos)
{
	$stmt=conexion::conectar()->prepare("INSERT INTO tallas(clave,descripcion,orden,id_division,activa) VALUES (:clave,:descripcion,:orden,:id_division,1)");
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":orden", $datos["orden"],PDO::PARAM_INT);
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
static public function MdlMostrarTallas($item,$valor)
{
	if($item != null)
	{		
$stmt=Conexion::conectar()->prepare("SELECT tallas.id,tallas.clave,tallas.descripcion,tallas.orden,tallas.id_division,divisiones.descripcion as division FROM tallas INNER JOIN divisiones ON divisiones.id=tallas.id_division WHERE tallas.".$item."=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();
	}else
	{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM tallas ORDER BY id_division,orden");
		$stmt-> execute();
		return $stmt-> fetchAll();
	}
$stmt->close();
$stmt=null;
}
static public function MdlMostrarTallasActivas($datos)
{
	
		$stmt=Conexion::conectar()->prepare("SELECT tallas.id,tallas.clave as talla FROM tallas INNER JOIN divisiones ON divisiones.id=tallas.id_division 

INNER JOIN categorias ON categorias.id_division=divisiones.id
INNER JOIN categoria_subcategoria ON categoria_subcategoria.id_categoria=categorias.id
WHERE categoria_subcategoria.id=:id_prenda AND id_genero=:id_genero AND tallas.activa=1

  ORDER BY orden");
		$stmt->bindParam(":id_prenda",$datos["id_prenda"],PDO::PARAM_INT);
		$stmt->bindParam(":id_genero",$datos["id_genero"],PDO::PARAM_INT);
		
		$stmt-> execute();
		return $stmt-> fetchAll();
	
$stmt->close();
$stmt=null;
}
static public function mdlValidarTallas($datos)
{
	$stmt=Conexion::conectar()->prepare("SELECT * FROM tallas WHERE clave=:descripcion or descripcion=:descripcion");
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);

	$stmt-> execute();
	return $stmt-> fetch();


	$stmt->close();
	$stmt=null;
}

//Actualizar talla
static public function mdlEditarTalla($datos){

$stmt=conexion::conectar()->prepare("UPDATE tallas SET clave=:clave,descripcion=:descripcion, orden=:orden, id_division=:id_division WHERE id=:id") ;
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":orden", $datos["orden"],PDO::PARAM_INT);
	$stmt->bindParam(":id_division", $datos["id_division"],PDO::PARAM_INT);
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
static public function mdlActualizarTalla($item1,$valor1,$item2,$valor2){
$stmt=conexion::conectar()->prepare("UPDATE tallas SET $item1=:$item1 WHERE $item2=:$item2") ;
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