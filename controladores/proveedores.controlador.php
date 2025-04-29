<?php

require_once "../modelos/proveedores.modelo.php";

 class ControladorProveedores{
public function ctrMostrarProveedores($item,$valor){

$respuesta= ModeloProveedores::MdlMostrarProveedores($item,$valor);
return $respuesta;
	}
	public function ctrMostrarDatosProveedor($item,$valor){

$respuesta= ModeloProveedores::MdlMostrarProveedores($item,$valor);
echo json_encode($respuesta);
	}
public function ctrMostrarProveedoresActivos(){

$respuesta= ModeloProveedores::MdlMostrarProveedoresActivos();
echo json_encode($respuesta);
	}
	
public function ctrMostrarProveedoresSelect($item,$valor){

$respuesta= ModeloProveedores::MdlMostrarProveedoresSelect($item,$valor);
return $respuesta;
	}

public function insertarProveedor(){
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["proveedor"]) &&
   preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["contacto"]) ) {

$datos=array("nombre"=> $_POST["proveedor"], "contacto"=> $_POST["contacto"],"telefono"=> $_POST["telefono"],"email"=> $_POST["email"]); 
echo($respuesta=ModeloProveedores::mdlIngresarProveedor($datos));
}
else
{
echo ("error_preg_match");	
}
}
public function editarProveedor()
{
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["proveedor"] )
&& preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/' , $_POST["contacto"])) {		

$datos=array("nombre"=> $_POST["proveedor"], "contacto"=> $_POST["contacto"],"telefono"=> $_POST["telefono"],"email"=> $_POST["email"],"id"=>$_POST["id"]); 
echo ($respuesta=ModeloProveedores::mdlEditarProveedor($datos));
}
else
{
echo ("error");	
}
}

public function validarProveedor()
{
$datos=array("nombre"=> $_POST["proveedor"]); 
$respuesta=ModeloProveedores::mdlValidarProveedor($datos);
echo json_encode($respuesta);
}
//Activar Desactivar composicion

public function activarProveedor(){
$item1="activo";
$valor1=$_POST["activarProveedor"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloProveedores::mdlActualizarProveedor($item1,$valor1,$item2,$valor2));
}

}

if(isset($_POST["action"])){

switch ($_POST["action"]) {
		case 'insert':
			$insProveedor=new ControladorProveedores();
			$insProveedor->insertarProveedor();
			break;
		case 'update':
			$actProveedor=new ControladorProveedores();
			$actProveedor->editarProveedor();
			break;
		case 'validate':
			$vaProveedor=new ControladorProveedores();
			$vaProveedor->validarProveedor();
			break;
		case 'activate':
			$activarProveedor=new ControladorProveedores();
			$activarProveedor->activarProveedor();
			break;
		case 'select':
			$datosProveedor=new ControladorProveedores();
			$datosProveedor->ctrMostrarDatosProveedor("id", $_POST["idProveedor"]);
			break;
		case 'list':
			$llenarProveedor=new ControladorProveedores();
			$llenarProveedor->ctrMostrarProveedoresActivos();
			break;
		default:
		
			break;

}

}

