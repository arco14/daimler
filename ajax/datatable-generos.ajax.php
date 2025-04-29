<?php
require_once "../controladores/generos.controlador.php";


class TablaGeneros{

public function mostrarTablaGeneros(){
$item=null;
$valor=null;
$generos=ControladorGeneros::ctrMostrarGeneros($item,$valor);
        
 $datosJson ='{
"data":[';
for($i=0; $i<count($generos);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' class='btn btn-info btn-circle waves-effect waves-circle waves-float' id='datosGenero' idGenero='".$generos[$i]["id"]."' data-toggle='modal' data-target='#modalEditarSubcategoria'><i class='material-icons'>create</i></button></div>";
//ESTATUS
if($generos[$i]["activo"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusGenero' checked idGenero='".$generos[$i]["id"]."' estadoGenero='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusGenero' idGenero='".$generos[$i]["id"]."' estadoGenero='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
}


$datosJson .= '[
"'. ($i+1) .'",
"'.$generos[$i]["clave"] .'",
"'.$generos[$i]["descripcion"] .'",
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
//ACTIVAR TABLA DE GENEROS
$activarGeneros=new TablaGeneros();
$activarGeneros->mostrarTablaGeneros();