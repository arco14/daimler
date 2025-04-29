<?php
require_once "../controladores/precios.controlador.php";

class TablaRangosPrecios{


public function mostrarTablaRangosPrecios(){

$rangos_precio=ControladorPrecios::ctrMostrarRangosPrecios($_POST["idPrecio"]);
        
 $datosJson ='{
"data":[';
for($i=0; $i<count($rangos_precio);$i++){



$datosJson .= '[
"'.$rangos_precio[$i]["rango"] .'",
"$'.number_format($rangos_precio[$i]["precio"],2).'",

"$'.number_format($rangos_precio[$i]["precio_iva"],2).'"


],';
}
$datosJson=substr($datosJson, 0,-1);
$datosJson .=   ']
} ';
echo $datosJson ;
}
}


$activarRangos=new TablaRangosPrecios();
$activarRangos->mostrarTablaRangosPrecios();