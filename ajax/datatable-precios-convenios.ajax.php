<?php
require_once "../controladores/precios.controlador.php";

class TablaPrecios{

public function mostrarTablaPrecios(){

$precios=ControladorPrecios::ctrMostrarPreciosConvenio(null,null);
        
 $datosJson ='{
"data":[';
for($i=0; $i<count($precios);$i++){



$botones=  "<div class='img-thumbnail'><button type='button' id='datosPrecioConvenio' class='btn btn-info btn-circle waves-effect waves-circle waves-float' idPrecio='".$precios[$i]["id"]."' data-toggle='modal' data-target='#modalAgregarPrecioConvenio'><i class='material-icons'>create</i></button><button type='button' class='btn btn-danger btn-circle waves-effect waves-circle waves-float eliminarPrecio'  idPrecio='".$precios[$i]["id"]."' ><i class='material-icons'>delete</i></button></div>";


$vigencia="<div class='form-line'><input type='date' required class='form-control vigenciaPrecioConvenio text-center' value='".$precios[$i]["vigencia"]. "' idPrecio='". $precios[$i]["id"]."' ></div>";

$datosJson .= '[
"'. ($i+1) .'",
"'.$precios[$i]["fecha"] .'",
"'.$precios[$i]["clave"] .'",
"'.$precios[$i]["descripcion"] .'",
"'.$precios[$i]["cliente"] .'",
"'.$precios[$i]["tipo"] .'",
"'.$vigencia.'",
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