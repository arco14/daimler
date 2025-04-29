<?php

require_once "../modelos/marcas.modelo.php";

 class ControladorMarcas{

static public function ctrMostrarMarcas($item,$valor){
$respuesta= ModeloMarcas::MdlMostrarMarcas($item,$valor);
return $respuesta;
	}

static public function ctrMostrarDatosMarca($item,$valor){
$respuesta= ModeloMarcas::MdlMostrarMarcas($item,$valor);
echo json_encode($respuesta);
	}

static public function ctrMostrarMarcasActivas(){
$respuesta= ModeloMarcas::MdlMostrarMarcasActivas();
echo json_encode($respuesta);
	}
	static public function ctrMostrarMarcasHilos(){
$respuesta= ModeloMarcas::MdlMostrarMarcasHilos();
echo json_encode($respuesta);
	}
static public function insertarMarca(){
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["clave"]) &&
preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["marca"])) {
$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["marca"], "tipo"=> $_POST["tipo"]); 
echo($respuesta=ModeloMarcas::mdlIngresarMarca($datos));
}
else
{
echo ("error_preg_match");	
}
}

static public function editarMarca(){
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["marca"] )
&& preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/' , $_POST["clave"]) ) {		

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["marca"],"tipo"=> $_POST["tipo"] ,"id"=>$_POST["id"]); 
echo ($respuesta=ModeloMarcas::mdlEditarMarca($datos));
}
else
{
echo ("error_preg_match");	
}
}

static public function validarMarca(){
$datos=array("descripcion"=> $_POST["marca"]); 
$respuesta=ModeloMarcas::mdlValidarMarca($datos);
echo json_encode($respuesta);
}

static public function activarMarca(){
$item1="activa";
$valor1=$_POST["activarMarca"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloMarcas::mdlActualizarMarca($item1,$valor1,$item2,$valor2));
}

}


if(isset($_POST["action"])){

switch ($_POST["action"]) {
		case 'insert':
			$insMarca=new ControladorMarcas();
			$insMarca->insertarMarca();
			break;
		case 'update':
			$upMarca=new ControladorMarcas();
			$upMarca->editarMarca();
			break;
		case 'validate':
			$valMarca=new ControladorMarcas();
			$valMarca->validarMarca();
			break;
		case 'activate':
			$activarMarca=new ControladorMarcas();
			$activarMarca->activarMarca();
			break;
		case 'select':
			$selectMarca=new ControladorMarcas();
			$selectMarca->ctrMostrarDatosMarca("id", $_POST["idMarca"]);
			break;
		case 'list':
			$llenarMarca=new ControladorMarcas();
			$llenarMarca->ctrMostrarMarcasActivas();
			break;
		case 'listHilo':
			$llenarMarca=new ControladorMarcas();
			$llenarMarca->ctrMostrarMarcasHilos();
			break;
		default:
		
			break;

}

}






