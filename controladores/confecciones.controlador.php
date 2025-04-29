<?php

require_once "../modelos/confecciones.modelo.php";

 class ControladorConfecciones{
public function ctrMostrarConfecciones($item,$valor){

$respuesta= ModeloConfecciones::MdlMostrarConfecciones($item,$valor);
return $respuesta;
	}
public function ctrMostrarConfeccionesActivas(){

$respuesta= ModeloConfecciones::MdlMostrarConfeccionesActivas();
echo json_encode($respuesta);
	}

static public function ctrMostrarDatosConfeccion($item,$valor){
$respuesta= ModeloConfecciones::MdlMostrarConfecciones($item,$valor);
echo json_encode($respuesta);
	}

public function insertarConfeccion(){
if(preg_match('/^[a-zA-Z-,ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["confeccion"]) &&
   preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["clave"]) ) {

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["confeccion"]); 
echo($respuesta=ModeloConfecciones::mdlIngresarConfeccion($datos));
}
else
{
echo ("error_preg_match");	
}
}
public function editarConfeccion()
{
if(preg_match('/^[a-zA-Z-,ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["confeccion"] )
&& preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/' , $_POST["clave"]) ) {		

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["confeccion"],"id"=>$_POST["id"]); 
echo ($respuesta=ModeloConfecciones::mdlEditarConfeccion($datos));
}
else
{
echo ("error");	
}
}
/*Validar no repetir tela*/

public function validarConfeccion()
{
$datos=array("descripcion"=> $_POST["validarConfeccion"]); 
$respuesta=ModeloConfecciones::mdlValidarConfeccion($datos);
echo json_encode($respuesta);
}
//Activar Desactivar composicion

public function activarConfeccion(){
$item1="activo";
$valor1=$_POST["activarConfeccion"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloConfecciones::mdlActualizarConfeccion($item1,$valor1,$item2,$valor2));
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
			$listaConfeccion=new ControladorConfecciones();
			$listaConfeccion->ctrMostrarConfeccionesActivas();
			break;
		default:
		
			break;

}

}



