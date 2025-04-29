<?php

require_once "../modelos/descuentos.modelo.php";

 class ControladorDescuentos{
static public function ctrMostrarDescuentos($item,$valor){
$respuesta= ModeloDescuentos::MdlMostrarDescuentos($item,$valor);
return $respuesta;
	}



static public function validarDesripcionDescuento(){

$respuesta=ModeloDescuentos::mdlValidarDesripcionDescuento($_POST["descuento"]);
echo json_encode($respuesta);
}
static public function validarDescuento(){
$datos=array("id_tipo"=> $_POST["idTipoProducto"], "id_rango"=> $_POST["idRango"]);
$respuesta=ModeloDescuentos::mdlValidarDescuento($datos);
echo json_encode($respuesta);
}

static public function insertarDescuento(){


$datos=array( "descripcion"=> $_POST["descripcion"],"descuento"=> $_POST["descuento"],"id_tipo"=> $_POST["idTipoProducto"],"id_rango"=>$_POST["idRango"]); 
echo($respuesta=ModeloDescuentos::mdlIngresarDescuento($datos));

}

static public function editarDescuento(){
   
$datos=array("descuento"=> $_POST["descuento"],"id_descuento"=>$_POST["idDescuento"]); 
echo ($respuesta=ModeloDescuentos::mdlEditarDescuento($datos));

}


}


if(isset($_POST["action"])){

switch ($_POST["action"]) {
		case 'insert':
			$insLinea=new ControladorDescuentos();
			$insLinea->insertarDescuento();
			break;
		case 'update':
			$upDescuento=new ControladorDescuentos();
			$upDescuento->editarDescuento();
			break;
		case 'validate':
			$valDescuento=new ControladorDescuentos();
			$valDescuento->validarDesripcionDescuento();
			break;
		case 'validateCompleto':
			$valDescuento=new ControladorDescuentos();
			$valDescuento->validarDescuento();
			break;
	

		case 'activate':
			$activarLinea=new ControladorLineas();
			$activarLinea->activarLinea();
			break;
		case 'select':
			$selectLinea=new ControladorLineas();
			$selectLinea->ctrMostrarDatosLinea("id", $_POST["idLinea"]);
			break;
		case 'list':
			$llenarLinea=new ControladorLineas();
			$llenarLinea->ctrMostrarLineasActivas();
			break;
			case 'listCompra':
			$llenarLinea=new ControladorLineas();
			$llenarLinea->ctrMostrarLineasCompra();
			break;
			case 'listMaximo':
			$llenarLinea=new ControladorLineas();
			$llenarLinea->ctrMostrarLineasMaximo();
			break;
		default:
		
			break;

}

}
