<?php
require_once "../controladores/descuentos.controlador.php";

class TablaDescuentos{


public function mostrarTablaDescuentos(){

$descuentos=ControladorDescuentos::ctrMostrarDescuentos(null,null);
        
 $datosJson ='{
"data":[';
for($i=0; $i<count($descuentos);$i++){
$descuento="<div class='form-line'><input type='number' min='1' required class='form-control descuentoUpdate text-center' value='".$descuentos[$i]["descuento"]. "' idDescuento='". $descuentos[$i]["id"]."'></div>";


$datosJson .= '[
"'. ($i+1) .'",
"'.$descuentos[$i]["fecha"] .'",
"'.$descuentos[$i]["descripcion"] .'",
"'.$descuentos[$i]["tipo"] .'",
"'.$descuentos[$i]["rango"] .'",
"'.$descuento.'"
],';
}
$datosJson=substr($datosJson, 0,-1);
$datosJson .=   ']
} ';
echo $datosJson ;
}
}

$activarDescuentos=new TablaDescuentos();
$activarDescuentos->mostrarTablaDescuentos();