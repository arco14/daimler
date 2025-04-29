<?php
require_once "../controladores/hilos.controlador.php";

require_once "../controladores/proveedores.controlador.php";


class TablaHilos{

//ACTIVAR TABLA DE MARCAS

public function mostrarTablaHilos(){
$item=null;
$valor=null;
$hilos= ControladorHilos::ctrMostrarHilos($item,$valor);
        
 $datosJson ='{
"data":[';
for($i=0; $i<count($hilos);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' class='btn btn-info btn-circle waves-effect waves-circle waves-float' id='datosHilo' idHilo='".$hilos[$i]["id"]."' data-toggle='modal' data-target='#modalAgregarHilo'><i class='material-icons'>create</i></button></div>";
//ESTATUS
if($hilos[$i]["activo"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusHilo' checked idHilo='".$hilos[$i]["id"]."' estadoHilo='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusHilo' idHilo='".$hilos[$i]["id"]."' estadoHilo='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
}
//Marca
$item="id";
$valor=$hilos[$i]["id_proveedor"];
$proveedor=ControladorProveedores::ctrMostrarProveedores($item,$valor);




$datosJson .= '[
"'. ($i+1) .'",
"'.$hilos[$i]["clave"] .'",
"'.$hilos[$i]["color"] .'",
"'.$proveedor["nombre"] .'",
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
$activarHilos=new TablaHilos();
$activarHilos->mostrarTablaHilos();