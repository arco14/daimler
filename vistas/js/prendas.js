function llenarSelectPrenda(Prenda,idPrenda){
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
      $('#prenda .filter-option').text(Prenda);
      $('#prenda .dropdown-menu .inner').append('<li data-original-index="0" idPrenda="0" class="active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Prenda</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevaPrenda').append('<option value="'+idPrenda+'">'+Prenda+'</option>');
    $.each(res, function(i, item){
      $('#nuevaPrenda').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      var index=parseInt(i)+1

      if (idPrenda==item.id){
      $('#prenda .dropdown-menu .inner').append('<li data-original-index="'+index+'" idPrenda="'+item.id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }else{
      $('#prenda .dropdown-menu .inner').append('<li data-original-index="'+index+'" idPrenda="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');

      }
      
          });
}
       });
}
function llenarSelectLinea(Linea,idLinea){
  var datos= new FormData();
  datos.append("action","list");
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
      $('#linea .filter-option').text(Linea);
      $('#linea .dropdown-menu .inner').append('<li data-original-index="0" idLinea="0" class=" active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Linea</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevaLineaPrenda').append('<option value="'+idLinea+'">'+Linea+'</option>');
    $.each(res, function(i, item){
      $('#nuevaLineaPrenda').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      var index=parseInt(i)+1

      if (idLinea==item.id){

        $('#linea .dropdown-menu .inner').append('<li data-original-index="'+index+'" idLinea="'+item.id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }else
      {
        $('#linea .dropdown-menu .inner').append('<li data-original-index="'+index+'" idLinea="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }
      
          });
}
       });
}
function llenarSelectTalla(Talla,idTalla){
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
success:function(respuesta_talla){
var res=JSON.parse(respuesta_talla);
      $('#talla .dropdown-menu .inner').html(""); 
      $('#editarTallaPrenda').html(""); 
            $('#talla .filter-option').text(Talla);
      $('#talla .dropdown-menu .inner').append('<li data-original-index="0" idTalla="0" class="active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Prenda</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#editarTallaPrenda').append('<option value="'+idTalla+'">'+Talla+'</option>');
    $.each(res, function(i, item){
      $('#editarTallaPrenda').append('<option value="'+item.id+'">'+item.talla+'</option>');
      var index=parseInt(i)+1
      if(idTalla==item.id){
        $('#talla .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTalla="'+item.id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.talla+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }else{
        $('#talla .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTalla="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.talla+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }

      
          });
}
       });
}
function llenarSelectGenero(Genero,idGenero){
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
      $('#genero .filter-option').text(Genero);
      $('#genero .dropdown-menu .inner').append('<li data-original-index="0" idGenero="0" class="active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Genero</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoGeneroPrenda').append('<option value="'+idGenero+'">'+Genero+'</option>');
    $.each(res, function(i, item){
      $('#nuevoGeneroPrenda').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      var index=parseInt(i)+1

      if (idGenero==item.id){
        $('#genero .dropdown-menu .inner').append('<li data-original-index="'+index+'" idGenero="'+item.id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }else{
        $('#genero .dropdown-menu .inner').append('<li data-original-index="'+index+'" idGenero="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }
      
          });
}
       });
}
//function llenarSelectMolde(idPrenda,idGenero){
  function llenarSelectMolde(Molde,idMolde){
  var datos= new FormData();
  datos.append("action","list");
  datos.append("idGenero",$("#nuevoGeneroPrenda").val());
  datos.append("idPrenda",$("#nuevaPrenda").val());
  
  
$.ajax({
url:"controladores/moldes.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta_molde){
var res=JSON.parse(respuesta_molde);
      $('#molde .dropdown-menu .inner').html(""); 
      $('#nuevoMoldePrenda').html(""); 
      $('#molde .filter-option').text(Molde);
      $('#molde .dropdown-menu .inner').append('<li data-original-index="0" idMolde="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Molde</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoMoldePrenda').append('<option value="'+idMolde+'">'+Molde+'</option>');


    $.each(res, function(i, item){
      $('#nuevoMoldePrenda').append('<option value="'+item.id+'">'+item.clave+'</option>');
      
      var index=parseInt(i)+1
      if (idMolde==item){
        $('#molde .dropdown-menu .inner').append('<li data-original-index="'+index+'" idMolde="'+item.id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.clave+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');  
      }else{
      $('#molde .dropdown-menu .inner').append('<li data-original-index="'+index+'" idMolde="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.clave+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');  
      }


      
          });
}
       });
}

function llenarSelectTela(Tela,idTela){
  var datos= new FormData();
  datos.append("action","list");
  
  
$.ajax({
url:"controladores/telas.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta);
      $('#tela .dropdown-menu .inner').html(""); 
      $('#nuevaTelaPrenda').html(""); 
      $('#tela .filter-option').text(Tela);
      $('#tela .dropdown-menu .inner').append('<li data-original-index="0" idTela="0" class=" active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Tela</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevaTelaPrenda').append('<option value="'+idTela+'">'+Tela+'</option>');
    $.each(res, function(i, item){
      $('#nuevaTelaPrenda').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      var index=parseInt(i)+1

      if(idTela==item.id){
        $('#tela .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTela="'+item.id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }else{
        $('#tela .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTela="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }
      
          });
}
       });
}
function llenarSelectContraste(Contraste,idContraste){
  var datos= new FormData();
  datos.append("idTela",$('#nuevaTelaPrenda').val() );
  datos.append("action","listContraste");
  
  
$.ajax({
url:"controladores/telas.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta);
      $('#contraste .dropdown-menu .inner').html(""); 
      $('#nuevoContrastePrenda').html(""); 
       $('#contraste .filter-option').text(Contraste);
      //$('#contraste .dropdown-menu .inner').append('<li data-original-index="0" idContraste="0" class=" active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">No Aplica</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      

      $('#nuevoContrastePrenda').append('<option value="'+idContraste+'">'+Contraste+'</option>');
    $.each(res, function(i, item){
      $('#nuevoContrastePrenda').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      var index=parseInt(i)+1

      if (idContraste==item.id){
          $('#contraste .dropdown-menu .inner').append('<li data-original-index="'+index+'" idContraste="'+item.id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }else{

          $('#contraste .dropdown-menu .inner').append('<li data-original-index="'+index+'" idContraste="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }

    
          });
}
       });
}
function llenarSelectAvio(Avio,idAvio){
  var datos= new FormData();
  datos.append("idPrenda",$('#nuevaPrenda').val()); 
  datos.append("action","list");
  
  
$.ajax({
url:"controladores/grupos_avio.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta_avio){
var res=JSON.parse(respuesta_avio);
      $('#avio .dropdown-menu .inner').html(""); 
      $('#nuevoGrupoAvioPrenda').html(""); 
      $('#avio .filter-option').text(Avio);
      $('#avio .dropdown-menu .inner').append('<li data-original-index="0" idGrupoAvio="0" class=" active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Grupo</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoGrupoAvioPrenda').append('<option value="'+idAvio+'">'+Avio+'</option>');
    $.each(res, function(i, item){
      $('#nuevoGrupoAvioPrenda').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      var index=parseInt(i)+1

      if(idAvio==item.id){
        $('#avio .dropdown-menu .inner').append('<li data-original-index="'+index+'" idGrupoAvio="'+item.id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }else{
        $('#avio .dropdown-menu .inner').append('<li data-original-index="'+index+'" idGrupoAvio="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }
      
          });
}
       });
}
function llenarSelectConfeccion(Confeccion,idConfeccion){
  var datos= new FormData();
  datos.append("idPrenda",$('#nuevaPrenda').val()); 
  datos.append("action","list");
  
  
$.ajax({
url:"controladores/confecciones_completas.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta_confeccion){
var res=JSON.parse(respuesta_confeccion);
      $('#confeccion .dropdown-menu .inner').html(""); 
      $('#nuevaConfeccionPrenda').html(""); 
      $('#confeccion .filter-option').text(Confeccion);
      $('#confeccion .dropdown-menu .inner').append('<li data-original-index="0" idConfeccion="0" class=" active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Grupo</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevaConfeccionPrenda').append('<option value="'+idConfeccion+'">'+Confeccion+'</option>');
    $.each(res, function(i, item){
      $('#nuevaConfeccionPrenda').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      var index=parseInt(i)+1

      if(idConfeccion==item.id){
        $('#confeccion .dropdown-menu .inner').append('<li data-original-index="'+index+'" idConfeccion="'+item.id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }else{
      $('#confeccion .dropdown-menu .inner').append('<li data-original-index="'+index+'" idConfeccion="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');  
      }
      
          });
}
       });
}
function llenarSelectHilo(Hilo,idHilo){
  var datos= new FormData(); 
  datos.append("action","list");
  
  
$.ajax({
url:"controladores/hilos.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
var res=JSON.parse(respuesta);
      $('#hilo .dropdown-menu .inner').html(""); 
      $('#nuevoHiloPrenda').html(""); 
      $('#hilo .filter-option').text(Hilo);
      $('#hilo .dropdown-menu .inner').append('<li data-original-index="0" idHilo="0" class="active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Hilo</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoHiloPrenda').append('<option value="'+idHilo+'">'+Hilo+'</option>');
    $.each(res, function(i, item){
      $('#nuevoHiloPrenda').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      var index=parseInt(i)+1

      if (idHilo==item.id){
        $('#hilo .dropdown-menu .inner').append('<li data-original-index="'+index+'" idHilo="'+item.id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }else{
         $('#hilo .dropdown-menu .inner').append('<li data-original-index="'+index+'" idHilo="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      }

     
          });
}
       });
}
$( document ).ready(function() {
document.title = 'Prendas';
$('#tablaPrendas').DataTable({
responsive: true,
ajax: "ajax/datatable-prendas.ajax.php",
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



function llenarTalla(){

llenarSelectMolde('Seleccione Molde','');
llenarSelectAvio('Seleccione Grupo','');
llenarSelectConfeccion('Seleccione Confeccion','');

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

$(document).on("change","#nuevaTelaPrenda",function(){
llenarSelectContraste('No aplica',0);
})

$(document).on("click","#guardarPrenda",function(){

if($("#formNuevoPrenda").valid()){


if ($("#idPrenda").val()==0){
if($("#optgroup").val() !=null ){



 $.each($("#optgroup").val(), function(i, item){

var datos= new FormData();
  datos.append("idPrenda",  0);
  datos.append("idMolde",  $('#nuevoMoldePrenda').val());
  datos.append("idLinea",  $('#nuevaLineaPrenda').val());
  datos.append("idTela",  $('#nuevaTelaPrenda').val());
  datos.append("idContraste",  $('#nuevoContrastePrenda').val());
  datos.append("idTalla",  item);
  datos.append("action","validate");
  
  
$.ajax({
url:"controladores/prendas.controlador.php",
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
  datosIngreso.append("idMolde",  $('#nuevoMoldePrenda').val());
  datosIngreso.append("idLinea",  $('#nuevaLineaPrenda').val());
  datosIngreso.append("idTela",  $('#nuevaTelaPrenda').val());
  datosIngreso.append("idContraste",  $('#nuevoContrastePrenda').val());
  datosIngreso.append("idGrupoAvio",  $('#nuevoGrupoAvioPrenda').val());
  datosIngreso.append("idConfeccion",  $('#nuevaConfeccionPrenda').val());
  datosIngreso.append("idHilo",  $('#nuevoHiloPrenda').val());
  datosIngreso.append("idTalla",  item);
  datosIngreso.append("action", "insert");

$.ajax({

url:"controladores/prendas.controlador.php",
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
  datos.append("idPrenda",  $('#idPrenda').val());
  datos.append("idMolde",  $('#nuevoMoldePrenda').val());
  datos.append("idLinea",  $('#nuevaLineaPrenda').val());
  datos.append("idTela",  $('#nuevaTelaPrenda').val());
  datos.append("idContraste",  $('#nuevoContrastePrenda').val());
  datos.append("idTalla",  $("#editarTallaPrenda").val());
  datos.append("action","validate");
  
  
$.ajax({
url:"controladores/prendas.controlador.php",
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
  datosIngreso.append("idPrenda",  $('#idPrenda').val());
  datosIngreso.append("idMolde",  $('#nuevoMoldePrenda').val());
  datosIngreso.append("idLinea",  $('#nuevaLineaPrenda').val());
  datosIngreso.append("idTela",  $('#nuevaTelaPrenda').val());
  datosIngreso.append("idContraste",  $('#nuevoContrastePrenda').val());
  datosIngreso.append("idGrupoAvio",  $('#nuevoGrupoAvioPrenda').val());
  datosIngreso.append("idConfeccion",  $('#nuevaConfeccionPrenda').val());
  datosIngreso.append("idHilo",  $('#nuevoHiloPrenda').val());
  datosIngreso.append("idTalla",  $('#editarTallaPrenda').val());
  datosIngreso.append("action", "insert");

$.ajax({

url:"controladores/prendas.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
if (respuesta=="ok"){

$('#tablaPrendas').DataTable().ajax.reload();
$(".cerrarModal").click();
showNotification('alert-info', '¡La prenda ha sido guardada correctamente!', 'bottom', 'left', '', '');


  
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
$(document).on("click","#clickPrenda",function(){

llenarSelectPrenda('Seleccione Prenda','');
llenarSelectLinea('Seleccione Linea','');
llenarSelectGenero('Seleccione Genero','');
llenarSelectTela('Seleccione Tela','');
llenarSelectHilo('Seleccione Hilo','');

$('#molde .filter-option').text("");
$('#molde .dropdown-menu .inner').html(""); 
$('#nuevoMoldePrenda').html(""); 


$('#contraste .filter-option').text("");
$('#contraste .dropdown-menu .inner').html(""); 
$('#nuevoContrastePrenda').html(""); 

$('#avio .filter-option').text("");
$('#avio .dropdown-menu .inner').html(""); 
$('#nuevoGrupoAvioPrenda').html(""); 

$('#confeccion .filter-option').text("");
$('#confeccion .dropdown-menu .inner').html(""); 
$('#nuevaConfeccionPrenda').html(""); 

 $("#tallas").html("");
 $(".controlesDatosPrenda").hide();
 $("#idPrenda").val(0);



})


$(document).on("click","#datosPrenda",function(){
llenarSelectPrenda('Seleccione Prenda',0);
llenarSelectLinea('Seleccione Linea',0);
llenarSelectGenero('Seleccione Genero',0);
llenarSelectTela('Seleccione Tela',0);
llenarSelectHilo('Seleccione Hilo',0);

$(".controlesDatosPrenda").show();
 $("#tallas").html("");

var datosConsulta=new FormData();
datosConsulta.append("idPrenda", $(this).attr("idPrenda"));
datosConsulta.append("action", "select");

$.ajax({

url:"controladores/prendas.controlador.php",
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


    $('#nuevaTelaPrenda').val(respuesta_datos["id_tela"]);
    $("#tela li" ).removeClass("selected" );
    $('#tela .filter-option').text(respuesta_datos["tela"]);
    $("#tela [idTela="+respuesta_datos["id_tela"]+"]").addClass("selected");


    $('#nuevaLineaPrenda').val(respuesta_datos["id_linea"]);
    $("#linea li" ).removeClass("selected" );
    $('#linea .filter-option').text(respuesta_datos["linea"]);
    $("#linea [idLinea="+respuesta_datos["id_linea"]+"]").addClass("selected");

    $('#nuevoHiloPrenda').val(respuesta_datos["id_hilo"]);
    $("#hilo li" ).removeClass("selected" );
    $('#hilo .filter-option').text(respuesta_datos["hilo"]);
    $("#hilo [idHilo="+respuesta_datos["id_hilo"]+"]").addClass("selected");

    llenarSelectMolde(respuesta_datos["molde"],respuesta_datos["id_molde"]);
    llenarSelectContraste(respuesta_datos["contraste"],respuesta_datos["id_contraste"]);
    llenarSelectAvio(respuesta_datos["grupo_avio"],respuesta_datos["id_grupo_avio"]);
    llenarSelectConfeccion(respuesta_datos["confeccion"],respuesta_datos["id_confeccion"]);
    llenarSelectTalla(respuesta_datos["talla"],respuesta_datos["id_talla"]);
   
}

});
 

})


$(document).on("change","#nuevoMoldePrenda",function(){
            var id=$("#nuevoMoldePrenda").val();
            $("#molde li" ).removeClass( "selected" );
            $("#molde [idMolde="+id+"]").addClass("selected");
});
$(document).on("change","#nuevoGeneroPrenda",function(){
            var id=$("#nuevoGeneroPrenda").val();
            $("#genero li" ).removeClass( "selected" );
            $("#genero [idGenero="+id+"]").addClass("selected");
            llenarTalla();
});

$(document).on("change","#nuevaTelaPrenda",function(){
            var id=$("#nuevaTelaPrenda").val();
            $("#tela li" ).removeClass( "selected" );
            $("#tela [idTela="+id+"]").addClass("selected");
});
$(document).on("change","#nuevoContrastePrenda",function(){
            var id=$("#nuevoContrastePrenda").val();
            $("#contraste li" ).removeClass( "selected" );
            $("#contraste [idContraste="+id+"]").addClass("selected");
});
$(document).on("change","#nuevaPrenda",function(){
            var id=$("#nuevaPrenda").val();
            $("#prenda li" ).removeClass( "selected" );
            $("#prenda [idPrenda="+id+"]").addClass("selected");
            llenarTalla();
});
$(document).on("change","#nuevaLineaPrenda",function(){
            var id=$("#nuevaLineaPrenda").val();
            $("#linea li" ).removeClass( "selected" );
            $("#linea [idLinea="+id+"]").addClass("selected");
});
$(document).on("change","#nuevoGrupoAvioPrenda",function(){
            var id=$("#nuevoGrupoAvioPrenda").val();
            $("#avio li" ).removeClass( "selected" );
            $("#avio [idGrupoAvio="+id+"]").addClass("selected");
});
$(document).on("change","#nuevaConfeccionPrenda",function(){
            var id=$("#nuevaConfeccionPrenda").val();
            $("#confeccion li" ).removeClass( "selected" );
            $("#confeccion [idConfeccion="+id+"]").addClass("selected");
});
$(document).on("change","#nuevoHiloPrenda",function(){
            var id=$("#nuevoHiloPrenda").val();
            $("#hilo li" ).removeClass( "selected" );
            $("#hilo [idHilo="+id+"]").addClass("selected");
});
$(document).on("change","#editarTallaPrenda",function(){
            var id=$("#editarTallaPrenda").val();
            $("#talla li" ).removeClass( "selected" );
            $("#talla [idTalla="+id+"]").addClass("selected");
});

 $(document).on("change",".estatusPrenda",function(){
 
    var datos=new FormData();
    datos.append("activarId",$(this).attr("idPrenda"));
    datos.append("activarPrenda",$(this).attr("estatusPrenda"));
   datos.append("action","activate");
    $.ajax({
url:"controladores/prendas.controlador.php",
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

 