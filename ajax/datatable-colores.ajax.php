<?php
require_once "../controladores/colores_telas.controlador.php";
require_once "../controladores/subcolores_telas.controlador.php";

class TablaColores{
//ACTIVAR TABLA DE CATEGORIAS
public function mostrarTablaColores(){
$item=null;
$valor=null;
$colores=ControladorColores::CtrMostrarColores($item,$valor);;  
 $datosJson ='{
"data":[';
for($i=0; $i<count($colores);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' class='btn btn-info btn-circle waves-effect waves-circle waves-float' id='datosColor' idColor='".$colores[$i]["id"]."' data-toggle='modal' data-target='#modalAgregarColor'><i class='material-icons'>create</i></button></div>";
//ESTATUS
if($colores[$i]["activo"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusColor' checked idColor='".$colores[$i]["id"]."' estadoColor='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusColor' idColor='".$colores[$i]["id"]."' estadoColor='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
}


$datosJson .= '[
"'.($i+1).'",
"'.$colores[$i]["clave"].'",
"'.$colores[$i]["descripcion"].'",
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
$activarColores=new TablaColores();
$activarColores->mostrarTablaColores();