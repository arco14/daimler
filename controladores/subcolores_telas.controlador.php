<?php

require_once "../modelos/subcolores_telas.modelo.php";



 class ControladorSubcolores{
//MOSTRAR MARCAS TABLA COMPLETA
public function ctrMostrarSubcolores($item,$valor){

$respuesta= ModeloSubcolores::MdlMostrarSubcolores($item,$valor);
return $respuesta;
	}
 public function ctrMostrarSubcoloresSelect($item,$valor){
$respuesta= ModeloSubcolores::MdlMostrarSubcoloresSelect($item,$valor);
echo json_encode($respuesta);
	}
static public function ctrMostrarSubcoloresActivos(){
$respuesta= ModeloSubcolores::MdlMostrarSubcoloresActivos();
echo json_encode($respuesta);
	}
static public function ctrMostrarDatosSubcolor($item,$valor){
$respuesta= ModeloSubcolores::MdlMostrarSubcolores($item,$valor);
echo json_encode($respuesta);
	}


public function insertarSubcolor(){
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["clave"]) &&
preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["subcolor"])) {

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["subcolor"]); 
echo($respuesta=ModeloSubcolores::mdlIngresarSubcolor($datos));
}
else
{
echo ("error_preg_match");	
}
}
public function editarSubcolor()
{
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["editarSubcolor"] )
&& preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/' , $_POST["editarClave"]) ) {		

$datos=array("clave"=> $_POST["editarClave"], "descripcion"=> $_POST["editarSubcolor"], "id"=>$_POST["id"]); 
echo ($respuesta=ModeloSubcolores::mdlEditarSubcolor($datos));
}
else
{
echo ("error");	
}
}
/*Validar no repetir subcolor*/

public function validarSubcolor()
{
$datos=array("descripcion"=> $_POST["validarSubcolor"]); 
$respuesta=ModeloSubcolores::mdlValidarSubcolor($datos);
echo json_encode($respuesta);
}
//Activar Desactivar subcolor

public function ActivarSubcolor(){
$item1="activo";
$valor1=$_POST["activarSubcolor"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloSubcolores::mdlActualizarSubcolor($item1,$valor1,$item2,$valor2));
}



}
//Activar ingreso de composicion
if(isset($_POST["subcolor"])){
$insSubcolor=new ControladorSubcolores();
$insSubcolor->insertarSubcolor();
}

//Activar actualizacion de lineas
if(isset($_POST["editarSubcolor"]))
{
$actSubcolor=new ControladorSubcolores();
$actSubcolor->editarSubcolor();
}
//Activar validacion de categoria
if(isset($_POST["validarSubcolor"])) /*or isset($_POST["validarClaveComposicion"])*/
{
$valSubcolor=new ControladorSubcolores();
//$valCategoria-> validarCategoria = $_POST["validarCategoria"];
//$valCategoria-> idSubcategoria = $_POST["id_subcategoria"];
$valSubcolor->validarSubcolor();
}
//Activar o Desactivar linea
if(isset($_POST["activarSubcolor"]))
{
$activarSubcolor=new ControladorSubcolores();
$activarSubcolor->ActivarSubcolor();
}
if(isset($_POST["llenarSelectSubcolores"]))
{
$llenarSelectSubcolor=new ControladorSubcolores();
$llenarSelectSubcolor->ctrMostrarSubcoloresActivos();
}
if(isset($_POST["idSubcolor"]))
{
$selectSubcolor=new ControladorSubcolores();
$selectSubcolor->ctrMostrarDatosSubcolor("id", $_POST["idSubcolor"]);
}
if(isset($_POST["llenarSelectSubcoloresUpdate"]))
{
$llenarSelectSubcoloresUpdate=new ControladorSubcolores();
$llenarSelectSubcoloresUpdate->ctrMostrarSubcoloresSelect("id",$_POST["idSubcolorUpdate"]);
}

//ACTIVAR TABLA DE CATEGORIAS
//$activarCategorias=new ControladorCategorias();
//$activarCategorias->mostrarTablaCategorias();


// preg_match('/^[#\.\-a-zA-Z0-9]+$/', $_POST["composicion"] )&& 
 //preg_match('/^[()\-a-zA-Z0-9]+$/', $_POST["clave"]) && 