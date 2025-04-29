<?php
require_once "../controladores/maximos.controlador.php";

class TablaEstilosMaximos{


public function mostrarTablaEstilosMaximos(){

$maximos_estilo=ControladorMaximos::ctrMostrarEstilosMaximos($_POST["idMaximo"]);
        
 $datosJson ='{
"data":[';
for($i=0; $i<count($maximos_estilo);$i++){


$botones=  "<div class='img-thumbnail'><button type='button' class='btn btn-danger btn-circle waves-effect waves-circle waves-float eliminarEstiloMaximo'  idDetalleEstilo='".$maximos_estilo[$i]["id"]."' ><i class='material-icons'>delete</i></button></div>";


$datosJson .= '[
"'. $botones.'",
"'.$maximos_estilo[$i]["descripcion"] .'",
"'.$maximos_estilo[$i]["color"] .'",
"'.$maximos_estilo[$i]["contraste"] .'"


],';
}
$datosJson=substr($datosJson, 0,-1);
$datosJson .=   ']
} ';
echo $datosJson ;
}
}


$activarEstilosMaximos=new TablaEstilosMaximos();
$activarEstilosMaximos->mostrarTablaEstilosMaximos();