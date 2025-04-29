<?php
require_once "../controladores/division.controlador.php";


class TablaDivisiones{

public function mostrarTablaDivisiones(){
$item=null;
$valor=null;
$divisiones=ControladorDivisiones::ctrMostrarDivisiones($item,$valor);
        
 $datosJson ='{
"data":[';
for($i=0; $i<count($divisiones);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' class='btn btn-info btn-circle waves-effect waves-circle waves-float' id='datosDivision' idDivision='".$divisiones[$i]["id"]."' data-toggle='modal' data-target='#modalEditarSubcategoria'><i class='material-icons'>create</i></button></div>";
//ESTATUS
if($divisiones[$i]["activa"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusDivision' checked idDivision='".$divisiones[$i]["id"]."' estadoDivision='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusDivision' idDivision='".$divisiones[$i]["id"]."' estadoDivision='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
}


$datosJson .= '[
"'. ($i+1) .'",
"'.$divisiones[$i]["clave"] .'",
"'.$divisiones[$i]["descripcion"] .'",
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
//ACTIVAR TABLA DE MARCAS
$activarDivisiones=new TablaDivisiones();
$activarDivisiones->mostrarTablaDivisiones();