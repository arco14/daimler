<?php
require_once "conexion.php";

class ModeloConfeccionesCompletas
{
static public function mdlIngresarConfeccionCompleta($datos)
{
	$stmt=conexion::conectar()->prepare("INSERT INTO confecciones(clave,descripcion,precio,id_tipo,id_prenda,id_proveedor,activo) VALUES (:clave,:descripcion,:precio,:id_tipo,:id_prenda,:id_proveedor,1)");
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":precio", $datos["precio"],PDO::PARAM_STR);
	$stmt->bindParam(":id_tipo", $datos["id_tipo"],PDO::PARAM_INT);
	$stmt->bindParam(":id_prenda", $datos["id_prenda"],PDO::PARAM_INT);
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
static public function MdlMostrarConfeccionesCompletas($item,$valor)
{
	if($item != null)
	{		
$stmt=Conexion::conectar()->prepare("SELECT confecciones.id,confecciones.clave,confecciones.descripcion,tipos_confeccion.descripcion as tipo,precio,id_tipo,id_prenda,CONCAT(categorias.descripcion,' ',subcategorias.descripcion) as categoria,confecciones.id_proveedor,proveedores.nombre as proveedor FROM confecciones INNER JOIN tipos_confeccion ON tipos_confeccion.id=confecciones.id_tipo 
	INNER JOIN categoria_subcategoria on categoria_subcategoria.id=confecciones.id_prenda
	INNER JOIN categorias on categorias.id=categoria_subcategoria.id_categoria 
	INNER JOIN subcategorias on subcategorias.id=categoria_subcategoria.id_subcategoria
	INNER JOIN proveedores on proveedores.id=confecciones.id_proveedor WHERE confecciones.".$item."=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();
	}else
	{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM confecciones ORDER BY descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();
	}
$stmt->close();
$stmt=null;
}
static public function MdlMostrarConfeccionesCompletasActivas($valor)
{
	
		$stmt=Conexion::conectar()->prepare("SELECT id,CONCAT(clave,' - ',descripcion) as descripcion FROM confecciones WHERE activo=1 AND id_prenda=:id_prenda ORDER BY descripcion ");
			$stmt->bindParam(":id_prenda", $valor,PDO::PARAM_INT);
		$stmt-> execute();
		return $stmt-> fetchAll();
	
$stmt->close();
$stmt=null;
}

static public function mdlValidarConfeccionCompleta($datos)
{
	$stmt=Conexion::conectar()->prepare("SELECT * FROM confecciones WHERE descripcion=:descripcion OR clave=:clave");
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	
	
	$stmt-> execute();
	return $stmt-> fetch();

	$stmt->close();
	$stmt=null;
}

//Actualizar talla
static public function mdlEditarConfeccionCompleta($datos){

$stmt=conexion::conectar()->prepare("UPDATE confecciones SET clave=:clave,descripcion=:descripcion,precio=:precio,id_tipo=:id_tipo,id_prenda=:id_prenda,id_proveedor=:id_proveedor WHERE id=:id") ;
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":precio", $datos["precio"],PDO::PARAM_STR);
	$stmt->bindParam(":id_tipo", $datos["id_tipo"],PDO::PARAM_INT);
	$stmt->bindParam(":id_prenda", $datos["id_prenda"],PDO::PARAM_INT);
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
//Actualizar o desactivar categoria
static public function mdlActualizarConfeccionCompleta($item1,$valor1,$item2,$valor2){
$stmt=conexion::conectar()->prepare("UPDATE confecciones SET $item1=:$item1 WHERE $item2=:$item2") ;
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