<?php
require_once "conexion.php";

class ModeloProveedores
{
static public function mdlIngresarProveedor($datos)
{
	$stmt=conexion::conectar()->prepare("INSERT INTO proveedores(nombre,contacto,telefono,email,activo) VALUES (:proveedor,:contacto,:telefono,:email,1)");
	$stmt->bindParam(":proveedor", $datos["nombre"],PDO::PARAM_STR);
	$stmt->bindParam(":contacto", $datos["contacto"],PDO::PARAM_STR);
	$stmt->bindParam(":telefono", $datos["telefono"],PDO::PARAM_STR);
	$stmt->bindParam(":email", $datos["email"],PDO::PARAM_STR);



	if($stmt->execute()){
		return "ok";
	}else
	{
		return "error";
	}
	$stmt->close();
	$stmt=null;
}
static public function MdlMostrarProveedores($item,$valor)
{
	if($item != null)
	{		
$stmt=Conexion::conectar()->prepare("SELECT * FROM proveedores WHERE $item=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();
	}else
	{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM proveedores ORDER BY nombre");
		$stmt-> execute();
		return $stmt-> fetchAll();
	}
$stmt->close();
$stmt=null;
}
static public function MdlMostrarProveedoresActivos()
{
	
		$stmt=Conexion::conectar()->prepare("SELECT * FROM proveedores WHERE activo=1 ORDER BY nombre ");
		$stmt-> execute();
		return $stmt-> fetchAll();
	
$stmt->close();
$stmt=null;
}
static public function MdlMostrarProveedoresSelect($item,$valor)
{
	
$stmt=Conexion::conectar()->prepare("SELECT * FROM proveedores WHERE $item<>:$item AND activo=1 ORDER BY nombre");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}

static public function mdlValidarProveedor($datos)
{
	$stmt=Conexion::conectar()->prepare("SELECT * FROM proveedores WHERE nombre=:nombre");
	$stmt->bindParam(":nombre", $datos["nombre"],PDO::PARAM_STR);
	
	$stmt-> execute();
	return $stmt-> fetch();

	$stmt->close();
	$stmt=null;
}

//Actualizar proveedor
static public function mdlEditarProveedor($datos){

$stmt=conexion::conectar()->prepare("UPDATE proveedores SET nombre=:nombre,contacto=:contacto,telefono=:telefono,email=:email WHERE id=:id") ;
	$stmt->bindParam(":nombre", $datos["nombre"],PDO::PARAM_STR);
	$stmt->bindParam(":contacto", $datos["contacto"],PDO::PARAM_STR);
	$stmt->bindParam(":telefono", $datos["telefono"],PDO::PARAM_STR);
	$stmt->bindParam(":email", $datos["email"],PDO::PARAM_STR);	
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
//Actualizar o desactivar proveedores
static public function mdlActualizarProveedor($item1,$valor1,$item2,$valor2){
$stmt=conexion::conectar()->prepare("UPDATE proveedores SET $item1=:$item1 WHERE $item2=:$item2") ;
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