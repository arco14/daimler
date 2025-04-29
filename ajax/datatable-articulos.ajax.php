<?php
require_once "../controladores/articulos.controlador.php";



class TablaArticulos{



public function mostrarTablaArticulos(){
$item=null;
$valor=null;
$articulos=ControladorArticulos::ctrMostrarArticulos($item,$valor);
        
 $datosJson ='{
"data":[';
for($i=0; $i<count($articulos);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' class='btn btn-info btn-circle waves-effect waves-circle waves-float' id='datosLinea' idLinea='".$articulos[$i]["id_articulo"]."' data-toggle='modal' data-target='#modalEditarLinea'><i class='material-icons'>create</i></button></div>";
//ESTATUS
if($articulos[$i]["activa"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusLinea' checked idLinea='".$articulos[$i]["id_articulo"]."' estadoLinea='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusLinea' idLinea='".$articulos[$i]["id_articulo"]."' estadoLinea='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
}



$datosJson .= '[
"'. ($i+1) .'",
"'.$articulos[$i]["sku"] .'",
"'.$articulos[$i]["descripcion"] .'",
"'.$articulos[$i]["molde"] .'",
"'.$articulos[$i]["linea"] .'",
"'.$articulos[$i]["precio"] .'",
"'.$articulos[$i]["tela"] .'",
"'.$articulos[$i]["color"] .'",
"'.$articulos[$i]["maquila"] .'",
"'.$articulos[$i]["avio"] .'",
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
$activarArticulos=new TablaArticulos();
$activarArticulos->mostrarTablaArticulos();