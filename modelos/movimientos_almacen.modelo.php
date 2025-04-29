<?php
require_once "conexion.php";

class ModeloMovimientos
{
static public function mdlIngresarMovimiento($datos)
{
	$stmt=conexion::conectar()->prepare("CALL lazlotex_ingresar_movimiento_almacen (:id_almacen,:id_usuario,:id_tipo,:documento,:id_proveedor,:id_pedido,:surtidor)");
	$stmt->bindParam(":id_almacen", $datos["id_almacen"],PDO::PARAM_INT);
	$stmt->bindParam(":id_usuario", $datos["id_usuario"],PDO::PARAM_INT);
	$stmt->bindParam(":id_tipo", $datos["id_tipo"],PDO::PARAM_INT);
	$stmt->bindParam(":documento", $datos["documento"],PDO::PARAM_STR);
	$stmt->bindParam(":surtidor", $datos["surtidor"],PDO::PARAM_STR);
	$stmt->bindParam(":id_pedido", $datos["id_pedido"],PDO::PARAM_INT);
	$stmt->bindParam(":id_proveedor", $datos["id_proveedor"],PDO::PARAM_INT);
	
	$id= $stmt->execute();
	return( $id);

	//$stmt->close();
	//$stmt=null;
}
static public function MdlMostrarTiposAvios($item,$valor)
{
	if($item != null)
	{		
$stmt=Conexion::conectar()->prepare("SELECT * FROM tipos_avio WHERE $item=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();
	}else
	{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM tipos_avio ORDER BY descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();
	}
$stmt->close();
$stmt=null;
}

//Mo
static public function MdlMostrarTiposActivos()
{
	
		$stmt=Conexion::conectar()->prepare("SELECT * FROM tipos_movimientos_almacen WHERE activo=1 ORDER BY descripcion ");
		$stmt-> execute();
		return $stmt-> fetchAll();
	
$stmt->close();
$stmt=null;
}

static public function mdlValidarTipoAvio($datos)
{
	$stmt=Conexion::conectar()->prepare("SELECT * FROM tipos_avio WHERE clave=:descripcion OR descripcion=:descripcion ");
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	
	$stmt-> execute();
	return $stmt-> fetch();

	$stmt->close();
	$stmt=null;
}

//Actualizar talla
static public function mdlEditarTipoAvio($datos){

$stmt=conexion::conectar()->prepare("UPDATE tipos_avio SET clave=:clave,descripcion=:descripcion WHERE id=:id") ;
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

static public function mdlActualizarTipoAvio($item1,$valor1,$item2,$valor2){
$stmt=conexion::conectar()->prepare("UPDATE tipos_avio SET $item1=:$item1 WHERE $item2=:$item2") ;
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