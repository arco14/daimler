<?php
require_once "../controladores/precios.controlador.php";

class TablaPrecios{

public function mostrarTablaPrecios(){

$precios=ControladorPrecios::ctrMostrarPrecios(null,null);
        
 $datosJson ='{
"data":[';
for($i=0; $i<count($precios);$i++){

$precio_directo="<div class='form-line'><input type='number' min='20' required class='form-control precioDirectoUpdate editarPrecio text-center' idTipo='". $precios[$i]["id_tipo_producto"]."' value='".$precios[$i]["precio_directo"]. "' idPrecio='". $precios[$i]["id"]."' ></div>";

$precio_distribuidor="<div class='form-line'><input type='number' min='20' required class='form-control precioDistribuidorUpdate editarPrecio text-center' idTipo='". $precios[$i]["id_tipo_producto"]."' value='".$precios[$i]["precio_distribuidor"]. "' idPrecio='". $precios[$i]["id"]."' ></div>";


if($precios[$i]["lineal"])
{
	$lineal="<div class='switch'><label><input type='checkbox' class='linealPrecio editarPrecio' checked idPrecio='".$precios[$i]["id"]."' idTipo='". $precios[$i]["id_tipo_producto"]."' value='1'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$lineal="<div class='switch'><label><input type='checkbox' class='linealPrecio editarPrecio' idPrecio='".$precios[$i]["id"]."' idTipo='". $precios[$i]["id_tipo_producto"]."' value='0'><span class='lever switch-col-light-blue' ></span></label></div>";	
}

$botones=  "<div class='img-thumbnail'><button type='button' id='datosPrecio' class='btn btn-info btn-circle waves-effect waves-circle waves-float' idPrecio='".$precios[$i]["id"]."' data-toggle='modal' data-target='#modalAgregarPrecio'><i class='material-icons'>create</i></button></div>";


$vigencia="<div class='form-line'><input type='date' required class='form-control vigenciaPrecio text-center' value='".$precios[$i]["vigencia"]. "' idPrecio='". $precios[$i]["id"]."' ></div>";

$datosJson .= '[
"'. ($i+1) .'",
"'.$precios[$i]["fecha"] .'",
"'.$precios[$i]["clave"] .'",
"'.$precios[$i]["descripcion"] .'",
"'.$precios[$i]["tipo"] .'",
"'.$precio_directo.'",
"'.$precio_distribuidor.'",
"'.$vigencia.'",
"'.$lineal.'",
"'.$botones.'"

],';
}
$datosJson=substr($datosJson, 0,-1);
$datosJson .=   ']
} ';
echo $datosJson ;
}
}

$activarPrecios=new TablaPrecios();
$activarPrecios->mostrarTablaPrecios();