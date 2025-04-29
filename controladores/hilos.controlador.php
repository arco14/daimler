<?php

require_once "../modelos/hilos.modelo.php";

 class ControladorHilos{

static public function ctrMostrarHilos($item,$valor){
$respuesta= ModeloHilos::MdlMostrarHilos($item,$valor);
return $respuesta;
	}

static public function ctrMostrarDatosHilo($item,$valor){
$respuesta= ModeloHilos::MdlMostrarHilos($item,$valor);
echo json_encode($respuesta);
	}

static public function ctrMostrarHilosActivos(){
$respuesta= ModeloHilos::mdlMostrarHilosActivos();
echo json_encode($respuesta);
	}

static public function insertarHilo(){
if(preg_match('/^[a-zA-Z-0-9-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["clave"]) &&
preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["color"])) {
$datos=array("clave"=> $_POST["clave"], "color"=> $_POST["color"], "id_proveedor"=> $_POST["id_proveedor"]); 
echo($respuesta=ModeloHilos::mdlIngresarHilo($datos));
}
else
{
echo ("error_preg_match");	
}
}

static public function editarHilo(){
if(preg_match('/^[a-zA-Z-0-9-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["clave"] )
&& preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/' , $_POST["color"]) ) {		

$datos=array("clave"=> $_POST["clave"], "color"=> $_POST["color"], "id_proveedor"=> $_POST["id_proveedor"] ,"id"=>$_POST["id"]); 
echo ($respuesta=ModeloHilos::mdlEditarHilo($datos));
}
else
{
echo ("error_preg_match");	
}
}

static public function validarHilo(){
$datos=array("clave"=> $_POST["clave"]); 
$respuesta=ModeloHilos::mdlValidarHilo($datos);
echo json_encode($respuesta);
}

static public function activarHilo(){
$item1="activo";
$valor1=$_POST["activarHilo"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloHilos::mdlActualizarHilo($item1,$valor1,$item2,$valor2));
}

}


if(isset($_POST["action"])){

switch ($_POST["action"]) {
		case 'insert':
			$insHilo=new ControladorHilos();
			$insHilo->insertarHilo();
			break;
		case 'update':
			$upHilo=new ControladorHilos();
			$upHilo->editarHilo();
			break;
		case 'validate':
			$valHilo=new ControladorHilos();
			$valHilo->validarHilo();
			break;
		case 'activate':
			$activarHilo=new ControladorHilos();
			$activarHilo->activarHilo();
			break;
		case 'select':
			$selectHilo=new ControladorHilos();
			$selectHilo->ctrMostrarDatosHilo("id", $_POST["idHilo"]);
			break;
		case 'list':
			$llenarHilo=new ControladorHilos();
			$llenarHilo->ctrMostrarHilosActivos();
			break;
		
		default:
		
			break;

}

}




