<?php

require_once "conexion.php";

class ModeloMoldes
{

static public function mdlIngresarMolde($datos)
{

	$stmt=conexion::conectar()->prepare("CALL lazlotex_ingresar_molde(:clave,:descripcion,:id_prenda,:id_genero,:consumo_principal,:ancho_principal,:consumo_contraste,:ancho_contraste,:fecha_version,:version,:observaciones_version,:archivo_version,:zip_version)");
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":id_prenda", $datos["id_prenda"],PDO::PARAM_INT);
	$stmt->bindParam(":id_genero", $datos["id_genero"],PDO::PARAM_INT);
	$stmt->bindParam(":consumo_principal", $datos["consumo_principal"],PDO::PARAM_STR);
	$stmt->bindParam(":ancho_principal", $datos["ancho_principal"],PDO::PARAM_STR);
	$stmt->bindParam(":consumo_contraste", $datos["consumo_contraste"],PDO::PARAM_STR);
	$stmt->bindParam(":ancho_contraste", $datos["ancho_contraste"],PDO::PARAM_STR);
	$stmt->bindParam(":fecha_version", $datos["fecha_version"],PDO::PARAM_STR);
	$stmt->bindParam(":version", $datos["version"],PDO::PARAM_INT);
	$stmt->bindParam(":observaciones_version", $datos["observaciones_version"],PDO::PARAM_STR);
	$stmt->bindParam(":archivo_version", $datos["archivo_version"],PDO::PARAM_STR);
	$stmt->bindParam(":zip_version", $datos["zip_version"],PDO::PARAM_STR);
	
	
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
static public function mdlIngresarVersionMolde($datos)
{

	$stmt=conexion::conectar()->prepare("INSERT INTO versiones_molde(fecha,id_molde,version,archivo,molde,observaciones) VALUES(:fecha_version,:id_molde,:version,:archivo_version,:zip_version,:observaciones_version)");

	$stmt->bindParam(":fecha_version", $datos["fecha_version"],PDO::PARAM_STR);
	$stmt->bindParam(":version", $datos["version"],PDO::PARAM_INT);
	$stmt->bindParam(":id_molde", $datos["id_molde"],PDO::PARAM_INT);
	
	$stmt->bindParam(":observaciones_version", $datos["observaciones_version"],PDO::PARAM_STR);
	$stmt->bindParam(":archivo_version", $datos["archivo_version"],PDO::PARAM_STR);
	$stmt->bindParam(":zip_version", $datos["zip_version"],PDO::PARAM_STR);
	
	

	
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
static public function MdlMostrarMoldes($item,$valor)
{
	if($item != null)
	{
$stmt=Conexion::conectar()->prepare("SELECT moldes.id,moldes.clave,moldes.descripcion,moldes.id_prenda,moldes.id_genero, 
CONCAT(categorias.descripcion,' ',subcategorias.descripcion) as categoria,generos.descripcion as genero,
consumo_principal.consumo as consumo_principal,consumo_principal.ancho as ancho_principal,
consumo_contraste.consumo as consumo_contraste,consumo_contraste.ancho as ancho_contraste, version.version
FROM moldes 
INNER JOIN categoria_subcategoria on categoria_subcategoria.id=moldes.id_prenda
INNER JOIN categorias on categorias.id=categoria_subcategoria.id_categoria
INNER JOIN subcategorias on subcategorias.id=categoria_subcategoria.id_subcategoria
INNER JOIN generos on generos.id=moldes.id_genero
INNER JOIN (SELECT ID_MOLDE,CONSUMO,ANCHO FROM consumos_molde 
WHERE consumos_molde.id_molde=:$item AND CON=0
) as consumo_principal on consumo_principal.id_molde=moldes.id
INNER JOIN (SELECT ID_MOLDE,CONSUMO,ANCHO FROM consumos_molde 
WHERE consumos_molde.id_molde=:$item AND CON=1
) as consumo_contraste on consumo_contraste.id_molde=moldes.id
INNER JOIN(SELECT MAX(version)+1 as version,versiones_molde.id_molde FROM versiones_molde 
WHERE versiones_molde.id_molde=:$item
) as version on version.id_molde=moldes.id

where moldes.".$item."=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();

	}else

	{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM moldes ORDER BY descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();

	}
$stmt->close();
$stmt=null;
}
static public function MdlMostrarVersionesMolde($item,$valor)
{
	
$stmt=Conexion::conectar()->prepare("SELECT versiones_molde.id,fecha,version,archivo,molde,observaciones FROM versiones_molde  WHERE id_molde=:id_molde");
$stmt->bindParam(":id_molde",$valor,PDO::PARAM_STR);

$stmt-> execute();
return $stmt-> fetchAll();
	
$stmt->close();
$stmt=null;
}
//Mostrar marcas que están activas
static public function MdlMostrarMoldesActivos($datos)
{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM moldes WHERE activo=1 AND id_genero=:id_genero AND id_prenda=:id_prenda ORDER BY clave");
		$stmt->bindParam(":id_prenda",$datos["id_prenda"],PDO::PARAM_INT);
		$stmt->bindParam(":id_genero",$datos["id_genero"],PDO::PARAM_INT);
		$stmt-> execute();
		return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}


static public function mdlValidarMolde($datos)
{

	$stmt=conexion::conectar()->prepare("SELECT * FROM moldes WHERE  clave=:clave");
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt-> execute();
    return $stmt-> fetch();
	
	$stmt->close();
	$stmt=null;
}


static public function mdlEditarMolde($datos){

$stmt=conexion::conectar()->prepare("CALL lazlotex_editar_molde(:clave,:descripcion,:id_prenda,:id_genero,:consumo_principal,:ancho_principal,:consumo_contraste,:ancho_contraste,:id)") ;
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":id_prenda", $datos["id_prenda"],PDO::PARAM_INT);
	$stmt->bindParam(":id_genero", $datos["id_genero"],PDO::PARAM_INT);
	$stmt->bindParam(":consumo_principal", $datos["consumo_principal"],PDO::PARAM_STR);
	$stmt->bindParam(":ancho_principal", $datos["ancho_principal"],PDO::PARAM_STR);
	$stmt->bindParam(":consumo_contraste", $datos["consumo_contraste"],PDO::PARAM_STR);
	$stmt->bindParam(":ancho_contraste", $datos["ancho_contraste"],PDO::PARAM_STR);
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

static public function mdlActualizarMolde($item1,$valor1,$item2,$valor2){
$stmt=conexion::conectar()->prepare("UPDATE moldes SET $item1=:$item1 WHERE $item2=:$item2") ;
$stmt->bindParam(":".$item1, $valor1,PDO::PARAM_INT);
	$stmt->bindParam(":".$item2, $valor2,PDO::PARAM_INT);
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


}