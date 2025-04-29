<?php
require_once "conexion.php";

class ModeloPrendas
{
static public function mdlIngresarPrenda($datos)
{
	$stmt=conexion::conectar()->prepare("CALL lazlotex_ingresar_prenda(:id_prenda,:id_molde,:id_linea,:id_tela,:id_contraste,:id_talla,:id_confeccion,:id_grupo_avio,:id_hilo)");
	$stmt->bindParam(":id_tela", $datos["id_tela"],PDO::PARAM_INT);
	$stmt->bindParam(":id_contraste", $datos["id_contraste"],PDO::PARAM_INT);
	$stmt->bindParam(":id_molde", $datos["id_molde"],PDO::PARAM_INT);
	$stmt->bindParam(":id_linea", $datos["id_linea"],PDO::PARAM_INT);
	$stmt->bindParam(":id_talla", $datos["id_talla"],PDO::PARAM_INT);
	$stmt->bindParam(":id_prenda", $datos["id_prenda"],PDO::PARAM_INT);
	$stmt->bindParam(":id_confeccion", $datos["id_confeccion"],PDO::PARAM_INT);
	$stmt->bindParam(":id_grupo_avio", $datos["id_grupo_avio"],PDO::PARAM_INT);
	$stmt->bindParam(":id_hilo", $datos["id_hilo"],PDO::PARAM_INT);
		


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
	$stmt=conexion::conectar()->prepare("SELECT * FROM prendas 
		WHERE id_molde=:id_molde AND id_linea=:id_linea AND id_talla=:id_talla AND id_tela=:id_tela AND id_contraste=:id_contraste");
	$stmt->bindParam(":id_molde", $datos["id_molde"],PDO::PARAM_INT);
	$stmt->bindParam(":id_linea", $datos["id_linea"],PDO::PARAM_INT);
	$stmt->bindParam(":id_tela", $datos["id_tela"],PDO::PARAM_INT);
	$stmt->bindParam(":id_contraste", $datos["id_contraste"],PDO::PARAM_INT);
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
$stmt=Conexion::conectar()->prepare("SELECT productos.id,productos.sku,productos.descripcion,moldes.clave as molde,descripcion_tela.descripcion as tela
,CONCAT(confecciones.clave,'-',confecciones.descripcion) as confeccion,CONCAT(grupos_avio.clave,'-',grupos_avio.descripcion) as grupo_avio   ,
CONCAT(hilos.clave,'-',hilos.color) as hilo ,lineas.descripcion as linea,tallas.clave as talla,colores_tela.descripcion as color ,
generos.descripcion as genero,CONCAT(categorias.descripcion,' ', subcategorias.descripcion) as prenda,moldes.id_prenda,productos.activo,IFNULL(descripcion_contraste.descripcion,'NO APLICA') as contraste,
IFNULL(colores_contraste.descripcion,'NO APLICA') as color_contraste
FROM productos 
INNER JOIN prendas ON productos.id=prendas.id_producto
INNER JOIN telas on telas.id=prendas.id_tela
INNER JOIN colores_tela on colores_tela.id=telas.id_color
INNER JOIN productos descripcion_tela on telas.id_producto=descripcion_tela.id

LEFT OUTER JOIN telas contraste on contraste.id=prendas.id_contraste
LEFT OUTER JOIN colores_tela colores_contraste on colores_contraste.id=contraste.id_color
LEFT OUTER JOIN productos descripcion_contraste on contraste.id_producto=descripcion_contraste.id


INNER JOIN moldes on moldes.id=prendas.id_molde
INNER JOIN generos on generos.id=moldes.id_genero
INNER JOIN categoria_subcategoria on categoria_subcategoria.id=moldes.id_prenda
INNER JOIN categorias on categorias.id=categoria_subcategoria.id_categoria
INNER JOIN subcategorias on subcategorias.id=categoria_subcategoria.id_subcategoria
INNER JOIN lineas on lineas.id=prendas.id_linea
INNER JOIN confecciones on confecciones.id=prendas.id_confeccion
INNER JOIN grupos_avio on grupos_avio.id=prendas.id_grupo_avio
INNER JOIN hilos on hilos.id=prendas.id_hilo
INNER JOIN tallas on tallas.id=prendas.id_talla
WHERE productos.id=:id
");
$stmt->bindParam(":id",$valor,PDO::PARAM_INT);
$stmt-> execute();
return $stmt-> fetch();
	}else
	{
		$stmt=Conexion::conectar()->prepare("SELECT productos.id,productos.sku,productos.descripcion,moldes.clave as molde,descripcion_tela.descripcion as tela
,CONCAT(confecciones.clave,'-',confecciones.descripcion) as confeccion,CONCAT(grupos_avio.clave,'-',grupos_avio.descripcion) as grupo_avio   ,
CONCAT(hilos.clave,'-',hilos.color) as hilo ,lineas.descripcion as linea,tallas.clave as talla,colores_tela.descripcion as color ,
generos.descripcion as genero,categorias.descripcion as categoria,subcategorias.descripcion as subcategoria,productos.activo,IFNULL(descripcion_contraste.descripcion,'NO APLICA') as contraste,
IFNULL(colores_contraste.descripcion,'NO APLICA') as color_contraste
FROM productos 
INNER JOIN prendas ON productos.id=prendas.id_producto
INNER JOIN telas on telas.id=prendas.id_tela
INNER JOIN colores_tela on colores_tela.id=telas.id_color
INNER JOIN productos descripcion_tela on telas.id_producto=descripcion_tela.id

LEFT OUTER JOIN telas contraste on contraste.id=prendas.id_contraste
LEFT OUTER JOIN colores_tela colores_contraste on colores_contraste.id=contraste.id_color
LEFT OUTER JOIN productos descripcion_contraste on contraste.id_producto=descripcion_contraste.id


INNER JOIN moldes on moldes.id=prendas.id_molde
INNER JOIN generos on generos.id=moldes.id_genero
INNER JOIN categoria_subcategoria on categoria_subcategoria.id=moldes.id_prenda
INNER JOIN categorias on categorias.id=categoria_subcategoria.id_categoria
INNER JOIN subcategorias on subcategorias.id=categoria_subcategoria.id_subcategoria
INNER JOIN lineas on lineas.id=prendas.id_linea
INNER JOIN confecciones on confecciones.id=prendas.id_confeccion
INNER JOIN grupos_avio on grupos_avio.id=prendas.id_grupo_avio
INNER JOIN hilos on hilos.id=prendas.id_hilo
INNER JOIN tallas on tallas.id=prendas.id_talla");
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