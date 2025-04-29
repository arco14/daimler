<?php
require_once "../controladores/telas.controlador.php";



class TablaTelas{
//ACTIVAR TABLA DE CATEGORIAS
public function mostrarTablaTelas(){
$item=null;
$valor=null;
$telas=ControladorTelas::CtrMostrarTelas($item,$valor);;  
 $datosJson ='{
"data":[';
for($i=0; $i<count($telas);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' class='btn btn-info btn-circle waves-effect waves-circle waves-float' id='datosTela' idTela='".$telas[$i]["id"]."' data-toggle='modal' data-target='#modalAgregarTela'><i class='material-icons'>create</i></button></div>";
//ESTATUS
if($telas[$i]["activo"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusTela' checked idTela='".$telas[$i]["id"]."' estadoTela='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusTela' idTela='".$telas[$i]["id"]."' estadoTela='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
}
//Muestra
$muestra="<a href='".$telas[$i]["muestra"]."'><img class='img-responsive img-thumbnail' src='".$telas[$i]["muestra"]."' width='60px'></a>";




$datosJson .= '[
"'.($i+1).'",
"'.$muestra.'",
"'.$telas[$i]["sku"].'",
"'.$telas[$i]["tela"].'",
"'.$telas[$i]["descripcion"].'",
"'.$telas[$i]["tipo"].'",
"'.$telas[$i]["color"].'",
"'.$telas[$i]["diseno"].'",
"'.$telas[$i]["unidad"].'",
"'.$telas[$i]["composicion"].'",
"'.$telas[$i]["oz"].'",
"'.$telas[$i]["ancho"].'",
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
//ACTIVAR TABLA DE SUBCOLORES
$activarTelas=new TablaTelas();
$activarTelas->mostrarTablaTelas();