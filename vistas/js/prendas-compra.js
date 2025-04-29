function llenarSelectPrenda(){
  var datos= new FormData();
  datos.append("action","list");
$.ajax({
url:"controladores/prenda.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta_prenda){
var res=JSON.parse(respuesta_prenda);
      $('#prenda .dropdown-menu .inner').html(""); 
      $('#nuevaPrenda').html(""); 
      $('#prenda .filter-option').text('Seleccione Prenda');
      $('#prenda .dropdown-menu .inner').append('<li data-original-index="0" idPrenda="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Prenda</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevaPrenda').append('<option value="">Seleccione Prenda</option>');
    $.each(res, function(i, item){
      $('#nuevaPrenda').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      var index=parseInt(i)+1
      $('#prenda .dropdown-menu .inner').append('<li data-original-index="'+index+'" idPrenda="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
          });
}
       });
}

function llenarSelectTalla(idTalla,Talla){
  var datosTalla= new FormData();
    datosTalla.append("idPrenda",  $('#nuevaPrenda').val());
  datosTalla.append("idGenero",  $('#nuevoGeneroPrenda').val());
  datosTalla.append("action","list");
  
$.ajax({
url:"controladores/tallas.controlador.php",
method:"POST",
data:datosTalla,
cache:false,
contentType:false,
processData:false,
success:function(respuesta_talla){
var res=JSON.parse(respuesta_talla);
      $('#talla .dropdown-menu .inner').html(""); 
      $('#editarTallaPrenda').html(""); 
      $('#talla .filter-option').text(Talla);
      $('#talla .dropdown-menu .inner').append('<li data-original-index="0" idTalla="0" ><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Talla</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#editarTallaPrenda').append('<option value="'+idTalla+'">'+Talla+'</option>');
    

    $.each(res, function(i, item){
    
      $('#editarTallaPrenda').append('<option value="'+item.id+'">'+item.talla+'</option>');
      var index=parseInt(i)+1
    if (idTalla==item.id){
        $('#talla .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTalla="'+item.id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.talla+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');

    }else{
        $('#talla .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTalla="'+item.id+'" ><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.talla+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
    }

      
          });


}
       });


}

function llenarSelectGenero(){
  var datos= new FormData();
  datos.append("action","list");
$.ajax({
url:"controladores/generos.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta);
      $('#genero .dropdown-menu .inner').html(""); 
      $('#nuevoGeneroPrenda').html(""); 
      $('#genero .filter-option').text('Seleccione Genero');
      $('#genero .dropdown-menu .inner').append('<li data-original-index="0" idGenero="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Genero</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoGeneroPrenda').append('<option value="">Seleccione Genero</option>');
    $.each(res, function(i, item){
      $('#nuevoGeneroPrenda').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      var index=parseInt(i)+1
      $('#genero .dropdown-menu .inner').append('<li data-original-index="'+index+'" idGenero="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
          });
}
       });
}
function llenarSelectLinea(){
  var datos= new FormData();
  datos.append("action","listCompra");
$.ajax({
url:"controladores/lineas.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta_linea){
var res=JSON.parse(respuesta_linea);
      $('#linea .dropdown-menu .inner').html(""); 
      $('#nuevaLineaPrenda').html(""); 
      $('#linea .filter-option').text('Seleccione Linea');
      $('#linea .dropdown-menu .inner').append('<li data-original-index="0" idLinea="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Linea</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevaLineaPrenda').append('<option value="">Seleccione Prenda</option>');
    $.each(res, function(i, item){
      $('#nuevaLineaPrenda').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      var index=parseInt(i)+1
      $('#linea .dropdown-menu .inner').append('<li data-original-index="'+index+'" idLinea="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
          });
}
       });
}
function llenarSelectColor(){
  var datos= new FormData();
  datos.append("action","list");
$.ajax({
url:"controladores/colores_telas.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta);
      $('#color .dropdown-menu .inner').html(""); 
      $('#nuevoColorPrenda').html(""); 
      $('#color .filter-option').text('Seleccione Color');
      $('#color .dropdown-menu .inner').append('<li data-original-index="0" idColor="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Color</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoColorPrenda').append('<option value="">Seleccione Color</option>');

    $.each(res, function(i, item){
      $('#nuevoColorPrenda').append('<option value="'+item.id+'">'+item.descripcion+'</option>');

      var index=parseInt(i)+1
      $('#color .dropdown-menu .inner').append('<li data-original-index="'+index+'" idColor="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
  
          
          });
}
       });
}


$( document ).ready(function() {
  document.title = 'Articulos';
$('#tablaPrendas').DataTable({
responsive: true,
ajax: "ajax/datatable-prendas-compra.ajax.php",
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


llenarSelectPrenda();
llenarSelectGenero();
llenarSelectLinea();
llenarSelectColor();

});

$(document).on("click","#clickPrenda",function(){


 $('#nuevaPrenda').val(0);
 $("#prenda li" ).removeClass("selected" );
 $('#prenda .filter-option').text("Seleccione Prenda");
 $("#prenda [idPrenda='0']").addClass('selected');

 $('#nuevoGeneroPrenda').val(0);
 $("#genero li" ).removeClass("selected" );
 $('#genero .filter-option').text("Seleccione Genero");
 $("#genero [idGenero='0']").addClass('selected');

 

 $('#nuevaLineaPrenda').val(0);
 $("#linea li" ).removeClass("selected" );
 $('#linea .filter-option').text("Seleccione Linea");
 $("#linea [idLinea='0']").addClass('selected');

  $('#nuevoColorPrenda').val(0);
 $("#color li" ).removeClass("selected" );
 $('#color .filter-option').text("Seleccione Color");
 $("#color [idColor='0']").addClass('selected');


 

 $(".controlesDatosPrenda").hide();
 $("#tallas").html("");
$("#idPrenda").val(0);

});
function llenarTallas(){




if ($("#idPrenda").val()==0){

  var datos= new FormData();
  datos.append("idPrenda",  $('#nuevaPrenda').val());
  datos.append("idGenero",  $('#nuevoGeneroPrenda').val());
  datos.append("action","list");
  
  
$.ajax({
url:"controladores/tallas.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){
 $('#tallas').html("");

if (respuesta!=""){
$("#tallas").append("<b>Talla</b><select id='optgroup' name='optgroup' class='ms' multiple='multiple'></select>");
    $.each(respuesta, function(i, item){

      $('#optgroup').append('<option value="'+item.id+'">'+item.talla+'</option>');
     
})

$('#optgroup').multiSelect({ selectableOptgroup: true });  
}

  }
       });


}



}

$(document).on("change","#nuevoGeneroPrenda",function(){
            var id=$("#nuevoGeneroPrenda").val();
            $("#genero li" ).removeClass( "selected" );
            $("#genero [idGenero="+id+"]").addClass("selected");
            llenarTallas();
});


$(document).on("change","#nuevaLineaPrenda",function(){
            var id=$("#nuevaLineaPrenda").val();
            $("#linea li" ).removeClass( "selected" );
            $("#linea [idLinea="+id+"]").addClass("selected");
           
});
$(document).on("change","#nuevoColorPrenda",function(){
            var id=$("#nuevoColorPrenda").val();
            $("#color li" ).removeClass( "selected" );
            $("#color [idColor="+id+"]").addClass("selected");
           
});
$(document).on("change","#nuevaPrenda",function(){
            var id=$("#nuevaPrenda").val();
            $("#prenda li" ).removeClass( "selected" );
            $("#prenda [idPrenda="+id+"]").addClass("selected");
            llenarTallas();
});
$(document).on("change","#editarTallaPrenda",function(){
            var id=$("#editarTallaPrenda").val();
            $("#talla li" ).removeClass( "selected" );
            $("#talla [idTalla="+id+"]").addClass("selected");
            
});




$(document).on("click","#guardarPrenda",function(){

if($("#formNuevoPrenda").valid()){


if ($("#idPrenda").val()==0){
if($("#optgroup").val() !=null ){



 $.each($("#optgroup").val(), function(i, item){

var datos= new FormData();
  datos.append("idTipo",  $('#nuevaPrenda').val());
  datos.append("idLinea",  $('#nuevaLineaPrenda').val());
  datos.append("idGenero",  $('#nuevoGeneroPrenda').val());
  datos.append("idColor",  $('#nuevoColorPrenda').val());
  datos.append("idTalla",  item);
  datos.append("action","validate");
  
  
$.ajax({
url:"controladores/prendas-compra.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){
if(respuesta){

   swal({               
          title: "¡La prenda ya existe,verifique!",
          icon: "error",
         }).then(function(result){
          
         })


}else
{





var datosIngreso=new FormData();
  datosIngreso.append("idPrenda",  0);
  datosIngreso.append("idGenero",  $('#nuevoGeneroPrenda').val());
  datosIngreso.append("idLinea",  $('#nuevaLineaPrenda').val());
  datosIngreso.append("idTipo",  $('#nuevaPrenda').val());
  datosIngreso.append("idColor",  $('#nuevoColorPrenda').val());
  
  datosIngreso.append("idTalla",  item);
  datosIngreso.append("action", "insert");

$.ajax({

url:"controladores/prendas-compra.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
if (respuesta=="ok"){


$('#tablaPrendas').DataTable().ajax.reload();
$(".cerrarModal").click();
showNotification('alert-info', '¡Las prendas han sido guardadas correctamente!', 'bottom', 'left', '', '');


  
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
       });



 })

  


} //Condicion de seleccionar talla

else{

      swal({               
          title: "¡Debe seleccionar alguna talla!",
          icon: "error",
         })
}



}//Else validacion idPrenda

else

{


var datos= new FormData();
  datos.append("idTipo",  $('#nuevaPrenda').val());
  datos.append("idLinea",  $('#nuevaLineaPrenda').val());
  datos.append("idGenero",  $('#nuevoGeneroPrenda').val());
  datos.append("idColor",  $('#nuevoColorPrenda').val());
  datos.append("idTalla",  $("#editarTallaPrenda").val());
  datos.append("action","validate");
  
$.ajax({
url:"controladores/prendas-compra.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){
if(respuesta){

   swal({               
          title: "¡La prenda ya existe,verifique!",
          icon: "error",
         }).then(function(result){
          
         })


}
else
{



var datosIngreso=new FormData();
  datosIngreso.append("idPrenda",  $("#idPrenda").val());
  datosIngreso.append("idGenero",  $('#nuevoGeneroPrenda').val());
  datosIngreso.append("idLinea",  $('#nuevaLineaPrenda').val());
  datosIngreso.append("idTipo",  $('#nuevaPrenda').val());
  datosIngreso.append("idColor",  $('#nuevoColorPrenda').val());
  datosIngreso.append("idTalla",  $('#editarTallaPrenda').val());
  datosIngreso.append("action", "insert");

$.ajax({

url:"controladores/prendas-compra.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
if (respuesta=="ok"){

$('#tablaPrendas').DataTable().ajax.reload();
$(".cerrarModal").click();
showNotification('alert-info', '¡La prenda ha sido actualizada correctamente!', 'bottom', 'left', '', '');


  
}else{
   swal({
            title: "¡Error al actualizar datos!",
            icon: "error",  
          })

}
  




}

});










}
}
})




}






}//Else de validacion



})

$(document).on("click","#datosPrenda",function(){

$("#tallas").html("");
$(".controlesDatosPrenda").show();

var datosConsulta=new FormData();
datosConsulta.append("idPrenda", $(this).attr("idPrenda"));
datosConsulta.append("action", "select");

$.ajax({

url:"controladores/prendas-compra.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta_datos){  
    $("#idPrenda").val(respuesta_datos["id"]);
    $("#claveSku").val(respuesta_datos["sku"]);
    $("#descripcionPrenda").val(respuesta_datos["descripcion"]);


    $('#nuevaPrenda').val(respuesta_datos["id_prenda"]);
    $("#prenda li" ).removeClass("selected" );
    $('#prenda .filter-option').text(respuesta_datos["prenda"]);
    $("#prenda [idPrenda="+respuesta_datos["id_prenda"]+"]").addClass("selected");

    $('#nuevoGeneroPrenda').val(respuesta_datos["id_genero"]);
    $("#genero li" ).removeClass("selected" );
    $('#genero .filter-option').text(respuesta_datos["genero"]);
    $("#genero [idGenero="+respuesta_datos["id_genero"]+"]").addClass("selected");


    $('#nuevaLineaPrenda').val(respuesta_datos["id_linea"]);
    $("#linea li" ).removeClass("selected" );
    $('#linea .filter-option').text(respuesta_datos["linea"]);
    $("#linea [idLinea="+respuesta_datos["id_linea"]+"]").addClass("selected");
    
    $('#nuevoColorPrenda').val(respuesta_datos["id_color"]);
    $("#color li" ).removeClass("selected" );
    $('#color .filter-option').text(respuesta_datos["color"]);
    $("#color [idColor="+respuesta_datos["id_color"]+"]").addClass("selected");
        llenarSelectTalla(respuesta_datos["id_talla"],respuesta_datos["talla"]);
    


    
}

});


   
})
 $(document).on("change",".estatusPrenda",function(){
 
    var datos=new FormData();
    datos.append("activarId",$(this).attr("idPrenda"));
    datos.append("activarPrenda",$(this).attr("estatusPrenda"));
   datos.append("action","activate");
    $.ajax({
url:"controladores/prendas-compra.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){ 
   
if (respuesta=="ok")
{
$('#tablaPrendas').DataTable().ajax.reload();
showNotification('alert-info', '¡La prenda ha sido actualizada correctamente!', 'bottom', 'left', '', '');


    
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