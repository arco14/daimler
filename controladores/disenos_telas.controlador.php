<?php

require_once "../modelos/disenos_tela.modelo.php";

 class ControladorDisenos{
//MOSTRAR DISEÑOS TABLA COMPLETA
static public function ctrMostrarDisenos($item,$valor){

$respuesta= ModeloDisenos::MdlMostrarDisenos($item,$valor);
return $respuesta;
	}
static public function ctrMostrarDatosDiseno($item,$valor){
$respuesta= ModeloDisenos::MdlMostrarDisenos($item,$valor);
echo json_encode($respuesta);
	}
static public function ctrMostrarDisenosActivos(){
$respuesta= ModeloDisenos::MdlMostrarDisenosActivos();
echo json_encode($respuesta);
	}

public function insertarDiseno(){
if(preg_match('/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["clave"]) &&
preg_match('/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ. ]+$/', $_POST["diseno"])) {


$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["diseno"] ); 
echo($respuesta=ModeloDisenos::mdlIngresarDiseno($datos));
}
else
{
echo ("error_preg_match");	
}
}
public function editarDiseno()
{
if(preg_match('/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["clave"]) &&
preg_match('/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ. ]+$/', $_POST["diseno"])) {
	//&& preg_match('/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$/' , $_POST["editarClave"])  {		
$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["diseno"], "id"=>$_POST["id"]); 
echo ($respuesta=ModeloDisenos::mdlEditarDiseno($datos));
}
else
{
echo ("error");	
}
}
/*Validar no repetir diseño*/
public function validarDiseno(){
$datos=array("descripcion"=> $_POST["diseno"]); 
$respuesta=ModeloDisenos::mdlValidarDiseno($datos);
echo json_encode($respuesta);
}
//Activar Desactivar composicion

public function activarDiseno(){
$item1="activo";
$valor1=$_POST["activarDiseno"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloDisenos::mdlActualizarDiseno($item1,$valor1,$item2,$valor2));
}



}


if(isset($_POST["action"])){

switch ($_POST["action"]) {
		case 'insert':
			$insDiseno=new ControladorDisenos();
			$insDiseno->insertarDiseno();
			break;
		case 'update':
			$upDiseno=new ControladorDisenos();
			$upDiseno->editarDiseno();
			break;
		case 'validate':
			$valDiseno=new ControladorDisenos();
			$valDiseno->validarDiseno();
			break;
		case 'activate':
			$activarDiseno=new ControladorDisenos();
			$activarDiseno->activarDiseno();
			break;
		case 'select':
			$selectDiseno=new ControladorDisenos();
			$selectDiseno->ctrMostrarDatosDiseno("id", $_POST["idDiseno"]);
			break;
		case 'list':
			$llenarDiseno=new ControladorDisenos();
			$llenarDiseno->ctrMostrarDisenosActivos();
			break;
		default:
		
			break;

}

}

