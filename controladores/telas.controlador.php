<?php

require_once "../modelos/telas.modelo.php";

 class ControladorTelas{
static public function ctrMostrarTelas($item,$valor){
$respuesta= ModeloTelas::MdlMostrarTelas($item,$valor);
return $respuesta;
}

static public function ctrMostrarDatosTela($item,$valor){
$respuesta= ModeloTelas::MdlMostrarTelas($item,$valor);
echo json_encode($respuesta);
}

static public function ctrMostrarTelasActivas(){
 $respuesta= ModeloTelas::mdlMostrarTelasActivas();
 echo json_encode($respuesta);
}
static public function ctrMostrarContrastesActivos(){
 $respuesta= ModeloTelas::mdlMostrarContrastesActivos($_POST["idTela"]);
 echo json_encode($respuesta);
}


static public function insertarTela(){


if ($_POST["muestraActual"] != ""){
$ruta="../vistas/img/telas/tela.jpg";

}else
{
	$ruta=$_POST["muestraActual"];
}


if(isset($_FILES["muestra"]["tmp_name"])){

list($ancho,$alto)= getimagesize($_FILES["muestra"]["tmp_name"]);
$nuevoAncho=500;
$nuevoAlto=500;



$directorio= "../vistas/img/telas/". $_POST["clave"];
if (!file_exists($directorio)) {
    mkdir($directorio,0755);
}


if($_FILES["muestra"]["type"]=="image/jpeg"){

$aleatorio=mt_rand(100,999);

$ruta="../vistas/img/telas/". $_POST["clave"]."/". $aleatorio.".jpg";
$origen= imagecreatefromjpeg($_FILES["muestra"]["tmp_name"]);
$destino=imagecreatetruecolor($nuevoAncho, $nuevoAlto);

imagecopyresized($destino, $origen, 0, 0, 0, 0, $nuevoAncho, $nuevoAlto, $ancho, $alto);
imagejpeg($destino,$ruta);

}
if($_FILES["muestra"]["type"]=="image/png"){

$aleatorio=mt_rand(100,999);

$ruta="../vistas/img/telas/". $_POST["clave"]."/". $aleatorio.".png";
$origen= imagecreatefrompng($_FILES["muestra"]["tmp_name"]);
$destino=imagecreatetruecolor($nuevoAncho, $nuevoAlto);

imagecopyresized($destino, $origen, 0, 0, 0, 0, $nuevoAncho, $nuevoAlto, $ancho, $alto);
imagepng($destino,$ruta);

}
}

$datos=array("id"=>$_POST["id"],"clave"=> $_POST["clave"], "descripcion"=> $_POST["descripcion"],"tela"=>$_POST["tela"] , "id_tipo"=> $_POST["id_tipo"],"id_color"=> $_POST["id_color"],"id_diseno"=> $_POST["id_diseno"],"id_unidad"=> $_POST["id_unidad"],"id_composicion"=> $_POST["id_composicion"],"ancho"=> $_POST["ancho"], "muestra"=>substr($ruta,3),"oz"=>$_POST["oz"]); 
echo($respuesta=ModeloTelas::mdlIngresarTela($datos));


}



static public function editarTela(){
$ruta=$_POST["muestraActual"];
if(isset($_FILES["editarMuestra"]["tmp_name"]) && !empty($_FILES["editarMuestra"]["tmp_name"])){



list($ancho,$alto)= getimagesize($_FILES["editarMuestra"]["tmp_name"]);
$nuevoAncho=500;
$nuevoAlto=500;


$directorio= "vistas/img/telas/". $_POST["editarClaveTela"];

If(!empty($_POST["muestraActual"])){
	unlink($_POST["muestraActual"]);

}else
{
	mkdir($directorio,0755);
}


if($_FILES["editarMuestra"]["type"]=="image/jpeg"){

$aleatorio=mt_rand(100,999);

$ruta="vistas/img/telas/". $_POST["editarClaveTela"]."/". $aleatorio.".jpg";
$origen= imagecreatefromjpeg($_FILES["editarMuestra"]["tmp_name"]);
$destino=imagecreatetruecolor($nuevoAncho, $nuevoAlto);

imagecopyresized($destino, $origen, 0, 0, 0, 0, $nuevoAncho, $nuevoAlto, $ancho, $alto);
imagejpeg($destino,$ruta);

}
if($_FILES["editarMuestra"]["type"]=="image/png"){

$aleatorio=mt_rand(100,999);

$ruta="vistas/img/telas/". $_POST["editarClaveTela"]."/". $aleatorio.".png";
$origen= imagecreatefrompng($_FILES["editarMuestra"]["tmp_name"]);
$destino=imagecreatetruecolor($nuevoAncho, $nuevoAlto);

imagecopyresized($destino, $origen, 0, 0, 0, 0, $nuevoAncho, $nuevoAlto, $ancho, $alto);
imagepng($destino,$ruta);

}



}


	
$datos=array("clave"=> $_POST["editarClaveTela"], "descripcion"=> $_POST["editarTela"],"id_color"=> $_POST["editarColor"] ,"id_tipo"=> $_POST["editarTipo"],"id_diseno"=> $_POST["editarDiseno"],"id_tipo"=> $_POST["editarTipo"],"id_unidad"=> $_POST["editarUnidad"],"id_composicion"=> $_POST["editarComposicion"],"ancho"=> $_POST["editarAncho"],"oz"=> $_POST["editarOz"],"muestra"=> $ruta,"id"=>$_POST["id"]); 
echo ($respuesta=ModeloTelas::mdlEditarTela($datos));

}
/*Validar no repetir tela*/

static public function validarTela()
{
$datos=array("descripcion"=> $_POST["validarTela"], "clave"=> $_POST["validarClaveTela"]); 
$respuesta=ModeloTelas::mdlValidarTela($datos);
echo json_encode($respuesta);
}
//Activar Desactivar composicion

public function activarTela(){
$item1="activa";
$valor1=$_POST["activarTela"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloTelas::mdlActualizarTela($item1,$valor1,$item2,$valor2));
}

}


if(isset($_POST["action"])){

switch ($_POST["action"]) {
		case 'insert':
			$insTela=new ControladorTelas();
			$insTela->insertarTela();
			break;
		case 'update':
			$upTela=new ControladorTelas();
			$upTela->editarTela();
			break;
		case 'validate':
			$valTela=new ControladorTelas();
			$valTela->validarTela();
			break;
		case 'activate':
			$activarTela=new ControladorTelas();
			$activarTela->activarTela();
			break;
		case 'select':
			$selectTela=new ControladorTelas();
			$selectTela->ctrMostrarDatosTela("id", $_POST["idTela"]);
			break;
		case 'list':
			$listaTela=new ControladorTelas();
			$listaTela->ctrMostrarTelasActivas();
			break;
		case 'listContraste':
			$listaContraste=new ControladorTelas();
			$listaContraste->ctrMostrarContrastesActivos();
			break;
		default:
		
			break;

}

}
