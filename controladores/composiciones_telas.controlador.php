<?php

require_once "../modelos/composiciones_telas.modelo.php";



 class ControladorComposiciones{
//MOSTRAR MARCAS TABLA COMPLETA
static public function ctrMostrarComposiciones($item,$valor){

$respuesta= ModeloComposiciones::MdlMostrarComposiciones($item,$valor);
return $respuesta;
	}
static public function ctrMostrarComposicionesActivas(){
$respuesta= ModeloComposiciones::MdlMostrarComposicionesActivas();
echo json_encode($respuesta);
	}
static public function ctrMostrarDatosComposicion($item,$valor){
$respuesta= ModeloComposiciones::MdlMostrarComposiciones($item,$valor);
echo json_encode($respuesta);
	}


public function insertarComposicion(){
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["lavado"]) ) {

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["composicion"],"lavado"=> $_POST["lavado"] ); 
echo($respuesta=ModeloComposiciones::mdlIngresarComposicion($datos));
}
else
{
echo ("error_preg_match");	
}
}
public function editarComposicion()
{
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["lavado"] )){
	//&& preg_match('/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$/' , $_POST["editarClave"])  {		
$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["composicion"],"lavado"=> $_POST["lavado"], "id"=>$_POST["id"]); 
echo ($respuesta=ModeloComposiciones::mdlEditarComposicion($datos));
}
else
{
echo ("error_preg_match");	
}
}
/*Validar no repetir ccomposicion*/

public function validarComposicion()
{
$datos=array("descripcion"=> $_POST["validarComposicion"]); 
$respuesta=ModeloComposiciones::mdlValidarComposicion($datos);

echo json_encode($respuesta);
}
//Activar Desactivar composicion

public function activarComposicion(){
$item1="activa";
$valor1=$_POST["activarComposicion"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloComposiciones::mdlActualizarComposicion($item1,$valor1,$item2,$valor2));
}



}

if(isset($_POST["action"])){

switch ($_POST["action"]) {
		case 'insert':
			$insComposicion=new ControladorComposiciones();
			$insComposicion->insertarComposicion();
			break;
		case 'update':
			$actComposicion=new ControladorComposiciones();
			$actComposicion->editarComposicion();
			break;
		case 'validate':
			$valComposicion=new ControladorComposiciones();
			$valComposicion->validarComposicion();
			break;
		case 'activate':
			$activarComposicion=new ControladorComposiciones();
			$activarComposicion->activarComposicion();
			break;
		case 'select':
			$selectComposicion=new ControladorComposiciones();
			$selectComposicion->ctrMostrarDatosComposicion("id", $_POST["idComposicion"]);
			break;
		case 'list':
			$llenarSelectComposicion=new ControladorComposiciones();
			$llenarSelectComposicion->ctrMostrarComposicionesActivas();
			break;
		default:
		
			break;

}

}

