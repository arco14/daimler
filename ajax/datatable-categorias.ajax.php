<?php
require_once "../controladores/categorias.controlador.php";
require_once "../controladores/division.controlador.php";


class TablaCategorias{
//ACTIVAR TABLA DE CATEGORIAS
public function mostrarTablaCategorias(){
$item=null;
$valor=null;
$categorias=ControladorCategorias::CtrMostrarCategorias($item,$valor);;  
 $datosJson ='{
"data":[';
for($i=0; $i<count($categorias);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' class='btn btn-info btn-circle waves-effect waves-circle waves-float' id='datosCategoria' idCategoria='".$categorias[$i]["id"]."' data-toggle='modal' data-target='#modalAgregarCategoria'><i class='material-icons'>create</i></button></div>";
//ESTATUS
if($categorias[$i]["activa"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusCategoria' checked idCategoria='".$categorias[$i]["id"]."' estadoCategoria='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusCategoria' idCategoria='".$categorias[$i]["id"]."' estadoCategoria='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
}


$item="id";
$valor=$categorias[$i]["id_division"];
$divisiones=ControladorDivisiones::ctrMostrarDivisiones($item,$valor);


/*$subcategoria="<select class='form-control show-tick' idSubcategoria='".$categorias[$i]["id"]."' data-live-search='true'><option value='".$subcategorias["id"]."' >".$subcategorias["descripcion"]."</option>";           
	$subcategorias_complemento=ControladorSubcategorias::ctrMostrarSubcategoriasSelect($item,$valor);
	foreach ($subcategorias_complemento as $key => $value) {
 	$subcategoria.="<option value='".$value["id"] ."'>".$value["descripcion"]."</option>";}                   
	$subcategoria.="</select>";*/

$datosJson .= '[
"'. ($i+1) .'",
"'.$categorias[$i]["clave"] .'",
"'.$categorias[$i]["descripcion"] .'",
"'.$divisiones["descripcion"] .'",

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
//ACTIVAR TABLA DE CATEGORIAS
$activarCategorias=new TablaCategorias();
$activarCategorias->mostrarTablaCategorias();