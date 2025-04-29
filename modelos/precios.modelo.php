<?php
require_once "conexion.php";

class ModeloPrecios
{
static public function mdlIngresarPrecio($datos)
{
	$stmt=conexion::conectar()->prepare("CALL lazlotex_ingresar_precio
		(:id_precio,:clave,:descripcion,:precio_directo,:precio_distribuidor,
		:id_tipo,:id_cliente,:vigencia,:lineal)");
	$stmt->bindParam(":id_precio", $datos["id_precio"],PDO::PARAM_INT);
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":precio_directo", $datos["precio_directo"],PDO::PARAM_STR);
    $stmt->bindParam(":precio_distribuidor", $datos["precio_distribuidor"],PDO::PARAM_STR);
	$stmt->bindParam(":id_tipo", $datos["id_tipo"],PDO::PARAM_INT);
	$stmt->bindParam(":id_cliente", $datos["id_cliente"],PDO::PARAM_INT);
	$stmt->bindParam(":vigencia", $datos["vigencia"],PDO::PARAM_STR);
	$stmt->bindParam(":lineal", $datos["lineal"],PDO::PARAM_INT);


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
static public function mdlIngresarPrecioConvenio($datos)
{
	$stmt=conexion::conectar()->prepare("INSERT INTO precios_convenio(fecha,clave,descripcion,id_tipo_producto,id_cliente,vigencia) VALUES (current_date(),:clave,:descripcion,:id_tipo,:id_cliente,:vigencia)");
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":id_tipo", $datos["id_tipo"],PDO::PARAM_INT);
	$stmt->bindParam(":id_cliente", $datos["id_cliente"],PDO::PARAM_INT);
	$stmt->bindParam(":vigencia", $datos["vigencia"],PDO::PARAM_STR);


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
static public function mdlIngresarPrecioEstilo($datos)
{
	$stmt=conexion::conectar()->prepare("INSERT INTO estilos_precio(id_precio,id_linea,id_molde) VALUES	(:id_precio,:id_linea,:id_molde)");
	$stmt->bindParam(":id_precio", $datos["id_precio"],PDO::PARAM_INT);
	$stmt->bindParam(":id_linea", $datos["id_linea"],PDO::PARAM_INT);
	$stmt->bindParam(":id_molde", $datos["id_molde"],PDO::PARAM_INT);

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
static public function mdlIngresarPrecioEstiloConvenio($datos)
{
	$stmt=conexion::conectar()->prepare("INSERT INTO estilo_precios_convenio(id_precio,id_linea,id_molde,precio,precio_iva) VALUES	(:id_precio,:id_linea,:id_molde,:precio,:precio_iva)");
	$stmt->bindParam(":id_precio", $datos["id_precio"],PDO::PARAM_INT);
	$stmt->bindParam(":id_linea", $datos["id_linea"],PDO::PARAM_INT);
	$stmt->bindParam(":id_molde", $datos["id_molde"],PDO::PARAM_INT);
	$stmt->bindParam(":precio", $datos["precio"],PDO::PARAM_INT);
	$stmt->bindParam(":precio_iva", $datos["precio_iva"],PDO::PARAM_STR);
	


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
static public function MdlMostrarPrecios($item,$valor)
{
	if($item != null)
	{		
$stmt=Conexion::conectar()->prepare("SELECT precios.id,precios.id_tipo_producto,precios.fecha,precios.clave,precios.descripcion,vigencia,precio_directo,precio_directo_iva,precio_distribuidor_iva ,precio_distribuidor,lineal,tipos_producto.descripcion as tipo FROM precios
		INNER JOIN  tipos_producto on tipos_producto.id=precios.id_tipo_producto
			WHERE precios.".$item."=:$item
			ORDER BY precios.descripcion
			");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();
	}else
	{
		$stmt=Conexion::conectar()->prepare("SELECT  precios.id_tipo_producto,precios.id,precios.fecha,precios.clave,precios.descripcion,precio_directo,precio_distribuidor,vigencia,lineal,tipos_producto.descripcion as tipo FROM precios
		INNER JOIN  tipos_producto on tipos_producto.id=precios.id_tipo_producto
			ORDER BY precios.descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();
	}
$stmt->close();
$stmt=null;
}
static public function MdlMostrarPreciosConvenio($item,$valor)
{
	if($item != null)
	{		
$stmt=Conexion::conectar()->prepare("SELECT precios_convenio.id,precios_convenio.id_tipo_producto,precios_convenio.fecha,precios_convenio.clave,precios_convenio.descripcion,vigencia,tipos_producto.descripcion as tipo ,precios_convenio.id_cliente,clientes.nombre as cliente
	FROM precios_convenio
		INNER JOIN  tipos_producto on tipos_producto.id=precios_convenio.id_tipo_producto
		INNER JOIN clientes on clientes.id=precios_convenio.id_cliente
			WHERE precios_convenio.".$item."=:$item
			ORDER BY precios_convenio.descripcion
			");
$stmt->bindParam(":".$item,$valor,PDO::PARAM_STR);
$stmt-> execute();
return $stmt-> fetch();
	}else
	{
		$stmt=Conexion::conectar()->prepare("   SELECT  clientes.nombre as cliente,precios_convenio.id_tipo_producto,precios_convenio.id,precios_convenio.fecha,precios_convenio.clave,precios_convenio.descripcion,vigencia,tipos_producto.descripcion as tipo FROM precios_convenio
		INNER JOIN  tipos_producto on tipos_producto.id=precios_convenio.id_tipo_producto
		INNER JOIN clientes on clientes.id=precios_convenio.id_cliente
			ORDER BY precios_convenio.descripcion");
		$stmt-> execute();
		return $stmt-> fetchAll();
	}
$stmt->close();
$stmt=null;
}
static public function MdlMostrarRangosPrecios($valor)
{
	
		$stmt=Conexion::conectar()->prepare("SELECT rangos_cliente.clave as rango,precio,precio_iva FROM rangos_cliente
INNER JOIN rangos_precio on rangos_precio.id_rango_cliente=rangos_cliente.id
WHERE id_precio=:id_precio
");
			$stmt->bindParam(":id_precio", $valor,PDO::PARAM_INT);
		$stmt-> execute();
		return $stmt-> fetchAll();
	
$stmt->close();
$stmt=null;
}
static public function MdlMostrarEstilosPrecios($valor)
{
	
		$stmt=Conexion::conectar()->prepare("SELECT estilos_precio.id,lineas.descripcion as linea,moldes.clave as molde FROM estilos_precio 
INNER JOIN lineas on lineas.id=estilos_precio.id_linea
INNER JOIN moldes on moldes.id=estilos_precio.id_molde
where id_precio=:id_precio
UNION SELECT estilos_precio.id,lineas.descripcion,generos.descripcion FROM estilos_precio INNER JOIN lineas on lineas.id=estilos_precio.id_linea
INNER JOIN generos on generos.id=estilos_precio.id_molde
where id_precio=:id_precio
");
			$stmt->bindParam(":id_precio", $valor,PDO::PARAM_INT);
		$stmt-> execute();
		return $stmt-> fetchAll();
	
$stmt->close();
$stmt=null;
}
static public function MdlMostrarEstilosPreciosConvenio($valor)
{
	
		$stmt=Conexion::conectar()->prepare("SELECT estilo_precios_convenio.id,lineas.descripcion as linea,moldes.clave as molde ,estilo_precios_convenio.precio,estilo_precios_convenio.precio_iva
FROM estilo_precios_convenio
INNER JOIN lineas on lineas.id=estilo_precios_convenio.id_linea
INNER JOIN moldes on moldes.id=estilo_precios_convenio.id_molde
where id_precio=:id_precio
UNION SELECT estilo_precios_convenio.id,lineas.descripcion,generos.descripcion ,estilo_precios_convenio.precio,estilo_precios_convenio.precio_iva
FROM estilo_precios_convenio INNER JOIN lineas on lineas.id=estilo_precios_convenio.id_linea
INNER JOIN generos on generos.id=estilo_precios_convenio.id_molde
where id_precio=:id_precio
");
			$stmt->bindParam(":id_precio", $valor,PDO::PARAM_INT);
		$stmt-> execute();
		return $stmt-> fetchAll();
	
$stmt->close();
$stmt=null;
}


static public function mdlValidarPrecio($datos)
{
	$stmt=Conexion::conectar()->prepare("SELECT * FROM precios WHERE clave=:descripcion OR descripcion=:descripcion ");
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	
	
	$stmt-> execute();
	return $stmt-> fetch();

	$stmt->close();
	$stmt=null;
}
static public function mdlValidarPrecioConvenio($datos)
{
	$stmt=Conexion::conectar()->prepare("SELECT * FROM precios_convenio WHERE clave=:descripcion OR descripcion=:descripcion ");
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	
	
	$stmt-> execute();
	return $stmt-> fetch();

	$stmt->close();
	$stmt=null;
}
static public function mdlValidarPrecioEstilo($datos)
{
	$stmt=Conexion::conectar()->prepare("SELECT * FROM estilos_precio
		INNER JOIN precios on precios.id=estilos_precio.id_precio
			WHERE id_linea=:id_linea AND id_molde=:id_molde");
	$stmt->bindParam(":id_linea", $datos["id_linea"],PDO::PARAM_INT);
	$stmt->bindParam(":id_molde", $datos["id_molde"],PDO::PARAM_INT);
		
	
	$stmt-> execute();
	return $stmt-> fetch();

	$stmt->close();
	$stmt=null;
}
static public function mdlValidarPrecioEstiloConvenio($datos)
{
	$stmt=Conexion::conectar()->prepare("SELECT * FROM estilo_precios_convenio
		INNER JOIN precios_convenio on precios_convenio.id=estilo_precios_convenio.id_precio
			WHERE id_linea=:id_linea AND id_molde=:id_molde AND id_cliente=:id_cliente");
	$stmt->bindParam(":id_linea", $datos["id_linea"],PDO::PARAM_INT);
	$stmt->bindParam(":id_molde", $datos["id_molde"],PDO::PARAM_INT);
	$stmt->bindParam(":id_cliente", $datos["id_cliente"],PDO::PARAM_INT);
		
	
	$stmt-> execute();
	return $stmt-> fetch();

	$stmt->close();
	$stmt=null;
}


static public function mdlEditarPrecio($datos){

    $stmt=conexion::conectar()->prepare("CALL lazlotex_editar_precio
		(:id_precio,:precio_directo,:precio_distribuidor,
		:id_tipo,:lineal)") ;
	$stmt->bindParam(":id_precio", $datos["id_precio"],PDO::PARAM_INT);
	$stmt->bindParam(":precio_directo", $datos["precio_directo"],PDO::PARAM_STR);
    $stmt->bindParam(":precio_distribuidor", $datos["precio_distribuidor"],PDO::PARAM_STR);
	$stmt->bindParam(":id_tipo", $datos["id_tipo"],PDO::PARAM_INT);
	$stmt->bindParam(":lineal", $datos["lineal"],PDO::PARAM_INT);


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
static public function mdlEditarPrecioConvenio($datos){

    $stmt=conexion::conectar()->prepare("UPDATE precios_convenio SET clave=:clave,descripcion=:descripcion,vigencia=:vigencia WHERE id=:id_precio") ;
	$stmt->bindParam(":id_precio", $datos["id_precio"],PDO::PARAM_INT);
	$stmt->bindParam(":clave", $datos["clave"],PDO::PARAM_STR);
	$stmt->bindParam(":descripcion", $datos["descripcion"],PDO::PARAM_STR);
	$stmt->bindParam(":vigencia", $datos["vigencia"],PDO::PARAM_STR);

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
static public function mdlEditarEstiloPrecioConvenio($datos){

    $stmt=conexion::conectar()->prepare("UPDATE estilo_precios_convenio SET precio=:precio,precio_iva=:precio_iva WHERE id=:id_detalle") ;
	$stmt->bindParam(":id_detalle", $datos["id_detalle"],PDO::PARAM_INT);
	$stmt->bindParam(":precio", $datos["precio"],PDO::PARAM_INT);
	$stmt->bindParam(":precio_iva", $datos["precio_iva"],PDO::PARAM_STR);

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

static public function mdlEditarVigencia($datos){

$stmt=conexion::conectar()->prepare("UPDATE precios SET vigencia=:vigencia WHERE id=:id") ;
	$stmt->bindParam(":vigencia", $datos["vigencia"],PDO::PARAM_STR);
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
static public function mdlEditarVigenciaConvenio($datos){

$stmt=conexion::conectar()->prepare("UPDATE precios_convenio SET vigencia=:vigencia WHERE id=:id") ;
	$stmt->bindParam(":vigencia", $datos["vigencia"],PDO::PARAM_STR);
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
static public function mdlEliminarEstiloPrecio($valor){

$stmt=conexion::conectar()->prepare("DELETE FROM  estilos_precio  WHERE id=:id") ;
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
static public function mdlEliminarEstiloPrecioConvenio($valor){

$stmt=conexion::conectar()->prepare("DELETE FROM  estilo_precios_convenio  WHERE id=:id") ;
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

static public function mdlEliminarPrecioConvenio($valor){

$stmt=conexion::conectar()->prepare("DELETE FROM  estilo_precios_convenio  WHERE id_precio=:id") ;
	$stmt->bindParam(":id", $valor,PDO::PARAM_INT);

	if($stmt->execute()){
		

		$stmt=conexion::conectar()->prepare("DELETE FROM  precios_convenio  WHERE id=:id") ;
		$stmt->bindParam(":id", $valor,PDO::PARAM_INT);

				if($stmt->execute()){

						return "ok";
	}else
	{
		return "error";
	}


	}else
	{
		return "error";
	}
	
	$stmt->close();
	$stmt=null;

}



}