function llenarSelectTipo(Tipo,idTipo){
  var datos= new FormData();
  datos.append("action","list");
$.ajax({
url:"controladores/tipos_producto.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta);
      $('#tipo_producto .dropdown-menu .inner').html(""); 
      $('#nuevoTipoProductoDescuento').html(""); 
      $('#tipo_producto .filter-option').text(Tipo);
      $('#tipo_producto .dropdown-menu .inner').append('<li data-original-index="0" idTipo="0" class="active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Prenda</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoTipoProductoDescuento').append('<option value="'+idTipo+'">'+Tipo+'</option>');
    $.each(res, function(i, item){
      $('#nuevoTipoProductoDescuento').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      var index=parseInt(i)+1

      if (idTipo==item.id){
      $('#tipo_producto .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTipo="'+item.id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }else{
      $('#tipo_producto .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTipo="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');

      }
      
          });
}
       });
}
function llenarSelectRango(Rango,idRango){
  var datos= new FormData();
  datos.append("action","listRangoDescuento");
$.ajax({
url:"controladores/clientes.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta);
      $('#rango .dropdown-menu .inner').html(""); 
      $('#nuevoRangoDescuento').html(""); 
      $('#rango .filter-option').text(Rango);
      $('#rango .dropdown-menu .inner').append('<li data-original-index="0" idRango="0" class=" active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Rango</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoRangoDescuento').append('<option value="'+idRango+'">'+Rango+'</option>');
    $.each(res, function(i, item){
      $('#nuevoRangoDescuento').append('<option value="'+item.id+'">'+item.clave+'</option>');
      var index=parseInt(i)+1
      if (idRango==item.id){

        $('#rango .dropdown-menu .inner').append('<li data-original-index="'+index+'" idRango="'+item.id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.clave+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }else
      {
        $('#rango .dropdown-menu .inner').append('<li data-original-index="'+index+'" idRango="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.clave+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }
      
          });
}
       });
}

$( document ).ready(function() {

$('#tablaDescuentos').DataTable({
responsive: true,
ajax: "ajax/datatable-descuentos.ajax.php",
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



})

$(document).on("change","#nuevoTipoProductoDescuento",function(){
            var id=$("#nuevoTipoProductoDescuento").val();
            $("#tipo_producto li" ).removeClass("selected");
            $("[idTipo="+id+"]").addClass("selected");
});
$(document).on("change","#nuevoRangoDescuento",function(){
            var id=$("#nuevoRangoDescuento").val();
            $("#rango li" ).removeClass("selected");
            $("[idRango="+id+"]").addClass("selected");
});
$(document).on("change","#nuevoNombreDescuento",function(){
var datos=new FormData();
datos.append("descuento",$("#nuevoNombreDescuento").val() );
datos.append("action","validate");


$.ajax({
url:"controladores/descuentos.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){
 
if(respuesta)
{
     swal({
            title: "¡El nombre de descuento ya existe,verifique!",
            icon: "error",  
          })
     $("#nuevoNombreDescuento").val("");                             
}
}
})

});


$(document).on("click","#clickDescuento",function(){
llenarSelectTipo("Seleccione Tipo",'');
llenarSelectRango("Selecione Rango",'');
})

$(document).on("click","#guardarDescuento",function(){

if($("#formNuevoDescuento").valid()){

  var datos= new FormData();
  datos.append("idTipoProducto",  $('#nuevoTipoProductoDescuento').val());
  datos.append("idRango",  $('#nuevoRangoDescuento').val());
  datos.append("action","validateCompleto");
  
  
$.ajax({
url:"controladores/descuentos.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){
if(respuesta){

   swal({               
          title: "¡El descuento ya existe,verifique!",
          icon: "error",
         }).then(function(result){
          
         })


}else
{





var datosIngreso=new FormData();
  datosIngreso.append("descripcion",  $('#nuevoNombreDescuento').val());
  datosIngreso.append("descuento",  $('#nuevoDescuento').val());
  datosIngreso.append("idTipoProducto",  $('#nuevoTipoProductoDescuento').val());
  datosIngreso.append("idRango",  $('#nuevoRangoDescuento').val());
  datosIngreso.append("action", "insert");

$.ajax({

url:"controladores/descuentos.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
if (respuesta=="ok"){
$('#tablaDescuentos').DataTable().ajax.reload();
$(".cerrarModal").click();
showNotification('alert-info', '¡El descuento ha sido guardado correctamente!', 'bottom', 'left', '', '');


  
}else{
   swal({
            title: "¡Error al ingresar datos!",
            icon: "error",  
          })

}
  




}

});


}


}//Else de validacion



})
}

})


 $(document).on("change",".descuentoUpdate",function(){

var datos=new FormData();
datos.append("idDescuento", $(this).attr("idDescuento"));
datos.append("descuento", $(this).val());
datos.append("action", "update");


$.ajax({
url:"controladores/descuentos.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
  
  if (respuesta=="ok")
  {
    showNotification('alert-info', '¡El descuento ha sido actualizado correctamente!', 'bottom', 'left', '', '');


  }else{

    swal({
            title: "¡Error al actualizar datos!",
            icon: "error",  
          })
  }
  


}

});


})