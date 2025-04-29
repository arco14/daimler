$( document ).ready(function() {
     document.title = 'Proveedores';
$('#tablaProveedores').DataTable({
responsive: true,
ajax: "ajax/datatable-proveedores.ajax.php",
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


$(document).on("click","#clickProveedor",function(){
limpiarControlesProveedor();
})
function limpiarControlesProveedor(){
   $("#nuevoProveedor").val("");
   $("#nuevoContacto").val("");
   $("#nuevoTelefono").val("");
   $("#nuevoEmail").val("");
}

$(document).on("click","#guardarProveedor",function(){
//Primero se debe verificar que los campos requeridos están ingresados
if($("#formNuevoProveedor").valid()){   
//Tomar datos del formulario
    var datosIngreso=new FormData();
    datosIngreso.append("proveedor",$("#nuevoProveedor").val());
    datosIngreso.append("contacto",$("#nuevoContacto").val());
    datosIngreso.append("telefono",$("#nuevoTelefono").val());
    datosIngreso.append("email",$("#nuevoEmail").val());

    if ($("#idProveedor").val()>0){
      datosIngreso.append("id",$("#idProveedor").val());
    
      datosIngreso.append("action","update");
    
    }else{
     datosIngreso.append("action","insert");
       
    }
    
    
//Enviar al archivo ajax los datos para el ingreso de la composicion
$.ajax({
url:"controladores/proveedores.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){

if (respuesta =="ok")
{
    swal({               
          title: "¡El proveedor ha sido ingresado!",
          icon: "success",
         }).then(function(result){    
            //Refrescar tabla de datos
         $('#tablaProveedores').DataTable().ajax.reload();
            //Limpiar controles 
         limpiarControlesProveedor(); 
          //Cerrar el modal
         $(".cerrarModal").click();
                    
         })
}
else
{
swal({               
          title: "¡Error al ingresar datos!",
          icon: "error",
         }).then(function(result){                 
         })
}
}
    })
        } else {
           //Else de validación

        }

});
//Evitar repetir Proveedor
$(document).on("change",".repetirProveedor",function(){
  var datos=new FormData();
  datos.append("proveedor",$("#nuevoProveedor").val());
   datos.append("action","validate");

$.ajax({
url:"controladores/proveedores.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta)

if(res)
{
          swal({
            title: "¡El proveedor ya existe,verifique!",
            icon: "error",  
          });
          $("#nuevoProveedor").val("");                  
}
}
});
});



$(document).on("click","#datosProveedor",function(){

var datosConsulta=new FormData();
datosConsulta.append("idProveedor", $(this).attr("idProveedor"));
datosConsulta.append("action", "select");

$.ajax({

url:"controladores/proveedores.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){
$("#nuevoProveedor").val(respuesta["nombre"]);
$("#nuevoContacto").val(respuesta["contacto"]);
$("#nuevoEmail").val(respuesta["email"]);
$("#nuevoTelefono").val(respuesta["telefono"]);

$("#idProveedor").val(respuesta["id"]);



}
});


})


 //Cambiar estado de proveeodr
 $(document).on("change",".estatusProveedor",function(){

    
    var datos=new FormData();
    datos.append("activarId",$(this).attr("idProveedor"));
    datos.append("activarProveedor",$(this).attr("estadoProveedor"));
     datos.append("action","activate");

    $.ajax({
url:"controladores/proveedores.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){ 
if (respuesta=="ok")
{
swal({               
     title: "¡El proveedor ha sido actualizado!",
      icon: "success",
                    }).then(function(result){       
                        //Refrescar tabla de datos
                        $('#tablaProveedores').DataTable().ajax.reload();
                    })
}
else
{
    swal({               
          title: "¡Error al actualizar datos!",
          icon: "error",
         }).then(function(result){                 
         })
}
}
    })
    
 });