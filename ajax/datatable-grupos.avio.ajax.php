<?php
require_once "../controladores/grupos_avio.controlador.php";
require_once "../controladores/prenda.controlador.php";


class TablaGrupoAvios{
//ACTIVAR TABLA DE CATEGORIAS
public function mostrarGrupoAvios(){
$item=null;
$valor=null;
$grupos=ControladorGrupoAvios::CtrMostrarGrupoAvios($item,$valor);

 $datosJson ='{
"data":[';
for($i=0; $i<count($grupos);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' id='datosGrupoAvio' class='btn btn-info btn-circle waves-effect waves-circle waves-float' idGrupoAvio='".$grupos[$i]["id"]."' data-toggle='modal' data-target='#modalAgregarGrupoAvio'><i class='material-icons'>create</i></button></div>";
//ESTATUS
if($grupos[$i]["activo"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusGrupoAvio' checked idGrupoAvio='".$grupos[$i]["id"]."' estadoGrupoAvio='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusGrupoAvio' idGrupoAvio='".$grupos[$i]["id"]."' estadoGrupoAvio='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
}



$item="id";
$valor=$grupos[$i]["id_prenda"];
$prenda=ControladorPrenda::ctrMostrarPrenda($item,$valor);






$datosJson .= '[
"'. ($i+1).'",
"'.$grupos[$i]["clave"].'",
"'.$grupos[$i]["descripcion"].'",
"'.$prenda["descripcion"].'",
"$'.number_format($grupos[$i]["precio"],2).'",
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


$activarGrupoAvios=new TablaGrupoAvios();
$activarGrupoAvios->mostrarGrupoAvios();


