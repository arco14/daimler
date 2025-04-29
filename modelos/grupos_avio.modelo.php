<?php
require_once "conexion.php";

class ModeloGrupoAvios
{
static public function mdlIngresarGrupoAvio($datos)
{
	$stmt=conexion::conectar()->prepare("INSERT INTO grupos_avio(clave,descripcion,id_prenda,activo) VALUES (:clave,:descripcion,:id_prenda,1)");
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":id_prenda", $datos["id_prenda"],PDO::PARAM_INT);
	

	if($stmt->execute()){
		return "ok";
	}else
	{
		return "error";
	}

	$stmt->close();
	$stmt=null;
}
static public function mdlIngresarDetalleGrupo($datos)
{
	$stmt=conexion::conectar()->prepare("INSERT INTO detalle_grupos_avio(id_avio,id_grupo,propio,cantidad) VALUES (:id_avio,:id_grupo,:propio,:cantidad)");
	$stmt->bindParam(":id_avio", $datos["id_avio"],PDO::PARAM_INT);
	$stmt->bindParam(":id_grupo", $datos["id_grupo"],PDO::PARAM_STR);
	$stmt->bindParam(":cantidad", $datos["cantidad"],PDO::PARAM_INT);
	$stmt->bindParam(":propio", $datos["propio"],PDO::PARAM_INT);
	
	

	if($stmt->execute()){
		return "ok";
	}else
	{
		return "error";
	}

	$stmt->close();
	$stmt=null;
}
static public function mdlEliminarDetalleGrupo($datos)
{
	$stmt=conexion::conectar()->prepare("DELETE FROM detalle_grupos_avio WHERE id=:id");
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
static public function MdlMostrarGrupoAvios($item,$valor)
{
	if($item != null)
	{		
$stmt=Conexion::conectar()->prepare("SELECT grupos_avio.id,grupos_avio.clave,grupos_avio.descripcion,CONCAT(categorias.descripcion,' ',subcategorias.descripcion) as categoria, grupos_avio.id_prenda,IFNULL(CAST(sum(precio) AS DECIMAL(9,2)),0) as precio  FROM grupos_avio 

	LEFT OUTER JOIN detalle_grupos_avio on detalle_grupos_avio.id_grupo=grupos_avio.id 
			LEFT OUTER JOIN avios on avios.id=detalle_grupos_avio.id_avio INNER JOIN categoria_subcategoria on categoria_subcategoria.id=grupos_avio.id_prenda INNER JOIN categorias on categorias.id=categoria_subcategoria.id_categoria INNER JOIN subcategorias on subcategorias.id=categoria_subcategoria.id_subcategoria  WHERE grupos_avio.".$item."=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();
	}else
	{
		$stmt=Conexion::conectar()->prepare("SELECT grupos_avio.id,grupos_avio.id_prenda,grupos_avio.clave,grupos_avio.descripcion,IFNULL(sum(precio),0) as precio,grupos_avio.activo FROM grupos_avio LEFT OUTER JOIN detalle_grupos_avio on detalle_grupos_avio.id_grupo=grupos_avio.id 
			LEFT OUTER JOIN avios on avios.id=detalle_grupos_avio.id_avio
			ORDER BY grupos_avio.descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();
	}
$stmt->close();
$stmt=null;
}
static public function MdlMostrarDetalleGrupo($item,$valor)
{
	
$stmt=Conexion::conectar()->prepare("SELECT avios.descripcion as avio,avios.clave,detalle_grupos_avio.id as id,detalle_grupos_avio.cantidad,IFNULL(propio,0) as propio ,IFNULL(CAST(precio AS DECIMAL(9,2)),0) as precio  FROM grupos_avio 

	INNER JOIN detalle_grupos_avio on detalle_grupos_avio.id_grupo=grupos_avio.id 
			LEFT OUTER JOIN avios on avios.id=detalle_grupos_avio.id_avio  WHERE grupos_avio.".$item."=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetchAll();
	
$stmt->close();
$stmt=null;
}

//Mo
static public function MdlMostrarGruposAviosActivos($valor)
{
	
		$stmt=Conexion::conectar()->prepare("SELECT id,CONCAT(clave,' - ',descripcion) as descripcion FROM grupos_avio 
			WHERE activo=1 AND id_prenda=:id_prenda ORDER BY descripcion ");
			$stmt->bindParam(":id_prenda", $valor,PDO::PARAM_INT);
		$stmt-> execute();
		return $stmt-> fetchAll();
	
$stmt->close();
$stmt=null;
}

static public function mdlValidarGrupoAvio($datos)
{
	$stmt=Conexion::conectar()->prepare("SELECT * FROM grupos_avio WHERE clave=:descripcion OR descripcion=:descripcion ");
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	
	$stmt-> execute();
	return $stmt-> fetch();

	$stmt->close();
	$stmt=null;
}
static public function mdlValidarDetalleGrupo($datos)
{
	$stmt=Conexion::conectar()->prepare("SELECT * FROM detalle_grupos_avio WHERE id_avio=:id_avio AND id_grupo=:id_grupo ");
	$stmt->bindParam(":id_avio", $datos["id_avio"],PDO::PARAM_INT);
	$stmt->bindParam(":id_grupo", $datos["id_grupo"],PDO::PARAM_INT);
	
	
	$stmt-> execute();
	return $stmt-> fetch();

	$stmt->close();
	$stmt=null;
}

//Actualizar talla
static public function mdlEditarGrupoAvio($datos){

$stmt=conexion::conectar()->prepare("UPDATE grupos_avio SET clave=:clave,descripcion=:descripcion,id_prenda=:id_prenda WHERE id=:id") ;
		$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":id_prenda", $datos["id_prenda"],PDO::PARAM_INT);
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

static public function mdlActualizarGrupoAvio($item1,$valor1,$item2,$valor2){
$stmt=conexion::conectar()->prepare("UPDATE grupos_avio SET $item1=:$item1 WHERE $item2=:$item2") ;
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