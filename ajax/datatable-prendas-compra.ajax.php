<?php

require_once "../controladores/prendas-compra.controlador.php";



class TablaPrendas{


public function mostrarPrendas(){
$item=null;
$valor=null;
$prenda=ControladorPrendas::CtrMostrarPrendas($item,$valor);

 $datosJson ='{
"data":[';
for($i=0; $i<count($prenda);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' id='datosPrenda' class='btn btn-info btn-circle waves-effect waves-circle waves-float' idPrenda='".$prenda[$i]["id"]."' data-toggle='modal' data-target='#modalAgregarPrenda'><i class='material-icons'>create</i></button></div>";
//ESTATUS
if($prenda[$i]["activo"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusPrenda' checked idPrenda='".$prenda[$i]["id"]."' estatusPrenda='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusPrenda' idPrenda='".$prenda[$i]["id"]."' estatusPrenda='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
}




$datosJson .= '[
"'. ($i+1).'",
"'.$prenda[$i]["sku"].'",
"'.$prenda[$i]["descripcion"].'",
"'.$prenda[$i]["categoria"].'",
"'.$prenda[$i]["subcategoria"].'",
"'.$prenda[$i]["genero"].'",
"'.$prenda[$i]["linea"].'",
"'.$prenda[$i]["color"].'",
"'.$prenda[$i]["talla"].'",

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


$activarPrenda=new TablaPrendas();
$activarPrenda->mostrarPrendas();

