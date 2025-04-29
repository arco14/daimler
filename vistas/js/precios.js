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
      $('.tipo .dropdown-menu .inner').html(""); 
      $('#nuevoTipo').html(""); 
      $('#nuevoTipoConvenio').html(""); 
      
      $('.tipo .filter-option').text(Tipo);
      $('.tipo .dropdown-menu .inner').append('<li data-original-index="0" idTipo="0" class="active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Prenda</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoTipo').append('<option value="'+idTipo+'">'+Tipo+'</option>');
      $('#nuevoTipoConvenio').append('<option value="'+idTipo+'">'+Tipo+'</option>');
      
    $.each(res, function(i, item){
      $('#nuevoTipo').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      $('#nuevoTipoConvenio').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
          
      var index=parseInt(i)+1

      if (idTipo==item.id){
      $('.tipo .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTipo="'+item.id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }else{
      $('.tipo .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTipo="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');

      }
      
          });
}
       });
}
function llenarSelectLinea(Linea,idLinea,idTipo){
  var datos= new FormData();
  datos.append("action","listPrecio");
  datos.append("idTipo",idTipo);
  
$.ajax({
url:"controladores/lineas.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta_linea){
var res=JSON.parse(respuesta_linea);
      $('.linea .dropdown-menu .inner').html(""); 
      $('#nuevoEstiloPrecio').html(""); 
      $('#nuevoEstiloPrecioConvenio').html(""); 
      
      $('.linea .filter-option').text(Linea);
      $('.linea .dropdown-menu .inner').append('<li data-original-index="0" idLinea="0" class=" active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Linea</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoEstiloPrecio').append('<option value="'+idLinea+'">'+Linea+'</option>');
      $('#nuevoEstiloPrecioConvenio').append('<option value="'+idLinea+'">'+Linea+'</option>');
      
    $.each(res, function(i, item){
      $('#nuevoEstiloPrecio').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      $('#nuevoEstiloPrecioConvenio').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      
      var index=parseInt(i)+1

      if (idLinea==item.id){

        $('.linea .dropdown-menu .inner').append('<li data-original-index="'+index+'" idLinea="'+item.id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }else
      {
        $('.linea .dropdown-menu .inner').append('<li data-original-index="'+index+'" idLinea="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }
      
          });
}
       });
}
function llenarSelectCliente(Cliente,idCliente){
  var datos= new FormData();
  datos.append("action","list");
$.ajax({
url:"controladores/clientes.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta);
      $('#cliente .dropdown-menu .inner').html(""); 
      $('#nuevoClientePrecio').html(""); 
      $('#cliente .filter-option').text(Cliente);
      $('#cliente .dropdown-menu .inner').append('<li data-original-index="0" idCliente="0" class=" active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Cliente</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoClientePrecio').append('<option value="'+idCliente+'">'+Cliente+'</option>');
    $.each(res, function(i, item){
      $('#nuevoClientePrecio').append('<option value="'+item.id+'">'+item.nombre+'</option>');
      var index=parseInt(i)+1

      if (idCliente==item.id){

        $('#cliente .dropdown-menu .inner').append('<li data-original-index="'+index+'" idCliente="'+item.id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.nombre+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }else
      {
        $('#cliente .dropdown-menu .inner').append('<li data-original-index="'+index+'" idCliente="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.nombre+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }
      
          });
}
       });
}
$(document).ready(function() {

$('#tablaPrecios').DataTable({
responsive: true,
ajax: "ajax/datatable-precios.ajax.php",
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
$(document).on("change","#nuevoClientePrecio",function(){
            var id=$("#nuevoClientePrecio").val();
            $("#cliente li" ).removeClass( "selected" );
            $("[idCliente="+id+"]").addClass("selected");
});
$(document).on("change","#nuevaClavePrecio",function(){
repetirPrecio($("#nuevaClavePrecio").val(),"#nuevaClavePrecio");
})
$(document).on("change","#nuevaDescripcionPrecio",function(){
repetirPrecio($("#nuevaDescripcionPrecio").val(),"#nuevaDescripcionPrecio");
})
$(document).on("change","#nuevaDescripcionPrecioConvenio",function(){
repetirPrecioConvenio($("#nuevaDescripcionPrecioConvenio").val(),"#nuevaDescripcionPrecioConvenio");
})
$(document).on("change","#nuevaClavePrecioConvenio",function(){
repetirPrecioConvenio($("#nuevaClavePrecioConvenio").val(),"#nuevaClavePrecioConvenio");
})

$(document).on("change","#nuevoTipo",function(){
            var id=$(this).val();
            console.log(id);
            $(".tipo li" ).removeClass("selected");
            $("[idTipo="+id+"]").addClass("selected");
});
$(document).on("change","#nuevoTipoConvenio",function(){
            var id=$(this).val();
            console.log(id);
            $(".tipo li" ).removeClass("selected");
            $("[idTipo="+id+"]").addClass("selected");
});
function repetirPrecioConvenio(Descripcion,Campo){   
var datos=new FormData();
datos.append("descripcion",Descripcion);
datos.append("action","validateConvenio");


$.ajax({
url:"controladores/precios.controlador.php",
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
            title: "¡El precio o clave de precio ya existe,verifique!",
            icon: "error",  
          })
     $(""+Campo+"").val("");                             
}
}
})
 
}
function repetirPrecio(Descripcion,Campo){   
var datos=new FormData();
datos.append("descripcion",Descripcion);
datos.append("action","validate");


$.ajax({
url:"controladores/precios.controlador.php",
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
            title: "¡El precio o clave de precio ya existe,verifique!",
            icon: "error",  
          })
     $(""+Campo+"").val("");                             
}
}
})
 
}
$(document).on("change","#nuevoPrecioDirecto",function(){

var precio=$("#nuevoPrecioDirecto").val();

$("#precioDirectoIVA").val(  (precio*1.16).toFixed(2) );


})
$(document).on("change","#nuevoPrecioDistribuidor",function(){

var precio=$("#nuevoPrecioDistribuidor").val();

$("#precioDistribuidorIVA").val(  (precio*1.16).toFixed(2) );

})
$(document).on("change","#nuevoPrecioConvenio",function(){

var precio=$("#nuevoPrecioConvenio").val();

$("#precioConvenioIVA").val(  (precio*1.16).toFixed(2) );


})
$(document).on("click","#clickPrecio",function(){
  $("#switchLineal").html("");
  $("#switchLineal").html("<div class='switch'><label><input type='checkbox' id='linealPrecio'  value='0'><span class='lever switch-col-light-blue' ></span></label></div>");
$('#nuevaClavePrecio').val("");
$('#idPrecio').val(0);
$('#nuevoPrecioDirecto').val(0);
$('#precioDirectoIVA').val(0);
$('#precioDistribuidorIVA').val(0);
$('#nuevoPrecioDistribuidor').val(0);
$('#nuevaDescripcionPrecio').val("");
llenarSelectTipo("Seleccione Tipo","");
$("#detallePrecio").hide();
 var d= new Date();
 d.setMonth(d.getMonth()+6);
  var strDate = d.getFullYear() + "-" + ((d.getMonth()+1)<10?'0'+(d.getMonth()+1):(d.getMonth()+1)) + "-" + (d.getDate()<10?'0'+d.getDate():d.getDate());
$("#nuevaVigenciaPrecio").val(strDate);
$("#nuevoTipo").prop("disabled",false);

})
$(document).on("click","#clickPrecioConvenio",function(){

$('#nuevaClavePrecioConvenio').val("");
$('#idPrecioConvenio').val(0);
$('#nuevoPrecioConvenio').val(0);
$('#precioConvenioIVA').val(0);
$('#detallePrecioConvenio').hide();
$('#nuevaDescripcionPrecioConvenio').val("");
llenarSelectTipo("Seleccione Tipo",'');
llenarSelectCliente("Seleccione Cliente",'');

 var d= new Date();
 d.setMonth(d.getMonth()+6);
  var strDate = d.getFullYear() + "-" + ((d.getMonth()+1)<10?'0'+(d.getMonth()+1):(d.getMonth()+1)) + "-" + (d.getDate()<10?'0'+d.getDate():d.getDate());
$("#nuevaVigenciaPrecioConvenio").val(strDate);


})
$(document).on("change",".linealPrecio",function(){
if ($(this).attr("value")=="0")
{
    $(".linealPrecio").attr("value","1");


}else{
 
   $(".linealPrecio").attr("value","0")
}


})
$(document).on("click","#guardarPrecioConvenio",function(){

 if($("#formNuevoPrecioConvenio").valid()){

 var datosIngreso=new FormData();
  datosIngreso.append("clave",  $('#nuevaClavePrecioConvenio').val());
  datosIngreso.append("descripcion",  $('#nuevaDescripcionPrecioConvenio').val());
  datosIngreso.append("idTipoProducto",  $('#nuevoTipoConvenio').val());
  datosIngreso.append("vigencia",  $('#nuevaVigenciaPrecioConvenio').val());
  datosIngreso.append("idCliente",  $('#nuevoClientePrecio').val());

  if ($("#idPrecioConvenio").val()>0){
    datosIngreso.append("action",  "updateConvenio");
    datosIngreso.append("idPrecio", $("#idPrecioConvenio").val());
    
  }else{
    datosIngreso.append("action",  "insertConvenio");
  
  }

$.ajax({
url:"controladores/precios.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
if (respuesta=="ok"){
$('#tablaPreciosConvenio').DataTable().ajax.reload();
$(".cerrarModal").click();
showNotification('alert-info', '¡El precio ha sido guardado correctamente!', 'bottom', 'left', '', '');
  
}else{
   swal({
            title: "¡Error al ingresar datos!",
            icon: "error",  
          })

}
  

}

});



 }

  })
$(document).on("click","#guardarPrecio",function(){

if($("#formNuevoPrecio").valid()){

  var datosIngreso=new FormData();
  datosIngreso.append("clave",  $('#nuevaClavePrecio').val());
  datosIngreso.append("idPrecio",  $('#idPrecio').val());
  datosIngreso.append("descripcion",  $('#nuevaDescripcionPrecio').val());
  datosIngreso.append("idTipoProducto",  $('#nuevoTipo').val());
  datosIngreso.append("precioDirecto",  $('#nuevoPrecioDirecto').val());
  datosIngreso.append("precioDistribuidor",  $('#nuevoPrecioDistribuidor').val());
  datosIngreso.append("vigencia",  $('#nuevaVigenciaPrecio').val());
  datosIngreso.append("lineal",  $('.linealPrecio').val());
  datosIngreso.append("idCliente",  $('#nuevoClientePrecio').val());
  datosIngreso.append("action",  "insert");


$.ajax({

url:"controladores/precios.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
if (respuesta=="ok"){
$('#tablaPrecios').DataTable().ajax.reload();
$(".cerrarModal").click();
showNotification('alert-info', '¡El precio ha sido guardado correctamente!', 'bottom', 'left', '', '');


  
}else{
   swal({
            title: "¡Error al ingresar datos!",
            icon: "error",  
          })

}
  




}

});


}//Else de validacion

})
$(document).on("change",".vigenciaPrecio",function(){


var datos=new FormData();
datos.append("idPrecio", $(this).attr("idPrecio"));
datos.append("vigencia", $(this).val());
datos.append("action", "updateVigencia");

$.ajax({

url:"controladores/precios.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){  

if (respuesta=="ok"){

showNotification('alert-info', '¡La vigencia ha sido actualizada correctamente!', 'bottom', 'left', '', '');


  
}else{
   swal({
            title: "¡Error al actualizar datos!",
            icon: "error",  
          })

}


}

});
 



})
$(document).on("change",".vigenciaPrecioConvenio",function(){


var datos=new FormData();
datos.append("idPrecio", $(this).attr("idPrecio"));
datos.append("vigencia", $(this).val());
datos.append("action", "updateVigenciaConvenio");

$.ajax({

url:"controladores/precios.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){  

if (respuesta=="ok"){

showNotification('alert-info', '¡La vigencia ha sido actualizada correctamente!', 'bottom', 'left', '', '');


  
}else{
   swal({
            title: "¡Error al actualizar datos!",
            icon: "error",  
          })

}


}

});
 



})
$(document).on("change",".editarPrecio",function(){

var datos=new FormData();
datos.append("precioDirecto", $(".precioDirectoUpdate").val());
datos.append("precioDistribuidor", $(".precioDistribuidorUpdate").val());
datos.append("idTipo", $(this).attr("idTipo"));
datos.append("idPrecio", $(this).attr("idPrecio"));
datos.append("lineal", $(".linealPrecio").val());
datos.append("action", "update");

$.ajax({

url:"controladores/precios.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){  

if (respuesta=="ok"){
//$('#tablaPrecios').DataTable().ajax.reload();
showNotification('alert-info', '¡El precio ha sido actualizado correctamente!', 'bottom', 'left', '', '');


  
}else{
   swal({
            title: "¡Error al actualizar datos!",
            icon: "error",  
          })

}


}

});



  })
$(document).on("change",".editarPrecioConvenio",function(){

var datos=new FormData();
datos.append("precio", $(this).val());
datos.append("precio_iva", ($(this).val()*1.16).toFixed(2));
datos.append("idDetalleEstilo", $(this).attr("idDetalleEstilo"));
datos.append("action", "updatePrecioConvenio");

$.ajax({

url:"controladores/precios.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){  

if (respuesta=="ok"){
$('#tablaEstilosConvenio').DataTable().ajax.reload();
showNotification('alert-info', '¡El precio ha sido actualizado correctamente!', 'bottom', 'left', '', '');


  
}else{
   swal({
            title: "¡Error al actualizar datos!",
            icon: "error",  
          })

}


}

});



  })
$(document).on("click",".eliminarPrecio",function(){
swal({
  title: "¿Seguro de eliminar este precio?",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {



var datos=new FormData();
datos.append("idPrecio", $(this).attr("idPrecio"));
datos.append("action", "delete");

$.ajax({

url:"controladores/precios.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){  

if (respuesta=="ok"){
    showNotification('alert-info', '¡El precio ha sido eliminado correctamente!', 'bottom', 'left', '', '');
$('#tablaPreciosConvenio').DataTable().ajax.reload();


  
}else{
   swal({
            title: "¡Error al eliminar datos!",
            icon: "error",  
          })

}


}

});




  }
});
})


$(document).on("click",".eliminarEstiloPrecio",function(){

var datos=new FormData();
datos.append("idDetalleEstilo", $(this).attr("idDetalleEstilo"));
datos.append("action", "deleteEstilo");

$.ajax({

url:"controladores/precios.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){  

if (respuesta=="ok"){
$('#tablaEstilos').DataTable().ajax.reload();
showNotification('alert-info', '¡El estilo ha sido eliminado correctamente!', 'bottom', 'left', '', '');


  
}else{
   swal({
            title: "¡Error al eliminar datos!",
            icon: "error",  
          })

}


}

});

})
$(document).on("click",".eliminarEstiloPrecioConvenio",function(){

var datos=new FormData();
datos.append("idDetalleEstilo", $(this).attr("idDetalleEstilo"));
datos.append("action", "deleteEstiloConvenio");

$.ajax({

url:"controladores/precios.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){  

if (respuesta=="ok"){
$('#tablaEstilosConvenio').DataTable().ajax.reload();
showNotification('alert-info', '¡El estilo ha sido eliminado correctamente!', 'bottom', 'left', '', '');


  
}else{
   swal({
            title: "¡Error al eliminar datos!",
            icon: "error",  
          })

}


}

});

})
$(document).on("click","#tabPreciosConvenio",function(){


$('#tablaPreciosConvenio').DataTable({
responsive: true,
ajax: "ajax/datatable-precios-convenios.ajax.php",
deferRender:true,  
retrive: true,
destroy:true,
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
$(document).on("click","#tabEstilos",function(){

llenarSelectLinea('Seleccione Linea','',$("#nuevoTipo").val());
$('#tablaEstilos').DataTable({
responsive: true,
deferRender:true,  
retrive: true,
processing:true,
destroy :true,
 ajax:{
  url: "ajax/datatable-precios-estilos.ajax.php",
  type:"POST",
  data: {"idPrecio": $("#idPrecio").val()}
},
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
$(document).on("click","#agregarEstiloPrecio",function(){
  var idLinea=$("#nuevoEstiloPrecio").val().split(",")[0];
  var idMolde=$("#nuevoEstiloPrecio").val().split(",")[1];

if($("#formNuevoPrecio").valid()){


var datos=new FormData();
datos.append("idLinea",idLinea);
datos.append("idMolde",idMolde);
datos.append("action","validateEstilo");


$.ajax({
url:"controladores/precios.controlador.php",
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
            title: "¡El estilo ya existe en algun detalle,verifique!",
            icon: "error",  
          })
                             
}
else
{

var datosIngreso=new FormData();
datosIngreso.append("idLinea",idLinea);
datosIngreso.append("idMolde",idMolde);
datosIngreso.append("idPrecio", $("#idPrecio").val());
datosIngreso.append("action", "insertEstilo");

$.ajax({

url:"controladores/precios.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
if (respuesta=="ok"){
llenarSelectLinea('Seleccione Linea','');
$('#tablaEstilos').DataTable().ajax.reload();

showNotification('alert-info', '¡El estilo ha sido guardado correctamente!', 'bottom', 'left', '', '');


  
}else{
   swal({
            title: "¡Error al ingresar datos!",
            icon: "error",  
          })

}
  
}

});



}
}
})



}

})


$(document).on("click","#agregarEstiloPrecioConvenio",function(){
  var idLinea=$("#nuevoEstiloPrecioConvenio").val().split(",")[0];
  var idMolde=$("#nuevoEstiloPrecioConvenio").val().split(",")[1];

if($("#formNuevoPrecioConvenio").valid()){
//console.log(($("#nuevoPrecioConvenio").val()*1.16).toFixed(2));


var datos=new FormData();
datos.append("idLinea",idLinea);
datos.append("idMolde",idMolde);
datos.append("idCliente",$("#nuevoClientePrecio").val());
datos.append("action","validateEstiloConvenio");


$.ajax({
url:"controladores/precios.controlador.php",
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
            title: "¡El estilo ya existe en algun detalle,verifique!",
            icon: "error",  
          })                             
}
else
{

var datosIngreso=new FormData();
datosIngreso.append("idLinea",idLinea);
datosIngreso.append("idMolde",idMolde);
datosIngreso.append("precio",$("#nuevoPrecioConvenio").val());
datosIngreso.append("precio_iva",($("#nuevoPrecioConvenio").val()*1.16).toFixed(2));
datosIngreso.append("idPrecio", $("#idPrecioConvenio").val());
datosIngreso.append("action", "insertEstiloConvenio");

$.ajax({

url:"controladores/precios.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
if (respuesta=="ok"){
$('#tablaEstilosConvenio').DataTable().ajax.reload();

showNotification('alert-info', '¡El estilo ha sido guardado correctamente!', 'bottom', 'left', '', '');

}else{
   swal({
            title: "¡Error al ingresar datos!",
            icon: "error",  
          })

}
  
}

});


}
}
})

}

})

$(document).on("click","#datosPrecioConvenio",function(){


$("#detallePrecioConvenio").show();
var datosConsulta=new FormData();
datosConsulta.append("idPrecio", $(this).attr("idPrecio"));
datosConsulta.append("action", "selectConvenio");

$.ajax({

url:"controladores/precios.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta_datos){  
    $("#idPrecioConvenio").val(respuesta_datos["id"]);
    $("#nuevaClavePrecioConvenio").val(respuesta_datos["clave"]);
    $("#nuevaDescripcionPrecioConvenio").val(respuesta_datos["descripcion"]);
    $("#nuevaVigenciaPrecioConvenio").val(respuesta_datos["vigencia"]);
    
    
    llenarSelectTipo(respuesta_datos["tipo"],respuesta_datos["id_tipo_producto"]);
    $("#nuevoTipoConvenio").prop("disabled",true);

    llenarSelectLinea('Seleccione Linea','',respuesta_datos["id_tipo_producto"]);
    
    llenarSelectCliente(respuesta_datos["cliente"],respuesta_datos["id_cliente"]);
    $("#nuevoClientePrecio").prop("disabled",true);



}

});


$('#tablaEstilosConvenio').DataTable({
responsive: true,
destroy:true,
deferRender:true,  
retrive: true,
 ajax:{
  url: "ajax/datatable-precios-convenios-estilos.ajax.php",
  type:"POST",
  data: {"idPrecio": $(this).attr("idPrecio")}
},
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

$(document).on("click","#datosPrecio",function(){
$("#detallePrecio").show();
$("#tab_10").addClass("active");
$("#tab_11").removeClass("active");
$("#tabPrecios").addClass("active")
$("#tabEstilos").removeClass("active")

var datosConsulta=new FormData();
datosConsulta.append("idPrecio", $(this).attr("idPrecio"));
datosConsulta.append("action", "select");

$.ajax({

url:"controladores/precios.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta_datos){  
    $("#idPrecio").val(respuesta_datos["id"]);
    $("#nuevaClavePrecio").val(respuesta_datos["clave"]);
    $("#nuevaDescripcionPrecio").val(respuesta_datos["descripcion"]);
    $("#nuevoPrecioDirecto").val(respuesta_datos["precio_directo"]);
    $("#nuevoPrecioDistribuidor").val(respuesta_datos["precio_distribuidor"]);
    $("#precioDistribuidorIVA").val(respuesta_datos["precio_distribuidor_iva"]);
    $("#precioDirectoIVA").val(respuesta_datos["precio_directo_iva"]);
    $("#nuevaVigenciaPrecio").val(respuesta_datos["vigencia"]);
    
    if(respuesta_datos["lineal"]==1){
      $("#switchLineal").html("");
      $("#switchLineal").html("<div class='switch'><label><input type='checkbox' class='linealPrecio form-control'  value='1' checked><span class='lever switch-col-light-blue' ></span></label></div>");
      
    } else{
      $("#switchLineal").html("");
      $("#switchLineal").html("<div class='switch'><label><input type='checkbox' class='linealPrecio'  value='0' ><span class='lever switch-col-light-blue' ></span></label></div>");
      
    }
    llenarSelectTipo(respuesta_datos["tipo"],respuesta_datos["id_tipo_producto"]);
    $("#nuevoTipo").prop("disabled",true);


}

});


$('#tablaPreciosRango').DataTable({
responsive: true,
destroy:true,
deferRender:true,  
retrive: true,
 ajax:{
  url: "ajax/datatable-precios-rangos.ajax.php",
  type:"POST",
  data: {"idPrecio": $(this).attr("idPrecio")}
},
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


