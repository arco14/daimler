

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
function llenarSelectTipoAvio(){
  var datos= new FormData();
  datos.append("action","list");
$.ajax({
url:"controladores/tipos_avio.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta);
      $('#tipo .dropdown-menu .inner').html(""); 
        
      $('#nuevoTipoAvio').html(""); 
     
      
      $('#tipo .filter-option').text('Seleccione Tipo');
      $('#tipo .dropdown-menu .inner').append('<li data-original-index="0" idTipoAvio="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Tipo</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoTipoAvio').append('<option value="">Seleccione Tipo</option>');
     
    $.each(res, function(i, item){
      $('#nuevoTipoAvio').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
    

      var index=parseInt(i)+1
      $('#tipo .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTipoAvio="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
    
  
          
          });
}
       });
}
function llenarSelectAvio(){
   var datos= new FormData();
  datos.append("action","list");
$.ajax({
url:"controladores/avios.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta);
      $('#avio .dropdown-menu .inner').html(""); 
        
      $('#nuevoAvioGrupo').html(""); 
     
      
      $('#avio .filter-option').text('Seleccione Avio');
      $('#avio .dropdown-menu .inner').append('<li data-original-index="0" idAvio="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Avio</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoAvioGrupo').append('<option value="">Seleccione Avio</option>');
     
    $.each(res, function(i, item){
      $('#nuevoAvioGrupo').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
    

      var index=parseInt(i)+1
      $('#avio .dropdown-menu .inner').append('<li data-original-index="'+index+'" idAvio="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
    
  
          
          });
}
       });
}
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
success:function(respuesta){
var res=JSON.parse(respuesta);
      $('#prenda .dropdown-menu .inner').html(""); 
      $('#nuevaPrendaGrupo').html(""); 
      $('#prenda .filter-option').text('Seleccione Prenda');
      $('#prenda .dropdown-menu .inner').append('<li data-original-index="0" idPrenda="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Prenda</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevaPrendaGrupo').append('<option value="">Seleccione Prenda</option>');
    $.each(res, function(i, item){
      $('#nuevaPrendaGrupo').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      var index=parseInt(i)+1
      $('#prenda .dropdown-menu .inner').append('<li data-original-index="'+index+'" idPrenda="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
          });
}
       });
}

function llenarSelectUnidad(){
  var datos= new FormData();
  datos.append("action","list");
$.ajax({
url:"controladores/unidades.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta);
      $('#unidad .dropdown-menu .inner').html(""); 
        
      $('#nuevaUnidadAvio').html(""); 
     
      
      $('#unidad .filter-option').text('Seleccione Unidad');
      $('#unidad .dropdown-menu .inner').append('<li data-original-index="0" idUnidad="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Unidad</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevaUnidadAvio').append('<option value="">Seleccione Unidad</option>');
     
    $.each(res, function(i, item){
      $('#nuevaUnidadAvio').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
    

      var index=parseInt(i)+1
      $('#unidad .dropdown-menu .inner').append('<li data-original-index="'+index+'" idUnidad="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
    
  
          
          });
}
       });
}
function llenarSelectProveedor(){
  var datos= new FormData();
  datos.append("llenarSelectProveedor",1);
$.ajax({
url:"controladores/proveedores.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta)


              $('.proveedor .dropdown-menu .inner').html(""); 
      $('#nuevoProveedorAvio').html(""); 
      $('#nuevoProveedorHilo').html(""); 
      


      $('.proveedor .filter-option').text('Seleccione Proveedor');
      $('.proveedor .dropdown-menu .inner').append('<li data-original-index="0" idProveedor="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Proveedor</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoProveedorAvio').append('<option value="">Seleccione Proveedor</option>');
       $('#nuevoProveedorHilo').append('<option value="">Seleccione Proveedor</option>');
        
    $.each(res, function(i, item){
      $('#nuevoProveedorAvio').append('<option value="'+item.id+'">'+item.nombre+'</option>');
      $('#nuevoProveedorHilo').append('<option value="'+item.id+'">'+item.nombre+'</option>');
       
     
      var index=parseInt(i)+1
      $('.proveedor .dropdown-menu .inner').append('<li data-original-index="'+index+'" idProveedor="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.nombre+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');

          });




      

}
       });
}

$( document ).ready(function() {
llenarSelectTipoAvio();
llenarSelectProveedor();
llenarSelectUnidad();
llenarSelectPrenda();
llenarSelectCategoria();
llenarSelectSubcategoria();
$("#detalleGrupo").hide();
$('#tablaTipoAvios').DataTable({
responsive: true,
ajax: "ajax/datatable-tipos-avios.ajax.php",

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

$('#tablaAvios').DataTable({
responsive: true,
ajax: "ajax/datatable-avios.ajax.php",

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
$('#tablaGrupoAvios').DataTable({
responsive: true,
ajax: "ajax/datatable-grupos-avio.ajax.php",

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

$('#tablaHilos').DataTable({
responsive: true,
ajax: "ajax/datatable-hilos.ajax.php",

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



$(document).on("change",".repetirTipoAvio",function(){

var datos=new FormData();
datos.append("clave",$("#nuevaClaveTipoAvio").val());
datos.append("tipo",$("#nuevoTipo").val());
datos.append("action","validate");


$.ajax({
url:"controladores/tipos_avio.controlador.php",
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
            title: "¡El tipo ya existe,verifique!",
            icon: "error",  
          });
        $("#nuevaClaveTipoAvio").val("");
         $("#nuevoTipoAvio").val("");

}
}
})

});
$(document).on("click","#clickTipoAvio",function(){

limpiarControlesTipoAvio();

})


function limpiarControlesTipoAvio(){
$("#nuevaClaveTipoAvio").val("");
$("#nuevoTipo").val("");
$("#idTipoAvio").val(0);

}


$(document).on("click","#guardarTipoAvio",function(){
//Primero se debe verificar que los campos requeridos están ingresados
if($("#formNuevoTipoAvio").valid()){   
//Tomar datos del formulario
    var datosIngreso=new FormData();
    datosIngreso.append("clave",$("#nuevaClaveTipoAvio").val());
    datosIngreso.append("tipo",$("#nuevoTipo").val());

if ($("#idTipoAvio").val()>0)
 {
   datosIngreso.append("id",$("#idTipoAvio").val());
  datosIngreso.append("action","update");

 }else{

datosIngreso.append("action","insert");
 }

//Enviar al archivo ajax los datos para el ingreso de la composicion
$.ajax({
url:"controladores/tipos_avio.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){

if (respuesta =="ok")
{
    swal({               
          title: "¡El tipo ha sido ingresado!",
          icon: "success",
         }).then(function(result){    
            //Refrescar tabla de datos
         $('#tablaTipoAvios').DataTable().ajax.reload();
         llenarSelectTipoAvio();

          
            limpiarControlesTipoAvio();
          //Cerrar el modal
         $(".cerrarModalTipoAvio").click();
                    
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
//Obtener datos de tipo para modificar
$(document).on("click","#datosTipoAvio",function(){

var datosConsulta=new FormData();
datosConsulta.append("idTipoAvio", $(this).attr("idTipoAvio"));
datosConsulta.append("action", "select");

$.ajax({

url:"controladores/tipos_avio.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){

$("#nuevaClaveTipoAvio").val(respuesta["clave"]);
$("#nuevoTipo").val(respuesta["descripcion"]);
$("#idTipoAvio").val(respuesta["id"]);


}

});



})


 //Cambiar estado de tipo
 $(document).on("change",".estatusTipoAvio",function(){
 
    var datos=new FormData();
    datos.append("activarId",$(this).attr("idTipoAvio"));
    datos.append("activarTipoAvio",$(this).attr("estadoTipoAvio"));
   datos.append("action","activate");
    $.ajax({
url:"controladores/tipos_avio.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){ 
    console.log("respuesta",respuesta);
if (respuesta=="ok")
{
swal({               
     title: "¡El tipo ha sido actualizada!",
      icon: "success",
                    }).then(function(result){       
                        //Refrescar tabla de datos
                         //table.dataTable().fnUpdate(undefined,row,undefined,false); 
                         $('#tablaTipoAvios').DataTable().ajax.reload();     
                         llenarSelectTipoAvio();

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
 $(document).on("click","#guardarProveedor",function(){
//Primero se debe verificar que los campos requeridos están ingresados
if($("#formNuevoProveedor").valid()){   
//Tomar datos del formulario
    var datosIngreso=new FormData();
    datosIngreso.append("proveedor",$("#nuevoProveedor").val());
    datosIngreso.append("contacto",$("#nuevoContacto").val());
    datosIngreso.append("telefono",$("#nuevoTelefono").val());
    datosIngreso.append("email",$("#nuevoEmail").val());
    
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
      
          llenarSelectProveedor();
            //Limpiar controles 
         $("#nuevoProveedor").val("");
         $("#nuevoContacto").val("");
         $("#nuevoTelefono").val("");
         $("#nuevoEmail").val("");
          
          //Cerrar el modal
         $("#cerrarModalProveedor").click();
                    
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
 $(document).on("change",".repetirProveedor",function(){
  var datos=new FormData();
  datos.append("validarProveedor",$("#nuevoProveedor").val());

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


 $(document).on("change","#nuevoTipoAvio",function(){
            var id=$("#nuevoTipoAvio").val();
            $("#tipo li" ).removeClass( "selected" );
            $("[idTipoAvio="+id+"]").addClass("selected");
});
$(document).on("change","#nuevaUnidadAvio",function(){
            var id=$("#nuevaUnidadAvio").val();
            $("#unidad li" ).removeClass( "selected" );
            $("[idUnidad="+id+"]").addClass("selected");
});

$(document).on("change","#nuevoProveedorAvio",function(){
            var id=$("#nuevoProveedorAvio").val();
            $(".proveedor li" ).removeClass("selected");
            $("[idProveedor="+id+"]").addClass("selected");
});

$(document).on("change","#nuevoProveedorHilo",function(){
            var id=$("#nuevoProveedorHilo").val();
            $(".proveedor li" ).removeClass("selected");
            $("[idProveedor="+id+"]").addClass("selected");
});

$(document).on("click","#clickAvio",function(){
limpiarControlesAvio();
})
function limpiarControlesAvio(){
$("#nuevaClaveAvio").val("");
$("#nuevoAvio").val("");
$("#nuevoPrecio").val(0);
$("#idAvio").val(0);
$("#variantes").show();
llenarSelectProveedor();
llenarSelectUnidad();
llenarSelectTipoAvio();

}
function ingresarVariante(){

 $.each($("#optgroup").val(), function(i, item){

  var datosIngreso=new FormData();
    datosIngreso.append("clave",$("#nuevaClaveAvio").val()+'-'+item);
    datosIngreso.append("avio",$("#nuevoAvio").val()+' - '+item);
    datosIngreso.append("precio",$("#nuevoPrecio").val());
    datosIngreso.append("id_tipo",$("#nuevoTipoAvio").val());
    datosIngreso.append("id_proveedor",$("#nuevoProveedorAvio").val());
    datosIngreso.append("id_unidad",$("#nuevaUnidadAvio").val());
    datosIngreso.append("action","insert");

  
//Enviar al archivo ajax los datos para el ingreso de la composicion
$.ajax({
url:"controladores/avios.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){


}

    })
  
  })
}
$(document).on("click","#guardarAvio",function(){

if($("#formNuevoAvio").valid()){   
//Tomar datos del formulario
    var datosIngreso=new FormData();
    datosIngreso.append("clave",$("#nuevaClaveAvio").val());
    datosIngreso.append("avio",$("#nuevoAvio").val());
    datosIngreso.append("precio",$("#nuevoPrecio").val());
    datosIngreso.append("id_tipo",$("#nuevoTipoAvio").val());
    datosIngreso.append("id_proveedor",$("#nuevoProveedorAvio").val());
    datosIngreso.append("id_unidad",$("#nuevaUnidadAvio").val());

    
        

if ($("#idAvio").val()>0)
 {
   datosIngreso.append("id",$("#idAvio").val());
  datosIngreso.append("action","update");

 }else{

datosIngreso.append("action","insert");
ingresarVariante();
 }

//Enviar al archivo ajax los datos para el ingreso de la composicion
$.ajax({
url:"controladores/avios.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){

if (respuesta =="ok")
{
    swal({               
          title: "¡El avio ha sido ingresado!",
          icon: "success",
         }).then(function(result){    
            //Refrescar tabla de datos
         $('#tablaAvios').DataTable().ajax.reload();
           llenarSelectAvio();
           limpiarControlesAvio();
          //Cerrar el modal
         $("#cerrarModalAvio").click();
                    
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
})
//Primero se debe verificar que los campos requeridos están ingresados



  


$(document).on("change","#nuevaClaveAvio",function(){
repetirAvio($("#nuevaClaveAvio").val(),"#nuevaClaveAvio");
});

$(document).on("change","#nuevoAvio",function(){
repetirAvio($("#nuevoAvio").val(),"#nuevoAvio");
});

function repetirAvio(Avio,Campo){   
var datos=new FormData();
datos.append("avio",Avio);
datos.append("action","validate");


$.ajax({
url:"controladores/avios.controlador.php",
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
            title: "¡El avio o clave de avio ya existe,verifique!",
            icon: "error",  
          })
     $(""+Campo+"").val("");                             
}
}
})
 
}

$(document).on("click","#datosAvio",function(){
  $("#variantes").hide();

var datosConsulta=new FormData();
datosConsulta.append("idAvio", $(this).attr("idAvio"));
datosConsulta.append("action", "select");

$.ajax({

url:"controladores/avios.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){
  
    $("#nuevaClaveAvio").val(respuesta["clave"]);
    $("#nuevoAvio").val(respuesta["descripcion"]);
    $("#nuevoPrecio").val(respuesta["precio"]);
    
    $("#idAvio").val(respuesta["id"]);
   
    $('#nuevoTipoAvio').val(respuesta["id_tipo"]);
    $("#tipo li" ).removeClass("selected" );
    $('#tipo .filter-option').text(respuesta["tipo"]);
    $("#tipo [idAvio="+respuesta["id_tipo"]+"]").addClass("selected");
    
    $('#nuevoProveedorAvio').val(respuesta["id_proveedor"]);
    $("#proveedor li" ).removeClass("selected" );
    $('#proveedor .filter-option').text(respuesta["proveedor"]);
    $("#proveedor [idProveedor="+respuesta["id_proveedor"]+"]").addClass("selected");
   
    $('#nuevaUnidadAvio').val(respuesta["id_unidad"]);
    $("#unidad li" ).removeClass("selected" );
    $('#unidad .filter-option').text(respuesta["unidad"]);
    $("#unidad [idUnidad="+respuesta["id_unidad"]+"]").addClass("selected");




}

});




})

 $(document).on("change",".estatusAvio",function(){
 
    var datos=new FormData();
    datos.append("activarId",$(this).attr("idAvio"));
    datos.append("activarAvio",$(this).attr("estadoAvio"));
   datos.append("action","activate");
    $.ajax({
url:"controladores/avios.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){ 
   
if (respuesta=="ok")
{
swal({               
     title: "¡El tipo ha sido actualizada!",
      icon: "success",
                    }).then(function(result){       
                        //Refrescar tabla de datos
                         //table.dataTable().fnUpdate(undefined,row,undefined,false); 
                         $('#tablaAvios').DataTable().ajax.reload();     
                         llenarSelectAvio();

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
    datosIngreso.append("action","insert");

    
    
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
       
            //Limpiar controles 
          limpiarControlesPrenda();
          llenarSelectPrenda();

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

$(document).on("change","#nuevaPrendaGrupo",function(){
            var id=$("#nuevaPrendaGrupo").val();
            $("#prenda li" ).removeClass( "selected" );
            $("[idPrenda="+id+"]").addClass("selected");
});
$(document).on("change","#nuevoAvioGrupo",function(){
            var id=$("#nuevoAvioGrupo").val();
            $("#avio li" ).removeClass( "selected" );
            $("[idAvio="+id+"]").addClass("selected");
});

$(document).on("change","#nuevaClaveGrupoAvio",function(){
repetirGrupoAvio($("#nuevaClaveGrupoAvio").val(),"#nuevaClaveGrupoAvio");
});

$(document).on("change","#nuevoGrupoAvio",function(){
repetirGrupoAvio($("#nuevoGrupoAvio").val(),"#nuevoGrupoAvio");
});

function repetirGrupoAvio(Grupo,Campo){   
var datos=new FormData();
datos.append("grupo",Grupo);
datos.append("action","validate");


$.ajax({
url:"controladores/grupos_avio.controlador.php",
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
            title: "¡El grupo o clave de grupo ya existe,verifique!",
            icon: "error",  
          })
     $(""+Campo+"").val("");                             
}
}
})
 
}
$(document).on("click","#clickGrupoAvio",function(){
limpiarControlesGrupo();
$("#detalleGrupo").hide();
})
$(document).on("click","#guardarGrupoAvio",function(){

if($("#formNuevoAvio").valid()){   
//Tomar datos del formulario
    var datosIngreso=new FormData();
    datosIngreso.append("clave",$("#nuevaClaveGrupoAvio").val());
    datosIngreso.append("grupo",$("#nuevoGrupoAvio").val());
    datosIngreso.append("id_prenda",$("#nuevaPrendaGrupo").val());

    
        

if ($("#idGrupoAvio").val()>0)
 {
   datosIngreso.append("id",$("#idGrupoAvio").val());
  datosIngreso.append("action","update");

 }else{

datosIngreso.append("action","insert");
ingresarVariante();
 }

//Enviar al archivo ajax los datos para el ingreso de la composicion
$.ajax({
url:"controladores/grupos_avio.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){

if (respuesta =="ok")
{
    swal({               
          title: "¡El grupo ha sido ingresado!",
          icon: "success",
         }).then(function(result){    
            //Refrescar tabla de datos
         $('#tablaGrupoAvios').DataTable().ajax.reload();
           limpiarControlesGrupo();

          //Cerrar el modal
         $("#cerrarModalGrupo").click();
                    
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
})

 function limpiarControlesGrupo(){
llenarSelectPrenda();
$("#nuevaClaveGrupoAvio").val("");
$("#nuevoGrupoAvio").val("");
$("#idGrupoAvio").val(0);
$("#nuevoAvioGrupo").html("");

}



$(document).on("click","#agregarDetalleGrupo",function(){


var datos=new FormData();
datos.append("id_avio",$("#nuevoAvioGrupo").val());
datos.append("id_grupo",$("#idGrupoAvio").val());
datos.append("action","validateDetalle");


$.ajax({
url:"controladores/grupos_avio.controlador.php",
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
            title: "¡El avio ya existe en el detalle,verifique!",
            icon: "error",  
          })
                             
}
else
{



var datosIngreso=new FormData();
datosIngreso.append("id_avio", $("#nuevoAvioGrupo").val());
datosIngreso.append("id_grupo", $("#idGrupoAvio").val());

datosIngreso.append("cantidad", $("#cantidadAvio").val());
datosIngreso.append("propio", $("#basic_checkbox_1").attr("value"));

datosIngreso.append("action", "insertDetalle");

$.ajax({

url:"controladores/grupos_avio.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){
if (respuesta=="ok"){
  llenarSelectAvio();
  verDetalleGrupo($("#idGrupoAvio").val());
  verDetalleGrupoAvios($("#idGrupoAvio").val());
  
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
 

})

function verDetalleGrupo(idGrupoAvio){
  var datosConsulta=new FormData();
datosConsulta.append("idGrupoAvio", idGrupoAvio);
datosConsulta.append("action", "select");

$.ajax({

url:"controladores/grupos_avio.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){
  
    $("#nuevaClaveGrupoAvio").val(respuesta["clave"]);
    $("#nuevoGrupoAvio").val(respuesta["descripcion"]);
    $("#precioGrupo").val(respuesta["precio"]);
    
    $("#idGrupoAvio").val(respuesta["id"]);
   
    $('#nuevaPrendaGrupo').val(respuesta["id_prenda"]);
    $("#prenda li" ).removeClass("selected" );
    $('#prenda .filter-option').text(respuesta["categoria"]);
    $("#prenda [idPrenda="+respuesta["id_prenda"]+"]").addClass("selected");
    


}

});


}

function verDetalleGrupoAvios(idGrupoAvio){
  var datosConsulta=new FormData();
datosConsulta.append("idGrupoAvio", idGrupoAvio);
datosConsulta.append("action", "selectDetalle");

$.ajax({

url:"controladores/grupos_avio.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){

var res=JSON.parse(respuesta);

console.log(respuesta);

$("#bodyTablaAvios").html("");
  $.each(res, function(i, item){

var checkPropio;
    if (item.propio==1)
    {
        checkPropio="SI"
    }else{
         checkPropio="NO"
    }


$("#bodyTablaAvios").append('<tr><td><button type="button" class="btn btn-danger btn-circle waves-effect waves-circle waves-float eliminarDetalleGrupo"  idDetalle="'+item.id+'" ><i class="material-icons">delete</i></button></td><td>'+item.clave+'</td><td>'+ item.avio +'</td><td>'+checkPropio+'</td><td>'+ item.cantidad +'</td><td>$'+ item.precio +'</td></tr>');
  //$("#bodyTablaAvios").append('<tr><td></td><td></td><td></td></tr>');
  });
    


}

});


}

$(document).on("click","#datosGrupoAvio",function(){
llenarSelectAvio();
$("#detalleGrupo").show();
verDetalleGrupo($(this).attr("idGrupoAvio"));
verDetalleGrupoAvios($(this).attr("idGrupoAvio"));
})


$(document).on("change","#basic_checkbox_1",function(){
if ($(this).attr("value")=="0")
{
  $("#basic_checkbox_1").attr("value","1")

}else{
 
   $("#basic_checkbox_1").attr("value","0")
}


})



$(document).on("click",".eliminarDetalleGrupo",function(){

var datos=new FormData();
datos.append("idDetalle", $(this).attr("idDetalle"));
datos.append("action", "deleteDetalle");

$.ajax({

url:"controladores/grupos_avio.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){

if (respuesta=="ok")
{
   
                        verDetalleGrupo($("#idGrupoAvio").val());
                        verDetalleGrupoAvios($("#idGrupoAvio").val());
                         $('#tablaGrupoAvios').DataTable().ajax.reload();     
                        
                       
}
else
{
    swal({               
          title: "¡Error al eliminar datos!",
          icon: "error",
         }).then(function(result){                 
         })
}


}

});


})
 $(document).on("change",".estatusGrupoAvio",function(){
 
    var datos=new FormData();
    datos.append("activarId",$(this).attr("idGrupoAvio"));
    datos.append("activarGrupoAvio",$(this).attr("estadoGrupoAvio"));
   datos.append("action","activate");
    $.ajax({
url:"controladores/grupos_avio.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){ 
   
if (respuesta=="ok")
{
swal({               
     title: "¡El grupo ha sido actualizado!",
      icon: "success",
                    }).then(function(result){       
                        //Refrescar tabla de datos
                         //table.dataTable().fnUpdate(undefined,row,undefined,false); 
                         $('#tablaGrupoAvios').DataTable().ajax.reload();     
                        
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

function limpiarControlesHilo(){

$("#nuevaClaveHilo").val("");
$("#nuevoColorHilo").val("");
$("#idHilo").val(0);
llenarSelectProveedor();

}
$(document).on("click","#clickHilo",function(){
  limpiarControlesHilo();
})

$(document).on("change","#nuevaClaveHilo",function(){

var datos=new FormData();
datos.append("clave",$("#nuevaClaveHilo").val());
datos.append("action","validate");


$.ajax({
url:"controladores/hilos.controlador.php",
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
            title: "¡La clave ya existe,verifique!",
            icon: "error",  
          });
        $("#nuevaClaveHilo").val("");
       

}
}
})

});
$(document).on("click","#guardarHilo",function(){
if($("#formNuevoHilo").valid()){   
//Tomar datos del formulario
    var datosIngreso=new FormData();
    datosIngreso.append("clave",$("#nuevaClaveHilo").val());
    datosIngreso.append("color",$("#nuevoColorHilo").val());
    datosIngreso.append("id_proveedor",$("#nuevoProveedorHilo").val());

    
        

if ($("#idHilo").val()>0)
 {
   datosIngreso.append("id",$("#idHilo").val());
  datosIngreso.append("action","update");

 }else{

datosIngreso.append("action","insert");
 }

//Enviar al archivo ajax los datos para el ingreso de la composicion
$.ajax({
url:"controladores/hilos.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){

if (respuesta =="ok")
{
    swal({               
          title: "¡El hilo ha sido ingresado!",
          icon: "success",
         }).then(function(result){    
            //Refrescar tabla de datos
         $('#tablaHilos').DataTable().ajax.reload();
           limpiarControlesHilo();

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



  })
$(document).on("click","#datosHilo",function(){

var datosConsulta=new FormData();
datosConsulta.append("idHilo", $(this).attr("idHilo"));
datosConsulta.append("action", "select");

$.ajax({

url:"controladores/hilos.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){
  
    $("#nuevaClaveHilo").val(respuesta["clave"]);
    $("#nuevoColorHilo").val(respuesta["color"]);
    
    $("#idHilo").val(respuesta["id"]);
   
    $('#nuevoProveedorHilo').val(respuesta["id_proveedor"]);
    $(".proveedor li" ).removeClass("selected" );
    $(".proveedor .filter-option").text(respuesta["proveedor"]);
    $(".proveedor [idProveedor="+respuesta["id_proveedor"]+"]").addClass("selected");
    




}

});




})
 $(document).on("change",".estatusHilo",function(){
 
    var datos=new FormData();
    datos.append("activarId",$(this).attr("idHilo"));
    datos.append("activarHilo",$(this).attr("estadoHilo"));
   datos.append("action","activate");
    $.ajax({
url:"controladores/hilos.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){ 
   
if (respuesta=="ok")
{
swal({               
     title: "¡El hilo ha sido actualizada!",
      icon: "success",
                    }).then(function(result){       
                        //Refrescar tabla de datos
                         //table.dataTable().fnUpdate(undefined,row,undefined,false); 
                         $('#tablaHilos').DataTable().ajax.reload();     
                        
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