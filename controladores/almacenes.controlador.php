<?php

require_once "../modelos/almacenes.modelo.php";

 class ControladorAlmacenes{
//Mostrar tabla de colores
public function ctrMostrarUnidades($item,$valor){

$respuesta= ModeloUnidades::MdlMostrarUnidades($item,$valor);
return $respuesta;
	}
	
static public function ctrMostrarAlmacenesMaximos(){
$respuesta= ModeloAlmacenes::mdlMostrarAlmacenesMaximos();
echo json_encode($respuesta);
	}



}

if(isset($_POST["action"])){

switch ($_POST["action"]) {
case 'insert':
		$insTipo=new ControladorTipoAvios();
		$insTipo->insertarTipoAvio();
			break;
		case 'update':
			$upConfeccion=new ControladorTipoAvios();
			$upConfeccion->editarTipoAvio();
			break;
		case 'validate':
			$valTipo=new ControladorTipoAvios();
            $valTipo->validarTipoAvio();
			break;
		case 'activate':
			$activarConfeccion=new ControladorTipoAvios();
			$activarConfeccion->activarTipoActivo();
			break;
		case 'select':
			$selectTipo=new ControladorTipoAvios();
			$selectTipo->ctrMostrarDatosTipoAvio("id", $_POST["idTipoAvio"]);
			break;
		case 'list':
			$llenarAlmacen=new ControladorAlmacenes();
			$llenarAlmacen->ctrMostrarAlmacenesMaximos();
			break;
		default:
		
			break;


}
}

