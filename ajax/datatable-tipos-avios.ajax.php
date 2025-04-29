<?php
require_once "../controladores/tipos_avio.controlador.php";

class TablaTiposAvios{
//ACTIVAR TABLA DE CONFECCIONES
public function mostrarTablaTiposAvios(){
$item=null;
$valor=null;
$tipos=ControladorTipoAvios::ctrMostrarTiposAvios($item,$valor);;  
 $datosJson ='{
"data":[';
for($i=0; $i<count($tipos);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' class='btn btn-info btn-circle waves-effect waves-circle waves-float' id='datosTipoAvio' idTipoAvio='".$tipos[$i]["id"]."' data-toggle='modal' data-target='#modalAgregarTipoAvio'><i class='material-icons'>create</i></button></div>";
//ESTATUS
if($tipos[$i]["activo"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusTipoAvio' checked idTipoAvio='".$tipos[$i]["id"]."' estadoTipoAvio='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusTipoAvio' idTipoAvio='".$tipos[$i]["id"]."' estadoTipoAvio='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
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


$activarTipos=new TablaTiposAvios();
$activarTipos->mostrarTablaTiposAvios();