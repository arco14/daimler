<?php

require_once "../modelos/usuarios.modelo.php";

 class ControladorUsuarios{


 	static public function ctrIngresoUsuario()
 	{

 		if (isset($_POST["ingUsuario"]))
 		{
 			if (preg_match('/^[a-zA-Z0-9]+$/' , $_POST["ingUsuario"])
				&& preg_match('/^[a-zA-Z0-9]+$/' , $_POST["ingPassword"])){
 				$encriptar=crypt($_POST["ingPassword"], '$2a$07$usesomesillystringforsalt$');
 				
 				$tabla="usuarios";
 				
 				$item="usuario";
 				$valor=	$_POST["ingUsuario"];

 				$respuesta= ModeloUsuarios::MdlMostrarUsuarios($tabla,$item,$valor);


 				if ($respuesta["usuario"]== $_POST["ingUsuario"] && $respuesta["password"]== $encriptar)
 				{
 					if($respuesta["estado"]==1)
 					{
 					$_SESSION["iniciarSesion"]="ok";
 					$_SESSION["id"]=$respuesta["id"];
 					$_SESSION["nombre"]=$respuesta["nombre"];
 					$_SESSION["usuario"]=$respuesta["usuario"];
$_SESSION["foto"]=$respuesta["foto"];
$_SESSION["perfil"]=$respuesta["perfil"];


/*Registrar ultimo login*/

date_default_timezone_get("America/Mexico_City");
$fecha=date('Y-m-d');
$hora=date('H:i:s');

$fechaActual=$fecha.' '.$hora;

$item1="ultimo_login";
$valor1=$fechaActual;
$item2="id";
$valor2=$respuesta["id"];

$ultimoLogin=ModeloUsuarios::mdlActualizarUsuario($tabla,$item1,$valor1,$item2,$valor2);
if($ultimoLogin=="ok"){


echo '<script>
				swal({
			icon:"success",
					title:"¡Login Correcto!",
					
		
					}).then((result)=>{
					
							window.location="inicio";
											});

	</script>';


}



}else
{

	echo '<script>
				swal({
					icon:"error",
					title:"¡Usuario o Password incorrectos!",
					

					}).then((result)=>{
						if(result.value)
						{
						window.location="ingreso";
						}
						});

	</script>';

}

 				}else
 				echo '<script>
				swal({
					icon:"error",
					title:"¡Usuario o Password incorrectos!",
					


					}).then((result)=>{
						if(result.value)
						{
						window.location="ingreso";
						}
						});

	</script>';

 				}	

 		}
 	}

 	static public function ctrCrearUsuario(){
if(isset($_POST["nuevoUsuario"])){

	if(preg_match('/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["nuevoNombre"] )&& 
		preg_match('/^[a-zA-Z0-9-.]+$/' , $_POST["nuevoUsuario"]) && 
		preg_match('/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.]+$/' , $_POST["nuevoPassword"]) 


	) {
		$ruta="vistas/img/usuarios/perfil.jpg";
if(isset($_FILES["nuevaFoto"]["tmp_name"])){

list($ancho,$alto)= getimagesize($_FILES["nuevaFoto"]["tmp_name"]);
$nuevoAncho=500;
$nuevoAlto=500;


$directorio= "vistas/img/usuarios/". $_POST["nuevoUsuario"];
mkdir($directorio,0755);

if($_FILES["nuevaFoto"]["type"]=="image/jpeg"){

$aleatorio=mt_rand(100,999);

$ruta="vistas/img/usuarios/". $_POST["nuevoUsuario"]."/". $aleatorio.".jpg";
$origen= imagecreatefromjpeg($_FILES["nuevaFoto"]["tmp_name"]);
$destino=imagecreatetruecolor($nuevoAncho, $nuevoAlto);

imagecopyresized($destino, $origen, 0, 0, 0, 0, $nuevoAncho, $nuevoAlto, $ancho, $alto);
imagejpeg($destino,$ruta);

}
if($_FILES["nuevaFoto"]["type"]=="image/png"){

$aleatorio=mt_rand(100,999);

$ruta="vistas/img/usuarios/". $_POST["nuevoUsuario"]."/". $aleatorio.".png";
$origen= imagecreatefrompng($_FILES["nuevaFoto"]["tmp_name"]);
$destino=imagecreatetruecolor($nuevoAncho, $nuevoAlto);

imagecopyresized($destino, $origen, 0, 0, 0, 0, $nuevoAncho, $nuevoAlto, $ancho, $alto);
imagepng($destino,$ruta);

}
}

$tabla ="usuarios";
$encriptar=crypt($_POST["nuevoPassword"], '$2a$07$usesomesillystringforsalt$');
$datos=array("nombre"=> $_POST["nuevoNombre"], "usuario"=> $_POST["nuevoUsuario"], "password"=> $encriptar,"perfil"=> $_POST["nuevoPerfil"], "foto"=>$ruta, "email"=>$_POST["nuevoEmail"], "telefono"=>$_POST["nuevoTelefono"]); 

$respuesta=ModeloUsuarios::mdlIngresarUsuario($tabla,$datos);
if($respuesta=="ok")
{
echo '<script>
				swal({
						 	 title: "¡El usuario ha sido ingresado!",
  icon: "success",
  		confirmButtonText:"Cerrar",		
					}).then((result)=>{
						
							window.location="usuarios";
												});

	</script>';
}
}
else
{
	echo '<script>
				swal({
					icon:"error",
					title:"¡El usuario no puede ir vacio o llevar caracteres especiales!",
					

					}).then((result)=>{
						if(result.value)
						{
						window.location="usuarios";
						}
						});

	</script>';
}

 	}
}
static public function ctrMostrarUsuarios($item,$valor){
$tabla="usuarios";

	$respuesta= ModeloUsuarios::MdlMostrarUsuarios($tabla,$item,$valor);
	return $respuesta;

	}



static public function ctrEditarUsuario()
{
if(isset($_POST["editarUsuario"])){
if(preg_match('/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$/', $_POST["editarNombre"] )) {

$ruta=$_POST["fotoActual"];
if(isset($_FILES["editarFoto"]["tmp_name"]) && !empty($_FILES["editarFoto"]["tmp_name"])){



list($ancho,$alto)= getimagesize($_FILES["editarFoto"]["tmp_name"]);
$nuevoAncho=500;
$nuevoAlto=500;


$directorio= "vistas/img/usuarios/". $_POST["editarUsuario"];

If(!empty($_POST["fotoActual"])){
	unlink($_POST["fotoActual"]);

}else
{
	mkdir($directorio,0755);
}


if($_FILES["editarFoto"]["type"]=="image/jpeg"){

$aleatorio=mt_rand(100,999);

$ruta="vistas/img/usuarios/". $_POST["editarUsuario"]."/". $aleatorio.".jpg";
$origen= imagecreatefromjpeg($_FILES["editarFoto"]["tmp_name"]);
$destino=imagecreatetruecolor($nuevoAncho, $nuevoAlto);

imagecopyresized($destino, $origen, 0, 0, 0, 0, $nuevoAncho, $nuevoAlto, $ancho, $alto);
imagejpeg($destino,$ruta);

}
if($_FILES["editarFoto"]["type"]=="image/png"){

$aleatorio=mt_rand(100,999);

$ruta="vistas/img/usuarios/". $_POST["editarUsuario"]."/". $aleatorio.".png";
$origen= imagecreatefrompng($_FILES["editarFoto"]["tmp_name"]);
$destino=imagecreatetruecolor($nuevoAncho, $nuevoAlto);

imagecopyresized($destino, $origen, 0, 0, 0, 0, $nuevoAncho, $nuevoAlto, $ancho, $alto);
imagepng($destino,$ruta);

}



}

$tabla="usuarios";

if($_POST["editarPassword"] !="")
{

	if(preg_match('/^[a-zA-Z0-9]+$/' , $_POST["editarPassword"]))
	{
		$encriptar=crypt($_POST["editarPassword"], '$2a$07$usesomesillystringforsalt$');
	}else
	{
echo '<script>
				swal({
					icon:"error",
					title:"¡La contraseña no puede ir vacio o llevar caracteres especiales!",
						


					}).then((result)=>{
						if(result.value)
						{
						window.location="usuarios";
						}
						});

	</script>';

	}
}else
{
$encriptar=$_POST["passwordActual"];

}
 $datos= array("nombre"=>$_POST["editarNombre"],
"usuario"=> $_POST["editarUsuario"],
"password"=>$encriptar,
"perfil"=> $_POST["editarPerfil"],
"foto"=>$ruta,
"telefono"=> $_POST["editarTelefono"],
"email"=>$_POST["editarEmail"]
);
$respuesta=ModeloUsuarios::mdlEditarUsuario($tabla,$datos);
if ($respuesta=="ok")
{
echo '<script>
				swal({
					 	 title: "¡El usuario ha sido actualizado!",
  icon: "success",
  		confirmButtonText:"Cerrar",

					}).then((result)=>{
					
							window.location="usuarios";
					
						});

	</script>';

}

}

else
{
echo '<script>
				swal({
					icon:"error",
					title:"¡El usuario no puede ir vacio o llevar caracteres especiales!",
		
	


					}).then((result)=>{
						if(result.value)
						{
						window.location="usuarios";
						}
						});
	</script>';
}
 }
}

//BORRAR USUARIO
static public function ctrBorrarUsuario()
{
if(isset($_GET["idUsuario"]))
{
$tabla="usuarios";
$datos=$_GET["idUsuario"];
if($_GET["foto"] !=""){

unlink($_GET["foto"]);
rmdir('vistas/img/usuarios/'.$_GET["usuario"]);

}

$respuesta= ModeloUsuarios::mdlBorrarUsuario($tabla,$datos);
if($respuesta=="ok"){

echo '<script>
				swal({
					text: "¡El usuario ha sido eliminado!",
  					icon: "success",
  					confirmButtonText:"Cerrar",	


					}).then((result)=>{
					
							window.location="usuarios";
						
						});

	</script>';



}

}

}
/*Validar no repetir usuario*/

public function validarUsuario()
{
$datos=array("usuario"=> $_POST["validarUsuario"]); 
$respuesta=ModeloUsuarios::mdlValidarUsuario($datos);

echo json_encode($respuesta);
}

}

//Activar validacion de composicion
if(isset($_POST["validarUsuario"])) /*or isset($_POST["validarClaveComposicion"])*/
{
$valUsuario=new ControladorUsuarios();
$valUsuario->validarUsuario();
}