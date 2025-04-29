<?php
require_once "../controladores/maximos.controlador.php";

class TablaTallasMaximos{
//Activar tabla marcas
public function mostrarTablaTallasMaximos(){

$tallas=ControladorMaximos::ctrMostrarTallasMaximos($_POST["idMaximo"]);
        
 $datosJson ='{
"data":[';
for($i=0; $i<count($tallas);$i++){



$maximo="<div class='form-line'><input type='number' min='1' required class='form-control maximoTallas' value='".$tallas[$i]["maximo"]. "' idTalla='". $tallas[$i]["id"]."' campo='maximo'></div>";
$minimo="<div class='form-line'><input type='number'min='1' required class='form-control maximoTallas' value='".$tallas[$i]["minimo"]. "' idTalla='". $tallas[$i]["id"]."' campo='minimo'></div>";

$boton="<button type='button' class='btn btn-danger btn-circle waves-effect waves-circle waves-float eliminaTalla'  idTalla='". $tallas[$i]["id"]."' ><i class='material-icons'>delete</i></button>";


$datosJson .= '[
"'. ($i+1) .'",
"'.$tallas[$i]["talla"] .'",
"'.$minimo.'",
"'.$maximo .'"
],';
}
$datosJson=substr($datosJson, 0,-1);
$datosJson .=   ']
} ';
echo $datosJson ;
}
}
//Activar tabla marcas
$activarTallasMaximos=new TablaTallasMaximos();
$activarTallasMaximos->mostrarTablaTallasMaximos();