<?php
require_once "conexion.php";

class ModeloAlmacenes
{
static public function mdlIngresarTipo($datos)
{
	$stmt=conexion::conectar()->prepare("INSERT INTO tipos_tela(clave,descripcion,activo) VALUES (:clave,:descripcion,1)");
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
static public function MdlMostrarUnidades($item,$valor)
{
	if($item != null)
	{		
$stmt=Conexion::conectar()->prepare("SELECT * FROM unidades_medida WHERE $item=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();
	}else
	{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM unidades_medida ORDER BY descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();
	}
$stmt->close();
$stmt=null;
}
static public function mdlMostrarAlmacenesMaximos()
{
	   $stmt=Conexion::conectar()->prepare("SELECT id,nombre  FROM almacenes WHERE activo=1 AND max_min=1  ORDER BY nombre");
	   $stmt-> execute();
	   return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}
//Mostrar subcolores diferentes a la que tiene el registro
static public function MdlMostrarUnidadesSelect($item,$valor)
{
	
$stmt=Conexion::conectar()->prepare("SELECT * FROM unidades_medida WHERE $item<>:$item AND activa=1 ORDER BY descripcion");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}
static public function mdlValidarTipo($datos)
{
	$stmt=Conexion::conectar()->prepare("SELECT * FROM tipos_tela WHERE descripcion=:descripcion");
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	
	
	$stmt-> execute();
	return $stmt-> fetch();


	$stmt->close();
	$stmt=null;
}

//Actualizar talla
static public function mdlEditarColor($datos){

$stmt=conexion::conectar()->prepare("UPDATE colores_tela SET clave=:clave,descripcion=:descripcion,id_subcolor=:id_subcolor WHERE id=:id") ;
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":id_subcolor", $datos["id_subcolor"],PDO::PARAM_INT);
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