function llenarSelectColores(Color,idColor){
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
      $('#nuevoColorTela').html(""); 
      $('#color .filter-option').text(Color);
      $('#color .dropdown-menu .inner').append('<li data-original-index="0" idColor="0" class="active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Color</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoColorTela').append('<option value="'+idColor+'">'+Color+'</option>');

    $.each(res, function(i, item){
      $('#nuevoColorTela').append('<option value="'+item.id+'">'+item.descripcion+'</option>');

      var index=parseInt(i)+1

      if (idColor==item.id){

      $('#color .dropdown-menu .inner').append('<li data-original-index="'+index+'" idColor="'+item.id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
  

      }else{


      $('#color .dropdown-menu .inner').append('<li data-original-index="'+index+'" idColor="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
  
      }

          
          });
}
       });
}

function llenarSelectTipos(Tipo,idTipo){
  var datos= new FormData();
  datos.append("action","list");
$.ajax({
url:"controladores/tipos_telas.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta);
      $('#tipo .dropdown-menu .inner').html(""); 
      $('#nuevoTipoTela').html(""); 
      $('#tipo .filter-option').text(Tipo);
      $('#tipo .dropdown-menu .inner').append('<li data-original-index="0" idTipo="0" class="active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Tipo</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoTipoTela').append('<option value="'+idTipo+'">'+Tipo+'</option>');

    $.each(res, function(i, item){
      $('#nuevoTipoTela').append('<option texto="'+item.descripcion+'" value="'+item.id+'">'+item.descripcion+'</option>');
  
      var index=parseInt(i)+1

      if (idTipo==item.id)
      {
        $('#tipo .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTipo="'+item.id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }else
      {
         $('#tipo .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTipo="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
  }
          
          });
}
       });
}

function llenarSelectDisenos(Diseno,idDiseno){
  var datos= new FormData();
  datos.append("action","list");
$.ajax({
url:"controladores/disenos_telas.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta);
      $('#diseno .dropdown-menu .inner').html(""); 
      $('#nuevoDisenoTela').html(""); 
      $('#diseno .filter-option').text(Diseno);
      $('#diseno .dropdown-menu .inner').append('<li data-original-index="0" idDiseno="0" class="active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Diseño</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoDisenoTela').append('<option value="'+idDiseno+'">'+Diseno+'</option>');

    $.each(res, function(i, item){
      $('#nuevoDisenoTela').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
  
      var index=parseInt(i)+1

      if (idDiseno==item.id){
$('#diseno .dropdown-menu .inner').append('<li data-original-index="'+index+'" idDiseno="'+item.id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }else{
        $('#diseno .dropdown-menu .inner').append('<li data-original-index="'+index+'" idDiseno="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }


      
  
          
          });
}
       });
}

function llenarSelectUnidades(Unidad,idUnidad){
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
      $('#nuevaMedidaTela').html(""); 
      $('#unidad .filter-option').text(Unidad);
      $('#unidad .dropdown-menu .inner').append('<li data-original-index="0" idMedida="0" class="active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Medida</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevaMedidaTela').append('<option value="'+idUnidad+'">'+Unidad+'</option>');

    $.each(res, function(i, item){
      $('#nuevaMedidaTela').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
  
      var index=parseInt(i)+1

      if(idUnidad==item.id){
        $('#unidad .dropdown-menu .inner').append('<li data-original-index="'+index+'" idUnidad="'+item.id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }else{
        $('#unidad .dropdown-menu .inner').append('<li data-original-index="'+index+'" idUnidad="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }
      
  
          
          });
}
       });
}

function llenarSelectComposicion(Composicion,idComposicion){
  var datos= new FormData();
  datos.append("action","list");
$.ajax({
url:"controladores/composiciones_telas.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta);
      $('#composicion .dropdown-menu .inner').html(""); 
      $('#nuevaComposicionTela').html(""); 
      $('#composicion .filter-option').text(Composicion);
      $('#composicion .dropdown-menu .inner').append('<li data-original-index="0" idComposicion="0" class="active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Composicion</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevaComposicionTela').append('<option value="'+idComposicion+'">'+Composicion+'</option>');

    $.each(res, function(i, item){
      $('#nuevaComposicionTela').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
  
      var index=parseInt(i)+1


        if (idComposicion==item.id){
          $('#composicion .dropdown-menu .inner').append('<li data-original-index="'+index+'" idComposicion="'+item.id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
        }else{
          $('#composicion .dropdown-menu .inner').append('<li data-original-index="'+index+'" idComposicion="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
        }
      
  
          
          });
}
       });
}


$( document ).ready(function() {


$('#tablaUnidades').DataTable({
responsive: true,
ajax: "ajax/datatable-unidades.ajax.php",
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


            //Composicion_tela 
$(document).on("change","#nuevaClaveComposicion",function(){
repetirComposicion($("#nuevaClaveComposicion").val(),"#nuevaClaveComposicion");
});
$(document).on("change","#nuevaComposicion",function(){
repetirComposicion($("#nuevaComposicion").val(),"#nuevaComposicion");
});

function repetirComposicion(Composicion,Campo){   
var datos=new FormData();
datos.append("validarComposicion",Composicion);
datos.append("action","validate");


$.ajax({
url:"controladores/composiciones_telas.controlador.php",
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
            title: "¡La composicion o clave de composicion ya existe,verifique!",
            icon: "error",  
          });
     $(""+Campo+"").val("");                             
}
}
})
 
}
function limpiarControlesComposicion(){
         $("#nuevaClaveComposicion").val("");
         $("#nuevaComposicion").val("");
         $("#nuevoLavado").val("");
          $("#idComposicion").val(0);


}
$(document).on("click","#tabComposiciones",function(){
$('#tablaComposiciones').DataTable({
responsive: true,
ajax: "ajax/datatable-composiciones.ajax.php",
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
$(document).on("click","#clickComposicion",function(){

limpiarControlesComposicion();
})


$(document).on("click","#datosComposicion",function(){
  var datosConsulta=new FormData();
datosConsulta.append("idComposicion", $(this).attr("idComposicion"));
datosConsulta.append("action", "select");

$.ajax({

url:"controladores/composiciones_telas.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){

$("#nuevaClaveComposicion").val(respuesta["clave"]);
$("#nuevaComposicion").val(respuesta["descripcion"]);
$("#nuevoLavado").val(respuesta["lavado"]);
$("#idComposicion").val(respuesta["id"]);

}

});
})
//Guardar composicion
$(document).on("click","#guardarComposicion",function(){

if($("#formNuevaComposicion").valid()){   
    var datosIngreso=new FormData();
    datosIngreso.append("clave",$("#nuevaClaveComposicion").val());
    datosIngreso.append("composicion",$("#nuevaComposicion").val());
    datosIngreso.append("lavado",$("#nuevoLavado").val());


    if ($("#idComposicion").val()>0){
      datosIngreso.append("id",$("#idComposicion").val());  
      datosIngreso.append("action","update");    
    }else
    {
      datosIngreso.append("action","insert");
    }
//Enviar al archivo ajax los datos para el ingreso de la composicion
$.ajax({
url:"controladores/composiciones_telas.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
//En caso de sea exitoso el movimiento, mostramos mensaje success
if (respuesta =="ok")
{
    swal({               
          title: "¡La composicion ha sido ingresada!",
          icon: "success",
         }).then(function(result){    
            //Refrescar tabla de datos
         $('#tablaComposiciones').DataTable().ajax.reload();
         llenarSelectComposicion("Seleccione Composicion",0);
            
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

 //Cambiar estado de composicion
 $(document).on("change",".estatusComposicion",function(){    
   var datos=new FormData();
    datos.append("activarId",$(this).attr("idComposicion"));
    datos.append("activarComposicion",$(this).attr("estadoComposicion"));

    $.ajax({
url:"controladores/composiciones_telas.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){ 
if (respuesta=="ok")
{
swal({               
     title: "¡La composicion ha sido actualizada!",
      icon: "success",
                    }).then(function(result){       
                        //Refrescar tabla de datos
                        $('#tablaComposiciones').DataTable().ajax.reload();
                        
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









                //Disenos_Tela

$(document).on("change","#nuevaClaveDiseno",function(){
repetirDiseno($("#nuevaClaveDiseno").val(),"#nuevaClaveDiseno");
});
$(document).on("change","#nuevoDiseno",function(){
repetirDiseno($("#nuevoDiseno").val(),"#nuevoDiseno");
});
function repetirDiseno(Diseno,Campo){   
var datos=new FormData();
datos.append("diseno",Diseno);
datos.append("action","validate");


$.ajax({
url:"controladores/disenos_telas.controlador.php",
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
            title: "¡El diseño o clave de diseño ya existe,verifique!",
            icon: "error",  
          });
     $(""+Campo+"").val("");                       
}
}
})
 
}
function limpiarControlesDiseno(){
    $("#nuevoDiseno").val("");
    $("#nuevaClaveDiseno").val("");
    $("#idDiseno").val(0);
}

//Obtener datos de composicion para modificar
$(document).on("click","#datosDiseno",function(){

var datosConsulta=new FormData();
datosConsulta.append("idDiseno", $(this).attr("idDiseno"));
datosConsulta.append("action", "select");

$.ajax({

url:"controladores/disenos_telas.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){

$("#nuevaClaveDiseno").val(respuesta["clave"]);

$("#nuevoDiseno").val(respuesta["descripcion"]);

$("#idDiseno").val(respuesta["id"]);

}

});
})
$(document).on("click","#tabDisenos",function(){
$('#tablaDisenos').DataTable({
responsive: true,
destroy:true,
ajax: "ajax/datatable-disenos.ajax.php",
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
$(document).on("click","#clickDiseno",function(){
limpiarControlesDiseno();
})
//Enviar información para ingreso de datos mediante AJAX
$(document).on("click","#guardarDiseno",function(){
//Primero se debe verificar que los campos requeridos están ingresados
if($("#formNuevoDiseno").valid()){   
//Tomar datos del formulario
    var datosIngreso=new FormData();
    datosIngreso.append("clave",$("#nuevaClaveDiseno").val());
    datosIngreso.append("diseno",$("#nuevoDiseno").val());

if($("#idDiseno").val()>0){
     datosIngreso.append("id",$("#idDiseno").val());
   datosIngreso.append("action","update");
}else{
   datosIngreso.append("action","insert");
}


    // datosIngreso.append("muestra",imagen);
    // var formData = new FormData($("#formNuevoDiseño")[2]);
  
//Enviar al archivo ajax los datos para el ingreso de la composicion
$.ajax({
url:"controladores/disenos_telas.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
//En caso de sea exitoso el movimiento, mostramos mensaje success
if (respuesta =="ok")
{
    swal({               
          title: "¡El diseño ha sido ingresado!",
          icon: "success",
         }).then(function(result){    
            //Refrescar tabla de datos
         $('#tablaDisenos').DataTable().ajax.reload();
         llenarSelectDisenos("Seleccione Diseño",0);
            //Limpiar controles 
          limpiarControlesDiseno();
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


//Cambiar estado de composicion
 $(document).on("change",".estatusDiseno",function(){
  
    
    var datos=new FormData();
    datos.append("activarId",$(this).attr("idDiseno"));
    datos.append("activarDiseno",$(this).attr("estadoDiseno"));
    datos.append("action","activate");


    $.ajax({
url:"controladores/disenos_telas.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){ 
if (respuesta=="ok")
{
swal({               
     title: "¡El diseño ha sido actualizado!",
      icon: "success",
                    }).then(function(result){       
                        //Refrescar tabla de datos
                        $('#tablaDisenos').DataTable().ajax.reload();
                        
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




                        //Color_tela
$(document).on("change","#nuevaClaveColor",function(){
repetirColor($("#nuevaClaveColor").val(),"#nuevaClaveColor");
});
$(document).on("change","#nuevoColor",function(){
repetirColor($("#nuevoColor").val(),"#nuevoColor");
});
function repetirColor(Color,Campo){   
var datos=new FormData();
datos.append("validarColor",Color);
datos.append("action","validate");


$.ajax({
url:"controladores/colores_telas.controlador.php",
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
            title: "¡El color o clave de color ya existe,verifique!",
            icon: "error",  
          });
     $(""+Campo+"").val("");                       
}
}
})
 
}
function limpiarControlesColor(){
$("#nuevaClaveColor").val("");
$("#nuevoColor").val("");
$("#idColor").val(0);

}
$(document).on("click","#clickColor",function(){
limpiarControlesColor();
})

$(document).on("click","#tabColores",function(){

$('#tablaColores').DataTable({
responsive: true,
destroy:true,
ajax: "ajax/datatable-colores.ajax.php",
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
$(document).on("click","#datosColor",function(){

var datosConsulta=new FormData();
datosConsulta.append("idColor", $(this).attr("idColor"));
datosConsulta.append("action", "select");

$.ajax({

url:"controladores/colores_telas.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){

$("#nuevaClaveColor").val(respuesta["clave"]);
$("#nuevoColor").val(respuesta["descripcion"]);

$("#idColor").val(respuesta["id"]);

}

})

})




$(document).on("click","#guardarColor",function(){
//Primero se debe verificar que los campos requeridos están ingresados
if($("#formNuevoColor").valid()){


//Tomar datos del formulario
    var datosIngreso=new FormData();
    datosIngreso.append("clave",$("#nuevaClaveColor").val());
    datosIngreso.append("color",$("#nuevoColor").val());

    if ($("#idColor").val()>0){
     datosIngreso.append("id",$("#idColor").val());
     datosIngreso.append("action","update");

    }else{
      datosIngreso.append("action","insert");
    }
//Enviar al archivo ajax los datos para el ingreso de la talla
$.ajax({
url:"controladores/colores_telas.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
//En caso de sea exitoso el movimiento, mostramos mensaje success
console.log("respuesta",respuesta);
if (respuesta=="ok")
{
    swal({               
          title: "¡El color ha sido ingresado!",
          icon: "success",
         }).then(function(result){    
            //Refrescar tabla de datos
         $('#tablaColores').DataTable().ajax.reload();
         llenarSelectColores("Seleccione Color",0);
  
         limpiarControlesColor();
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

//Cambiar estado de color
 $(document).on("change",".estatusColor",function(){
    
    var datos=new FormData();
    datos.append("activarId",$(this).attr("idColor"));
    datos.append("activarColor",$(this).attr("estadoColor"));
    datos.append("action","activate");


    $.ajax({
url:"controladores/colores_telas.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){ 
if (respuesta=="ok")
{
swal({               
     title: "¡El color ha sido actualizado!",
      icon: "success",
                    }).then(function(result){       
                        //Refrescar tabla de datos
                        $('#tablaColores').DataTable().ajax.reload();
                        
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





//Tipo de tela
$(document).on("change","#nuevaClaveTipo",function(){
repetirTipo($("#nuevaClaveTipo").val(),"#nuevaClaveTipo");
});
$(document).on("change","#nuevoTipo",function(){
repetirTipo($("#nuevoTipo").val(),"#nuevoTipo");
});

function repetirTipo(Tipo,Campo){   
var datos=new FormData();
datos.append("validarTipo",Tipo);
datos.append("action","validate");


$.ajax({
url:"controladores/tipos_telas.controlador.php",
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
            title: "¡El tipo o clave de tipo ya existe,verifique!",
            icon: "error",  
          });
     $(""+Campo+"").val("");                       
}
}
})
 
}


//Obtener datos de tipo para modificar
$(document).on("click","#datosTipo",function(){
var datosConsulta=new FormData();
datosConsulta.append("idTipo", $(this).attr("idTipo"));
datosConsulta.append("action", "select");

$.ajax({

url:"controladores/tipos_telas.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){

$("#nuevaClaveTipo").val(respuesta["clave"]);
$("#nuevoTipo").val(respuesta["descripcion"]);
$("#idTipo").val(respuesta["id"]);

}

});
})
$(document).on("click","#tabTipos",function(){
$('#tablaTipos').DataTable({
responsive: true,
destroy:true,
ajax: "ajax/datatable-tipos.ajax.php",
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
$(document).on("click","#clickTipo",function(){

limpiarControlesTipo();
  })
function limpiarControlesTipo(){

  $("#nuevaClaveTipo").val("");
$("#nuevoTipo").val("");
$("#idTipo").val(0);

}
//Enviar información para ingreso de datos mediante AJAX
$(document).on("click","#guardarTipo",function(){
//Primero se debe verificar que los campos requeridos están ingresados
if($("#formNuevoTipo").valid()){   
//Tomar datos del formulario
    var datosIngreso=new FormData();
    datosIngreso.append("clave",$("#nuevaClaveTipo").val());
    datosIngreso.append("tipo",$("#nuevoTipo").val());

    if ($("#idTipo").val()>0){
    datosIngreso.append("id",$("#idTipo").val());
    datosIngreso.append("action","update");
    
    }else{
    datosIngreso.append("action","insert");
    }
//Enviar al archivo ajax los datos para el ingreso de la composicion
$.ajax({
url:"controladores/tipos_telas.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
//En caso de sea exitoso el movimiento, mostramos mensaje success
if (respuesta =="ok")
{
    swal({               
          title: "¡El tipo ha sido ingresado!",
          icon: "success",
         }).then(function(result){    
            //Refrescar tabla de datos
         $('#tabTipos').click();
            //Limpiar controles 
            limpiarControlesTipo("Seleccione Tipo",0);

            llenarSelectTipos();
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

//Cambiar estado de tipo
 $(document).on("change",".estatusTipo",function(){

    var datos=new FormData();
    datos.append("activarId",$(this).attr("idTipo"));
    datos.append("activarTipo",$(this).attr("estadoTipo"));
    datos.append("action","activate");
    

    $.ajax({
url:"controladores/tipos_telas.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){ 
if (respuesta=="ok")
{
swal({               
     title: "¡El tipo ha sido actualizado!",
      icon: "success",
                    }).then(function(result){       
                        //Refrescar tabla de datos
                        $('#tablaTipos').DataTable().ajax.reload();
                    
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






                //Telas

$(document).on("change","#nuevoColorTela",function(){
            var id=$("#nuevoColorTela").val();
            $( "#color li" ).removeClass( "selected" );
            $("[idColor="+id+"]").addClass("selected");
});


$(document).on("change","#nuevaMedidaTela",function(){
            var id=$("#nuevaMedidaTela").val();
            $( "#unidad li" ).removeClass( "selected" );
            $("[idUnidad="+id+"]").addClass("selected");
});
$(document).on("change","#nuevoTipoTela",function(){
            var id=$("#nuevoTipoTela").val();
            $( "#tipo li" ).removeClass( "selected" );
            $("[idTipo="+id+"]").addClass("selected");
});
$(document).on("change","#nuevoDisenoTela",function(){
            var id=$("#nuevoDisenoTela").val();
            $( "#diseno li" ).removeClass( "selected" );
            $("[idDiseno="+id+"]").addClass("selected");
});
$(document).on("change","#nuevaComposicionTela",function(){
            var id=$("#nuevaComposicionTela").val();
            $( "#composicion li" ).removeClass( "selected" );
            $("[idComposicion="+id+"]").addClass("selected");
});



var imagen;
//Validar imagen a subir, que sea la extensión correcta y pese menos de 2MG
 $(document).on("change",".nuevaMuestra",function(){
imagen=this.files[0];
console.log("imagen",imagen)

if(imagen["type"] !="image/jpeg" && imagen["type"] !="image/png"){

  $("#nuevaMuestra").val("");
swal({
          icon:"error",
          title:"¡La imagen debe estar en formato JPG O PNG!",
          })
}else if(imagen["size"] > 2000000){
$("#nuevaMuestra").val("");
swal({
          icon:"error",
          title:"¡La imagen no debe pasar más de 2MB!",  
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


$(document).on("change",".claveTela",function(){
  var datos=new FormData();
  
  datos.append("validarClaveTela", $(this).val());
  datos.append("validarTela", "");
  datos.append("action", "validate");
  
$.ajax({
url:"controladores/telas.controlador.php",
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
            title: "¡La clave ya existe,verifique!",
            icon: "error",  
          });
        
          $("#nuevaClaveTela").val(""); 
                                                            
}
}
});
});

//Obtener datos de tipo para modificar
$(document).on("click","#datosTela",function(){
llenarSelectUnidades();
llenarSelectComposicion();

var datosConsulta=new FormData();
datosConsulta.append("idTela", $(this).attr("idTela"));
datosConsulta.append("action", "select");

$.ajax({

url:"controladores/telas.controlador.php",
method:"POST",
data:datosConsulta,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){

$("#nuevaClaveTela").val(respuesta["sku"]);

$("#nuevaTela").val(respuesta["tela"]);
$("#nuevaDescripcion").val(respuesta["descripcion"]);

$("#nuevoAncho").val(respuesta["ancho"]);
$("#nuevoOz").val(respuesta["oz"]);

if(respuesta["muestra"] !=""){

$("#muestraActual").val(respuesta["muestra"]);

$(".previsualizar").attr("src", respuesta["muestra"]);

}

$("#idTela").val(respuesta["id"]); 

llenarSelectUnidades(respuesta["unidad"],respuesta["id_unidad"]);

llenarSelectColores(respuesta["color"],respuesta["id_color"])


llenarSelectTipos(respuesta["tipo"],respuesta["id_tipo"]);

llenarSelectDisenos(respuesta["diseno"],respuesta["id_diseno"]);

llenarSelectComposicion(respuesta["composicion"],respuesta["id_composicion"])


}

});
})
$(document).on("click","#clickTela",function(){
limpiarControlesTela();

})
function limpiarControlesTela(){
          $("#nuevaClaveTela").val("");
          $("#nuevaTela").val("");
          $("#nuevaDescripcion").val("");
          
          llenarSelectColores("Seleccione Color",0);
          llenarSelectTipos("Seleccione Tipo",0);
          llenarSelectUnidades("Seleccione Unidad",0);
          llenarSelectComposicion("Seleccione Composicion",0);
          llenarSelectDisenos("Seleccione Diseño",0);
          $("#nuevoAncho").val("1.0");
          $("#nuevoOz").val("1.0");
          $("#idTela").val(0);
          $(".previsualizar").attr("src","vistas/img/telas/tela.jpg");
}

$(document).on("click","#tabTelas",function(){
$('#tablaTelas').DataTable({
responsive: true,
destroy:true,
ajax: "ajax/datatable-telas.ajax.php",
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

  // datosIngreso.append("muestra",imagen);
$(document).on("click","#guardarTela",function(){
$("#nuevaDescripcion").val("");
$("#nuevaDescripcion").val($("#nuevaTela").val()+' '+ $("#tipo [title]").text()+' '+ $("#color [title]").text()+' '+ $("#composicion [title]").text()+' '+ $("#diseño [title]").text()+''+$("#nuevoOz").val()+' OZ') ;

//Primero se debe verificar que los campos requeridos están ingresados
if($("#formNuevaTela").valid()){


  //Tomar datos del formulario
    var datosIngreso=new FormData();
    datosIngreso.append("clave",$("#nuevaClaveTela").val());
    datosIngreso.append("descripcion",$("#nuevaDescripcion").val());
    datosIngreso.append("tela",String($("#nuevaTela").val()));
    datosIngreso.append("id", $("#idTela").val());
    datosIngreso.append("id_tipo", $("#nuevoTipoTela").val());
    datosIngreso.append("id_color", $("#nuevoColorTela").val());
    datosIngreso.append("id_diseno", $("#nuevoDisenoTela").val());
    datosIngreso.append("id_unidad", $("#nuevaMedidaTela").val());
    datosIngreso.append("id_composicion", $("#nuevaComposicionTela").val());
    datosIngreso.append("ancho", $("#nuevoAncho").val());
    datosIngreso.append("oz", $("#nuevoOz").val());
    datosIngreso.append("muestra", imagen);
    datosIngreso.append("muestraActual", $("#muestraActual").val());
    
    datosIngreso.append("action", "insert");
    
//Enviar al archivo ajax los datos para el ingreso de la talla
$.ajax({
url:"controladores/telas.controlador.php",
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
          title: "¡La tela ha sido ingresada!",
          icon: "success",
         }).then(function(result){    
            //Refrescar tabla de datos
         $('#tablaTelas').DataTable().ajax.reload();
            //Limpiar controles 
         limpiarControlesTela();
           //Cerrar el modal
         $(".cerrarModalTela").click();
                    
         })
}
else
{
swal({               
          title: respuesta,
          icon: "error",
         }).then(function(result){                 
         })
}
}

    })

}



}); 

