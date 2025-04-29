<?php
require_once "../modelos/clientes.modelo.php";
class ControladorClientes{

//CREAR CLIENTES

static public function ctrCrearCliente()
{

if(isset($_POST["nuevoCliente"])){

	if(preg_match('/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["nuevoCliente"] )
					 && preg_match('/^[0-9]+$/', $_POST["nuevoDocumentoId"]) 
					 /*&& 
					 preg_match('/^[^0-9][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[@][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4} $/', $_POST["nuevoEmail"]) */
					&& preg_match('/^[()\-0-9 ]+$/', $_POST["nuevoTelefono"]) 
					&& preg_match('/^[#\.\-a-zA-Z0-9 ]+$/', $_POST["nuevaDireccion"]) ){

		$tabla="clientes";
		$datos=array("nombre"=>$_POST["nuevoCliente"],
								 "documento"=> $_POST["nuevoDocumentoId"],
								 "email"=> $_POST["nuevoEmail"],
								 "telefono"=> $_POST["nuevoTelefono"]
								 );	
$respuesta=ModeloClientes::mdlIngresarCliente($tabla,$datos);
if($respuesta=="ok")
{
echo '<script>
				swal({
					type:"success",
					title:"¡El cliente ha sido guardado!",
					showConfirmButton:true,
					confirmButtonText:"Cerrar",
					closeOnConfirm:false		


					}).then((result)=>{
						if(result.value)
						{
							window.location="clientes";
						}
						});

	</script>';

}


	}
else{

echo '<script>
				swal({
					type:"error",
					title:"¡El cliente no puede ir con campos vacios o llevar caracteres especiales!",
					showConfirmButton:true,
					confirmButtonText:"Cerrar",
					closeOnConfirm:false		


					}).then((result)=>{
						if(result.value)
						{
							window.location="clientes";
						}
						});

	</script>';



}
}

}
//MOSTRAR CLIENTES
static function ctrMostrarClientes($item,$valor)
{
	$respuesta= ModeloClientes::MdlMostrarClientes($item,$valor);
	return $respuesta;
}
static public function ctrMostrarClientesActivos()
{
	$respuesta= ModeloClientes::mdlMostrarClientesActivos();
	echo json_encode($respuesta);
}
static public function ctrMostrarRangosActivos()
{
	$respuesta= ModeloClientes::mdlMostrarRangosDescuento();
	echo json_encode($respuesta);
}

//EDITAR CLIENTES
static function ctrEditarCliente(){

if(isset($_POST["editarCliente"])){

	if(preg_match('/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["editarCliente"] )
					 && preg_match('/^[0-9]+$/', $_POST["editarDocumentoId"]) 
					 /*&& 
					 preg_match('/^[^0-9][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[@][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4} $/', $_POST["nuevoEmail"]) */
					&& preg_match('/^[()\-0-9 ]+$/', $_POST["editarTelefono"]) 
					&& preg_match('/^[#\.\-a-zA-Z0-9 ]+$/', $_POST["editarDireccion"]) ){

		$tabla="clientes";
		$datos=array("id"=>$_POST["idCliente"],
								 "documento"=> $_POST["editarDocumentoId"],
								 "email"=> $_POST["editarEmail"],
								 "telefono"=> $_POST["editarTelefono"]
								 );	
$respuesta=ModeloClientes::mdlEditarCliente($tabla,$datos);
if($respuesta=="ok")
{
echo '<script>
				swal({
					type:"success",
					title:"¡El cliente ha sido actualizado correctamente!",
					showConfirmButton:true,
					confirmButtonText:"Cerrar",
					closeOnConfirm:false		


					}).then((result)=>{
						if(result.value)
						{
							window.location="clientes";
						}
						});

	</script>';

}


	}
else{

echo '<script>
				swal({
					type:"error",
					title:"¡El cliente no puede ir con campos vacios o llevar caracteres especiales!",
					showConfirmButton:true,
					confirmButtonText:"Cerrar",
					closeOnConfirm:false		


					}).then((result)=>{
						if(result.value)
						{
							
						}
						});

	</script>';



}
}


}



}



if(isset($_POST["action"])){

switch ($_POST["action"]) {

		case 'list':
			$listaCliente=new ControladorClientes();
			$listaCliente->ctrMostrarClientesActivos();
			break;
		case 'listRangoDescuento':
			$listaRangos=new ControladorClientes();
			$listaRangos->ctrMostrarRangosActivos();
			break;
		default:
		
			break;

}

}