<?php
require_once "../controladores/tallas.controlador.php";
require_once "../controladores/division.controlador.php";


class TablaTallas{
//ACTIVAR TABLA DE CATEGORIAS
public function mostrarTablaTallas(){
$item=null;
$valor=null;
$tallas=ControladorTallas::CtrMostrarTallas($item,$valor);;  
 $datosJson ='{
"data":[';
for($i=0; $i<count($tallas);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' class='btn btn-info btn-circle waves-effect waves-circle waves-float' id='datosTalla' idTalla='".$tallas[$i]["id"]."' data-toggle='modal' data-target='#modalAgregarTalla'><i class='material-icons'>create</i></button></div>";
//ESTATUS
if($tallas[$i]["activa"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusTalla' checked idTalla='".$tallas[$i]["id"]."' estadoTalla='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusTalla' idTalla='".$tallas[$i]["id"]."' estadoTalla='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
}
//Division
$item="id";
$valor=$tallas[$i]["id_division"];
$division=ControladorDivisiones::ctrMostrarDivisiones($item,$valor);


$datosJson .= '[
"'. ($i+1) .'",
"'.$tallas[$i]["orden"].'",
"'.$tallas[$i]["clave"].'",
"'.$tallas[$i]["descripcion"] .'",
"'.$division["descripcion"] .'",
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
//ACTIVAR TABLA DE CATEGORIAS
$activarTallas=new TablaTallas();
$activarTallas->mostrarTablaTallas();