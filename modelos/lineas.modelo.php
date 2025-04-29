<?php
require_once "conexion.php";


class ModeloLineas
{

static public function mdlIngresarLinea($datos)
{

	$stmt=conexion::conectar()->prepare("INSERT INTO lineas(clave,descripcion,id_marca,activa) VALUES (:clave,:descripcion,:id_marca,1)");
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":id_marca", $datos["id_marca"],PDO::PARAM_INT);
	
	if($stmt->execute()){
		return "ok";
	
	
	}else
	{
		return "error";
	}
	
	$stmt->close();
	$stmt=null;
}
static public function MdlMostrarLineas($item,$valor)
{
	if($item != null)
	{
$stmt=Conexion::conectar()->prepare("SELECT lineas.id,lineas.clave,lineas.descripcion,id_marca,marcas.descripcion as marca FROM lineas inner join marcas on marcas.id=lineas.id_marca WHERE lineas.".$item."=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();

	}else

	{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM lineas ORDER BY descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();

	}
$stmt->close();
$stmt=null;
}

static public function mdlMostrarLineasActivas()
{
	
		$stmt=Conexion::conectar()->prepare("SELECT lineas.id,lineas.descripcion FROM lineas INNER JOIN marcas ON marcas.id=lineas.id_marca WHERE lineas.activa=1 AND marcas.tipo='Propia' ORDER BY lineas.descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();
	
$stmt->close();
$stmt=null;
}
static public function mdlMostrarLineasMaximos()
{
		$stmt=Conexion::conectar()->prepare("SELECT DISTINCT CONCAT(lineas.id,',',telas.id,',',IFNULL(contraste.id,0)) as id,CONCAT(lineas.descripcion,' - ', colores_tela.descripcion,'',IFNULL(CONCAT(' (CONT:','',colores_contraste.descripcion,')'),''))as descripcion 
FROM prendas 
inner join lineas on lineas.id=prendas.id_linea
INNER JOIN telas on telas.id=prendas.id_tela
INNER JOIN colores_tela on colores_tela.id=telas.id_color
LEFT OUTER JOIN telas contraste on contraste.id=prendas.id_contraste
LEFT OUTER JOIN colores_tela colores_contraste on colores_contraste.id=contraste.id_color
WHERE lineas.activa=1");
		$stmt-> execute();
		return $stmt-> fetchAll();
	
$stmt->close();
$stmt=null;
}
static public function mdlMostrarLineasCompra()
{
	
		$stmt=Conexion::conectar()->prepare("SELECT lineas.id,CONCAT(marcas.descripcion,' - ',lineas.descripcion) as descripcion FROM lineas INNER JOIN marcas ON marcas.id=lineas.id_marca WHERE lineas.activa=1 AND marcas.tipo='Externa' ORDER BY lineas.descripcion ");
		$stmt-> execute();
		return $stmt-> fetchAll();
	
$stmt->close();
$stmt=null;
}
static public function mdlMostrarLineasPrecios($valor)
{
	
		$stmt=Conexion::conectar()->prepare("SELECT DISTINCT CONCAT(lineas.id,',',moldes.id) as id, CONCAT(marcas.descripcion,' ',lineas.descripcion,' - ',moldes.clave,' ', generos.descripcion) as descripcion 
FROM productos 
INNER JOIN prendas on prendas.id_producto=productos.id
INNER JOIN lineas on lineas.id=prendas.id_linea
INNER JOIN marcas on marcas.id=lineas.id_marca
INNER JOIN moldes on moldes.id=prendas.id_molde
INNER JOIN generos on generos.id=moldes.id_genero
WHERE productos.id_tipo_producto=:id_tipo
UNION SELECT DISTINCT CONCAT(lineas.id,',',generos.id) as id, CONCAT(marcas.descripcion,' ',lineas.descripcion,' - ', generos.descripcion) as descripcion FROM productos INNER JOIN prendas_compra on prendas_compra.id_producto=productos.id
INNER JOIN lineas on lineas.id=prendas_compra.id_linea
INNER JOIN marcas on marcas.id=lineas.id_marca
INNER JOIN generos on generos.id=prendas_compra.id_genero
WHERE productos.id_tipo_producto=:id_tipo
ORDER BY descripcion");
$stmt->bindParam(":id_tipo", $valor,PDO::PARAM_INT);

		$stmt-> execute();
		return $stmt-> fetchAll();
	
$stmt->close();
$stmt=null;
}
//Actualizar linea
static public function mdlEditarLinea($datos){

$stmt=conexion::conectar()->prepare("UPDATE lineas SET clave=:clave,descripcion=:descripcion,id_marca=:id_marca WHERE id=:id") ;
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":id_marca", $datos["id_marca"],PDO::PARAM_INT);
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
static public function mdlValidarLinea($datos)
{

	$stmt=conexion::conectar()->prepare("SELECT * FROM lineas WHERE descripcion=:descripcion OR clave=:descripcion");
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt-> execute();
    return $stmt-> fetch();
	
	$stmt->close();
	$stmt=null;
}

//Actualizar o desactivar linea
static public function mdlActualizarLinea($item1,$valor1,$item2,$valor2){
$stmt=conexion::conectar()->prepare("UPDATE lineas SET $item1=:$item1 WHERE $item2=:$item2") ;
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