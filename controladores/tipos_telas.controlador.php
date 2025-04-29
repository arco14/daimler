<?php

require_once "../modelos/tipos_telas.modelo.php";

 class ControladorTipos{
//Mostrar tabla de colores
public function ctrMostrarTipos($item,$valor){

$respuesta= ModeloTipos::MdlMostrarTipos($item,$valor);
return $respuesta;
	}
static public function ctrMostrarTiposActivos(){
$respuesta= ModeloTipos::MdlMostrarTiposActivos();
echo json_encode($respuesta);
	}
static public function ctrMostrarDatosTipo($item,$valor){
$respuesta= ModeloTipos::MdlMostrarTipos($item,$valor);
echo json_encode($respuesta);
	}
public function insertarTipo(){
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["clave"]) &&
preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["tipo"])) {

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["tipo"]); 
echo($respuesta=ModeloTipos::mdlIngresarTipo($datos));
}
else
{
echo ("error_preg_match");	
}
}
public function editarTipo()
{
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["tipo"] )
&& preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/' , $_POST["clave"]) ) {		

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["tipo"] ,"id"=>$_POST["id"]); 
echo ($respuesta=ModeloTipos::mdlEditarTipo($datos));
}
else
{
echo ("error");	
}
}
/*Validar no repetir tipos*/

public function validarTipo()
{
$datos=array("descripcion"=> $_POST["validarTipo"]); 
$respuesta=ModeloTipos::mdlValidarTipo($datos);
echo json_encode($respuesta);
}
//Activar Desactivar composicion

public function activarTipo(){
$item1="activo";
$valor1=$_POST["activarTipo"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloTipos::mdlActualizarTipo($item1,$valor1,$item2,$valor2));
}

}

if(isset($_POST["action"])){

switch ($_POST["action"]) {
case 'insert':
		$insTipo=new ControladorTipos();
		$insTipo->insertarTipo();
			break;
		case 'update':
			$upTipo=new ControladorTipos();
			$upTipo->editarTipo();
			break;
		case 'validate':
			$valTipo=new ControladorTipos();
            $valTipo->validarTipo();
			break;
		case 'activate':
			$activarTipo=new ControladorTipos();
			$activarTipo->activarTipo();
			break;
		case 'select':
			$selectTipo=new ControladorTipos();
			$selectTipo->ctrMostrarDatosTipo("id", $_POST["idTipo"]);
			break;
		case 'list':
			$listaTipo=new ControladorTipos();
			$listaTipo->ctrMostrarTiposActivos();
			break;
		default:
		
			break;

}

}
