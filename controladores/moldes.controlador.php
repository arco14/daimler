<?php

require_once "../modelos/moldes.modelo.php";

 class ControladorMoldes{

static public function ctrMostrarMoldes($item,$valor){
$respuesta= ModeloMoldes::MdlMostrarMoldes($item,$valor);
return $respuesta;
	}

static public function ctrMostrarDatosMolde($item,$valor){
$respuesta= ModeloMoldes::MdlMostrarMoldes($item,$valor);
echo json_encode($respuesta);
	}
	static public function ctrMostrarMoldesActivos(){
$datos=array("id_genero"=>$_POST["idGenero"],"id_prenda"=>$_POST["idPrenda"]);
$respuesta= ModeloMoldes::MdlMostrarMoldesActivos($datos);
echo json_encode($respuesta);
	}
	static public function ctrMostrarVersionesMolde($item,$valor){
$respuesta= ModeloMoldes::MdlMostrarVersionesMolde($item,$valor);
return $respuesta;
	}


	
static public function insertarMolde(){
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["descripcion"])) {

$archivo="";
$zip="";
if(isset($_FILES["archivo"]["tmp_name"])){


$directorio= "../vistas/documentos/moldes/". $_POST["clave"];

if (!file_exists($directorio)) {
    mkdir($directorio,0755);
}


$archivo="../vistas/documentos/moldes/". $_POST["clave"]."/". $_POST["clave"]."_VERSION_". $_POST["version"].".pdf";

move_uploaded_file($_FILES["archivo"]["tmp_name"],$archivo);
$archivo="vistas/documentos/moldes/". $_POST["clave"]."/". $_POST["clave"]."_VERSION_". $_POST["version"].".pdf";

}
if(isset($_FILES["zip"]["tmp_name"])){
$zip="../vistas/documentos/moldes/". $_POST["clave"]."/". $_POST["clave"]."_VERSION_".$_POST["version"].".zip";

move_uploaded_file($_FILES["zip"]["tmp_name"],$zip);
$zip="vistas/documentos/moldes/". $_POST["clave"]."/". $_POST["clave"]."_VERSION_". $_POST["version"].".zip";


}


$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["descripcion"], "id_prenda"=> $_POST["id_prenda"],"id_genero"=> $_POST["id_genero"],"consumo_principal"=> $_POST["consumo_principal"],"ancho_principal"=> $_POST["ancho_principal"],"consumo_contraste"=> $_POST["consumo_contraste"],"ancho_contraste"=> $_POST["ancho_contraste"],"fecha_version"=> $_POST["fecha_version"],"version"=> $_POST["version"],"observaciones_version"=> $_POST["observaciones_version"],"archivo_version"=>$archivo,"zip_version"=>$zip); 



echo($respuesta=ModeloMoldes::mdlIngresarMolde($datos));


}
else
{
echo ("error_preg_match");	
}
}

static public function insertarVersionMolde(){


$archivo="";
if(isset($_FILES["archivo"]["tmp_name"])){


$directorio= "../vistas/documentos/moldes/". $_POST["clave"];

if (!file_exists($directorio)) {
    mkdir($directorio,0755);
}


$archivo="../vistas/documentos/moldes/". $_POST["clave"]."/". $_POST["clave"]."_VERSION_". $_POST["version"].".pdf";
move_uploaded_file($_FILES["archivo"]["tmp_name"],$archivo);
$archivo="vistas/documentos/moldes/". $_POST["clave"]."/". $_POST["clave"]."_VERSION_". $_POST["version"].".pdf";


}



if(isset($_FILES["zip"]["tmp_name"])){




$zip="../vistas/documentos/moldes/". $_POST["clave"]."/". $_POST["clave"]."_VERSION_".$_POST["version"].".zip";
move_uploaded_file($_FILES["zip"]["tmp_name"],$zip);
$zip="vistas/documentos/moldes/". $_POST["clave"]."/". $_POST["clave"]."_VERSION_". $_POST["version"].".zip";


}

$datos=array("fecha_version"=> $_POST["fecha_version"],"version"=> $_POST["version"],"observaciones_version"=> $_POST["observaciones_version"],"archivo_version"=>$archivo,"zip_version"=>$zip,"id_molde"=>$_POST["id_molde"]); 



echo($respuesta=ModeloMoldes::mdlIngresarVersionMolde($datos));


}



static public function editarMolde(){
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["descripcion"] ) ) {		

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["descripcion"], "id_prenda"=> $_POST["id_prenda"],"id_genero"=> $_POST["id_genero"],"consumo_principal"=> $_POST["consumo_principal"],"ancho_principal"=> $_POST["ancho_principal"],"consumo_contraste"=> $_POST["consumo_contraste"],"ancho_contraste"=> $_POST["ancho_contraste"],"id"=>$_POST["id"]); 
echo ($respuesta=ModeloMoldes::mdlEditarMolde($datos));
}
else
{
echo ("error_preg_match");	
}
}

static public function validarMolde(){
$datos=array("clave"=> $_POST["clave"]); 
$respuesta=ModeloMoldes::mdlValidarMolde($datos);
echo json_encode($respuesta);
}

static public function activarMolde(){
$item1="activo";
$valor1=$_POST["activarMolde"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloMoldes::mdlActualizarMolde($item1,$valor1,$item2,$valor2));
}

}


if(isset($_POST["action"])){

switch ($_POST["action"]) {
		case 'insert':
			$insMolde=new ControladorMoldes();
			$insMolde->insertarMolde();
			break;
		case 'insertVersion':
			$insVersion=new ControladorMoldes();
			$insVersion->insertarVersionMolde();
			break;
		case 'update':
			$upMolde=new ControladorMoldes();
			$upMolde->editarMolde();
			break;
		case 'validate':
			$valMolde=new ControladorMoldes();
			$valMolde->validarMolde();
			break;
		case 'activate':
			$activarMolde=new ControladorMoldes();
			$activarMolde->activarMolde();
			break;
		case 'select':
			$selectMolde=new ControladorMoldes();
			$selectMolde->ctrMostrarDatosMolde("id", $_POST["idMolde"]);
			break;
		case 'selectVersiones':
			$selectVersiones=new ControladorMoldes();
			$selectVersiones->ctrMostrarVersionesMolde("id", $_POST["idMolde"]);
			break;
		case 'list':
			$llenarMoldes=new ControladorMoldes();
			$llenarMoldes->ctrMostrarMoldesActivos();
			break;
		
		default:
		
			break;

}

}






