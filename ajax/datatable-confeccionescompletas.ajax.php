<?php
require_once "../controladores/confecciones_completas.controlador.php";
require_once "../controladores/prenda.controlador.php";
require_once "../controladores/confecciones.controlador.php";
require_once "../controladores/proveedores.controlador.php";


class TablaConfeccionesCompletas{
//ACTIVAR TABLA DE CATEGORIAS
public function mostrarConfeccionesCompletas(){
$item=null;
$valor=null;
$confecciones_completas=ControladorConfeccionesCompletas::CtrMostrarConfeccionesCompletas($item,$valor);

 $datosJson ='{
"data":[';
for($i=0; $i<count($confecciones_completas);$i++){
//ACCIONES
$botones=  "<div class='img-thumbnail'><button type='button' id='datosConfeccionCompleta' class='btn btn-info btn-circle waves-effect waves-circle waves-float' idConfeccionCompleta='".$confecciones_completas[$i]["id"]."' data-toggle='modal' data-target='#modalAgregarConfeccionCompleta'><i class='material-icons'>create</i></button></div>";
//ESTATUS
if($confecciones_completas[$i]["activo"])
{
	$estatus="<div class='switch'><label><input type='checkbox' class='estatusConfeccionCompleta' checked idConfeccionCompleta='".$confecciones_completas[$i]["id"]."' estadoConfeccionCompleta='0'><span class='lever switch-col-light-blue' ></span></label></div>";
}else
{
$estatus="<div class='switch'><label><input type='checkbox' class='estatusConfeccionCompleta' idConfeccionCompleta='".$confecciones_completas[$i]["id"]."' estadoConfeccionCompleta='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
}


//Categoria
$item="id";
$valor=$confecciones_completas[$i]["id_prenda"];
$prenda=ControladorPrenda::ctrMostrarPrenda($item,$valor);


//Tipo
$item="id";
$valor=$confecciones_completas[$i]["id_tipo"];
$tipo=ControladorConfecciones::ctrMostrarConfecciones($item,$valor);

//Proveedor
$item="id";
$valor=$confecciones_completas[$i]["id_proveedor"];
$proveedor=ControladorProveedores::ctrMostrarProveedores($item,$valor);




$datosJson .= '[
"'. ($i+1).'",
"'.$confecciones_completas[$i]["clave"].'",
"'.$confecciones_completas[$i]["descripcion"].'",
"$'.number_format($confecciones_completas[$i]["precio"],2).'",
"'.$prenda["descripcion"].'",
"'.$tipo["descripcion"].'",
"'.$proveedor["nombre"].'",
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
$activarConfeccionesCompletas=new TablaConfeccionesCompletas();
$activarConfeccionesCompletas->mostrarConfeccionesCompletas();



//<div class='form-line input-group'><div class='btn-group bootstrap-select input-group-btn form-control show-tick'><button type='button' class='agregarTitulo btn dropdown-toggle btn-default' data-toggle='dropdown' data-id='nuevoTipoConfeccion' title='Seleccione Tipo'><span class='filter-option pull-left ejemplo'>Seleccione Tipo</span><span class='bs-caret'><span class='caret'></span></span></button><div class='dropdown-menu open'><div class='bs-searchbox'><input type='text' class='form-control' autocomplete='off'></div><ul class='dropdown-menu inner' role='menu'><li data-original-index='0' class='selected'><a tabindex='0' class='' style='' data-tokens='null'><span class='text'>Seleccione Tipo</span><span class='glyphicon glyphicon-ok check-mark'></span></a></li><li data-original-index='1' idtipo='3'><a tabindex='1' class='' style='' data-tokens='null'><span class='text'>Compra</span><span class='glyphicon glyphicon-ok check-mark'></span></a></li><li data-original-index='2' idtipo='2'><a tabindex='2' class='' style='' data-tokens='null'><span class='text'>Cut, make y trims</span><span class='glyphicon glyphicon-ok check-mark'></span></a></li><li data-original-index='3' idtipo='1'><a tabindex='3' class='' style='' data-tokens='null'><span class='text'>Full Package</span><span class='glyphicon glyphicon-ok check-mark'></span></a></li></ul></div><select class='form-control show-tick' required='' name='nuevoTipoConfeccion' id='nuevoTipoConfeccion' data-live-search='true' tabindex='-98' aria-required='true'><option value=''>Seleccione Tipo</option><option value='3'>Compra</option><option value='2'>Cut, make y trims</option><option value='1'>Full Package</option></select></div>