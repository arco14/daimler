<?php
session_start();
require_once "../modelos/movimientos_almacen.modelo.php";

 class ControladorMovimientos{
public function ctrMostrarMovimientos($item,$valor){

$respuesta= ModeloMovimientos::MdlMostrarMovimientos($item,$valor);
return $respuesta;
	}
public function ctrMostrarTiposActivos(){

$respuesta= ModeloTipos::MdlMostrarTiposActivos();
echo json_encode($respuesta);
	}

static public function ctrMostrarDatosTipoAvio($item,$valor){
$respuesta= ModeloTiposAvios::MdlMostrarTiposAvios($item,$valor);
echo json_encode($respuesta);
	}

public function insertarMovimiento(){

$datos=array("id_almacen"=> $_POST["idAlmacen"], "id_tipo"=> $_POST["idTipo"], "id_proveedor"=> $_POST["idProveedor"],"id_usuario"=>1,"documento"=>$_POST["documento"],"id_pedido"=>0,"surtidor"=>""); 
echo json_encode($respuesta=ModeloMovimientos::mdlIngresarMovimiento($datos));

}
public function editarTipoAvio()
{
if(preg_match('/^[a-zA-Z-,ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["tipo"] )
&& preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/' , $_POST["clave"]) ) {		

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["tipo"],"id"=>$_POST["id"]); 
echo ($respuesta=ModeloTiposAvios::mdlEditarTipoAvio($datos));
}
else
{
echo ("error");	
}
}
/*Validar no repetir tela*/

public function validarTipoAvio()
{
$datos=array("descripcion"=> $_POST["tipo"],"clave"=>$_POST["clave"]); 
$respuesta=ModeloTiposAvios::mdlValidarTipoAvio($datos);
echo json_encode($respuesta);
}
//Activar Desactivar composicion

public function activarTipoActivo(){
$item1="activo";
$valor1=$_POST["activarTipoAvio"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloTiposAvios::mdlActualizarTipoAvio($item1,$valor1,$item2,$valor2));
}

}

if(isset($_POST["action"])){

switch ($_POST["action"]) {
case 'insert':
		$insMovimiento=new ControladorMovimientos();
		$insMovimiento->insertarMovimiento();
			break;
		case 'update':
			$upConfeccion=new ControladorTipoAvios();
			$upConfeccion->editarTipoAvio();
			break;
		case 'validate':
			$valTipo=new ControladorTipoAvios();
            $valTipo->validarTipoAvio();
			break;
		case 'activate':
			$activarConfeccion=new ControladorTipoAvios();
			$activarConfeccion->activarTipoActivo();
			break;
		case 'select':
			$selectTipo=new ControladorTipoAvios();
			$selectTipo->ctrMostrarDatosTipoAvio("id", $_POST["idTipoAvio"]);
			break;
		case 'list':
			$listaTipo=new ControladorTipoMovimientos();
			$listaTipo->ctrMostrarTiposActivos();
			break;
		default:
		
			break;

}

}



