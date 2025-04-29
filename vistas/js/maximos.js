function llenarSelectDivision(){
  var datos= new FormData();
  datos.append("action","list");
$.ajax({
url:"controladores/division.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta);
      $('#division .dropdown-menu .inner').html(""); 
      
      $('#nuevaDivisionMaximo').html(""); 
      $('#division .filter-option').text('Seleccione Division');
      
      $('#division .dropdown-menu .inner').append('<li data-original-index="0" idDivision="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Division</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
     
      $('#nuevaDivisionMaximo').append('<option value="">Seleccione Division</option>');
    $.each(res, function(i, item){
      $('#nuevaDivisionMaximo').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
    
      var index=parseInt(i)+1
      $('#division .dropdown-menu .inner').append('<li data-original-index="'+index+'" idDivision="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');

          });
}
       });
}

function llenarSelectAlmacen(){
  var datos= new FormData();
  datos.append("action","list");
$.ajax({
url:"controladores/almacenes.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta);
      $('#almacen .dropdown-menu .inner').html(""); 
      
      $('#nuevoAlmacenMaximo').html(""); 
      $('#almacen .filter-option').text('Seleccione Almacen');
      
      $('#almacen .dropdown-menu .inner').append('<li data-original-index="0" idAlmacen="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Almacen</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
     
      $('#nuevoAlmacenMaximo').append('<option value="">Seleccione Almacen</option>');


    $.each(res, function(i, item){
      $('#nuevoAlmacenMaximo').append('<option value="'+item.id+'">'+item.nombre+'</option>');
    
      var index=parseInt(i)+1
      $('#almacen .dropdown-menu .inner').append('<li data-original-index="'+index+'" idAlmacen="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.nombre+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      
          
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
      $('#nuevoGeneroMaximo').html(""); 
      $('#genero .filter-option').text('Seleccione Genero');
      $('#genero .dropdown-menu .inner').append('<li data-original-index="0" idGenero="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Genero</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoGeneroMaximo').append('<option value="">Seleccione Genero</option>');
    $.each(res, function(i, item){
      $('#nuevoGeneroMaximo').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      var index=parseInt(i)+1
      $('#genero .dropdown-menu .inner').append('<li data-original-index="'+index+'" idGenero="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
          });
}
       });
}

function llenarSelectLinea(){
  var datos= new FormData();
  datos.append("action","listMaximo");
$.ajax({
url:"controladores/lineas.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta);
      $('#linea .dropdown-menu .inner').html(""); 
      $('#nuevoEstiloMaximo').html(""); 
      $('#linea .filter-option').text('Seleccione Estilo');
      $('#linea .dropdown-menu .inner').append('<li data-original-index="0" idLinea="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Estilo</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoEstiloMaximo').append('<option value="" index="0">Seleccione Estilo</option>');
    $.each(res, function(i, item){
       var index=parseInt(i)+1
      $('#nuevoEstiloMaximo').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
     
      $('#linea .dropdown-menu .inner').append('<li data-original-index="'+index+'" index="'+index+'" idLinea="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
          });
}
       });
}


$( document ).ready(function() {

$('#tablaMaximos').DataTable({
responsive: true,
ajax: "ajax/datatable-maximos.ajax.php",

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

$(document).on("change","#nuevoGeneroMaximo",function(){
            var id=$("#nuevoGeneroMaximo").val();
            $("#genero li" ).removeClass( "selected" );
            $("[idGenero="+id+"]").addClass("selected");
});
$(document).on("change","#nuevaDivisionMaximo",function(){
            var id=$("#nuevaDivisionMaximo").val();           
            $("#division li" ).removeClass( "selected" );
            $("[idDivision="+id+"]").addClass("selected");
});
$(document).on("change","#nuevoAlmacenMaximo",function(){
            var id=$("#nuevoAlmacenMaximo").val();           
            $("#almacen li" ).removeClass( "selected" );
            $("[idAlmacen="+id+"]").addClass("selected");
});


$(document).on("change","#nuevaClaveMaximo",function(){
repetirMaximo($("#nuevaClaveMaximo").val(),"#nuevaClaveMaximo");
});
$(document).on("change","#nuevoMaximo",function(){
repetirMaximo($("#nuevoMaximo").val(),"#nuevoMaximo");
});

function repetirMaximo(Maximo,Campo){   
var datos=new FormData();
datos.append("maximo",Maximo);
datos.append("action","validate");


$.ajax({
url:"controladores/maximos.controlador.php",
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
            title: "¡El maximo o clave de maximo ya existe,verifique!",
            icon: "error",  
          })
     $(""+Campo+"").val("");                             
}
}
})
 
}
$(document).on("click","#clickMaximo",function(){
limpiarControlesMaximo();

})
function limpiarControlesMaximo(){
llenarSelectDivision();
llenarSelectGenero();
$("#detalleMaximos").hide();
$("#idMaximo").val(0);
$("#nuevaClaveMaximo").val("");
$("#nuevoMaximo").val("");
$("#controlDivision").show();
$("#controlGenero").show();
}


$(document).on("click",".cerrarModal",function(){

$('#tablaMaximos').DataTable().ajax.reload();
})

$(document).on("click","#guardarMaximo",function(){


if($("#formNuevoMaximo").valid()){

var datos=new FormData();
datos.append("clave",$("#nuevaClaveMaximo").val());
datos.append("descripcion",$("#nuevoMaximo").val());
datos.append("id_division",$("#nuevaDivisionMaximo").val());
datos.append("id_genero",$("#nuevoGeneroMaximo").val());


if ($("#idMaximo").val()>0){
datos.append("id",$("#idMaximo").val());
datos.append("action","update");

}else
{
datos.append("action","insert");  
}




$.ajax({
url:"controladores/maximos.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
if(respuesta=="ok")
{
         
$(".cerrarModal").click();
$('#tablaMaximos').DataTable().ajax.reload();
limpiarControlesMaximo();
showNotification('alert-info', '¡El maximo ha sido guardado correctamente!', 'bottom', 'left', '', '');
        

}else{

showNotification('alert-danger', '¡Error al ingresar datos!', 'bottom', 'left', '', '');
     
}

}
})

}
});
$(document).on("change",".maximoTallas",function(){


var datosConsulta=new FormData();
datosConsulta.append("id", $(this).attr("idTalla"));
datosConsulta.append("cantidad", $(this).val());
datosConsulta.append("campo", $(this).attr("campo"));
datosConsulta.append("action", "updateMaximo");

$.ajax({

url:"controladores/maximos.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
  
  if (respuesta=="error")
  {
    swal({
            title: "¡Error al actualizar datos!",
            icon: "error",  
          })

  }
  


}

});


})
$(document).on("click","#datosMaximo",function(){

$("#controlDivision").hide();
$("#controlGenero").hide();
$("#detalleMaximos").show();
$("#tab_1").addClass("active")
$("#tabTallas").addClass("active")

$("#tab_2").removeClass("active")
$("#tab_3").removeClass("active")
$("#tabAlmacenes").removeClass("active")
$("#tabEstilos").removeClass("active")

var datosConsulta=new FormData();
datosConsulta.append("idMaximo", $(this).attr("idMaximo"));
datosConsulta.append("action", "select");

$.ajax({

url:"controladores/maximos.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){
  
    $("#nuevaClaveMaximo").val(respuesta["clave"]);
    $("#nuevoMaximo").val(respuesta["descripcion"]);
    $("#idGenero").val(respuesta["id_genero"]);
    
    
    $("#idMaximo").val(respuesta["id"]);
   
  
}

});


$('#tablaTallas').DataTable({
responsive: true,
destroy:true,
deferRender:true,  
retrive: true,
 ajax:{
  url: "ajax/datatable-maximos-tallas.ajax.php",
  type:"POST",
  data: {"idMaximo": $(this).attr("idMaximo")}
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
$(document).on("click","#tabAlmacenes",function(){
llenarSelectAlmacen();
$('#tablaAlmacenes').DataTable({
responsive: true,
destroy:true,
deferRender:true,  
retrive: true,
 ajax:{
  url: "ajax/datatable-maximos-almacenes.ajax.php",
  type:"POST",
  data: {"idMaximo": $("#idMaximo").val()}
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
$(document).on("click","#tabEstilos",function(){
llenarSelectLinea();
$('#tablaEstilos').DataTable({
responsive: true,
destroy:true,
deferRender:true,  
retrive: true,
 ajax:{
  url: "ajax/datatable-maximos-estilos.ajax.php",
  type:"POST",
  data: {"idMaximo": $("#idMaximo").val()}
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


$(document).on("click","#agregarEstiloMaximo",function(){
var idLinea=$("#nuevoEstiloMaximo").val().split(",")[0];
var idTela=$("#nuevoEstiloMaximo").val().split(",")[1];
var idContraste=$("#nuevoEstiloMaximo").val().split(",")[2];


if($("#formNuevoMaximo").valid()){
  var datos=new FormData();
datos.append("idLinea",idLinea);
datos.append("idTela",idTela);
datos.append("idContraste",idContraste);
datos.append("idGenero",$("#idGenero").val());
datos.append("idMaximo",$("#idMaximo").val());
datos.append("action","validateEstilo");


$.ajax({
url:"controladores/maximos.controlador.php",
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
datosIngreso.append("idTela",idTela);
datosIngreso.append("idContraste",idContraste);
datosIngreso.append("idMaximo", $("#idMaximo").val());
datosIngreso.append("action", "insertEstilo");

$.ajax({

url:"controladores/maximos.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
if (respuesta=="ok"){

$('#tablaEstilos').DataTable().ajax.reload();
llenarSelectLinea();
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
$(document).on("change","#nuevoEstiloMaximo",function(){

 var datos=new FormData();
datos.append("idMaximo",$("#idMaximo").val());
datos.append("action","validateAlmacenes");


$.ajax({
url:"controladores/maximos.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){
if (respuesta==false){


    swal({               
          title: "¡Debe ingresar almacen o almacenes!",
          icon: "error",
         }).then(function(result){   
    llenarSelectAlmacen();
    $("#tab_2").addClass("active");
    $("#tab_3").removeClass("active");
    $("#tabAlmacenes").addClass("active");
    $("#tabEstilos").removeClass("active");

          })

}

 }
})

})

$(document).on("click","#agregarMaximoAlmacen",function(){

if($("#formNuevoMaximo").valid()){


  var datos=new FormData();
datos.append("idAlmacen",$("#nuevoAlmacenMaximo").val());
datos.append("idGenero",$("#idGenero").val());

datos.append("idMaximo",$("#idMaximo").val());

datos.append("action","validateAlmacen");


$.ajax({
url:"controladores/maximos.controlador.php",
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
            title: "¡El almacen ya existe en el detalle,verifique!",
            icon: "error",  
          })
                             
}
else
{



var datosIngreso=new FormData();
datosIngreso.append("idAlmacen",$("#nuevoAlmacenMaximo").val());
datosIngreso.append("idMaximo", $("#idMaximo").val());

datosIngreso.append("action", "insertAlmacen");

$.ajax({

url:"controladores/maximos.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
if (respuesta=="ok"){

$('#tablaAlmacenes').DataTable().ajax.reload();
llenarSelectAlmacen();
showNotification('alert-info', '¡El almacen ha sido guardado correctamente!', 'bottom', 'left', '', '');


  
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

$(document).on("click",".eliminarAlmacenMaximo",function(){


var datos=new FormData();
datos.append("id", $(this).attr("idDetalleAlmacen"));
datos.append("action", "deleteAlmacen");

$.ajax({

url:"controladores/maximos.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
  if (respuesta=="ok"){

    $('#tablaAlmacenes').DataTable().ajax.reload();
    showNotification('alert-info', '¡El almacen ha sido eliminado correctamente!', 'bottom', 'left', '', '');

  }
  else 
  {
   swal({
            title: "¡Error al eliminar datos!",
            icon: "error",  
          })


  }

}
});
})
$(document).on("click",".eliminarEstiloMaximo",function(){


var datos=new FormData();
datos.append("id", $(this).attr("idDetalleEstilo"));
datos.append("action", "deleteEstilo");

$.ajax({

url:"controladores/maximos.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
  if (respuesta=="ok"){

    $('#tablaEstilos').DataTable().ajax.reload();
    showNotification('alert-info', '¡El estilo ha sido eliminado correctamente!', 'bottom', 'left', '', '');

  }
  else 
  {
   swal({
            title: "¡Error al eliminar datos!",
            icon: "error",  
          })


  }
  


}

});


})

 $(document).on("change",".estatusMaximo",function(){
 
    var datos=new FormData();
    datos.append("activarId",$(this).attr("idMaximo"));
    datos.append("activarMaximo",$(this).attr("estadoMaximo"));
   datos.append("action","activate");
    $.ajax({
url:"controladores/maximos.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){ 
   
if (respuesta=="ok")
{
swal({               
     title: "¡El maximo ha sido actualizado!",
      icon: "success",
                    }).then(function(result){       
                        //Refrescar tabla de datos
                         //table.dataTable().fnUpdate(undefined,row,undefined,false); 
                         $('#tablaMaximos').DataTable().ajax.reload();     
                        
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