<?php

require_once "../modelos/prenda.modelo.php";

 class ControladorPrenda{
public function ctrMostrarPrenda($item,$valor){

$respuesta= ModeloPrenda::MdlMostrarPrenda($item,$valor);
return $respuesta;
	}
public function ctrMostrarPrendaActivas(){

$respuesta= ModeloPrenda::MdlMostrarPrendaActivas();
echo json_encode($respuesta);
	}

static public function ctrMostrarDatosPrenda($item,$valor){
$respuesta= ModeloPrenda::MdlMostrarPrenda($item,$valor);
echo json_encode($respuesta);
	}

public function insertarPrenda(){


$datos=array("id_categoria"=> $_POST["categoria"], "id_subcategoria"=> $_POST["subcategoria"]); 
echo($respuesta=ModeloPrenda::mdlIngresarPrenda($datos));
}


public function editarPrenda()
{

$datos=array("id_categoria"=> $_POST["categoria"], "id_subcategoria"=> $_POST["subcategoria"],"id"=>$_POST["id"]); 
echo ($respuesta=ModeloPrenda::mdlEditarPrenda($datos));


}
/*Validar no repetir tela*/

public function validarPrenda()
{
$datos=array("id_categoria"=> $_POST["id_categoria"],"id_subcategoria"=> $_POST["id_subcategoria"]); 
$respuesta=ModeloPrenda::mdlValidarPrenda($datos);
echo json_encode($respuesta);
}
//Activar Desactivar composicion

public function activarPrenda(){
$item1="activo";
$valor1=$_POST["activarPrenda"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloPrenda::mdlActualizarPrenda($item1,$valor1,$item2,$valor2));
}

}

if(isset($_POST["action"])){

switch ($_POST["action"]) {
		case 'insert':
			$insPrenda=new ControladorPrenda();
			$insPrenda->insertarPrenda();
			break;
		case 'update':
			$upPrenda=new ControladorPrenda();
			$upPrenda->editarPrenda();
			break;
		case 'validate':
			$valPrenda=new ControladorPrenda();
            $valPrenda->validarPrenda();
			break;
		case 'activate':
			$activarPrenda=new ControladorPrenda();
			$activarPrenda->activarPrenda();
			break;
		case 'select':
			$selectPrenda=new ControladorPrenda();
			$selectPrenda->ctrMostrarDatosPrenda("id", $_POST["idPrenda"]);
			break;
		case 'list':
			$listaPrenda=new ControladorPrenda();
			$listaPrenda->ctrMostrarPrendaActivas();
			break;
		default:
		
			break;

}

}



