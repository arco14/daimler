<?php
require_once "conexion.php";

class ModeloPrenda
{
static public function mdlIngresarPrenda($datos)
{
	$stmt=conexion::conectar()->prepare("INSERT INTO categoria_subcategoria(id_categoria,id_subcategoria,activo) VALUES (:id_categoria,:id_subcategoria,1)");
	$stmt->bindParam(":id_categoria", $datos["id_categoria"],PDO::PARAM_INT);
	$stmt->bindParam(":id_subcategoria", $datos["id_subcategoria"],PDO::PARAM_INT);

	if($stmt->execute()){
		return "ok";
	}else
	{
		return "error";
	}
	$stmt->close();
	$stmt=null;
}
static public function MdlMostrarPrenda($item,$valor)
{
	if($item != null)
	{		
$stmt=Conexion::conectar()->prepare("SELECT categoria_subcategoria.id,categoria_subcategoria.id_categoria,categorias.descripcion as categoria,categoria_subcategoria.id_subcategoria,subcategorias.descripcion as subcategoria,CONCAT(categorias.descripcion,' ',subcategorias.descripcion) as descripcion FROM categoria_subcategoria INNER JOIN categorias on categorias.id=categoria_subcategoria.id_categoria 
	INNER JOIN subcategorias on subcategorias.id=categoria_subcategoria.id_subcategoria
	WHERE categoria_subcategoria.".$item."=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();
	}else
	{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM categoria_subcategoria ");
		$stmt-> execute();
		return $stmt-> fetchAll();
	}
$stmt->close();
$stmt=null;
}

//Mo
static public function MdlMostrarPrendaActivas()
{
	
		$stmt=Conexion::conectar()->prepare("SELECT categoria_subcategoria.id,CONCAT(categorias.descripcion,' ',subcategorias.descripcion) as descripcion FROM categoria_subcategoria INNER JOIN categorias on categorias.id=categoria_subcategoria.id_categoria INNER JOIN subcategorias on subcategorias.id=categoria_subcategoria.id_subcategoria WHERE categoria_subcategoria.activo=1 ORDER BY categorias.descripcion ");
		$stmt-> execute();
		return $stmt-> fetchAll();
	
$stmt->close();
$stmt=null;
}

static public function mdlValidarPrenda($datos)
{
	$stmt=Conexion::conectar()->prepare("SELECT * FROM categoria_subcategoria  WHERE id_categoria=:id_categoria AND id_subcategoria=:id_subcategoria");
	$stmt->bindParam(":id_categoria", $datos["id_categoria"],PDO::PARAM_INT);
	$stmt->bindParam(":id_subcategoria", $datos["id_subcategoria"],PDO::PARAM_INT);
	

	$stmt-> execute();
	return $stmt-> fetch();

	$stmt->close();
	$stmt=null;
}

//Actualizar talla
static public function mdlEditarPrenda($datos){

$stmt=conexion::conectar()->prepare("UPDATE categoria_subcategoria SET id_categoria=:id_categoria,id_subcategoria=:id_subcategoria WHERE id=:id") ;
	$stmt->bindParam(":id_categoria", $datos["id_categoria"],PDO::PARAM_INT);
	$stmt->bindParam(":id_subcategoria", $datos["id_subcategoria"],PDO::PARAM_INT);
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
static public function mdlActualizarPrenda($item1,$valor1,$item2,$valor2){
$stmt=conexion::conectar()->prepare("UPDATE categoria_subcategoria SET $item1=:$item1 WHERE $item2=:$item2") ;
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