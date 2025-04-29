<?php

require_once "../modelos/grupos_avio.modelo.php";

 class ControladorGrupoAvios{
public function ctrMostrarGrupoAvios($item,$valor){

$respuesta= ModeloGrupoAvios::MdlMostrarGrupoAvios($item,$valor);
return $respuesta;
	}
public function ctrMostrarGruposAviosActivos(){

$respuesta= ModeloGrupoAvios::MdlMostrarGruposAviosActivos($_POST["idPrenda"]);
echo json_encode($respuesta);
	}

static public function ctrMostrarDatosGrupoAvio($item,$valor){
$respuesta= ModeloGrupoAvios::MdlMostrarGrupoAvios($item,$valor);
echo json_encode($respuesta);
	}
static public function ctrMostrarDatosDetalleGrupo($item,$valor){
$respuesta= ModeloGrupoAvios::MdlMostrarDetalleGrupo($item,$valor);
echo json_encode($respuesta);
	}

public function insertarGrupoAvio(){

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["grupo"],"id_prenda"=> $_POST["id_prenda"]); 
echo($respuesta=ModeloGrupoAvios::mdlIngresarGrupoAvio($datos));
}

public function insertarDetalleGrupo(){

$datos=array("id_avio"=> $_POST["id_avio"], "id_grupo"=> $_POST["id_grupo"],"cantidad"=> $_POST["cantidad"],"propio"=> $_POST["propio"]); 
echo json_encode($respuesta=ModeloGrupoAvios::mdlIngresarDetalleGrupo($datos));
}
public function eliminarDetalleGrupo(){

$datos=array("id"=> $_POST["idDetalle"]); 
echo ($respuesta=ModeloGrupoAvios::mdlEliminarDetalleGrupo($datos));
}

public function editarGrupoAvio()
{
	
$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["grupo"],"id_prenda"=>$_POST["id_prenda"],"id"=>$_POST["id"]); 
echo ($respuesta=ModeloGrupoAvios::mdlEditarGrupoAvio($datos));

}
/*Validar no repetir tela*/

public function validarGrupoAvio()
{
$datos=array("descripcion"=> $_POST["grupo"]); 
$respuesta=ModeloGrupoAvios::mdlValidarGrupoAvio($datos);
echo json_encode($respuesta);
}
public function validarDetalleGrupo()
{
$datos=array("id_avio"=> $_POST["id_avio"],"id_grupo"=> $_POST["id_grupo"]); 
$respuesta=ModeloGrupoAvios::mdlValidarDetalleGrupo($datos);
echo json_encode($respuesta);
}
//Activar Desactivar composicion

public function activarGrupoAvio(){
$item1="activo";
$valor1=$_POST["activarGrupoAvio"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloGrupoAvios::mdlActualizarGrupoAvio($item1,$valor1,$item2,$valor2));
}

}

if(isset($_POST["action"])){

switch ($_POST["action"]) {
		case 'insert':
		$insAvio=new ControladorGrupoAvios();
		$insAvio->insertarGrupoAvio();
			break;
			case 'insertDetalle':
		$insDetalle=new ControladorGrupoAvios();
		$insDetalle->insertarDetalleGrupo();
			break;
			
		case 'update':
			$upAvio=new ControladorGrupoAvios();
			$upAvio->editarGrupoAvio();
			break;
		case 'validate':
			$valGrupoAvio=new ControladorGrupoAvios();
            $valGrupoAvio->validarGrupoAvio();
			break;
		case 'activate':
			$activarAvio=new ControladorGrupoAvios();
			$activarAvio->activarGrupoAvio();
			break;
		case 'select':
			$selectGrupoAvio=new ControladorGrupoAvios();
			$selectGrupoAvio->ctrMostrarDatosGrupoAvio("id", $_POST["idGrupoAvio"]);
			break;
		case 'selectDetalle':
			$selectDetalleGrupo=new ControladorGrupoAvios();
			$selectDetalleGrupo->ctrMostrarDatosDetalleGrupo("id", $_POST["idGrupoAvio"]);
			break;
		case 'list':
			$listaAvio=new ControladorGrupoAvios();
			$listaAvio->ctrMostrarGruposAviosActivos();
			break;
		case 'validateDetalle':
			$valDetalleGrupo=new ControladorGrupoAvios();
			$valDetalleGrupo->validarDetalleGrupo();
			break;
			case 'deleteDetalle':
			$delDetalle=new ControladorGrupoAvios();
			$delDetalle->eliminarDetalleGrupo();
			break;
			
		default:
		
			break;

}

}



