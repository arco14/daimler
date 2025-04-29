<?php

require_once "../modelos/colores_telas.modelo.php";

 class ControladorColores{
//Mostrar tabla de colores
static
public function ctrMostrarColores($item,$valor){

$respuesta= ModeloColores::MdlMostrarColores($item,$valor);
return $respuesta;
	}
static public function ctrMostrarColoresActivos(){
$respuesta= ModeloColores::MdlMostrarColoresActivos();
echo json_encode($respuesta);
	}
static public function ctrMostrarDatosColor($item,$valor){
$respuesta= ModeloColores::MdlMostrarColores($item,$valor);
echo json_encode($respuesta);
	}
static public function insertarColor(){
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["clave"]) &&
preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["color"])) {

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["color"]); 
echo($respuesta=ModeloColores::mdlIngresarColor($datos));
}
else
{
echo ("error_preg_match");	
}
}
static public function editarColor()
{
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["color"] )
&& preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/' , $_POST["clave"]) ) {		

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["color"] ,"id"=>$_POST["id"]); 
echo ($respuesta=ModeloColores::mdlEditarColor($datos));
}
else
{
echo ("error_preg_match");
}
}
/*Validar no repetir color*/

public function validarColor()
{
$datos=array("descripcion"=> $_POST["validarColor"]); 
$respuesta=ModeloColores::mdlValidarColor($datos);
echo json_encode($respuesta);
}
//Activar Desactivar composicion

public function activarColor(){
$item1="activo";
$valor1=$_POST["activarColor"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloColores::mdlActualizarColor($item1,$valor1,$item2,$valor2));
}

}

if(isset($_POST["action"])){

switch ($_POST["action"]) {
case 'insert':
		$insColor=new ControladorColores();
		$insColor->insertarColor();
			break;
		case 'update':
			$upColor=new ControladorColores();
			$upColor->editarColor();
			break;
		case 'validate':
			$valColor=new ControladorColores();
            $valColor->validarColor();
			break;
		case 'activate':
			$activarColor=new ControladorColores();
			$activarColor->activarColor();
			break;
		case 'select':
			$selectColor=new ControladorColores();
			$selectColor->ctrMostrarDatosColor("id", $_POST["idColor"]);
			break;
		case 'list':
			$listaColor=new ControladorColores();
			$listaColor->ctrMostrarColoresActivos();
			break;
		default:
		
			break;

}

}