<?php

require_once "conexion.php";

class ModeloMaximos
{

static public function mdlIngresarMaximo($datos)
{



	$stmt=conexion::conectar()->prepare("CALL lazlotex_ingresar_maximo(:clave,:descripcion,:id_division,:id_genero)");
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":id_division", $datos["id_division"],PDO::PARAM_INT);
	$stmt->bindParam(":id_genero", $datos["id_genero"],PDO::PARAM_INT);
	
	
	
	
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
static public function mdlIngresarEstiloMaximo($datos)
{



	$stmt=conexion::conectar()->prepare("INSERT INTO estilo_maximos_almacen(id_linea,id_tela,id_contraste,id_maximo) VALUES(:id_linea,:id_tela,:id_contraste,:id_maximo)");
	$stmt->bindParam(":id_linea", $datos["id_linea"],PDO::PARAM_INT);
	$stmt->bindParam(":id_maximo", $datos["id_maximo"],PDO::PARAM_INT);
	$stmt->bindParam(":id_tela", $datos["id_tela"],PDO::PARAM_INT);
	$stmt->bindParam(":id_contraste", $datos["id_contraste"],PDO::PARAM_INT);
	

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

static public function mdlIngresarAlmacenMaximo($datos)
{



	$stmt=conexion::conectar()->prepare("INSERT INTO almacen_maximos_almacen(id_almacen,id_maximo) VALUES(:id_almacen,:id_maximo)");
	$stmt->bindParam(":id_almacen", $datos["id_almacen"],PDO::PARAM_INT);
	$stmt->bindParam(":id_maximo", $datos["id_maximo"],PDO::PARAM_INT);
	
	
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

static public function MdlMostrarMaximos($item,$valor)
{
	if($item != null)
	{
$stmt=Conexion::conectar()->prepare("SELECT * from maximos_almacen
where maximos_almacen.".$item."=:$item");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();

	}else

	{
		$stmt=Conexion::conectar()->prepare("SELECT maximos_almacen.id,clave,descripcion,IFNULL(SUM(maximo),0) as maximo,IFNULL(SUM(minimo),0) as minimo,activo FROM maximos_almacen LEFT OUTER JOIN detalle_maximos_almacen ON maximos_almacen.id=detalle_maximos_almacen.id_maximo 
			GROUP BY maximos_almacen.id,clave,descripcion
			ORDER BY clave");
		$stmt-> execute();
		return $stmt-> fetchAll();

	}
$stmt->close();
$stmt=null;
}
static public function mdlMostrarTallasMaximos($valor)
{
	
$stmt=Conexion::conectar()->prepare("SELECT detalle_maximos_almacen.id,tallas.clave as talla,maximo,minimo from detalle_maximos_almacen 
	inner join tallas on tallas.id=detalle_maximos_almacen.id_talla

	where detalle_maximos_almacen.id_maximo=:valor
	order by tallas.orden");
$stmt->bindParam(":valor",$valor,PDO::PARAM_INT);

$stmt-> execute();
return $stmt-> fetchAll();

	
$stmt->close();
$stmt=null;
}

static public function mdlMostrarEstilosMaximos($valor)
{
	
$stmt=Conexion::conectar()->prepare("SELECT estilo_maximos_almacen.id,lineas.descripcion ,colores_tela.descripcion as color,IFNULL(color_contraste.descripcion,'NO APLICA') as contraste FROM estilo_maximos_almacen INNER JOIN lineas on lineas.id=estilo_maximos_almacen.id_linea
	INNER JOIN telas on telas.id=estilo_maximos_almacen.id_tela
	INNER JOIN colores_tela on colores_tela.id=telas.id_color
	LEFT OUTER JOIN telas contraste on contraste.id=estilo_maximos_almacen.id_contraste
	LEFT OUTER JOIN colores_tela color_contraste on color_contraste.id=contraste.id_color
	WHERE estilo_maximos_almacen.id_maximo=:valor
	ORDER BY lineas.descripcion");
$stmt->bindParam(":valor",$valor,PDO::PARAM_INT);

$stmt-> execute();
return $stmt-> fetchAll();

	
$stmt->close();
$stmt=null;
}
static public function mdlMostrarAlmacenesMaximos($valor)
{
	
$stmt=Conexion::conectar()->prepare("SELECT almacen_maximos_almacen.id,almacenes.nombre FROM almacen_maximos_almacen INNER JOIN almacenes on almacenes.id=almacen_maximos_almacen.id_almacen
	WHERE almacen_maximos_almacen.id_maximo=:valor
	ORDER BY almacenes.nombre");
$stmt->bindParam(":valor",$valor,PDO::PARAM_INT);

$stmt-> execute();
return $stmt-> fetchAll();

	
$stmt->close();
$stmt=null;
}
static public function MdlMostrarVersionesMolde($item,$valor)
{
	
$stmt=Conexion::conectar()->prepare("SELECT versiones_molde.id,fecha,version,archivo,observaciones FROM versiones_molde  WHERE id_molde=:id_molde");
$stmt->bindParam(":id_molde",$valor,PDO::PARAM_STR);

$stmt-> execute();
return $stmt-> fetchAll();
	
$stmt->close();
$stmt=null;
}
//Mostrar marcas que están activas
static public function MdlMostrarMoldesActivas()
{
		$stmt=Conexion::conectar()->prepare("SELECT * FROM moldes WHERE activo=1 ORDER BY clave");
		$stmt-> execute();
		return $stmt-> fetchAll();

$stmt->close();
$stmt=null;
}


static public function mdlValidarMaximo($datos)
{

	$stmt=conexion::conectar()->prepare("SELECT * FROM maximos_almacen WHERE  clave=:descripcion OR descripcion=:descripcion");
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt-> execute();
    return $stmt-> fetch();
	
	$stmt->close();
	$stmt=null;
}
static public function mdlValidarMaximoEstilo($datos)
{

	$stmt=conexion::conectar()->prepare("SELECT * FROM maximos_almacen INNER JOIN estilo_maximos_almacen  
		ON maximos_almacen.id=estilo_maximos_almacen.id_maximo
        INNER JOIN almacen_maximos_almacen ON almacen_maximos_almacen.id_maximo=maximos_almacen.id
		WHERE  maximos_almacen.id_genero=:id_genero AND estilo_maximos_almacen.id_linea=:id_linea AND estilo_maximos_almacen.id_tela=:id_tela AND estilo_maximos_almacen.id_contraste=:id_contraste AND almacen_maximos_almacen.id_almacen in (select id_almacen from almacen_maximos_almacen where id_maximo=:id_maximo)");
	$stmt->bindParam(":id_genero", $datos["id_genero"],PDO::PARAM_INT);
	$stmt->bindParam(":id_linea", $datos["id_linea"],PDO::PARAM_INT);
	$stmt->bindParam(":id_maximo", $datos["id_maximo"],PDO::PARAM_INT);
	$stmt->bindParam(":id_maximo", $datos["id_maximo"],PDO::PARAM_INT);
	$stmt->bindParam(":id_tela", $datos["id_tela"],PDO::PARAM_INT);
	$stmt->bindParam(":id_contraste", $datos["id_contraste"],PDO::PARAM_INT);
	
	
	
	$stmt-> execute();
    return $stmt-> fetch();
	
	$stmt->close();
	$stmt=null;
}
static public function mdlValidarMaximoAlmacen($datos)
{

	$stmt=conexion::conectar()->prepare("
		SELECT * FROM maximos_almacen INNER JOIN estilo_maximos_almacen  
		ON maximos_almacen.id=estilo_maximos_almacen.id_maximo
        INNER JOIN almacen_maximos_almacen ON almacen_maximos_almacen.id_maximo=maximos_almacen.id
		WHERE  maximos_almacen.id_genero=:id_genero AND almacen_maximos_almacen.id_almacen=:id_almacen and estilo_maximos_almacen.id_linea in (SELECT DISTINCT id_linea from estilo_maximos_almacen where id_maximo=:id_maximo)");
	$stmt->bindParam(":id_almacen", $datos["id_almacen"],PDO::PARAM_INT);
	$stmt->bindParam(":id_maximo", $datos["id_maximo"],PDO::PARAM_INT);
	$stmt->bindParam(":id_genero", $datos["id_genero"],PDO::PARAM_INT);
	
	
	$stmt-> execute();
    return $stmt-> fetch();
	
	$stmt->close();
	$stmt=null;
}
static public function mdlValidarMaximoAlmacenes($valor)
{

	$stmt=conexion::conectar()->prepare("SELECT * FROM almacen_maximos_almacen WHERE id_maximo=:id_maximo");
	$stmt->bindParam(":id_maximo", $valor,PDO::PARAM_INT);
	
	$stmt-> execute();
    return $stmt-> fetchAll();
	
	$stmt->close();
	$stmt=null;
}



static public function mdlEditarMaximo($datos){

$stmt=conexion::conectar()->prepare("UPDATE maximos_almacen set clave=:clave,descripcion=:descripcion WHERE id=:id ") ;
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
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
static public function mdlEditarMaximoTalla($item,$datos){

$stmt=conexion::conectar()->prepare("UPDATE detalle_maximos_almacen SET ".$item."=:cantidad WHERE id=:id") ;
	$stmt->bindParam(":cantidad", $datos["cantidad"],PDO::PARAM_INT);
	
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
static public function mdlEliminarMaximoAlmacen($valor){

$stmt=conexion::conectar()->prepare("DELETE FROM almacen_maximos_almacen WHERE id=:id") ;
	
	$stmt->bindParam(":id", $valor,PDO::PARAM_INT);


	if($stmt->execute()){
		return "ok";
	}else
	{
		return "error";
	}
	
	$stmt->close();
	$stmt=null;

}
static public function mdlEliminarMaximoEstilo($valor){

$stmt=conexion::conectar()->prepare("DELETE FROM estilo_maximos_almacen WHERE id=:id") ;
	
	$stmt->bindParam(":id", $valor,PDO::PARAM_INT);


	if($stmt->execute()){
		return "ok";
	}else
	{
		return "error";
	}
	
	$stmt->close();
	$stmt=null;

}


static public function mdlActualizarMaximo($item1,$valor1,$item2,$valor2){
$stmt=conexion::conectar()->prepare("UPDATE maximos_almacen SET $item1=:$item1 WHERE $item2=:$item2") ;
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