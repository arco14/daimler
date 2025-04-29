<?php

require_once "../modelos/subcategorias.modelo.php";

 class ControladorSubcategorias{

static public function ctrMostrarSubcategorias($item,$valor){
$respuesta= ModeloSubcategorias::MdlMostrarSubcategorias($item,$valor);
return $respuesta;
	}

static public function ctrMostrarDatosSubcategoria($item,$valor){
$respuesta= ModeloSubcategorias::MdlMostrarSubcategorias($item,$valor);
echo json_encode($respuesta);
    }
static public function MostrarSubcategoriasActivas(){
$respuesta= ModeloSubcategorias::MdlMostrarSubcategoriasActivas();
echo json_encode($respuesta);
	}
	
//Validar no repetir subcategoria
static public function validarSubcategoria(){
$datos=array("descripcion"=> $_POST["subcategoria"]); 
$respuesta=ModeloSubcategorias::mdlValidarSubcategoria($datos);
echo json_encode($respuesta);
}
//insertar subcategoria
static public function insertarSubcategoria(){
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["clave"]) &&
preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["subcategoria"])) {

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["subcategoria"]); 
echo($respuesta=ModeloSubcategorias::mdlIngresarSubcategoria($datos));
}
else
{
echo ("error_preg_match");  
}
}
//actualizar subcategoria
static public function editarSubcategoria(){
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["subcategoria"] )
&& preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/' , $_POST["clave"]) ) {        

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["subcategoria"],"id"=>$_POST["id"]); 
echo ($respuesta=ModeloSubcategorias::mdlEditarSubcategoria($datos));
}
else
{
echo ("error_preg_match");  
}
}
//Activar Desactivar subcategoria

static public function activarSubcategoria(){
$item1="activa";
$valor1=$_POST["activarSubcategoria"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloSubcategorias::mdlActualizarSubcategoria($item1,$valor1,$item2,$valor2));
}
}



if(isset($_POST["action"])){

switch ($_POST["action"]) {	
		case 'insert':
			$insSubcategoria=new ControladorSubcategorias();
			$insSubcategoria->insertarSubcategoria();
			break;
		case 'update':
			$actSubcategoria=new ControladorSubcategorias();
			$actSubcategoria->editarSubcategoria();
			break;
		case 'validate':
			$valSubcategoria=new ControladorSubcategorias();
			$valSubcategoria->validarSubcategoria();
			break;
		case 'activate':
			$activarSubcategoria=new ControladorSubcategorias();
			$activarSubcategoria->activarSubcategoria();
			break;
		case 'select':
			$selectSubcategoria=new ControladorSubcategorias();
			$selectSubcategoria->ctrMostrarDatosSubcategoria("id", $_POST["idSubcategoria"]);
			break;
		case 'list':
			$llenarSubcategoria=new ControladorSubcategorias();
			$llenarSubcategoria->MostrarSubcategoriasActivas();
			break;
		default:
		
			break;

}

}


