<?php

require_once "../modelos/divisiones.modelo.php";
 class ControladorDivisiones{
static public function ctrMostrarDivisiones($item,$valor){
$respuesta= ModeloDivisiones::MdlMostrarDivisiones($item,$valor);
return $respuesta;
	}
static public function ctrMostrarDivisionesActivas(){
$respuesta= ModeloDivisiones::MdlMostrarDivisionesActivas();
echo json_encode($respuesta);
	}	

}




if(isset($_POST["action"])){

switch ($_POST["action"]) {
case 'insert':
		$insConfeccion=new ControladorConfecciones();
		$insConfeccion->insertarConfeccion();
			break;
		case 'update':
			$upConfeccion=new ControladorConfecciones();
			$upConfeccion->editarConfeccion();
			break;
		case 'validate':
			$valConfeccion=new ControladorConfecciones();
            $valConfeccion->validarConfeccion();
			break;
		case 'activate':
			$activarConfeccion=new ControladorConfecciones();
			$activarConfeccion->activarConfeccion();
			break;
		case 'select':
			$selectConfeccion=new ControladorConfecciones();
			$selectConfeccion->ctrMostrarDatosConfeccion("id", $_POST["idConfeccion"]);
			break;
		case 'list':
			$llenarDivision=new ControladorDivisiones();
			$llenarDivision->ctrMostrarDivisionesActivas();
			break;
		default:
		
			break;

}

}