<?php
require_once "../controladores/moldes.controlador.php";
require_once "../controladores/prenda.controlador.php";
require_once "../controladores/generos.controlador.php";


class TablaMoldes{

public function mostrarMoldes(){
$item=null;
$valor=null;
$moldes=ControladorMoldes::CtrMostrarMoldes($item,$valor);

 $datosJson ='{
"data":[';
for($i=0; $i<count($moldes);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' id='datosMolde' class='btn btn-info btn-circle waves-effect waves-circle waves-float' idMolde='".$moldes[$i]["id"]."' data-toggle='modal' data-target='#modalAgregarMolde'><i class='material-icons'>create</i></button></div><div class='img-thumbnail'><button type='button' id='versionesMolde' class='btn btn-info btn-circle waves-effect waves-circle waves-float' idMolde='".$moldes[$i]["id"]."' data-toggle='modal' data-target='#modalVersiones'><i class='material-icons'>visibility</i></button></div>";
//ESTATUS
if($moldes[$i]["activo"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusMolde' checked idMolde='".$moldes[$i]["id"]."' estadoMolde='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusMolde' idMolde='".$moldes[$i]["id"]."' estadoMolde='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
}


$item="id";
$valor=$moldes[$i]["id_prenda"];
$prenda=ControladorPrenda::ctrMostrarPrenda($item,$valor);


//Tipo
$item="id";
$valor=$moldes[$i]["id_genero"];
$genero=ControladorGeneros::ctrMostrarGeneros($item,$valor);



$datosJson .= '[
"'. ($i+1).'",
"'.$moldes[$i]["clave"].'",
"'.$moldes[$i]["descripcion"].'",
"'.$prenda["descripcion"].'",
"'.$genero["descripcion"].'",
"'.$estatus.'",
"'.$botones.'"
],';
}
$datosJson=substr($datosJson, 0,-1);
$datosJson .=   ']
} ';
echo $datosJson ;
}


}

$activarMoldes=new TablaMoldes();
$activarMoldes->mostrarMoldes();