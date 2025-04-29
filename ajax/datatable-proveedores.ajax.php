<?php
require_once "../controladores/proveedores.controlador.php";

class TablaProveedores{
//ACTIVAR TABLA DE CONFECCIONES
public function mostrarTablaProveedores(){
$item=null;
$valor=null;
$proveedores=ControladorProveedores::CtrMostrarProveedores($item,$valor);;  
 $datosJson ='{
"data":[';
for($i=0; $i<count($proveedores);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' class='btn btn-info btn-circle waves-effect waves-circle waves-float' id='datosProveedor' idProveedor='".$proveedores[$i]["id"]."' data-toggle='modal' data-target='#modalAgregarProveedor'><i class='material-icons'>create</i></button></div>";
//ESTATUS
if($proveedores[$i]["activo"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusProveedor' checked idProveedor='".$proveedores[$i]["id"]."' estadoProveedor='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusProveedor' idProveedor='".$proveedores[$i]["id"]."' estadoProveedor='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
}



$datosJson .= '[
"'.($i+1).'",
"'.$proveedores[$i]["nombre"].'",
"'.$proveedores[$i]["contacto"].'",
"'.$proveedores[$i]["telefono"].'",
"'.$proveedores[$i]["email"].'",
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
$activarProveedores=new TablaProveedores();
$activarProveedores->mostrarTablaProveedores();