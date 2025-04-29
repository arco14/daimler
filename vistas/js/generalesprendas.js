function llenarSelectMarca(){
  var datos= new FormData();
  datos.append("action","list");
$.ajax({
url:"controladores/marcas.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta);
      $('#marca .dropdown-menu .inner').html(""); 
      $('#nuevaLineaMarca').html(""); 
      $('#marca .filter-option').text('Seleccione Marca');
      $('#marca .dropdown-menu .inner').append('<li data-original-index="0" idMarca="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Marca</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevaLineaMarca').append('<option value="">Seleccione Marca</option>');
    $.each(res, function(i, item){
      $('#nuevaLineaMarca').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      var index=parseInt(i)+1
      $('#marca .dropdown-menu .inner').append('<li data-original-index="'+index+'" idMarca="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
          });
}
       });
}

function llenarSelectSubcategoria(){
  var datos= new FormData();
  datos.append("action","list");
$.ajax({
url:"controladores/subcategorias.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta);
      $('#subcategoria .dropdown-menu .inner').html(""); 
      $('#nuevaSubcategoriaPrenda').html(""); 
      $('#subcategoria .filter-option').text('Seleccione Subcategoria');
      $('#subcategoria .dropdown-menu .inner').append('<li data-original-index="0" idSubcategoria="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Subcategoria</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevaSubcategoriaPrenda').append('<option value="">Seleccione Subcategoria</option>');
    $.each(res, function(i, item){
      $('#nuevaSubcategoriaPrenda').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      var index=parseInt(i)+1
      $('#subcategoria .dropdown-menu .inner').append('<li data-original-index="'+index+'" idSubcategoria="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
          });
}
       });
}
function llenarSelectCategoria(){
  var datos= new FormData();
  datos.append("action","list");
$.ajax({
url:"controladores/categorias.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta);
      $('#categoria .dropdown-menu .inner').html(""); 
      $('#nuevaCategoriaPrenda').html(""); 
      $('#categoria .filter-option').text('Seleccione Categoria');
      $('#categoria .dropdown-menu .inner').append('<li data-original-index="0" idCategoria="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Categoria</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevaCategoriaPrenda').append('<option value="">Seleccione Categoria</option>');
    $.each(res, function(i, item){
      $('#nuevaCategoriaPrenda').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      var index=parseInt(i)+1
      $('#categoria .dropdown-menu .inner').append('<li data-original-index="'+index+'" idCategoria="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
          });
}
       });
}



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
      $('.division .dropdown-menu .inner').html(""); 
      
      $('#nuevaTallaDivision').html(""); 
      $('#nuevaCategoriaDivision').html(""); 
      
      $('.division .filter-option').text('Seleccione Division');
      
      $('.division .dropdown-menu .inner').append('<li data-original-index="0" idDivision="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Division</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
     
      $('#nuevaTallaDivision').append('<option value="">Seleccione Division</option>');
      $('#nuevaCategoriaDivision').append('<option value="">Seleccione Division</option>');


    $.each(res, function(i, item){
      $('#nuevaTallaDivision').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      $('#nuevaCategoriaDivision').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
          
  
      
      var index=parseInt(i)+1
      $('.division .dropdown-menu .inner').append('<li data-original-index="'+index+'" idDivision="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      
          
          });
}
       });
}

$( document ).ready(function() {
//Activar llenado de select
llenarSelectMarca();
llenarSelectDivision();
llenarSelectSubcategoria();
llenarSelectCategoria();
$('#tablaDivision').DataTable({
responsive: true,
ajax: "ajax/datatable-division.ajax.php",
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
$('#tablaPrenda').DataTable({
responsive: true,
ajax: "ajax/datatable-prenda.ajax.php",
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
$('#tablaGeneros').DataTable({
responsive: true,
ajax: "ajax/datatable-generos.ajax.php",
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
$('#tablaMarcas').DataTable({
responsive: true,
ajax: "ajax/datatable-marcas.ajax.php",
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

$('#tablaLineas').DataTable({
responsive: true,
ajax: "ajax/datatable-lineas.ajax.php",
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
$('#tablaSubcategorias').DataTable({
responsive: true,
ajax: "ajax/datatable-subcategorias.ajax.php",
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
$('#tablaCategorias').DataTable({
responsive: true,
ajax: "ajax/datatable-categorias.ajax.php",
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
$('#tablaTallas').DataTable({
responsive: true,
ajax: "ajax/datatable-tallas.ajax.php",
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
$(document).on("change","#nuevaTallaDivision",function(){
            var id=$("#nuevaTallaDivision").val();  
            $("#division li").removeClass( "selected" );
            $("[idDivision="+id+"]").addClass("selected");
});


                        //Marca





$(document).on("click","#clickMarca",function(){
limpiarControlesMarca();
})
function limpiarControlesMarca(){
    $("#nuevaClaveMarca").val("");
         $("#nuevaMarca").val("");
         $("#nuevoTipo").val("");
 $("#idMarca").val(0);
                 
}
//Ingresar marca
$(document).on("click","#guardarMarca",function(){
//Primero se debe verificar que los campos requeridos están ingresados
if($("#formNuevaMarca").valid()){   

//En caso de que no exista la clave y la descripción, seguimos con el ingreso de datos
//Tomar datos del formulario
 var datosIngreso=new FormData();
     datosIngreso.append("clave",$("#nuevaClaveMarca").val());
     datosIngreso.append("marca",$("#nuevaMarca").val());
     datosIngreso.append("tipo",$("#nuevoTipo").val());

     if($("#idMarca").val()>0){
           datosIngreso.append("id",$("#idMarca").val());
           datosIngreso.append("action","update");

     }else{
          datosIngreso.append("action","insert");
     }
    
//Enviar al archivo ajax los datos para el ingreso de la lina
$.ajax({
url:"controladores/marcas.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){

if (respuesta=="ok")
{
    swal({               
          title: "¡La marca ha sido ingresada!",
          icon: "success",
         }).then(function(result){    
        //Refrescar tabla de datos
         $('#tablaMarcas').DataTable().ajax.reload();
        //Refrescar select de marca      
         llenarSelectMarca();
        //Limpiar controles 
          limpiarControlesMarca();
           //Cerrar el modal
         $("#cerrarModalMarca").click();
                    
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


}

})
$(document).on("change","#nuevaClaveMarca",function(){
repetirMarca($("#nuevaClaveMarca").val(),"#nuevaClaveMarca");
});
$(document).on("change","#nuevaMarca",function(){
repetirMarca($("#nuevaMarca").val(),"#nuevaMarca");
});

function repetirMarca(Marca,Campo){  
var datos=new FormData();
datos.append("marca",Marca);
datos.append("action","validate");


$.ajax({
url:"controladores/marcas.controlador.php",
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
            title: "¡La marca o clave de marca ya existe,verifique!",
            icon: "error",  
          });
     $(""+Campo+"").val("");                             
    
}
}
})
 
}


$(document).on("click","#datosMarca",function(){
var datosConsulta=new FormData();
datosConsulta.append("idMarca", $(this).attr("idMarca"));
datosConsulta.append("action", "select");

$.ajax({

url:"controladores/marcas.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){

$('#nuevoTipo').val(respuesta["tipo"]);
$("#tipo li" ).removeClass("selected");
$('#tipo .filter-option').text(respuesta["tipo"]);
$("#tipo").addClass("selected"); 


$("#nuevaClaveMarca").val(respuesta["clave"]);
$("#nuevaMarca").val(respuesta["descripcion"]);

$("#idMarca").val(respuesta["id"]);




}

});
})

//Cambiar estado de marca
 $(document).on("change",".estatusMarca",function(){

  var datos=new FormData();
  datos.append("activarId",$(this).attr("idMarca"));
  datos.append("activarMarca",$(this).attr("estadoMarca"));
  datos.append("action","activate");
  
  $.ajax({
url:"controladores/marcas.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
swal({         
     title: "¡La marca ha sido actualizada!",
      icon: "success",
          })
        $('#tablaMarcas').DataTable().ajax.reload();
         llenarSelectMarca();
}
  })
  
 })

  /*Linea
  Evitar repetir clave y linea*/
$(document).on("change","#nuevaClaveLinea",function(){
repetirLinea($("#nuevaClaveLinea").val(),"#nuevaClaveLinea");
});
$(document).on("change","#nuevaLinea",function(){
repetirLinea($("#nuevaLinea").val(),"#nuevaLinea");
});
$(document).on("change","#nuevaLineaMarca",function(){
            var id=$("#nuevaLineaMarca").val();
            $("#marca li").removeClass( "selected" );
            $("[idMarca="+id+"]").addClass("selected");
});


function limpiarControlesLinea(){
  $("#nuevaClaveLinea").val("");
  $("#nuevaLinea").val("");
  $("#idLinea").val(0);

}
//Evitar repetir clave o linea
function repetirLinea(Linea,Campo){   
var datos=new FormData();
datos.append("linea",Linea);
datos.append("action","validate");


$.ajax({
url:"controladores/lineas.controlador.php",
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
            title: "¡La linea o clave de linea ya existe,verifique!",
            icon: "error",  
          })
     $(""+Campo+"").val("");                             
}
}
})
 
}
$(document).on("click","#clickLinea",function(){
  limpiarControlesLinea();
})
//Obtener datos de linea para actualizar
$(document).on("click","#datosLinea",function(){
 
var datosConsulta=new FormData();
datosConsulta.append("idLinea", $(this).attr("idLinea"));
datosConsulta.append("action", "select");

$.ajax({

url:"controladores/lineas.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){

$("#nuevaClaveLinea").val(respuesta["clave"]);
$("#nuevaLinea").val(respuesta["descripcion"]);
$("#idLinea").val(respuesta["id"]);

$('#nuevaLineaMarca').val(respuesta["id_marca"]);
$("#marca li" ).removeClass("selected" );
$('#marca .filter-option').text(respuesta["marca"]);
$("#marca [idMarca="+respuesta["id_marca"]+"]").addClass("selected");



}


});
})
 //Guardar linea
$(document).on("click","#guardarLinea",function(){
//Primero se debe verificar que los campos requeridos están ingresados
if($("#formNuevaLinea").valid()){   
//Tomar datos del formulario
    var datos=new FormData();
    datos.append("clave",$("#nuevaClaveLinea").val());
    datos.append("linea",$("#nuevaLinea").val());
    datos.append("id_marca",$("#nuevaLineaMarca").val());
if ($("#idLinea").val()>0){
      datos.append("id",$("#idLinea").val());
      datos.append("action","update");
      
}else{
      datos.append("action","insert");
}

    
//Enviar al archivo ajax los datos para el ingreso de la linea
$.ajax({
url:"controladores/lineas.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
//En caso de sea exitoso el movimiento, mostramos mensaje success
if (respuesta =="ok")
{
    swal({               
          title: "¡La linea ha sido ingresada!",
          icon: "success",
         }).then(function(result){    
            //Refrescar tabla de datos
         $('#tablaLineas').DataTable().ajax.reload();
            //Limpiar controles 
         limpiarControlesLinea();
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

      }
})

 //Cambiar estado de linea
 $(document).on("change",".estatusLinea",function(){
    var datos=new FormData();
    datos.append("activarId",$(this).attr("idLinea"));
    datos.append("activarLinea",$(this).attr("estadoLinea"));
    datos.append("action","activate");
    
    $.ajax({
url:"controladores/lineas.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
    
if (respuesta=="ok")
{
swal({               
     title: "¡La linea ha sido actualizada!",
      icon: "success",
                    })    
                       
     $('#tablaLineas').DataTable().ajax.reload();
                   
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
    
 })







 /*Subcategoria
  Evitar repetir clave y subcategoria*/
$(document).on("change","#nuevaClaveSubcategoria",function(){
repetirSubcategoria($("#nuevaClaveSubcategoria").val(),"#nuevaClaveSubcategoria");
});
$(document).on("change","#nuevaSubcategoria",function(){
repetirSubcategoria($("#nuevaSubcategoria").val(),"#nuevaSubcategoria");
});

//Evitar repetir clave o linea
function repetirSubcategoria(Subcategoria,Campo){

  
var datos=new FormData();
datos.append("subcategoria",Subcategoria);
datos.append("action","validate");


$.ajax({
url:"controladores/subcategorias.controlador.php",
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
            title: "¡La subcategoria o clave de subcategoria ya existe,verifique!",
            icon: "error",  
          });
     $(""+Campo+"").val("");                             

}
}
})
 
}
$(document).on("click","#clickSubcategoria",function(){
limpiarControlesSubcategoria();
})
function limpiarControlesSubcategoria(){
  $("#nuevaClaveSubcategoria").val("");
  $("#nuevaSubcategoria").val("");
 $("#idSubcategoria").val(0);
   
}

//Enviar información para ingreso de datos mediante AJAX
$(document).on("click","#guardarSubcategoria",function(){
//Primero se debe verificar que los campos requeridos están ingresados
if($("#formNuevaSubcategoria").valid()){   
//Tomar datos del formulario
    var datos=new FormData();
    datos.append("clave",$("#nuevaClaveSubcategoria").val());
    datos.append("subcategoria",$("#nuevaSubcategoria").val());

if ($("#idSubcategoria").val()>0){
    datos.append("id",$("#idSubcategoria").val());
    datos.append("action","update");
    
}else{
    datos.append("action","insert");
}


//Enviar al archivo ajax los datos para el ingreso de la lina
$.ajax({
url:"controladores/subcategorias.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
//En caso de sea exitoso el movimiento, mostramos mensaje success
if (respuesta =="ok")
{
    swal({               
          title: "¡La subcategoria ha sido ingresada!",
          icon: "success",
         }).then(function(result){    
            //Refrescar tabla de datos
         $('#tablaSubcategorias').DataTable().ajax.reload();
         llenarSelectSubcategoria();
            //Limpiar controles 
          limpiarControlesSubcategoria();
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
           
        }
})




//Obtener datos de subcategoria para actualizar
$(document).on("click","#datosSubcategoria",function(){

var datosConsulta=new FormData();
datosConsulta.append("idSubcategoria", $(this).attr("idSubcategoria"));
datosConsulta.append("action", "select");

$.ajax({

url:"controladores/subcategorias.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){

$("#nuevaClaveSubcategoria").val(respuesta["clave"]);
$("#nuevaSubcategoria").val(respuesta["descripcion"]);
$("#idSubcategoria").val(respuesta["id"]);
}

});

})


 //Cambiar estado de subcategoria
 $(document).on("change",".estatusSubcategoria",function(){
 
    
    var datos=new FormData();
    datos.append("activarId",$(this).attr("idSubcategoria"));
    datos.append("activarSubcategoria",$(this).attr("estadoSubcategoria"));
    datos.append("action","activate");
    
    $.ajax({
url:"controladores/subcategorias.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
if (respuesta=="ok")
{
swal({               
     title: "¡La subcategoria ha sido actualizada!",
      icon: "success",
                    }).then(function(result){       
                        //Refrescar tabla de datos
                        $('#tablaSubcategorias').DataTable().ajax.reload();
                        llenarSelectSubcategoria();
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
    
 })





  
$(document).on("change","#nuevaCategoriaDivision",function(){
            var id=$("#nuevaCategoriaDivision").val();
            $( ".division li" ).removeClass( "selected" );
            $("[idDivision="+id+"]").addClass("selected");
});

$(document).on("change","#nuevaCategoria",function(){
repetirCategoria($("#nuevaCategoria").val(),"#nuevaCategoria");
});

$(document).on("change","#nuevaClaveCategoria",function(){
repetirCategoria($("#nuevaClaveCategoria").val(),"#nuevaClaveCategoria");
});



function repetirCategoria(Categoria,Campo){ 
var datos=new FormData();
datos.append("categoria",Categoria);
datos.append("action","validate");


$.ajax({
url:"controladores/categorias.controlador.php",
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
            title: "¡La categoria o clave de categoria ya existe,verifique!",
            icon: "error",  
          });
     $(""+Campo+"").val("");                             
     
}
}
})
 
}



//Obtener datos de categoria para actualizar
$(document).on("click","#datosCategoria",function(){

var datosConsulta=new FormData();
datosConsulta.append("idCategoria", $(this).attr("idCategoria"));
datosConsulta.append("action", "select");

$.ajax({

url:"controladores/categorias.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){
$("#nuevaClaveCategoria").val(respuesta["clave"]);

$("#nuevaCategoria").val(respuesta["descripcion"]);
$("#idCategoria").val(respuesta["id"]);

$('#nuevaCategoriaDivision').val(respuesta["id_division"]);
$(".division li" ).removeClass("selected");
$('.division .filter-option').text(respuesta["division"]);
$(".division [idDivision="+respuesta["id_division"]+"]").addClass("selected");  





}
});



})

function limpiarControlesCategoria(){
$("#nuevaClaveCategoria").val("");
$("#nuevaCategoria").val("");
$("#idCategoria").val(0);
llenarSelectDivision();
}
$(document).on("click","#clickCategoria",function(){
limpiarControlesCategoria();
})

 //Guardar categoria
$(document).on("click","#guardarCategoria",function(){
//Primero se debe verificar que los campos requeridos están ingresados
if($("#formNuevaCategoria").valid()){


 var datosIngreso=new FormData();
 datosIngreso.append("clave",$("#nuevaClaveCategoria").val());
 datosIngreso.append("categoria",$("#nuevaCategoria").val());
 datosIngreso.append("id_division",$("#nuevaCategoriaDivision").val());

if ($("#idCategoria").val()>0){
 datosIngreso.append("id",$("#idCategoria").val());
 datosIngreso.append("action","update");
 
}else
{
 datosIngreso.append("action","insert");
}
 
   
$.ajax({
url:"controladores/categorias.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){

if (respuesta=="ok")
{
    swal({               
          title: "¡La categoria ha sido ingresada!",
          icon: "success",
         }).then(function(result){    
            //Refrescar tabla de datos
         $('#tablaCategorias').DataTable().ajax.reload();
         llenarSelectCategoria();
            //Limpiar controles 
         limpiarControlesCategoria();
      
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
           //Else del validador del formulario
        }

});


//Cambiar estado de categoria
 $(document).on("change",".estatusCategoria",function(){    
    var datos=new FormData();
    datos.append("activarId",$(this).attr("idCategoria"));
    datos.append("activarCategoria",$(this).attr("estadoCategoria"));
    datos.append("action","activate");
    
    $.ajax({
url:"controladores/categorias.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
    
if (respuesta=="ok")
{
swal({               
     title: "¡La categoria ha sido actualizada!",
      icon: "success",
                    }).then(function(result){       
                        //Refrescar tabla de datos
                        $('#tablaCategorias').DataTable().ajax.reload();
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
    
 })

 //Cambiar estado de genero
 $(document).on("change",".estatusGenero",function(){
    var idGenero=$(this).attr("idGenero");
    var estadoGenero=$(this).attr("estadoGenero");
    
    var datos=new FormData();
    datos.append("activarId",idGenero);
    datos.append("activarGenero",estadoGenero);

    $.ajax({
url:"controladores/generos.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){ 
if (respuesta=="ok")
{
swal({               
     title: "¡El genero ha sido actualizado!",
      icon: "success",
                    }).then(function(result){       
                        //Refrescar tabla de datos
                        //$('#tablaCategorias').DataTable().ajax.reload();
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
    
 })


//Prenda


$(document).on("change","#nuevaCategoriaPrenda",function(){
            var id=$("#nuevaCategoriaPrenda").val();
            $( "#categoria li" ).removeClass( "selected" );
            $("[idCategoria="+id+"]").addClass("selected");
});
$(document).on("change","#nuevaSubcategoriaPrenda",function(){
            var id=$("#nuevaSubcategoriaPrenda").val();
            $( "#subcategoria li" ).removeClass( "selected" );
            $("[idSubcategoria="+id+"]").addClass("selected");
});
$(document).on("click","#clickPrenda",function(){
limpiarControlesPrenda();
})

function limpiarControlesPrenda(){
llenarSelectCategoria();
llenarSelectSubcategoria();
$("#idPrenda").val(0);

}

$(document).on("click","#guardarPrenda",function(){

if($("#formNuevaPrenda").valid()){

var datos=new FormData();
  datos.append("id_categoria",$("#nuevaCategoriaPrenda").val());
  datos.append("id_subcategoria",$("#nuevaSubcategoriaPrenda").val());
  datos.append("action","validate");
  
$.ajax({
url:"controladores/prenda.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta)
//console.log("respuesta",res);
if(res)
{
          swal({
            title: "¡La prenda ya existe,verifique!",
            icon: "error",  
          });
          limpiarControlesPrenda();
                        
}
else
{

//Tomar datos del formulario
    var datosIngreso=new FormData();
    datosIngreso.append("categoria",$("#nuevaCategoriaPrenda").val());
    datosIngreso.append("subcategoria",$("#nuevaSubcategoriaPrenda").val());

if ($("#idPrenda").val()>0){
  datosIngreso.append("id",$("#idPrenda").val());
  datosIngreso.append("action","update");
}else{
  datosIngreso.append("action","insert");
}
    
    
//Enviar al archivo ajax los datos para el ingreso de la talla
$.ajax({
url:"controladores/prenda.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
//En caso de sea exitoso el movimiento, mostramos mensaje success
if (respuesta=="ok")
{
    swal({               
          title: "¡La prenda ha sido ingresada!",
          icon: "success",
         }).then(function(result){    
            //Refrescar tabla de datos
         $('#tablaPrenda').DataTable().ajax.reload();
            //Limpiar controles 
          limpiarControlesPrenda();

           //Cerrar el modal
         $("#cerrarModalPrenda").click();
                    
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





}
}
})




}
})
$(document).on("click","#datosPrenda",function(){

var datosConsulta=new FormData();
datosConsulta.append("idPrenda", $(this).attr("idPrenda"));
datosConsulta.append("action", "select");

$.ajax({

url:"controladores/prenda.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){

$('#idPrenda').val(respuesta["id"]);
$('#nuevaCategoriaPrenda').val(respuesta["id_categoria"]);
$("#categoria li" ).removeClass("selected" );
$('#categoria .filter-option').text(respuesta["categoria"]);
$("#categoria [idCategoria="+respuesta["id_categoria"]+"]").addClass("selected");

$('#nuevaSubcategoriaPrenda').val(respuesta["id_subcategoria"]);
$("#subcategoria li" ).removeClass("selected" );
$('#subcategoria .filter-option').text(respuesta["subcategoria"]);
$("#subcategoria [idSubcategoria="+respuesta["id_subcategoria"]+"]").addClass("selected");

}

});

})

 $(document).on("change",".estatusPrenda",function(){
    
    var datos=new FormData();
    datos.append("activarId",$(this).attr("idPrenda"));
    datos.append("activarPrenda",$(this).attr("estatusPrenda"));
    datos.append("action","activate");


    $.ajax({
url:"controladores/prenda.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){ 
if (respuesta=="ok")
{
swal({               
     title: "¡La prenda ha sido actualizada!",
      icon: "success",
                    })
        $('#tablaPrenda').DataTable().ajax.reload();
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
    
 })




                    


                    //Tallas
$(document).on("click","#clickTalla",function(){
limpiarControlesTalla();
})

function limpiarControlesTalla(){

llenarSelectDivision();
$("#idTalla").val(0);
$("#nuevaClaveTalla").val("");
$("#nuevaTallaDivision").val("");
$("#nuevaTallaOrden").val("");
}

$(document).on("change","#nuevaClaveTalla",function(){
repetirTalla($("#nuevaClaveTalla").val(),"#nuevaClaveTalla");
});
$(document).on("change","#nuevaTalla",function(){
repetirTalla($("#nuevaTalla").val(),"#nuevaTalla");
});

//Evitar repetir clave o linea
function repetirTalla(Talla,Campo){

  
var datos=new FormData();
datos.append("talla",Talla);
datos.append("action","validate");


$.ajax({
url:"controladores/tallas.controlador.php",
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
            title: "¡La talla o clave de talla ya existe,verifique!",
            icon: "error",  
          });
     $(""+Campo+"").val("");                             

}
}
})
 
}



$(document).on("click","#guardarTalla",function(){
//Primero se debe verificar que los campos requeridos están ingresados
if($("#formNuevaTalla").valid()){

//Tomar datos del formulario
    var datosIngreso=new FormData();
    datosIngreso.append("clave",$("#nuevaClaveTalla").val());
    datosIngreso.append("talla",$("#nuevaTalla").val());
    datosIngreso.append("orden",$("#nuevaTallaOrden").val());
    datosIngreso.append("id_division",$("#nuevaTallaDivision").val());

    if($("#idTalla").val()>0){
      datosIngreso.append("id",$("#idTalla").val());
      datosIngreso.append("action","update");
    }else{
            datosIngreso.append("action","insert");
    }
    
    
//Enviar al archivo ajax los datos para el ingreso de la talla
$.ajax({
url:"controladores/tallas.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
//En caso de sea exitoso el movimiento, mostramos mensaje success


if (respuesta=="ok")
{
    swal({               
          title: "¡La talla ha sido ingresada!",
          icon: "success",
         }).then(function(result){    
            //Refrescar tabla de datos
         $('#tablaTallas').DataTable().ajax.reload();
            //Limpiar controles 
        limpiarControlesTalla();
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
           //Else del validador del formulario
        }

})


//Obtener datos de talla para actualizar
$(document).on("click","#datosTalla",function(){
 
 var datosConsulta=new FormData();
datosConsulta.append("idTalla", $(this).attr("idTalla"));
datosConsulta.append("action", "select");

$.ajax({

url:"controladores/tallas.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){


$("#nuevaClaveTalla").val(respuesta["clave"]);
$("#nuevaTalla").val(respuesta["descripcion"]);

$("#nuevaTallaOrden").val(respuesta["orden"]);
$("#idTalla").val(respuesta["id"]);

$('#nuevaTallaDivision').val(respuesta["id_division"]);
$(".division li" ).removeClass("selected");
$('.division .filter-option').text(respuesta["division"]);
$(".division [idDivision="+respuesta["id_division"]+"]").addClass("selected");  

}
});
});

 //Cambiar estado de talla
 $(document).on("change",".estatusTalla",function(){
    var datos=new FormData();
    datos.append("activarId",$(this).attr("idTalla"));
    datos.append("activarTalla",$(this).attr("estadoTalla"));
    datos.append("action","activate");
    

    $.ajax({
url:"controladores/tallas.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){ 
if (respuesta=="ok")
{
swal({               
     title: "¡La talla ha sido actualizado!",
      icon: "success",
                    })    
                        //Refrescar tabla de datos
     $('#tablaTallas').DataTable().ajax.reload();
                  
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
    
 })
