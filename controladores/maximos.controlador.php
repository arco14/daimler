<?php

require_once "../modelos/maximos.modelo.php";

 class ControladorMaximos{

static public function ctrMostrarMaximos($item,$valor){
$respuesta= ModeloMaximos::MdlMostrarMaximos($item,$valor);
return $respuesta;
	}
	static public function ctrMostrarTallasMaximos($valor){
$respuesta= ModeloMaximos::mdlMostrarTallasMaximos($valor);
return $respuesta;
	}
	static public function ctrMostrarEstilosMaximos($valor){
$respuesta= ModeloMaximos::mdlMostrarEstilosMaximos($valor);
return $respuesta;
	}
	static public function ctrMostrarAlmacenesMaximos($valor){
$respuesta= ModeloMaximos::mdlMostrarAlmacenesMaximos($valor);
return $respuesta;
	}

static public function ctrMostrarDatosMaximo($item,$valor){
$respuesta= ModeloMaximos::MdlMostrarMaximos($item,$valor);
echo json_encode($respuesta);
	}

static public function insertarMaximo(){
if(preg_match('/^[a-zA-Z-0-9-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["descripcion"])) {


$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["descripcion"], "id_division"=> $_POST["id_division"],"id_genero"=> $_POST["id_genero"]); 

echo($respuesta=ModeloMaximos::mdlIngresarMaximo($datos));

}
else
{
echo ("error_preg_match");	
}
}
static public function insertarEstiloMaximo(){

$datos=array("id_linea"=> $_POST["idLinea"],"id_tela"=> $_POST["idTela"],"id_contraste"=> $_POST["idContraste"] ,"id_maximo"=> $_POST["idMaximo"]); 

echo($respuesta=ModeloMaximos::mdlIngresarEstiloMaximo($datos));

}
static public function insertarAlmacenMaximo(){

$datos=array("id_almacen"=> $_POST["idAlmacen"], "id_maximo"=> $_POST["idMaximo"]); 

echo($respuesta=ModeloMaximos::mdlIngresarAlmacenMaximo($datos));

}





static public function editarMaximo(){
	

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["descripcion"],"id"=>$_POST["id"]); 
echo ($respuesta=ModeloMaximos::mdlEditarMaximo($datos));

}

static public function editarMaximoTalla(){
$datos=array("cantidad"=> $_POST["cantidad"],"id"=>$_POST["id"]); 
echo ($respuesta=ModeloMaximos::mdlEditarMaximoTalla($_POST["campo"],$datos));

}
static public function eliminarMaximoAlmacen(){
//$datos=array("id"=>$_POST["id"]); 
echo ($respuesta=ModeloMaximos::mdlEliminarMaximoAlmacen($_POST["id"]));

}
static public function eliminarMaximoEstilo(){
//$datos=array("id"=>$_POST["id"]); 
echo ($respuesta=ModeloMaximos::mdlEliminarMaximoEstilo($_POST["id"]));

}
static public function validarMaximo(){
$datos=array("descripcion"=> $_POST["maximo"]); 
$respuesta=ModeloMaximos::mdlValidarMaximo($datos);
echo json_encode($respuesta);
}
static public function validarMaximoEstilo(){
$datos=array("id_linea"=> $_POST["idLinea"],"id_tela"=> $_POST["idTela"],"id_contraste"=> $_POST["idContraste"], "id_genero"=> $_POST["idGenero"],"id_maximo"=> $_POST["idMaximo"]); 
$respuesta=ModeloMaximos::mdlValidarMaximoEstilo($datos);
echo json_encode($respuesta);
}

static public function validarMaximoAlmacen(){
$datos=array("id_almacen"=> $_POST["idAlmacen"],"id_maximo"=> $_POST["idMaximo"],"id_genero"=> $_POST["idGenero"]); 
$respuesta=ModeloMaximos::mdlValidarMaximoAlmacen($datos);
echo json_encode($respuesta);
}

static public function validarMaximoAlmacenes(){
$respuesta=ModeloMaximos::mdlValidarMaximoAlmacenes($_POST["idMaximo"]);
echo json_encode($respuesta);
}


static public function activarMaximo(){
$item1="activo";
$valor1=$_POST["activarMaximo"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloMaximos::mdlActualizarMaximo($item1,$valor1,$item2,$valor2));
}

}


if(isset($_POST["action"])){

switch ($_POST["action"]) {
		case 'insert':
			$insMaximo=new ControladorMaximos();
			$insMaximo->insertarMaximo();
			break;
		case 'insertEstilo':
			$insEstilo=new ControladorMaximos();
			$insEstilo->insertarEstiloMaximo();
			break;
		case 'insertAlmacen':
			$insAlmacen=new ControladorMaximos();
			$insAlmacen->insertarAlmacenMaximo();
			break;
		case 'update':
			$upMaximo=new ControladorMaximos();
			$upMaximo->editarMaximo();
			break;
			case 'updateMaximo':
			$upMaximo=new ControladorMaximos();
			$upMaximo->editarMaximoTalla();
			break;
		case 'validate':
			$valMaximo=new ControladorMaximos();
			$valMaximo->validarMaximo();
			break;
		case 'validateEstilo':
			$valEstilo=new ControladorMaximos();
			$valEstilo->validarMaximoEstilo();
			break;
		case 'validateAlmacen':
			$valEstilo=new ControladorMaximos();
			$valEstilo->validarMaximoAlmacen();
			break;
		case 'validateAlmacenes':
			$valAlmacen=new ControladorMaximos();
			$valAlmacen->validarMaximoAlmacenes();
			break;
		case 'activate':
			$activarMaximo=new ControladorMaximos();
			$activarMaximo->activarMaximo();
			break;
		case 'select':
			$selectMaximo=new ControladorMaximos();
			$selectMaximo->ctrMostrarDatosMaximo("id", $_POST["idMaximo"]);
			break;
		case 'selectVersiones':
			$selectVersiones=new ControladorMoldes();
			$selectVersiones->ctrMostrarVersionesMolde("id", $_POST["idMolde"]);
			break;
		case 'list':
			$llenarMarca=new ControladorMarcas();
			$llenarMarca->ctrMostrarMarcasActivas();
			break;
		case 'deleteAlmacen':
			$deleteAlmacen=new ControladorMaximos();
			$deleteAlmacen->eliminarMaximoAlmacen();
			break;
		case 'deleteEstilo':
			$deleteEstilo=new ControladorMaximos();
			$deleteEstilo->eliminarMaximoEstilo();
			break;
		default:
		
			break;

}

}






