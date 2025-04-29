<?php

require_once "../modelos/precios.modelo.php";

 class ControladorPrecios{
public function ctrMostrarPrecios($item,$valor){

$respuesta= ModeloPrecios::MdlMostrarPrecios($item,$valor);
return $respuesta;
	}
	public function ctrMostrarPreciosConvenio($item,$valor){

$respuesta= ModeloPrecios::MdlMostrarPreciosConvenio($item,$valor);
return $respuesta;
	}
public function ctrMostrarRangosPrecios($valor){

$respuesta= ModeloPrecios::MdlMostrarRangosPrecios($valor);
return $respuesta;
	}
public function ctrMostrarEstilosPrecios($valor){

$respuesta= ModeloPrecios::MdlMostrarEstilosPrecios($valor);
return $respuesta;
	}
	public function ctrMostrarEstilosPreciosConvenio($valor){

$respuesta= ModeloPrecios::MdlMostrarEstilosPreciosConvenio($valor);
return $respuesta;
	}

public function ctrMostrarDatosPrecio($item,$valor){

$respuesta= ModeloPrecios::MdlMostrarPrecios($item,$valor);
echo json_encode($respuesta);
	}
public function ctrMostrarDatosPrecioConvenio($item,$valor){

$respuesta= ModeloPrecios::MdlMostrarPreciosConvenio($item,$valor);
echo json_encode($respuesta);
	}


static public function insertarPrecio(){
$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["descripcion"],"id_tipo"=> $_POST["idTipoProducto"],"precio_directo"=> $_POST["precioDirecto"],
"precio_distribuidor"=> $_POST["precioDistribuidor"],"vigencia"=> $_POST["vigencia"],"lineal"=> $_POST["lineal"],"id_precio"=>$_POST["idPrecio"],"id_cliente"=>$_POST["idCliente"]); 
echo($respuesta=ModeloPrecios::mdlIngresarPrecio($datos));

}

static public function insertarPrecioConvenio(){
$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["descripcion"],"id_tipo"=> $_POST["idTipoProducto"],"vigencia"=> $_POST["vigencia"],"id_cliente"=>$_POST["idCliente"]); 
echo($respuesta=ModeloPrecios::mdlIngresarPrecioConvenio($datos));

}
static public function insertarPrecioEstilo(){
$datos=array("id_linea"=> $_POST["idLinea"], "id_molde"=> $_POST["idMolde"],"id_precio"=> $_POST["idPrecio"]); 
echo($respuesta=ModeloPrecios::mdlIngresarPrecioEstilo($datos));

}
static public function insertarPrecioEstiloConvenio(){
$datos=array("id_linea"=> $_POST["idLinea"], "id_molde"=> $_POST["idMolde"],"id_precio"=> $_POST["idPrecio"],"precio"=> $_POST["precio"],"precio_iva"=>$_POST["precio_iva"]); 
echo($respuesta=ModeloPrecios::mdlIngresarPrecioEstiloConvenio($datos));

}
public function editarPrecio()
{
$datos=array("id_precio"=> $_POST["idPrecio"], "precio_directo"=> $_POST["precioDirecto"],"precio_distribuidor"=> $_POST["precioDistribuidor"],"lineal"=> $_POST["lineal"],"id_tipo"=>$_POST["idTipo"]); 
echo ($respuesta=ModeloPrecios::mdlEditarPrecio($datos));

}
public function editarPrecioConvenio()
{
$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["descripcion"],"vigencia"=> $_POST["vigencia"],"id_precio"=>$_POST["idPrecio"]); 
echo ($respuesta=ModeloPrecios::mdlEditarPrecioConvenio($datos));

}
public function editarEstiloPrecioConvenio()
{
$datos=array("precio"=> $_POST["precio"], "precio_iva"=> $_POST["precio_iva"],"id_detalle"=>$_POST["idDetalleEstilo"]); 
echo ($respuesta=ModeloPrecios::mdlEditarEstiloPrecioConvenio($datos));

}
public function editarVigencia()
{
$datos=array("vigencia"=> $_POST["vigencia"],"id"=>$_POST["idPrecio"]); 
echo ($respuesta=ModeloPrecios::mdlEditarVigencia($datos));

}
public function editarVigenciaConvenio()
{
$datos=array("vigencia"=> $_POST["vigencia"],"id"=>$_POST["idPrecio"]); 
echo ($respuesta=ModeloPrecios::mdlEditarVigenciaConvenio($datos));

}
public function eliminarEstiloPrecio()
{
		
echo ($respuesta=ModeloPrecios::mdlEliminarEstiloPrecio($_POST["idDetalleEstilo"]));

}
public function eliminarEstiloPrecioConvenio()
{
		
echo ($respuesta=ModeloPrecios::mdlEliminarEstiloPrecioConvenio($_POST["idDetalleEstilo"]));

}
public function eliminarPrecioConvenio()
{
		
echo ($respuesta=ModeloPrecios::mdlEliminarPrecioConvenio($_POST["idPrecio"]));

}
public function validarPrecio()
{
	$datos=array("descripcion"=> $_POST["descripcion"]);
$respuesta=ModeloPrecios::mdlValidarPrecio($datos);
echo json_encode($respuesta);
}
public function validarPrecioConvenio()
{
	$datos=array("descripcion"=> $_POST["descripcion"]);
$respuesta=ModeloPrecios::mdlValidarPrecioConvenio($datos);
echo json_encode($respuesta);
}
public function validarPrecioEstilo()
{
	$datos=array("id_molde"=> $_POST["idMolde"], "id_linea"=> $_POST["idLinea"]);
$respuesta=ModeloPrecios::mdlValidarPrecioEstilo($datos);
echo json_encode($respuesta);
}

public function validarPrecioEstiloConvenio()
{
	$datos=array("id_molde"=> $_POST["idMolde"], "id_linea"=> $_POST["idLinea"],"id_cliente"=>$_POST["idCliente"]);
$respuesta=ModeloPrecios::mdlValidarPrecioEstiloConvenio($datos);
echo json_encode($respuesta);
}


}

if(isset($_POST["action"])){

switch ($_POST["action"]) {
		case 'insert':
			$insPrecios=new ControladorPrecios();
			$insPrecios->insertarPrecio();
			break;
		case 'insertConvenio':
			$insPrecios=new ControladorPrecios();
			$insPrecios->insertarPrecioConvenio();
			break;
		case 'insertEstilo':
			$insPrecios=new ControladorPrecios();
			$insPrecios->insertarPrecioEstilo();
			break;
		case 'insertEstiloConvenio':
			$insPrecios=new ControladorPrecios();
			$insPrecios->insertarPrecioEstiloConvenio();
			break;
		case 'update':
			$actPrecio=new ControladorPrecios();
			$actPrecio->editarPrecio();
			break;
		case 'updateConvenio':
			$actPrecio=new ControladorPrecios();
			$actPrecio->editarPrecioConvenio();
			break;
		case 'updatePrecioConvenio':
			$actPrecio=new ControladorPrecios();
			$actPrecio->editarEstiloPrecioConvenio();
			break;
		case 'updateVigencia':
			$actVigencia=new ControladorPrecios();
			$actVigencia->editarVigencia();
			break;
		case 'updateVigenciaConvenio':
			$actVigencia=new ControladorPrecios();
			$actVigencia->editarVigenciaConvenio();
			break;
		case 'validate':
			$vaPrecio=new ControladorPrecios();
			$vaPrecio->validarPrecio();
			break;
		case 'validateConvenio':
			$vaPrecio=new ControladorPrecios();
			$vaPrecio->validarPrecioConvenio();
			break;
		case 'validateEstilo':
			$vaPrecio=new ControladorPrecios();
			$vaPrecio->validarPrecioEstilo();
			break;
		case 'validateEstiloConvenio':
			$vaPrecio=new ControladorPrecios();
			$vaPrecio->validarPrecioEstiloConvenio();
			break;
		case 'select':
			$datosPrecio=new ControladorPrecios();
			$datosPrecio->ctrMostrarDatosPrecio("id", $_POST["idPrecio"]);
			break;
		case 'selectConvenio':
			$datosPrecio=new ControladorPrecios();
			$datosPrecio->ctrMostrarDatosPrecioConvenio("id", $_POST["idPrecio"]);
			break;
		case 'delete':
			$deEstilo=new ControladorPrecios();
			$deEstilo->eliminarPrecioConvenio();
			break;
		case 'deleteEstilo':
			$deEstilo=new ControladorPrecios();
			$deEstilo->eliminarEstiloPrecio();
			break;
		case 'deleteEstiloConvenio':
			$deEstilo=new ControladorPrecios();
			$deEstilo->eliminarEstiloPrecioConvenio();
			break;
		default:
		
			break;

}

}

