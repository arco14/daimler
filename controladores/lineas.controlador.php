<?php

require_once "../modelos/lineas.modelo.php";

 class ControladorLineas{
static public function ctrMostrarLineas($item,$valor){
$respuesta= ModeloLineas::MdlMostrarLineas($item,$valor);
return $respuesta;
	}
static public function ctrMostrarDatosLinea($item,$valor){
$respuesta= ModeloLineas::MdlMostrarLineas($item,$valor);
echo json_encode($respuesta);
    }
static    public function ctrMostrarLineasActivas(){

$respuesta= ModeloLineas::mdlMostrarLineasActivas();
echo json_encode($respuesta);
	}
static    public function ctrMostrarLineasCompra(){

$respuesta= ModeloLineas::mdlMostrarLineasCompra();
echo json_encode($respuesta);
	}
	static    public function ctrMostrarLineasMaximo(){

$respuesta= ModeloLineas::mdlMostrarLineasMaximos();
echo json_encode($respuesta);
	}
static    public function ctrMostrarLineasPrecio(){

$respuesta= ModeloLineas::mdlMostrarLineasPrecios($_POST["idTipo"]);
echo json_encode($respuesta);
	}

/*Validar no repetir linea*/
static public function validarLinea(){
$datos=array("descripcion"=> $_POST["linea"]); 
$respuesta=ModeloLineas::mdlValidarLinea($datos);
echo json_encode($respuesta);
}
//insertar linea
static public function insertarLinea(){
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["clave"]) &&
preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["linea"])) {

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["linea"],"id_marca"=> $_POST["id_marca"]); 
echo($respuesta=ModeloLineas::mdlIngresarLinea($datos));
}
else
{
echo ("error_preg_match");  
}
}
//actualizar linea
static public function editarLinea(){
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["linea"] )
&& preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/' , $_POST["clave"]) ) {        

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["linea"], "id_marca"=> $_POST["id_marca"],"id"=>$_POST["id"]); 
echo ($respuesta=ModeloLineas::mdlEditarLinea($datos));
}
else
{
echo ("error_preg_match");  
}
}
//Activar Desactivar marca

static public function activarLinea(){
$item1="activa";
$valor1=$_POST["activarLinea"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloLineas::mdlActualizarLinea($item1,$valor1,$item2,$valor2));
}

}


if(isset($_POST["action"])){

switch ($_POST["action"]) {
		case 'insert':
			$insLinea=new ControladorLineas();
			$insLinea->insertarLinea();
			break;
		case 'update':
			$upLinea=new ControladorLineas();
			$upLinea->editarLinea();
			break;
		case 'validate':
			$valLinea=new ControladorLineas();
			$valLinea->validarLinea();
			break;
		case 'activate':
			$activarLinea=new ControladorLineas();
			$activarLinea->activarLinea();
			break;
		case 'select':
			$selectLinea=new ControladorLineas();
			$selectLinea->ctrMostrarDatosLinea("id", $_POST["idLinea"]);
			break;
		case 'list':
			$llenarLinea=new ControladorLineas();
			$llenarLinea->ctrMostrarLineasActivas();
			break;
			case 'listCompra':
			$llenarLinea=new ControladorLineas();
			$llenarLinea->ctrMostrarLineasCompra();
			break;
			case 'listMaximo':
			$llenarLinea=new ControladorLineas();
			$llenarLinea->ctrMostrarLineasMaximo();
			break;
			case 'listPrecio':
			$llenarLinea=new ControladorLineas();
			$llenarLinea->ctrMostrarLineasPrecio();
			break;
		default:
		
			break;

}

}
