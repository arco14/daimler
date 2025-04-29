<?php

require_once "../modelos/prendas.modelo.php";

 class ControladorPrendas{
public function ctrMostrarPrendas($item,$valor){

$respuesta= ModeloPrendas::MdlMostrarPrendas($item,$valor);
return $respuesta;
	}
public function ctrMostrarPrendaActivas(){

$respuesta= ModeloPrenda::MdlMostrarPrendaActivas();
echo json_encode($respuesta);
	}

static public function ctrMostrarDatosPrenda($item,$valor){
$respuesta= ModeloPrendas::MdlMostrarPrendas($item,$valor);
echo json_encode($respuesta);
	}

public function insertarPrenda(){


$datos=array("id_molde"=> $_POST["idMolde"],"id_linea"=> $_POST["idLinea"],"id_tela"=> $_POST["idTela"],"id_contraste"=> $_POST["idContraste"],"id_talla"=> $_POST["idTalla"],"id_confeccion"=>$_POST["idConfeccion"],"id_grupo_avio"=>$_POST["idGrupoAvio"],"id_hilo"=>$_POST["idHilo"],"id_prenda"=>$_POST["idPrenda"]);
echo($respuesta=ModeloPrendas::mdlIngresarPrenda($datos));
}


public function editarPrenda(){

$datos=array("id_categoria"=> $_POST["categoria"], "id_subcategoria"=> $_POST["subcategoria"],"id"=>$_POST["id"]); 
echo ($respuesta=ModeloPrenda::mdlEditarPrenda($datos));


}
/*Validar no repetir tela*/

public function validarPrenda(){
$datos=array("id_molde"=> $_POST["idMolde"],"id_linea"=> $_POST["idLinea"],"id_tela"=> $_POST["idTela"],"id_contraste"=> $_POST["idContraste"],"id_talla"=> $_POST["idTalla"],"id_prenda"=> $_POST["idPrenda"]); 
$respuesta=ModeloPrendas::mdlValidarPrenda($datos);
echo json_encode($respuesta);
}


//Activar Desactivar composicion

public function activarPrenda(){
$item1="activo";
$valor1=$_POST["activarPrenda"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloPrendas::mdlActualizarPrenda($item1,$valor1,$item2,$valor2));
}

}

if(isset($_POST["action"])){

switch ($_POST["action"]) {
		case 'insert':
			$insPrenda=new ControladorPrendas();
			$insPrenda->insertarPrenda();
			break;
		case 'update':
			$upPrenda=new ControladorPrenda();
			$upPrenda->editarPrenda();
			break;
		case 'validate':
			$valPrenda=new ControladorPrendas();
            $valPrenda->validarPrenda();
			break;
		case 'activate':
			$activarPrenda=new ControladorPrendas();
			$activarPrenda->activarPrenda();
			break;
		case 'select':
			$selectPrenda=new ControladorPrendas();
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



