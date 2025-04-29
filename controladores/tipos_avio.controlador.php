<?php

require_once "../modelos/tipos_avio.modelo.php";

 class ControladorTipoAvios{
public function ctrMostrarTiposAvios($item,$valor){

$respuesta= ModeloTiposAvios::MdlMostrarTiposAvios($item,$valor);
return $respuesta;
	}
public function ctrMostrarTiposAviosActivos(){

$respuesta= ModeloTiposAvios::MdlMostrarTiposAviosActivos();
echo json_encode($respuesta);
	}

static public function ctrMostrarDatosTipoAvio($item,$valor){
$respuesta= ModeloTiposAvios::MdlMostrarTiposAvios($item,$valor);
echo json_encode($respuesta);
	}

public function insertarTipoAvio(){
if(preg_match('/^[a-zA-Z-,ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["tipo"]) &&
   preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["clave"]) ) {

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["tipo"]); 
echo($respuesta=ModeloTiposAvios::mdlIngresarTipoAvio($datos));
}
else
{
echo ("error_preg_match");	
}
}
public function editarTipoAvio()
{
if(preg_match('/^[a-zA-Z-,ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["tipo"] )
&& preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/' , $_POST["clave"]) ) {		

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["tipo"],"id"=>$_POST["id"]); 
echo ($respuesta=ModeloTiposAvios::mdlEditarTipoAvio($datos));
}
else
{
echo ("error");	
}
}
/*Validar no repetir tela*/

public function validarTipoAvio()
{
$datos=array("descripcion"=> $_POST["tipo"],"clave"=>$_POST["clave"]); 
$respuesta=ModeloTiposAvios::mdlValidarTipoAvio($datos);
echo json_encode($respuesta);
}
//Activar Desactivar composicion

public function activarTipoActivo(){
$item1="activo";
$valor1=$_POST["activarTipoAvio"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloTiposAvios::mdlActualizarTipoAvio($item1,$valor1,$item2,$valor2));
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
			$listaTipo=new ControladorTipoAvios();
			$listaTipo->ctrMostrarTiposAviosActivos();
			break;
		default:
		
			break;

}

}



