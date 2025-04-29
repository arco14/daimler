<?php
require_once "../controladores/usuarios.controlador.php";

class TablaUsuarios{
//ACTIVAR TABLA DE USUARIOS
public function mostrarTablaUsuarios(){
$item=null;
$valor=null;
$usuarios=ControladorUsuarios::CtrMostrarUsuarios($item,$valor);;  
 $datosJson ='{
"data":[';
for($i=0; $i<count($usuarios);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' class='btn btn-info btn-circle waves-effect waves-circle waves-float' id='datosConfeccion' idConfeccion='".$usuarios[$i]["id"]."' data-toggle='modal' data-target='#modalEditarConfeccion'><i class='material-icons'>create</i></button></div>";
//ESTATUS
if($usuarios[$i]["estado"])
{
  $estatus="<div class='switch'><label><input type='checkbox' class='estatusConfeccion' checked idConfeccion='".$usuarios[$i]["id"]."' estadoConfeccion='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusConfeccion' idConfeccion='".$usuarios[$i]["id"]."' estadoConfeccion='1'><span class='lever switch-col-light-blue' ></span></label></div>";  
}
//FOTO
$foto="<a href='".$usuarios[$i]["foto"]."' target='_blank'><img class='img-responsive img-thumbnail' src='".$usuarios[$i]["foto"]."' width='60px'></a>";



$datosJson .= '[
"'.($i+1).'",
"'.$foto.'",
"'.$usuarios[$i]["nombre"].'",
"'.$usuarios[$i]["usuario"].'",
"'.$usuarios[$i]["email"].'",
"'.$usuarios[$i]["perfil"].'",
"'.$estatus.'",
"'.$usuarios[$i]["ultimo_login"].'",
"'.$botones.'"
],';
}
$datosJson=substr($datosJson, 0,-1);
$datosJson .=   ']
} ';
echo $datosJson ;
}

}
//ACTIVAR TABLA USUARIOS
$activarUsuarios=new TablaUsuarios();
$activarUsuarios->mostrarTablaUsuarios();