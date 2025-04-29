<?php
require_once "conexion.php";

class ModeloDescuentos
{

static public function mdlIngresarDescuento($datos)
{

	$stmt=conexion::conectar()->prepare("INSERT INTO descuentos(fecha,descripcion,descuento,id_tipo_producto,id_rango_cliente) VALUES (CURRENT_TIMESTAMP(),:descripcion,:descuento,:id_tipo,:id_rango)");
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":id_tipo", $datos["id_tipo"],PDO::PARAM_INT);
	$stmt->bindParam(":descuento", $datos["descuento"],PDO::PARAM_INT);
	$stmt->bindParam(":id_rango", $datos["id_rango"],PDO::PARAM_INT);
	
	
	
	if($stmt->execute()){
		return "ok";
	
	
	}else
	{
		return "error";
	}
	
	$stmt->close();
	$stmt=null;
}
static public function MdlMostrarDescuentos($item,$valor)
{
	if($item != null)
	{
$stmt=Conexion::conectar()->prepare("SELECT lineas.id,lineas.clave,lineas.descripcion,id_marca,marcas.descripcion as marca FROM lineas inner join marcas on marcas.id=lineas.id_marca WHERE lineas.".$item."=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();

	}else

	{
		$stmt=Conexion::conectar()->prepare("SELECT descuentos.id,CAST(descuentos.fecha AS DATE) as fecha,descuento,descuentos.id_tipo_producto,descuentos.descripcion,tipos_producto.descripcion as tipo, 
rangos_cliente.clave as rango  
FROM descuentos 
INNER JOIN rangos_cliente ON rangos_cliente.id=descuentos.id_rango_cliente
INNER JOIN tipos_producto ON tipos_producto.id=descuentos.id_tipo_producto");
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
//Actualizar linea
static public function mdlEditarDescuento($datos){

$stmt=conexion::conectar()->prepare("CALL lazlotex_editar_descuento
		(:id_descuento,:descuento)") ;
	
	$stmt->bindParam(":id_descuento", $datos["id_descuento"],PDO::PARAM_INT);
	$stmt->bindParam(":descuento", $datos["descuento"],PDO::PARAM_INT);
	if($stmt->execute()){
		return "ok";
	}else
	{
		return "error";
	}
	
	$stmt->close();
	$stmt=null;

}
static public function mdlValidarDesripcionDescuento($valor)
{

	$stmt=conexion::conectar()->prepare("SELECT * FROM descuentos WHERE descripcion=:descripcion");
	$stmt->bindParam(":descripcion", $valor,PDO::PARAM_STR);
	$stmt-> execute();

    return $stmt-> fetch();
	$stmt->close();
	$stmt=null;
}
static public function mdlValidarDescuento($datos)
{

	$stmt=conexion::conectar()->prepare("SELECT * FROM descuentos WHERE id_tipo_producto=:id_tipo AND id_rango_cliente=:id_rango");
	$stmt->bindParam(":id_tipo", $datos["id_tipo"],PDO::PARAM_INT);
	$stmt->bindParam(":id_rango", $datos["id_rango"],PDO::PARAM_INT);
	
	$stmt-> execute();

    return $stmt-> fetch();
	$stmt->close();
	$stmt=null;
}


//Actualizar o desactivar linea
static public function mdlActualizarLinea($item1,$valor1,$item2,$valor2){
$stmt=conexion::conectar()->prepare("UPDATE lineas SET $item1=:$item1 WHERE $item2=:$item2");
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