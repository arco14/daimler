<?php
require_once "../controladores/moldes.controlador.php";

class TablaVersiones{

public function mostrarTablaVersiones(){

$versiones=ControladorMoldes::ctrMostrarVersionesMolde("id",$_POST["idMolde"]);;  
 $datosJson ='{
"data":[';
for($i=0; $i<count($versiones);$i++){

$medida=  "<a href='".$versiones[$i]["archivo"]."' class='btn btn-info btn-circle waves-effect waves-circle waves-float'><i class='material-icons'>print</i></a>";

$molde=  "<a href='".$versiones[$i]["molde"]."' class='btn btn-info btn-circle waves-effect waves-circle waves-float'><i class='material-icons'>unarchive</i></a>";


$datosJson .= '[
"'.$versiones[$i]["fecha"].'",
"'.$versiones[$i]["version"].'",
"'.$medida.'",
"'.$molde.'",
"'.$versiones[$i]["observaciones"].'"
],';
}
$datosJson=substr($datosJson, 0,-1);
$datosJson .=   ']
} ';
echo $datosJson ;
}

}


$activarVersiones=new TablaVersiones();
$activarVersiones->mostrarTablaVersiones();