<?php

require_once "../modelos/categorias.modelo.php";



 class ControladorCategorias{
//MOSTRAR MARCAS TABLA COMPLETA
public function ctrMostrarCategorias($item,$valor){

$respuesta= ModeloCategorias::MdlMostrarCategorias($item,$valor);
return $respuesta;
	}
public function ctrMostrarCategoriasActivas(){
$respuesta=ModeloCategorias::MdlMostrarCategoriasActivas();
echo json_encode($respuesta);
	}

static public function ctrMostrarDatosCategoria($item,$valor){
$respuesta= ModeloCategorias::MdlMostrarCategorias($item,$valor);
echo json_encode($respuesta);
    }

public function insertarCategoria()
{
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["categoria"] )&& 
 preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/' , $_POST["clave"]) ) {

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["categoria"],"id_division"=>$_POST["id_division"]); 
echo($respuesta=ModeloCategorias::mdlIngresarCategoria($datos));
}
else
{
echo ("error_preg_match");	
}
}
public function editarCategoria()
{
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["categoria"] )&& 
 preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/' , $_POST["clave"]) ) {
		

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["categoria"],"id_division"=>$_POST["id_division"] ,"id"=>$_POST["id"]); 
echo ($respuesta=ModeloCategorias::mdlEditarCategoria($datos));
}
else
{
echo ("error_preg_match");	
}
}
/*Validar no repetir categoria*/

public function validarCategoria()
{
$datos=array("descripcion"=> $_POST["categoria"]); 
$respuesta=ModeloCategorias::mdlValidarCategoria($datos);

echo json_encode($respuesta);
}
//Activar Desactivar categoria
public $activarCategoria;
public $activarId;

public function activarCategoria(){
$item1="activa";
$valor1=$_POST["activarCategoria"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloCategorias::mdlActualizarCategoria($item1,$valor1,$item2,$valor2));
}



}

if(isset($_POST["action"])){

switch ($_POST["action"]) {	
		case 'insert':
			$insCategoria=new ControladorCategorias();
			$insCategoria->insertarCategoria();
			break;
		case 'update':
			$upCategoria=new ControladorCategorias();
			$upCategoria->editarCategoria();
			break;
		case 'validate':
			$valCategoria=new ControladorCategorias();
			$valCategoria->validarCategoria();
			break;
		case 'activate':
			$activarCategoria=new ControladorCategorias();
			$activarCategoria->activarCategoria();
			break;
		case 'select':
			$selectCategoria=new ControladorCategorias();
			$selectCategoria->ctrMostrarDatosCategoria("id", $_POST["idCategoria"]);
			break;
		case 'list':
			$llenarCategoria=new ControladorCategorias();
			$llenarCategoria->ctrMostrarCategoriasActivas();
			break;
		default:
		
			break;

}

}


