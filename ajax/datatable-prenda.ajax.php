<?php

require_once "../controladores/categorias.controlador.php";
require_once "../controladores/subcategorias.controlador.php";
require_once "../controladores/prenda.controlador.php";



class TablaPrenda{


public function mostrarPrenda(){
$item=null;
$valor=null;
$prenda=ControladorPrenda::CtrMostrarPrenda($item,$valor);

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


//Categoria
$item="id";
$valor=$prenda[$i]["id_categoria"];
$categoria=ControladorCategorias::ctrMostrarCategorias($item,$valor);

//Subcategoria
$item="id";
$valor=$prenda[$i]["id_subcategoria"];
$subcategoria=ControladorSubcategorias::ctrMostrarSubcategorias($item,$valor);




$datosJson .= '[
"'. ($i+1).'",
"'.$categoria["descripcion"].'",
"'.$subcategoria["descripcion"].'",
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


$activarPrenda=new TablaPrenda();
$activarPrenda->mostrarPrenda();

