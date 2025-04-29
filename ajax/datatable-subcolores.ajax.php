<?php
require_once "../controladores/subcolores_telas.controlador.php";

class TablaSubcolores{
//ACTIVAR TABLA DE CATEGORIAS
public function mostrarTablaSubcolores(){
$item=null;
$valor=null;
$subcolores=ControladorSubcolores::CtrMostrarSubcolores($item,$valor);;  
 $datosJson ='{
"data":[';
for($i=0; $i<count($subcolores);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' class='btn btn-info btn-circle waves-effect waves-circle waves-float' id='datosSubcolor' idSubcolor='".$subcolores[$i]["id"]."' data-toggle='modal' data-target='#modalEditarSubcolor'><i class='material-icons'>create</i></button></div>";
//ESTATUS
if($subcolores[$i]["activo"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusSubcolor' checked idSubcolor='".$subcolores[$i]["id"]."' estadoSubcolor='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusSubcolor' idSubcolor='".$subcolores[$i]["id"]."' estadoSubcolor='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
}


$datosJson .= '[
"'.($i+1).'",
"'.$subcolores[$i]["clave"].'",
"'.$subcolores[$i]["descripcion"].'",
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
$activarSubcolores=new TablaSubcolores();
$activarSubcolores->mostrarTablaSubcolores();