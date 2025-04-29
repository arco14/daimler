<?php

require_once "conexion.php";

class ModeloHilos
{

static public function mdlIngresarHilo($datos)
{

	$stmt=conexion::conectar()->prepare("INSERT INTO hilos(clave,color,id_proveedor,activo) VALUES (:clave,:color,:id_proveedor,1)");
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":color", $datos["color"],PDO::PARAM_STR);
	$stmt->bindParam(":id_proveedor", $datos["id_proveedor"],PDO::PARAM_INT);
	
	if($stmt->execute()){
		return "ok";
	
	
	}else
	{
		return "error";
	}
	

	$stmt->close();
	$stmt=null;
}

static public function MdlMostrarHilos($item,$valor)
{
	if($item != null)
	{
$stmt=Conexion::conectar()->prepare("SELECT hilos.id,hilos.clave,hilos.color,hilos.id_proveedor,proveedores.nombre as proveedor FROM hilos INNER JOIN proveedores ON proveedores.id=hilos.id_proveedor WHERE hilos.".$item."=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();

	}else

	{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM hilos ORDER BY clave");
		$stmt-> execute();
		return $stmt-> fetchAll();

	}
$stmt->close();
$stmt=null;
}
//Mostrar marcas que están activas
static public function MdlMostrarHilosActivos()
{
		$stmt=Conexion::conectar()->prepare("SELECT id,CONCAT(clave,' - ',color) as descripcion FROM hilos WHERE activo=1 ORDER BY descripcion");
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


static public function mdlValidarHilo($datos)
{

	$stmt=conexion::conectar()->prepare("SELECT * FROM hilos WHERE clave=:clave");
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt-> execute();
    return $stmt-> fetch();
	
	$stmt->close();
	$stmt=null;
}


static public function mdlEditarHilo($datos){

$stmt=conexion::conectar()->prepare("UPDATE hilos SET clave=:clave,color=:color,id_proveedor=:id_proveedor WHERE id=:id") ;
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":color", $datos["color"],PDO::PARAM_STR);
	$stmt->bindParam(":id_proveedor", $datos["id_proveedor"],PDO::PARAM_INT);
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
static public function mdlActualizarHilo($item1,$valor1,$item2,$valor2){
$stmt=conexion::conectar()->prepare("UPDATE hilos SET $item1=:$item1 WHERE $item2=:$item2") ;
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