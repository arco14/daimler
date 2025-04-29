<?php
require_once "../controladores/composiciones_telas.controlador.php";

class TablaComposiciones{
//ACTIVAR TABLA DE CATEGORIAS
public function mostrarTablaComposiciones(){
$item=null;
$valor=null;
$composiciones=ControladorComposiciones::CtrMostrarComposiciones($item,$valor);;  
 $datosJson ='{
"data":[';
for($i=0; $i<count($composiciones);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' class='btn btn-info btn-circle waves-effect waves-circle waves-float' id='datosComposicion' idComposicion='".$composiciones[$i]["id"]."' data-toggle='modal' data-target='#modalAgregarComposicion'><i class='material-icons'>create</i></button></div>";
//ESTATUS
if($composiciones[$i]["activa"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusComposicion' checked idComposicion='".$composiciones[$i]["id"]."' estadoComposicion='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusComposicion' idComposicion='".$composiciones[$i]["id"]."' estadoComposicion='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
}


$datosJson .= '[
"'.($i+1).'",
"'.$composiciones[$i]["clave"].'",
"'.$composiciones[$i]["descripcion"].'",
"'.$composiciones[$i]["lavado"].'",
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
$activarComposiciones=new TablaComposiciones();
$activarComposiciones->mostrarTablaComposiciones();