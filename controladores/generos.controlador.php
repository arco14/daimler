<?php

require_once "../modelos/generos.modelo.php";
 class ControladorGeneros{
//MOSTRAR MARCAS TABLA COMPLETA
 public function ctrMostrarGeneros($item,$valor){

$respuesta= ModeloGeneros::MdlMostrarGeneros($item,$valor);
return $respuesta;
	}
	public function ctrMostrarGenerosActivos(){
$respuesta= ModeloGeneros::MdlMostrarGenerosActivos();
echo json_encode($respuesta);
	}

public function activarGenero(){
$item1="activo";
$valor1=$_POST["activarGenero"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloGeneros::mdlActualizarGenero($item1,$valor1,$item2,$valor2));
}

}


if(isset($_POST["action"])){

switch ($_POST["action"]) {
		case 'insert':
		$insAvio=new ControladorGrupoAvios();
		$insAvio->insertarGrupoAvio();
			break;
		
		case 'update':
			$upAvio=new ControladorAvios();
			$upAvio->editarAvio();
			break;
		case 'validate':
			$valGrupoAvio=new ControladorGrupoAvios();
            $valGrupoAvio->validarGrupoAvio();
			break;
		case 'activate':
			$activarGenero=new ControladorGeneros();
			$activarGenero->activarGenero();
			break;
		case 'select':
			$selectGrupoAvio=new ControladorGrupoAvios();
			$selectGrupoAvio->ctrMostrarDatosGrupoAvio("id", $_POST["idGrupoAvio"]);
			break;
		case 'list':
			$listaGenero=new ControladorGeneros();
			$listaGenero->ctrMostrarGenerosActivos();
			break;	
		default:
		
			break;

}

}

