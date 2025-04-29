<?php
require_once "../controladores/avios.controlador.php";
require_once "../controladores/tipos_avio.controlador.php";
require_once "../controladores/unidades.controlador.php";
require_once "../controladores/proveedores.controlador.php";


class TablaAvios{
//ACTIVAR TABLA DE CATEGORIAS
public function mostrarAvios(){
$item=null;
$valor=null;
$avios=ControladorAvios::CtrMostrarAvios($item,$valor);

 $datosJson ='{
"data":[';
for($i=0; $i<count($avios);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' id='datosAvio' class='btn btn-info btn-circle waves-effect waves-circle waves-float' idAvio='".$avios[$i]["id"]."' data-toggle='modal' data-target='#modalAgregarAvio'><i class='material-icons'>create</i></button></div>";
//ESTATUS
if($avios[$i]["activo"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusAvio' checked idAvio='".$avios[$i]["id"]."' estadoAvio='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusAvio' idAvio='".$avios[$i]["id"]."' estadoAvio='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
}



$item="id";
$valor=$avios[$i]["id_tipo"];
$tipo=ControladorTipoAvios::ctrMostrarTiposAvios($item,$valor);


$item="id";
$valor=$avios[$i]["id_unidad"];
$unidad=ControladorUnidades::ctrMostrarUnidades($item,$valor);


//Proveedor
$item="id";
$valor=$avios[$i]["id_proveedor"];
$proveedor=ControladorProveedores::ctrMostrarProveedores($item,$valor);




$datosJson .= '[
"'. ($i+1).'",
"'.$avios[$i]["clave"].'",
"'.$avios[$i]["descripcion"].'",
"$'.number_format($avios[$i]["precio"],2).'",
"'.$tipo["descripcion"].'",
"'.$proveedor["nombre"].'",
"'.$unidad["descripcion"].'",
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


$activarAvios=new TablaAvios();
$activarAvios->mostrarAvios();


