<?php
require_once "../controladores/precios.controlador.php";

class TablaEstilosPrecios{


public function mostrarTablaEstilosPrecios(){

$estilos_precio=ControladorPrecios::ctrMostrarEstilosPrecios($_POST["idPrecio"]);
        
 $datosJson ='{
"data":[';
for($i=0; $i<count($estilos_precio);$i++){

$botones=  "<button type='button' class='btn btn-danger btn-circle waves-effect waves-circle waves-float eliminarEstiloPrecio'  idDetalleEstilo='".$estilos_precio[$i]["id"]."' ><i class='material-icons'>delete</i></button>";


$datosJson .= '[
"'.$botones.'",
"'.$estilos_precio[$i]["linea"] .'",
"'.$estilos_precio[$i]["molde"].'"


],';
}
$datosJson=substr($datosJson, 0,-1);
$datosJson .=   ']
} ';
echo $datosJson ;
}
}


$activarEstilos=new TablaEstilosPrecios();
$activarEstilos->mostrarTablaEstilosPrecios();