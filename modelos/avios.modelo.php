<?php
require_once "conexion.php";

class ModeloAvios
{
static public function mdlIngresarAvio($datos)
{
	$stmt=conexion::conectar()->prepare("INSERT INTO avios(clave,descripcion,precio,id_tipo,id_proveedor,id_unidad,activo) VALUES (:clave,:descripcion,:precio,:id_tipo,:id_proveedor,:id_unidad,1)");
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":precio", $datos["precio"],PDO::PARAM_STR);
	$stmt->bindParam(":id_tipo", $datos["id_tipo"],PDO::PARAM_INT);
	$stmt->bindParam(":id_proveedor", $datos["id_proveedor"],PDO::PARAM_INT);
	$stmt->bindParam(":id_unidad", $datos["id_unidad"],PDO::PARAM_INT);


	if($stmt->execute()){
		return "ok";
	}else
	{
		return "error";
	}

	$stmt->close();
	$stmt=null;
}
static public function MdlMostrarAvios($item,$valor)
{
	if($item != null)
	{		
$stmt=Conexion::conectar()->prepare("SELECT avios.id,avios.clave,avios.descripcion,avios.precio,avios.id_tipo,tipos_avio.descripcion as tipo,avios.id_proveedor,proveedores.nombre as proveedor,avios.id_unidad,unidades_medida.descripcion as unidad FROM avios INNER JOIN proveedores on proveedores.id=avios.id_proveedor INNER JOIN tipos_avio on tipos_avio.id=avios.id_tipo INNER JOIN unidades_medida on unidades_medida.id=avios.id_unidad WHERE avios.".$item."=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();
	}else
	{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM avios ORDER BY descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();
	}
$stmt->close();
$stmt=null;
}

//Mo
static public function MdlMostrarAviosActivos()
{
	
		$stmt=Conexion::conectar()->prepare("SELECT * FROM avios WHERE activo=1 ORDER BY descripcion ");
		$stmt-> execute();
		return $stmt-> fetchAll();
	
$stmt->close();
$stmt=null;
}

static public function mdlValidarAvio($datos)
{
	$stmt=Conexion::conectar()->prepare("SELECT * FROM avios WHERE clave=:descripcion OR descripcion=:descripcion ");
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	
	$stmt-> execute();
	return $stmt-> fetch();

	$stmt->close();
	$stmt=null;
}

//Actualizar talla
static public function mdlEditarAvio($datos){

$stmt=conexion::conectar()->prepare("UPDATE avios SET clave=:clave,descripcion=:descripcion,precio=:precio,id_tipo=:id_tipo,id_proveedor=:id_proveedor,id_unidad=:id_unidad WHERE id=:id") ;
		$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":precio", $datos["precio"],PDO::PARAM_STR);
	$stmt->bindParam(":id_tipo", $datos["id_tipo"],PDO::PARAM_INT);
	$stmt->bindParam(":id_proveedor", $datos["id_proveedor"],PDO::PARAM_INT);
	$stmt->bindParam(":id_unidad", $datos["id_unidad"],PDO::PARAM_INT);
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

static public function mdlActualizarAvio($item1,$valor1,$item2,$valor2){
$stmt=conexion::conectar()->prepare("UPDATE avios SET $item1=:$item1 WHERE $item2=:$item2") ;
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