<?php
require_once "../controladores/lineas.controlador.php";

require_once "../controladores/marcas.controlador.php";


class TablaLineas{

//ACTIVAR TABLA DE MARCAS

public function mostrarTablaLineas(){
$item=null;
$valor=null;
$lineas=ControladorLineas::ctrMostrarLineas($item,$valor);
        
 $datosJson ='{
"data":[';
for($i=0; $i<count($lineas);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' class='btn btn-info btn-circle waves-effect waves-circle waves-float' id='datosLinea' idLinea='".$lineas[$i]["id"]."' data-toggle='modal' data-target='#modalAgregarLinea'><i class='material-icons'>create</i></button></div>";
//ESTATUS
if($lineas[$i]["activa"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusLinea' checked idLinea='".$lineas[$i]["id"]."' estadoLinea='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusLinea' idLinea='".$lineas[$i]["id"]."' estadoLinea='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
}
//Marca
$item="id";
$valor=$lineas[$i]["id_marca"];
$marca=ControladorMarcas::ctrMostrarMarcas($item,$valor);




$datosJson .= '[
"'. ($i+1) .'",
"'.$lineas[$i]["clave"] .'",
"'.$lineas[$i]["descripcion"] .'",
"'.$marca["descripcion"] .'",
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
//ACTIVAR TABLA DE LINEAS
$activarLineas=new TablaLineas();
$activarLineas->mostrarTablaLineas();