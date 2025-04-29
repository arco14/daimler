<?php

require_once "../modelos/articulos.modelo.php";

 class ControladorArticulos{
static public function ctrMostrarArticulos($item,$valor){
$respuesta= ModeloArticulos::MdlMostrarArticulos($item,$valor);
return $respuesta;
	}
static public function ctrMostrarDatosLinea($item,$valor){
$respuesta= ModeloLineas::MdlMostrarLineas($item,$valor);
echo json_encode($respuesta);
    }

/*Validar no repetir linea*/
static public function validarLinea(){
$datos=array("descripcion"=> $_POST["validarLinea"]); 
$respuesta=ModeloLineas::mdlValidarLinea($datos);
echo json_encode($respuesta);
}
//insertar linea
static public function insertarLinea(){
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["clave"]) &&
preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["linea"])) {

$datos=array("clave"=> $_POST["clave"], "descripcion"=> $_POST["linea"]); 
echo($respuesta=ModeloLineas::mdlIngresarLinea($datos));
}
else
{
echo ("error_preg_match");  
}
}
//actualizar linea
static public function editarLinea(){
if(preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["editarLinea"] )
&& preg_match('/^[a-zA-Z-ñÑáéíóúÁÉÍÓÚ ]+$/' , $_POST["editarClave"]) ) {        

$datos=array("clave"=> $_POST["editarClave"], "descripcion"=> $_POST["editarLinea"],"id"=>$_POST["id"]); 
echo ($respuesta=ModeloLineas::mdlEditarLinea($datos));
}
else
{
echo ("error_preg_match");  
}
}
//Activar Desactivar marca

static public function activarLinea(){
$item1="activa";
$valor1=$_POST["activarLinea"];
$item2="id";
$valor2=$_POST["activarId"];
echo($respuesta=ModeloLineas::mdlActualizarLinea($item1,$valor1,$item2,$valor2));
}

}
//Activar ingreso de linea
if(isset($_POST["linea"])){
$insLinea=new ControladorLineas();
$insLinea->insertarLinea();
}
//Activar actualizacion de linea
if(isset($_POST["editarLinea"]))
{
$actLinea=new ControladorLineas();
$actLinea->editarLinea();
}
//Activar validacion de linea
if(isset($_POST["validarLinea"])) 
{
$valLinea=new ControladorLineas();
$valLinea->validarLinea();
}
//Activar o Desactivar linea
if(isset($_POST["activarLinea"]))
{
$activarLinea=new ControladorLineas();
$activarLinea->activarLinea();
}
//Extraer datos de marca
if(isset($_POST["idLinea"]))
{
$selectLinea=new ControladorLineas();
$selectLinea->ctrMostrarDatosLinea("id", $_POST["idLinea"]);
}
