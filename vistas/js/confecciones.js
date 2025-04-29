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
      $('#nuevaPrendaConfeccion').html(""); 
      $('#prenda .filter-option').text('Seleccione Prenda');
      $('#prenda .dropdown-menu .inner').append('<li data-original-index="0" idPrenda="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Prenda</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevaPrendaConfeccion').append('<option value="">Seleccione Prenda</option>');
    $.each(res, function(i, item){
      $('#nuevaPrendaConfeccion').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      var index=parseInt(i)+1
      $('#prenda .dropdown-menu .inner').append('<li data-original-index="'+index+'" idPrenda="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
          });
}
       });
}
function llenarSelectConfeccion(){
  var datos= new FormData();
  datos.append("action","list");
$.ajax({
url:"controladores/confecciones.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta);
      $('#tipo .dropdown-menu .inner').html(""); 
        
      $('#nuevoTipoConfeccion').html(""); 
     
      
      $('#tipo .filter-option').text('Seleccione Confeccion');
      $('#tipo .dropdown-menu .inner').append('<li data-original-index="0" idConfeccion="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Confeccion</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoTipoConfeccion').append('<option value="">Seleccione Confeccion</option>');
     
    $.each(res, function(i, item){
      $('#nuevoTipoConfeccion').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
    

      var index=parseInt(i)+1
      $('#tipo .dropdown-menu .inner').append('<li data-original-index="'+index+'" idConfeccion="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
    
  
          
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


              $('#proveedor .dropdown-menu .inner').html(""); 
      $('#nuevoProveedorConfeccion').html(""); 
      


      $('#proveedor .filter-option').text('Seleccione Proveedor');
      $('#proveedor .dropdown-menu .inner').append('<li data-original-index="0" idProveedor="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Proveedor</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoProveedorConfeccion').append('<option value="">Seleccione Proveedor</option>');
        
    $.each(res, function(i, item){
      $('#nuevoProveedorConfeccion').append('<option value="'+item.id+'">'+item.nombre+'</option>');
     
      var index=parseInt(i)+1
      $('#proveedor .dropdown-menu .inner').append('<li data-original-index="'+index+'" idProveedor="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.nombre+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');

          });




      

}
       });
}
$( document ).ready(function() {

llenarSelectCategoria();
llenarSelectConfeccion();
llenarSelectProveedor();
llenarSelectSubcategoria();
llenarSelectPrenda();
$('#tablaConfecciones').DataTable({
responsive: true,
ajax: "ajax/datatable-confecciones.ajax.php",

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
$('#tablaConfeccionesCompletas').DataTable({
responsive: true,
deferRender:true,  
retrive: true,
processing:true,
ajax: "ajax/datatable-confeccionescompletas.ajax.php",

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
//createSelect();

});
// function load(){
  //$(selector).load(url,data,function(response,status,xhr));
 //}



						//Confeccion
$(document).on("change",".repetirConfeccion",function(){

var datos=new FormData();
datos.append("clave",$("#nuevaClaveConfeccion"));
datos.append("confeccion",$("#nuevaConfeccion"));
datos.append("action","validate");


$.ajax({
url:"controladores/confecciones.controlador.php",
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
            title: "¡La confeccion ya existe,verifique!",
            icon: "error",  
          });
        $("#nuevaClaveConfeccion").val("");
         $("#nuevaConfeccion").val("");

}
}
})

});


//Obtener datos de tipo para modificar
$(document).on("click","#datosConfeccion",function(){

var datosConsulta=new FormData();
datosConsulta.append("idConfeccion", $(this).attr("idConfeccion"));
datosConsulta.append("action", "select");

$.ajax({

url:"controladores/confecciones.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){

$("#nuevaClaveConfeccion").val(respuesta["clave"]);
$("#nuevaConfeccion").val(respuesta["descripcion"]);
$("#idConfeccion").val(respuesta["id"]);


}

});



})




$(document).on("click","#guardarConfeccion",function(){
//Primero se debe verificar que los campos requeridos están ingresados
if($("#formNuevaConfeccion").valid()){   
//Tomar datos del formulario
    var datosIngreso=new FormData();
    datosIngreso.append("clave",$("#nuevaClaveConfeccion").val());
    datosIngreso.append("confeccion",$("#nuevaConfeccion").val());

if ($("#idConfeccion").val()>0)
 {
   datosIngreso.append("id",$("#idConfeccion").val());
  datosIngreso.append("action","update");

 }else{

datosIngreso.append("action","insert");
 }

//Enviar al archivo ajax los datos para el ingreso de la composicion
$.ajax({
url:"controladores/confecciones.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){

if (respuesta =="ok")
{
    swal({               
          title: "¡La confeccion ha sido ingresada!",
          icon: "success",
         }).then(function(result){    
            //Refrescar tabla de datos
         $('#tablaConfecciones').DataTable().ajax.reload();
         llenarSelectConfeccion();

          limpiarControlesConfeccion()
          //Cerrar el modal
         $(".cerrarModalConfeccion").click();
                    
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



 //Cambiar estado de confeccion
 $(document).on("change",".estatusConfeccion",function(){
 
    var datos=new FormData();
    datos.append("activarId",$(this).attr("idConfeccion"));
    datos.append("activarConfeccion",$(this).attr("estadoConfeccion"));
   datos.append("action","activate");
    $.ajax({
url:"controladores/confecciones.controlador.php",
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
     title: "¡La confeccion ha sido actualizada!",
      icon: "success",
                    }).then(function(result){       
                        //Refrescar tabla de datos
                       	 //table.dataTable().fnUpdate(undefined,row,undefined,false); 
                         $('#tablasConfecciones').DataTable().ajax.reload();  	 
                         llenarSelectConfeccion();

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
//Evitar repetir Proveedor
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

function limpiarControlesPrenda(){
llenarSelectCategoria();
llenarSelectSubcategoria();

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

$(document).on("click","#clickConfeccionCompleta",function(){
limpiarControlesConfeccionCompleta();


});
$(document).on("click","#clickConfeccion",function(){
limpiarControlesConfeccion();


});
function limpiarControlesConfeccionCompleta(){
$("#nuevaConfeccionCompleta").val("");
$("#nuevaClaveConfeccionCompleta").val("");
$("idConfeccionCompleta").val(0);
$("#nuevoPrecio").val("6");
llenarSelectConfeccion();
llenarSelectPrenda();
llenarSelectProveedor();


}
function limpiarControlesConfeccion(){
$("#nuevaConfeccion").val("");
$("#nuevaClaveConfeccion").val("");
$("idConfeccion").val(0);

}



//Enviar información para ingreso de datos mediante AJAX
$(document).on("click","#guardarConfeccionCompleta",function(){
//Primero se debe verificar que los campos requeridos están ingresados
if($("#formNuevaConfeccionCompleta").valid()){

//Tomar datos del formulario
 var datosIngreso=new FormData();
 datosIngreso.append("clave",$("#nuevaClaveConfeccionCompleta").val());
 datosIngreso.append("confeccion",$("#nuevaConfeccionCompleta").val());
 datosIngreso.append("precio",$("#nuevoPrecio").val()); 
 datosIngreso.append("id_tipo",$("#nuevoTipoConfeccion").val());
 datosIngreso.append("id_prenda",$("#nuevaPrendaConfeccion").val());
 datosIngreso.append("id_proveedor",$("#nuevoProveedorConfeccion").val());
 if ($("#idConfeccionCompleta").val()>0)
 {
   datosIngreso.append("id",$("#idConfeccionCompleta").val());
  datosIngreso.append("action","update");

 }else{

datosIngreso.append("action","insert");
 }
    
//Enviar al archivo ajax los datos para el ingreso de la lina
$.ajax({
url:"controladores/confecciones_completas.controlador.php",
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
          title: "¡La confeccion ha sido ingresada!",
          icon: "success",
         }).then(function(result){ 
           $('#tablaConfeccionesCompletas').DataTable().ajax.reload();  
            //Limpiar controles 
          
          limpiarControlesConfeccionCompleta();
           
           //Cerrar el modal

           $("#cerrarModalConfeccionCompleta").click();         
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


$(document).on("click","#datosConfeccionCompleta",function(){

  
var datosConsulta=new FormData();
datosConsulta.append("idConfeccionCompleta", $(this).attr("idConfeccionCompleta"));
datosConsulta.append("action", "select");

$.ajax({

url:"controladores/confecciones_completas.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){
  
    $("#nuevaClaveConfeccionCompleta").val(respuesta["clave"]);
    $("#nuevaConfeccionCompleta").val(respuesta["descripcion"]);
    $("#nuevoPrecio").val(respuesta["precio"]);
    
    $("#idConfeccionCompleta").val(respuesta["id"]);
   
    $('#nuevoTipoConfeccion').val(respuesta["id_tipo"]);
    $("#tipo li" ).removeClass("selected" );
    $('#tipo .filter-option').text(respuesta["tipo"]);
    $("#tipo [idConfeccion="+respuesta["id_tipo"]+"]").addClass("selected");
    
    $('#nuevaPrendaConfeccion').val(respuesta["id_prenda"]);
    $("#prenda li" ).removeClass("selected" );
    $('#prenda .filter-option').text(respuesta["categoria"]);
    $("#prenda [idPrenda="+respuesta["id_prenda"]+"]").addClass("selected");
   
    $('#nuevoProveedorConfeccion').val(respuesta["id_proveedor"]);
    $("#proveedor li" ).removeClass("selected" );
    $('#proveedor .filter-option').text(respuesta["proveedor"]);
    $("#proveedor [idProveedor="+respuesta["id_proveedor"]+"]").addClass("selected");




}

});




})


$(document).on("change","#nuevoTipoConfeccion",function(){
            var id=$("#nuevoTipoConfeccion").val();
            $("#tipo li" ).removeClass( "selected" );
            $("[idConfeccion="+id+"]").addClass("selected");
});
$(document).on("change","#nuevaPrendaConfeccion",function(){
            var id=$("#nuevaPrendaConfeccion").val();
            $("#prenda li" ).removeClass( "selected" );
            $("[idPrenda="+id+"]").addClass("selected");
});

$(document).on("change","#nuevoProveedorConfeccion",function(){
            var id=$("#nuevoProveedorConfeccion").val();
            $("#proveedor li" ).removeClass("selected");
            $("[idProveedor="+id+"]").addClass("selected");
});



$(document).on("change",".repetirConfeccionCompleta",function(){
  var datos=new FormData();
    datos.append("confeccion",$("#nuevaConfeccionCompleta").val());
  datos.append("clave",$("#nuevaClaveConfeccionCompleta").val());
  datos.append("action","validate");
  

$.ajax({
url:"controladores/confecciones_completas.controlador.php",
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
            title: "¡La confeccion ya existe,verifique!",
            icon: "error",  
          });
                        $("#nuevaConfeccionCompleta").val("");
          $("#nuevaClaveConfeccionCompleta").val("");   
}
}
});
});

 $(document).on("change",".estatusConfeccionCompleta",function(){
  
  //  var table=$('#tablasConfecciones').dataTable();  
    //var row=table.api().row($("[indexConfeccion="+idConfeccion+"]").val() ).index();
    var datos=new FormData();
    datos.append("activarId",$(this).attr("idConfeccionCompleta"));
    datos.append("activarConfeccion",$(this).attr("estadoConfeccionCompleta"));
    datos.append("action","activate");

    $.ajax({
url:"controladores/confecciones_completas.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){ 
if (respuesta=="ok")
{
swal({               
     title: "¡La confeccion ha sido actualizada!",
      icon: "success",
                    }).then(function(result){       
                        //Refrescar tabla de datos
                         //table.dataTable().fnUpdate(undefined,row,undefined,false); 
                         $('#tablaConfeccionesCompletas').DataTable().ajax.reload();     
                       

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