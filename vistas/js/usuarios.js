
$( document ).ready(function() {

$('#tablaUsuarios').DataTable({
responsive: true,
ajax: "ajax/datatable-usuarios.ajax.php",
deferRender:true,  
retrive: true,
processing:true,
        language:{
            sProcessing: "Procesando...",
            sLengthMenu: "Mostrar _MENU_ registros",
            sZeroRecords: "No se encontraron resultados",
            sEmptyTable: "Ningún dato disponible en esta tabla",
            sInfo: "Registros del _START_ al _END_ de _TOTAL_",
            sInfoEmpty: "Registros del 0 al 0 de 0",
            sInforFiltered: "(filtrado de un total de _MAX_ registros)",
            sInfoPostFix: "",
            sSearch: "Buscar",
            sUrl: "",
            sInfoThousands: ",",
            sLoadingRecords:"Cargando...",
            oPaginate:{
                    sFirst: "Primero",
                    sLast: "Ultimo",
                    sNext: "Siguiente",
                    sPrevious: "Anterior"
            },
        oAria:{
sSortAscending: "Activar para ordenar la columna de manera ascendente",
sSortDescending : "Activar para ordenar la columna de manera descendete"

            }
}
    });

    });

$(document).on("change",".nuevaFoto",function(){

var imagen=this.files[0];
console.log("imagen",imagen)

if(imagen["type"] !="image/jpeg" && imagen["type"] !="image/png"){

	$(".nuevaFoto").val("");
swal({
					type:"error",
					title:"Error al subir la imagen",
					text:"¡La imagen debe estar en formato JPG O PNG!",
					
					showConfirmButton:true,
					confirmButtonText:"Cerrar",
					closeOnConfirm:false		


					})

}else if(imagen["size"] > 2000000){

$(".nuevaFoto").val("");
swal({
					type:"error",
					title:"Error al subir la imagen",
					text:"¡La imagen no debe pasar más de 2MB!",
					showConfirmButton:true,
					confirmButtonText:"Cerrar",
					closeOnConfirm:false		


					});

}else

{

var datosImagen=new FileReader;
datosImagen.readAsDataURL(imagen);

$(datosImagen).on("load",function(event){

var rutaImagen=event.target.result;
 $(".previsualizar").attr("src",rutaImagen);

})

}



})
 /*Revisar usuario repetido*/
 $(document).on("change","#nuevoUsuario",function(){

$(".alert").remove();

var usuario=$(this).val();
var datos=new FormData();
datos.append("validarUsuario",usuario);
$.ajax({
url:"controladores/usuarios.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){
	console.log("respuesta",respuesta);
if(respuesta)
{
//$("#nuevoUsuario").parent().after('<div class="alert alert-warning">Este usuario ya existe</div>');
swal({
				

					  title: "¡El usuario ya existe,verifique!",
  icon: "error",	


					});
$("#nuevoUsuario").val("");

}

}
})
})

//Cargar datos de usuario para modificar
$(document).on("click",".btnEditarUsuario",function(){
var idUsuario=$(this).attr("idUsuario");

var datos=new FormData();
datos.append("idUsuario", idUsuario);
$.ajax({

url:"controladores/usuarios.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){
$("#editarNombre").val(respuesta["nombre"]);
$("#editarEmail").val(respuesta["email"]);

$("#editarTelefono").val(respuesta["telefono"]);
$("#editarUsuario").val(respuesta["usuario"]);



$("#editarPerfil").html(respuesta["perfil"]);
$("#editarPerfil").val(respuesta["perfil"]);


console.log("respuesta", $("#editarPerfil").val());



$("#fotoActual").val(respuesta["foto"]);



$("#passwordActual").val(respuesta["password"]);


if(respuesta["foto"] !=""){
$(".previsualizar").attr("src", respuesta["foto"]);

}


}

});
})	

//Cambiar estado de usuario
 $(document).on("click",".btnActivar",function(){
 	var idUsuario=$(this).attr("idUsuario");
 	var estadoUsuario=$(this).attr("estadoUsuario");

 	var datos=new FormData();
 	datos.append("activarId",idUsuario);
 	datos.append("activarUsuario",estadoUsuario);
 	
 	$.ajax({
url:"ajax/usuarios.ajax.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
swal({
					 

  	 title: "¡El usuario ha sido actualizado!",
  icon: "success",
  		confirmButtonText:"Cerrar",


					}).then(function(result){
					//	if(result.value){

							window.location="usuarios";
					//	}	

					})


}


 	})
 	if(estadoUsuario==0){
$(this).attr('estadoUsuario',1);
 	}else
 	{
$(this).attr('estadoUsuario',0);
 	}
 	

 })
