<?php

require_once "../modelos/tallas.modelo.php";



 class ControladorTallas{
//MOSTRAR MARCAS TABLA COMPLETA
static public function ctrMostrarTallas($item,$valor){

$respuesta= ModeloTallas::MdlMostrarTallas($item,$valor);
return $respuesta;
	}
static public function ctrMostrarDatosTalla($item,$valor){
$respuesta= ModeloTallas::MdlMostrarTallas($item,$valor);
echo json_encode($respuesta);
}
static public function ctrMostrarTallasActivas(){
	$datos=array("id_prenda"=>$_POST["idPrenda"],"id_genero"=>$_POST["idGenero"]);
$respuesta= ModeloTallas::MdlMostrarTallasActivas($datos);
echo json_encode($respuesta);
}

static public function insertarTalla()
{
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["talla"] )&& 
 preg_match('/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$/' , $_POST["clave"]) ) {

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["talla"], "orden"=>$_POST["orden"], "id_division"=>$_POST["id_division"]); 
echo($respuesta=ModeloTallas::mdlIngresarTalla($datos));
}
else
{
echo ("error");	
}
}
static public function editarTalla()
{
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["talla"] )&& 
 preg_match('/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$/' , $_POST["clave"]) ) {
		
$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["talla"],"id_division"=> $_POST["id_division"] ,"orden"=> $_POST["orden"],"id"=>$_POST["id"]); 
echo ($respuesta=ModeloTallas::mdlEditarTalla($datos));
}
else
{
echo ("error");	
}
}


static public function validarTalla()
{
$datos=array("descripcion"=> $_POST["talla"]); 
$respuesta=ModeloTallas::mdlValidarTallas($datos);

echo json_encode($respuesta);
}
//Activar Desactivar categoria
public $activarCategoria;
public $activarId;

public function activarTalla(){
$item1="activa";
$valor1=$_POST["activarTalla"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloTallas::mdlActualizarTalla($item1,$valor1,$item2,$valor2));
}



}


if(isset($_POST["action"])){

switch ($_POST["action"]) {
		case 'insert':
			$insTalla=new ControladorTallas();
			$insTalla->insertarTalla();
			break;
		case 'update':
			$upTalla=new ControladorTallas();
			$upTalla->editarTalla();
			break;
		case 'validate':
			$valTallas=new ControladorTallas();
			$valTallas->validarTalla();
			break;
		case 'activate':
			$activarTalla=new ControladorTallas();
			$activarTalla->activarTalla();
			break;
		case 'select':
			$selectTalla=new ControladorTallas();
			$selectTalla->ctrMostrarDatosTalla("id", $_POST["idTalla"]);
			break;
		case 'list':
			$llenarTalla=new ControladorTallas();
			$llenarTalla->ctrMostrarTallasActivas();
			break;
		default:
		
			break;

}

}





