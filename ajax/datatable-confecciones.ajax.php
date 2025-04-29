<?php
require_once "../controladores/confecciones.controlador.php";

class TablaConfecciones{
//ACTIVAR TABLA DE CONFECCIONES
public function mostrarTablaConfecciones(){
$item=null;
$valor=null;
$confecciones=ControladorConfecciones::CtrMostrarConfecciones($item,$valor);;  
 $datosJson ='{
"data":[';
for($i=0; $i<count($confecciones);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' class='btn btn-info btn-circle waves-effect waves-circle waves-float' id='datosConfeccion' idConfeccion='".$confecciones[$i]["id"]."' data-toggle='modal' data-target='#modalAgregarConfeccion'><i class='material-icons'>create</i></button></div>";
//ESTATUS
if($confecciones[$i]["activo"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusConfeccion' checked idConfeccion='".$confecciones[$i]["id"]."' estadoConfeccion='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusConfeccion' idConfeccion='".$confecciones[$i]["id"]."' estadoConfeccion='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
}


$datosJson .= '[
"'.($i+1).'",
"'.$confecciones[$i]["clave"].'",
"'.$confecciones[$i]["descripcion"].'",
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
$activarConfecciones=new TablaConfecciones();
$activarConfecciones->mostrarTablaConfecciones();