<?php

require_once "../modelos/avios.modelo.php";

 class ControladorAvios{
public function ctrMostrarAvios($item,$valor){

$respuesta= ModeloAvios::MdlMostrarAvios($item,$valor);
return $respuesta;
	}
public function ctrMostrarAviosActivos(){

$respuesta= ModeloAvios::MdlMostrarAviosActivos();
echo json_encode($respuesta);
	}

static public function ctrMostrarDatosAvio($item,$valor){
$respuesta= ModeloAvios::MdlMostrarAvios($item,$valor);
echo json_encode($respuesta);
	}

public function insertarAvio(){

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["avio"], "precio"=> $_POST["precio"],"id_tipo"=> $_POST["id_tipo"],"id_proveedor"=> $_POST["id_proveedor"],"id_unidad"=> $_POST["id_unidad"]); 
echo($respuesta=ModeloAvios::mdlIngresarAvio($datos));
}

public function editarAvio()
{
	
$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["avio"], "precio"=> $_POST["precio"],"id_tipo"=> $_POST["id_tipo"],"id_proveedor"=> $_POST["id_proveedor"],"id_unidad"=> $_POST["id_unidad"],"id"=>$_POST["id"]); 
echo ($respuesta=ModeloAvios::mdlEditarAvio($datos));

}
/*Validar no repetir tela*/

public function validarAvio()
{
$datos=array("descripcion"=> $_POST["avio"]); 
$respuesta=ModeloAvios::mdlValidarAvio($datos);
echo json_encode($respuesta);
}
//Activar Desactivar composicion

public function activarAvio(){
$item1="activo";
$valor1=$_POST["activarAvio"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloAvios::mdlActualizarAvio($item1,$valor1,$item2,$valor2));
}

}

if(isset($_POST["action"])){

switch ($_POST["action"]) {
		case 'insert':
		$insAvio=new ControladorAvios();
		$insAvio->insertarAvio();
			break;
		case 'update':
			$upAvio=new ControladorAvios();
			$upAvio->editarAvio();
			break;
		case 'validate':
			$valAvio=new ControladorAvios();
            $valAvio->validarAvio();
			break;
		case 'activate':
			$activarAvio=new ControladorAvios();
			$activarAvio->activarAvio();
			break;
		case 'select':
			$selectAvio=new ControladorAvios();
			$selectAvio->ctrMostrarDatosAvio("id", $_POST["idAvio"]);
			break;
		case 'list':
			$listaAvio=new ControladorAvios();
			$listaAvio->ctrMostrarAviosActivos();
			break;
		default:
		
			break;

}

}



