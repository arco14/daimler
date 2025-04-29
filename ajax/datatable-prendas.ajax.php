<?php

require_once "../controladores/prendas.controlador.php";



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
"'.$prenda[$i]["molde"].'",
"'.$prenda[$i]["tela"].'",
"'.$prenda[$i]["contraste"].'",
"'.$prenda[$i]["confeccion"].'",
"'.$prenda[$i]["grupo_avio"].'",
"'.$prenda[$i]["hilo"].'",
"'.$prenda[$i]["linea"].'",
"'.$prenda[$i]["talla"].'",
"'.$prenda[$i]["color"].'",
"'.$prenda[$i]["color_contraste"].'",
"'.$prenda[$i]["genero"].'",
"'.$prenda[$i]["categoria"].'",
"'.$prenda[$i]["subcategoria"].'",
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

