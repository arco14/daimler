<?php

require_once "../modelos/unidades_medidas.modelo.php";

 class ControladorUnidades{
//Mostrar tabla de colores
public function ctrMostrarUnidades($item,$valor){

$respuesta= ModeloUnidades::MdlMostrarUnidades($item,$valor);
return $respuesta;
	}
static public function ctrMostrarUnidadesActivas(){
$respuesta= ModeloUnidades::MdlMostrarUnidadesActivas();
echo json_encode($respuesta);
	}



}

if(isset($_POST["action"])){

switch ($_POST["action"]) {
		case 'list':
			$llenarUnidad=new ControladorUnidades();
			$llenarUnidad->ctrMostrarUnidadesActivas();
			break;
		default:
		
			break;


}
}

