<?php

require_once "conexion.php";

class ModeloClientes{
//CREAR CLIENTE
	static public function mdlIngresarCliente($tabla,$datos){

$stmt=Conexion::conectar()->prepare("INSERT INTO $tabla(nombre,documento,email,telefono) VALUES(:nombre,:documento,:email,:telefono)");


	$stmt->bindParam(":nombre", $datos["nombre"],PDO::PARAM_STR);
	$stmt->bindParam(":documento", $datos["documento"],PDO::PARAM_STR);
	$stmt->bindParam(":email", $datos["email"],PDO::PARAM_STR);
	$stmt->bindParam(":telefono", $datos["telefono"],PDO::PARAM_STR);
	
if($stmt->execute()){

return "ok";
}else
{
	return "error";
}
$stmt->close();
$smtm=null;
}
static public function mdlMostrarClientes($item,$valor){

if($item !=null){
$stmt=Conexion::conectar()->prepare("SELECT * FROM clientes WHERE $item=:$item ORDER BY id DESC");
$stmt -> bindParam(":".$item,$valor,PDO::PARAM_STR);

$stmt->execute();
return $stmt->fetch();
}else
{
$stmt=Conexion::conectar()->prepare("SELECT * FROM clientes");


$stmt->execute();
return $stmt->fetchAll();

}
$stmt -> close();
$stmt=null;
}
static public function mdlMostrarClientesActivos(){


$stmt=Conexion::conectar()->prepare("SELECT * FROM clientes");
$stmt->execute();
return $stmt->fetchAll();

$stmt -> close();
$stmt=null;
}
static public function mdlMostrarRangosDescuento(){

$stmt=Conexion::conectar()->prepare("SELECT * FROM rangos_cliente WHERE id IN (2,3,6)");
$stmt->execute();
return $stmt->fetchAll();

$stmt -> close();
$stmt=null;
}
//EDITAR CLIENTE
	static public function mdlEditarCliente($tabla,$datos){

$stmt=Conexion::conectar()->prepare("UPDATE $tabla SET nombre=:nombre,documento=:documento,email=:email,telefono=:telefono WHERE id=:id");

	$stmt->bindParam(":id", $datos["id"],PDO::PARAM_INT);
	$stmt->bindParam(":nombre", $datos["nombre"],PDO::PARAM_STR);
	$stmt->bindParam(":documento", $datos["documento"],PDO::PARAM_STR);
	$stmt->bindParam(":email", $datos["email"],PDO::PARAM_STR);
	$stmt->bindParam(":telefono", $datos["telefono"],PDO::PARAM_STR);
	
if($stmt->execute()){

return "ok";
}else
{
	return "error";
}
$stmt->close();
$smtm=null;
}


//ACTUALIZAR CLIENTE
static public function mdlActualizarCliente($tabla,$item1,$valor1,$valor){
$stmt=conexion::conectar()->prepare("UPDATE $tabla SET $item1=:$item1 WHERE id=:id") ;
$stmt->bindParam(":".$item1, $valor1,PDO::PARAM_STR);
	$stmt->bindParam(":id",$valor,PDO::PARAM_STR);
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
