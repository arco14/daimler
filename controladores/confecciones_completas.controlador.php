<?php

require_once "../modelos/confecciones_completas.modelo.php";

 class ControladorConfeccionesCompletas{


public function ctrMostrarConfeccionesCompletas($item,$valor){

$respuesta= ModeloConfeccionesCompletas::MdlMostrarConfeccionesCompletas($item,$valor);
return  $respuesta;
	}


public function ctrMostrarConfeccionesActivas(){

$respuesta= ModeloConfeccionesCompletas::MdlMostrarConfeccionesCompletasActivas($_POST["idPrenda"]);
echo json_encode($respuesta);
	}
	
	static public function ctrMostrarDatosConfeccion($item,$valor){
$respuesta= ModeloConfeccionesCompletas::MdlMostrarConfeccionesCompletas($item,$valor);
echo json_encode($respuesta);
	}


public function insertarConfeccionCompleta(){
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["confeccion"]) &&
   preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["clave"]) ) {

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["confeccion"],"precio"=> $_POST["precio"],"id_tipo"=> $_POST["id_tipo"],"id_prenda"=> $_POST["id_prenda"], "id_proveedor"=> $_POST["id_proveedor"]); 
echo($respuesta=ModeloConfeccionesCompletas::mdlIngresarConfeccionCompleta($datos));
}
else
{
echo ("error_preg_match");	
}
}
public function editarConfeccionCompleta()
{
if(preg_match('/^[a-zA-Z-,ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["confeccion"] )
&& preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/' , $_POST["clave"]) ) {		

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["confeccion"],"precio"=> $_POST["precio"],"id_tipo"=> $_POST["id_tipo"],"id_prenda"=> $_POST["id_prenda"],"id_proveedor"=> $_POST["id_proveedor"],"id"=>$_POST["id"]); 
echo ($respuesta=ModeloConfeccionesCompletas::mdlEditarConfeccionCompleta($datos));
}
else
{
echo ("error_preg_match");	
}
}
/*Validar no repetir tela*/

public function validarConfeccionCompleta()
{
$datos=array("descripcion"=> $_POST["confeccion"], "clave"=> $_POST["clave"]); 
$respuesta=ModeloConfeccionesCompletas::mdlValidarConfeccionCompleta($datos);
echo json_encode($respuesta);
}
//Activar Desactivar composicion

public function activarConfeccionCompleta(){
$item1="activo";
$valor1=$_POST["activarConfeccion"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloConfeccionesCompletas::mdlActualizarConfeccionCompleta($item1,$valor1,$item2,$valor2));
}

}

if(isset($_POST["action"])){

switch ($_POST["action"]) {
		case 'insert':
			$insConfeccion=new ControladorConfeccionesCompletas();
			$insConfeccion->insertarConfeccionCompleta();
			break;
		case 'update':
			$upConfeccion=new ControladorConfeccionesCompletas();
			$upConfeccion->editarConfeccionCompleta();
			break;
		case 'validate':
			$valConfeccion=new ControladorConfeccionesCompletas();
			$valConfeccion->validarConfeccionCompleta();
			break;
		case 'activate':
			$actConfeccion=new ControladorConfeccionesCompletas();
			$actConfeccion->activarConfeccionCompleta();
			break;
		case 'select':
			$selectConfeccion=new ControladorConfeccionesCompletas();
			$selectConfeccion->ctrMostrarDatosConfeccion("id", $_POST["idConfeccionCompleta"]);
			break;
		case 'list':
			$llenarConfeccion=new ControladorConfeccionesCompletas();
			$llenarConfeccion->ctrMostrarConfeccionesActivas();
			break;
		default:
		
			break;




}
}


//Llenar select
if(isset($_POST["llenarSelectConfeccion"]))
{
$selectConfeccion=new ControladorConfecciones();
$selectConfeccion->ctrMostrarConfeccionesActivas();
}
