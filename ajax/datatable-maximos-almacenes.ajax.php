<?php
require_once "../controladores/maximos.controlador.php";

class TablaMaximosAlmacen{
//Activar tabla marcas
public function mostrarTablaMaximosAlmacen(){
$item=null;
$valor=null;
$maximos_almacen=ControladorMaximos::ctrMostrarAlmacenesMaximos($_POST["idMaximo"]);
        
 $datosJson ='{
"data":[';
for($i=0; $i<count($maximos_almacen);$i++){
//Acciones
$botones=  "<div class='img-thumbnail'><button type='button' class='btn btn-danger btn-circle waves-effect waves-circle waves-float eliminarAlmacenMaximo'  idDetalleAlmacen='".$maximos_almacen[$i]["id"]."' ><i class='material-icons'>delete</i></button></div>";

$datosJson .= '[
"'.$botones.'",
"'.$maximos_almacen[$i]["nombre"] .'"
],';
}
$datosJson=substr($datosJson, 0,-1);
$datosJson .=   ']
} ';
echo $datosJson ;
}
}
//Activar tabla marcas
$activarMaximos=new TablaMaximosAlmacen();
$activarMaximos->mostrarTablaMaximosAlmacen();