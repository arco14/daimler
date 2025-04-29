<?php
require_once "../controladores/tipos_telas.controlador.php";

class TablaTipos{
//ACTIVAR TABLA DE TIPOS
public function mostrarTablaTipos(){
$item=null;
$valor=null;
$tipos=ControladorTipos::CtrMostrarTipos($item,$valor);;  
 $datosJson ='{
"data":[';
for($i=0; $i<count($tipos);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' class='btn btn-info btn-circle waves-effect waves-circle waves-float' id='datosTipo' idTipo='".$tipos[$i]["id"]."' data-toggle='modal' data-target='#modalAgregarTipo'><i class='material-icons'>create</i></button></div>";
//ESTATUS
if($tipos[$i]["activo"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusTipo' checked idTipo='".$tipos[$i]["id"]."' estadoTipo='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusTipo' idTipo='".$tipos[$i]["id"]."' estadoTipo='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
}


$datosJson .= '[
"'.($i+1).'",
"'.$tipos[$i]["clave"].'",
"'.$tipos[$i]["descripcion"].'",
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
//ACTIVAR TABLA DE TIPOS
$activarTipos=new TablaTipos();
$activarTipos->mostrarTablaTipos();