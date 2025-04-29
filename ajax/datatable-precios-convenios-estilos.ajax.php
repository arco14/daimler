<?php
require_once "../controladores/precios.controlador.php";

class TablaEstilosPrecios{


public function mostrarTablaEstilosPrecios(){

$estilos_precio=ControladorPrecios::ctrMostrarEstilosPreciosConvenio($_POST["idPrecio"]);
        
 $datosJson ='{
"data":[';
for($i=0; $i<count($estilos_precio);$i++){

$botones=  "<button type='button' class='btn btn-danger btn-circle waves-effect waves-circle waves-float eliminarEstiloPrecioConvenio'  idDetalleEstilo='".$estilos_precio[$i]["id"]."' ><i class='material-icons'>delete</i></button>";

$precio="<div class='form-line'><input type='number' min='20' max='350' required class='form-control editarPrecioConvenio text-center' data-rule='quantity'  value='".$estilos_precio[$i]["precio"]. "' idDetalleEstilo='". $estilos_precio[$i]["id"]."' ></div>";


$datosJson .= '[
"'.$botones.'",
"'.$estilos_precio[$i]["linea"] .'",
"'.$estilos_precio[$i]["molde"].'",
"'.$precio.'",
"$'.number_format($estilos_precio[$i]["precio_iva"],2).'"
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