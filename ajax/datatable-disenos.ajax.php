<?php
require_once "../controladores/disenos_telas.controlador.php";

class TablaDisenos{
//ACTIVAR TABLA DE DISEÑOS
public function mostrarTablaDisenos(){
$item=null;
$valor=null;
$disenos=ControladorDisenos::CtrMostrarDisenos($item,$valor);;  
 $datosJson ='{
"data":[';
for($i=0; $i<count($disenos);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' class='btn btn-info btn-circle waves-effect waves-circle waves-float' id='datosDiseno' idDiseno='".$disenos[$i]["id"]."' data-toggle='modal' data-target='#modalAgregarDiseno'><i class='material-icons'>create</i></button></div>";
//ESTATUS
if($disenos[$i]["activo"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusDiseno' checked idDiseno='".$disenos[$i]["id"]."' estadoDiseno='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusDiseno' idDiseno='".$disenos[$i]["id"]."' estadoDiseno='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
}

$datosJson .= '[
"'.($i+1).'",
"'.$disenos[$i]["clave"].'",
"'.$disenos[$i]["descripcion"].'",
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
//ACTIVAR TABLA DE DISEÑOS
$activarDisenos=new TablaDisenos();
$activarDisenos->mostrarTablaDisenos();