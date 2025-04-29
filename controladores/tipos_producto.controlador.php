<?php

require_once "../modelos/tipos_producto.modelo.php";

 class ControladorTipos{

static public function ctrMostrarTiposActivos(){
$respuesta= ModeloTipos::MdlMostrarTiposActivos();
echo json_encode($respuesta);
	}

}

if(isset($_POST["action"])){

switch ($_POST["action"]) {
		case 'list':
			$llenarTipo=new ControladorTipos();
			$llenarTipo->ctrMostrarTiposActivos();
			break;
		default:
		
			break;


}
}

