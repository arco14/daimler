<?php
require_once "conexion.php";

class ModeloTelas
{

static public function mdlEditarTela($datos){

$stmt=conexion::conectar()->prepare("UPDATE telas SET clave=:clave,descripcion=:descripcion,id_color=:id_color,id_diseno=:id_diseno,id_unidad=:id_unidad,id_composicion=:id_composicion,ancho=:ancho,oz=:oz,muestra=:muestra,id_tipo=:id_tipo WHERE id=:id") ;
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":id_color", $datos["id_color"],PDO::PARAM_INT);
	$stmt->bindParam(":id_diseno", $datos["id_diseno"],PDO::PARAM_INT);
	$stmt->bindParam(":id_unidad", $datos["id_unidad"],PDO::PARAM_INT);
	$stmt->bindParam(":id_tipo", $datos["id_tipo"],PDO::PARAM_INT);
	
	$stmt->bindParam(":id_composicion", $datos["id_composicion"],PDO::PARAM_INT);
	$stmt->bindParam(":ancho", $datos["ancho"],PDO::PARAM_STR);
	$stmt->bindParam(":oz", $datos["oz"],PDO::PARAM_STR);
	$stmt->bindParam(":muestra", $datos["muestra"],PDO::PARAM_STR);
    $stmt->bindParam(":id", $datos["id"],PDO::PARAM_INT);


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

static public function mdlIngresarTela($datos)
{
	$stmt=conexion::conectar()->prepare("CALL lazlotex_ingresar_tela(:id_tela,:clave,:tela,:descripcion,:id_tipo,:id_color,:id_diseno,:id_unidad,:id_composicion,:ancho,:oz,:muestra)");
	$stmt->bindParam(":id_tela", $datos["id"],PDO::PARAM_INT);
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":tela", $datos["tela"],PDO::PARAM_STR);
	
	$stmt->bindParam(":id_tipo", $datos["id_tipo"],PDO::PARAM_INT);
	$stmt->bindParam(":id_color", $datos["id_color"],PDO::PARAM_INT);
	$stmt->bindParam(":id_diseno", $datos["id_diseno"],PDO::PARAM_INT);	
	$stmt->bindParam(":id_unidad", $datos["id_unidad"],PDO::PARAM_INT);
	$stmt->bindParam(":id_composicion", $datos["id_composicion"],PDO::PARAM_INT);
	$stmt->bindParam(":ancho", $datos["ancho"],PDO::PARAM_STR);
	$stmt->bindParam(":oz", $datos["oz"],PDO::PARAM_STR);
    $stmt->bindParam(":muestra", $datos["muestra"],PDO::PARAM_STR);


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
static public function MdlMostrarTelas($item,$valor)
{
	if($item != null)
	{		
$stmt=Conexion::conectar()->prepare("SELECT productos.id,telas.tela,productos.sku ,productos.descripcion,telas.ancho,telas.oz,telas.muestra,telas.id_tipo,tipos_tela.descripcion as tipo,telas.id_color,colores_tela.descripcion as color,telas.id_diseno,disenos_tela.descripcion as diseno,telas.id_unidad,unidades_medida.descripcion as unidad,telas.id_composicion,composicion_tela.descripcion as composicion
FROM productos
INNER JOIN telas on telas.id_producto=productos.id
INNER JOIN tipos_tela ON tipos_tela.id=telas.id_tipo 
INNER JOIN colores_tela ON colores_tela.id=telas.id_color
INNER JOIN disenos_tela ON disenos_tela.id=telas.id_diseno 
INNER JOIN unidades_medida ON unidades_medida.id=telas.id_unidad 
INNER JOIN composicion_tela ON composicion_tela.id=telas.id_composicion WHERE productos.id=:id_tela");
$stmt->bindParam(":id_tela",$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();
	}else
	{
		$stmt=Conexion::conectar()->prepare("SELECT productos.id,productos.activo,telas.tela,productos.sku ,productos.descripcion,telas.ancho,telas.oz,telas.muestra,telas.id_tipo,tipos_tela.descripcion as tipo,telas.id_color,colores_tela.descripcion as color,telas.id_diseno,disenos_tela.descripcion as diseno,telas.id_unidad,unidades_medida.descripcion as unidad,telas.id_composicion,composicion_tela.descripcion as composicion
FROM productos
INNER JOIN telas on telas.id_producto=productos.id
INNER JOIN tipos_tela ON tipos_tela.id=telas.id_tipo 
INNER JOIN colores_tela ON colores_tela.id=telas.id_color
INNER JOIN disenos_tela ON disenos_tela.id=telas.id_diseno 
INNER JOIN unidades_medida ON unidades_medida.id=telas.id_unidad 
INNER JOIN composicion_tela ON composicion_tela.id=telas.id_composicion");
		$stmt-> execute();
		return $stmt-> fetchAll();
	}
$stmt->close();
$stmt=null;
}
static public function MdlMostrarTelasActivas()
{
	
	$stmt=Conexion::conectar()->prepare("SELECT telas.id,CONCAT(sku,' - ',descripcion ) as descripcion  FROM productos INNER JOIN telas on telas.id_producto=productos.id WHERE activo=1 AND productos.id_tipo=1  ORDER BY descripcion");
	$stmt-> execute();
	return $stmt-> fetchAll();
	
$stmt->close();
$stmt=null;
}
static public function MdlMostrarContrastesActivos($valor)
{
	
	$stmt=Conexion::conectar()->prepare("SELECT telas.id,CONCAT(sku,' - ',descripcion ) as descripcion  
FROM productos inner join telas on telas.id_producto=productos.id
WHERE productos.activo=1 AND productos.id_tipo=1 AND telas.id<>:id_tela  
 UNION SELECT 0,' No aplica'  ORDER BY descripcion");
		$stmt->bindParam(":id_tela", $valor,PDO::PARAM_INT);
	$stmt-> execute();
	return $stmt-> fetchAll();
	
$stmt->close();
$stmt=null;
}

static public function mdlValidarTela($datos)
{
	$stmt=Conexion::conectar()->prepare("SELECT * FROM productos WHERE sku=:clave OR descripcion=:descripcion");
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	
	$stmt-> execute();
	return $stmt-> fetch();

	$stmt->close();
	$stmt=null;
}






}