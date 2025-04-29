<?php
require_once "conexion.php";

class ModeloColores
{
static public function mdlIngresarColor($datos)
{
	$stmt=conexion::conectar()->prepare("INSERT INTO colores_tela(clave,descripcion,activo) VALUES (:clave,:descripcion,1)");
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
static public function MdlMostrarColores($item,$valor)
{
	if($item != null)
	{		
$stmt=Conexion::conectar()->prepare("SELECT * FROM colores_tela WHERE $item=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();
	}else
	{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM colores_tela ORDER BY descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();
	}
$stmt->close();
$stmt=null;
}
static public function MdlMostrarColoresRegistro($item,$valor)
{
			
$stmt=Conexion::conectar()->prepare("SELECT colores_tela.id,CONCAT(colores_tela.descripcion,' ',subcolores_tela.descripcion) as descripcion FROM colores_tela INNER JOIN subcolores_tela ON colores_tela.id_subcolor=subcolores_tela.id WHERE colores_tela.".$item."=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();
	
$stmt->close();
$stmt=null;
}
static public function MdlMostrarColoresActivos()
{
	   $stmt=Conexion::conectar()->prepare("SELECT * FROM colores_tela WHERE activo=1 ORDER BY descripcion");
	   $stmt-> execute();
	   return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}
//Mostrar colores diferentes a la que tiene el registro
static public function MdlMostrarColoresSelect($item,$valor)
{
	
$stmt=Conexion::conectar()->prepare("SELECT * FROM colores_tela WHERE $item<>:$item AND activo=1 ORDER BY descripcion");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}

static public function mdlValidarColor($datos)
{
	$stmt=Conexion::conectar()->prepare("SELECT * FROM colores_tela WHERE descripcion=:descripcion OR clave=:descripcion");
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	
	$stmt-> execute();
	return $stmt-> fetch();

	$stmt->close();
	$stmt=null;
}

//Actualizar  color
static public function mdlEditarColor($datos){

$stmt=conexion::conectar()->prepare("UPDATE colores_tela SET clave=:clave,descripcion=:descripcion WHERE id=:id") ;
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
static public function mdlActualizarColor($item1,$valor1,$item2,$valor2){
$stmt=conexion::conectar()->prepare("UPDATE colores_tela SET $item1=:$item1 WHERE $item2=:$item2") ;
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