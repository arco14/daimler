<?php
require_once "conexion.php";

class ModeloPrendas
{
static public function mdlIngresarPrenda($datos)
{
	$stmt=conexion::conectar()->prepare("CALL lazlotex_ingresar_prenda_compra(:id_prenda,:id_linea,:id_genero,:id_tipo,:id_talla,:id_color)");
	$stmt->bindParam(":id_prenda", $datos["id_prenda"],PDO::PARAM_INT);
	$stmt->bindParam(":id_linea", $datos["id_linea"],PDO::PARAM_INT);
	$stmt->bindParam(":id_talla", $datos["id_talla"],PDO::PARAM_INT);
	$stmt->bindParam(":id_genero", $datos["id_genero"],PDO::PARAM_INT);
	$stmt->bindParam(":id_tipo", $datos["id_tipo"],PDO::PARAM_INT);
	$stmt->bindParam(":id_color", $datos["id_color"],PDO::PARAM_INT);
		


	if($stmt->execute()){
		return "ok";
	}else
	{
		$arr = $stmt->errorInfo();
		return print_r($arr);
	}
	$stmt->close();
	$stmt=null;
}

static public function mdlValidarPrenda($datos)
{
	$stmt=conexion::conectar()->prepare("SELECT * FROM prendas_compra WHERE  id_prenda=:id_tipo AND id_genero=:id_genero AND id_linea=:id_linea AND id_color=:id_color AND id_talla=:id_talla");
	$stmt->bindParam(":id_tipo",$datos["id_tipo"],PDO::PARAM_INT);
	$stmt->bindParam(":id_genero", $datos["id_genero"],PDO::PARAM_INT);
	$stmt->bindParam(":id_linea", $datos["id_linea"],PDO::PARAM_INT);
	$stmt->bindParam(":id_color", $datos["id_color"],PDO::PARAM_INT);
	$stmt->bindParam(":id_talla", $datos["id_talla"],PDO::PARAM_INT);



	if($stmt->execute()){
			return $stmt-> fetch();
	}else
	{
		$arr = $stmt->errorInfo();
		return print_r($arr);
	}
	$stmt->close();
	$stmt=null;

	//$stmt-> execute();


	//$stmt->close();
	//$stmt=null;
}
static public function MdlMostrarPrendas($item,$valor)
{
	if($item != null)
	{		
$stmt=Conexion::conectar()->prepare("SELECT productos.sku,
	productos.descripcion,
	productos.id,
 prendas_compra.id_linea,lineas.descripcion as linea,prendas_compra.id_talla,tallas.clave as talla,
prendas_compra.id_genero,generos.descripcion as genero,CONCAT(categorias.descripcion,' ',subcategorias.descripcion) as prenda,prendas_compra.id_prenda,productos.activo,colores_tela.descripcion as color,prendas_compra.id_color
FROM productos INNER JOIN prendas_compra ON productos.id=prendas_compra.id_producto
INNER JOIN generos on generos.id=prendas_compra.id_genero
INNER JOIN categoria_subcategoria on categoria_subcategoria.id=prendas_compra.id_prenda
INNER JOIN categorias on categorias.id=categoria_subcategoria.id_categoria
INNER JOIN subcategorias on subcategorias.id=categoria_subcategoria.id_subcategoria
INNER JOIN lineas on lineas.id=prendas_compra.id_linea
INNER JOIN colores_tela on colores_tela.id=prendas_compra.id_color
INNER JOIN tallas on tallas.id=prendas_compra.id_talla
WHERE productos.id=:id
");
$stmt->bindParam(":id",$valor,PDO::PARAM_INT);
$stmt-> execute();
return $stmt-> fetch();
	}else
	{
		$stmt=Conexion::conectar()->prepare("SELECT productos.sku,
	productos.descripcion,
	productos.id,
 prendas_compra.id_linea,lineas.descripcion as linea,prendas_compra.id_talla,tallas.clave as talla,colores_tela.descripcion as color,prendas_compra.id_color,
prendas_compra.id_genero,generos.descripcion as genero,categorias.descripcion as categoria,subcategorias.descripcion as subcategoria,prendas_compra.id_prenda,productos.activo
FROM  productos INNER JOIN prendas_compra ON productos.id=prendas_compra.id_producto
INNER JOIN generos on generos.id=prendas_compra.id_genero
INNER JOIN categoria_subcategoria on categoria_subcategoria.id=prendas_compra.id_prenda
INNER JOIN categorias on categorias.id=categoria_subcategoria.id_categoria
INNER JOIN subcategorias on subcategorias.id=categoria_subcategoria.id_subcategoria
INNER JOIN lineas on lineas.id=prendas_compra.id_linea
INNER JOIN colores_tela on colores_tela.id=prendas_compra.id_color
INNER JOIN tallas on tallas.id=prendas_compra.id_talla");
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
$stmt=conexion::conectar()->prepare("UPDATE productos SET $item1=:$item1 WHERE $item2=:$item2") ;
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