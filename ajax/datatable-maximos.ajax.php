<?php
require_once "../controladores/maximos.controlador.php";

class TablaMaximos{
//Activar tabla marcas
public function mostrarTablaMaximos(){
$item=null;
$valor=null;
$maximos=ControladorMaximos::ctrMostrarMaximos($item,$valor);
        
 $datosJson ='{
"data":[';
for($i=0; $i<count($maximos);$i++){
//Acciones
$botones=  "<div class='img-thumbnail'><button type='button' class='btn btn-info btn-circle waves-effect waves-circle waves-float' id='datosMaximo' idMaximo='".$maximos[$i]["id"]."' data-toggle='modal' data-target='#modalAgregarMaximo'><i class='material-icons'>create</i></button></div>";
//Estatus
if($maximos[$i]["activo"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusMaximo' checked idMaximo='".$maximos[$i]["id"]."' estadoMaximo='0'><span class='lever switch-col-light-blue estatusMarca' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusMaximo' idMaximo='".$maximos[$i]["id"]."' estadoMaximo='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
}
$datosJson .= '[
"'. ($i+1) .'",
"'.$maximos[$i]["clave"] .'",
"'.$maximos[$i]["descripcion"] .'",
"'.$maximos[$i]["minimo"] .'",
"'.$maximos[$i]["maximo"] .'",
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
//Activar tabla marcas
$activarMaximos=new TablaMaximos();
$activarMaximos->mostrarTablaMaximos();