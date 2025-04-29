<?php
require_once "../controladores/unidades.controlador.php";



class TablaUnidades{
//ACTIVAR TABLA DE UNIDADES
public function mostrarTablaUnidades(){
$item=null;
$valor=null;
$unidades=ControladorUnidades::CtrMostrarUnidades($item,$valor);;  
 $datosJson ='{
"data":[';
for($i=0; $i<count($unidades);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' class='btn btn-info btn-circle waves-effect waves-circle waves-float' id='datosUnidad' idUnidad='".$unidades[$i]["id"]."' data-toggle='modal' data-target='#modalEditarCategoria'><i class='material-icons'>create</i></button></div>";
//ESTATUS
if($unidades[$i]["activa"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusUnidad' checked idUnidad='".$unidades[$i]["id"]."' estadoUnidad='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusUnidad' idUnidad='".$unidades[$i]["id"]."' estadoUnidad='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
}


$datosJson .= '[
"'. ($i+1) .'",
"'.$unidades[$i]["clave"] .'",
"'.$unidades[$i]["descripcion"] .'",
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
//ACTIVAR TABLA DE UNIDADES
$activarUnidades=new TablaUnidades();
$activarUnidades->mostrarTablaUnidades();