
function llenarSelectTipo(){
  var datos= new FormData();
  datos.append("idPrenda",$('#nuevaPrenda').val()); 
  datos.append("action","list");
  
  
$.ajax({
url:"controladores/tipos_movimiento_almacen.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta_avio){
var res=JSON.parse(respuesta_avio);
      $('#tipo .dropdown-menu .inner').html(""); 
      $('#nuevoTipoMovimiento').html(""); 
      $('#tipo .filter-option').text("Seleccione Tipo");
      $('#tipo .dropdown-menu .inner').append('<li data-original-index="0" idTipoMovimiento="0" class=" active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Grupo</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoTipoMovimiento').append('<option value="" >Seleccione Tipo</option>');
    $.each(res, function(i, item){
      $('#nuevoTipoMovimiento').append('<option value="'+item.id+'" tipo="'+item.tipo+'">'+item.descripcion+'</option>');
      var index=parseInt(i)+1
        $('#tipo .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTipoMovimiento="'+item.id+'" tipo="'+item.tipo+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      
      
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
      
      $('#nuevoAlmacenMovimiento').html(""); 
      $('#almacen .filter-option').text("Seleccione Almacen");
      
      $('#almacen .dropdown-menu .inner').append('<li data-original-index="0" idAlmacen="0" class=" active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Almacen</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
     
      $('#nuevoAlmacenMovimiento').append('<option value="">Seleccione Almacen</option>');


    $.each(res, function(i, item){
      $('#nuevoAlmacenMovimiento').append('<option value="'+item.id+'">'+item.nombre+'</option>');
    
      var index=parseInt(i)+1
    $('#almacen .dropdown-menu .inner').append('<li data-original-index="'+index+'" idAlmacen="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.nombre+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');

  
      
          
          });
}
       });
}

function llenarSelectProveedor(){
  var datos= new FormData();
  datos.append("action","list");
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
      $('#nuevoProveedorMovimiento').html(""); 
     


      $('#proveedor .filter-option').text('Seleccione Proveedor');
      $('#proveedor .dropdown-menu .inner').append('<li data-original-index="0" idProveedor="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Proveedor</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevoProveedorMovimiento').append('<option value="">Seleccione Proveedor</option>');
    $.each(res, function(i, item){
      $('#nuevoProveedorMovimiento').append('<option value="'+item.id+'">'+item.nombre+'</option>');
       
     
      var index=parseInt(i)+1
      $('#proveedor .dropdown-menu .inner').append('<li data-original-index="'+index+'" idProveedor="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.nombre+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');

          });




      

}
       });
}



$( document ).ready(function() {
 $("#controlProveedor").hide();


})

$(document).on("change","#nuevoAlmacenMovimiento",function(){
            var id=$("#nuevoAlmacenMovimiento").val();
            $("#almacen li" ).removeClass( "selected" );
            $("#almacen [idAlmacen="+id+"]").addClass("selected");
           
});
$(document).on("change","#nuevoProveedorMovimiento",function(){
            var id=$("#nuevoProveedorMovimiento").val();
            $("#proveedor li" ).removeClass( "selected" );
            $("#proveedor [idProveedor="+id+"]").addClass("selected");
           
});

$(document).on("change","#nuevoTipoMovimiento",function(){
            var id=$("#nuevoTipoMovimiento").val();
            $("#tipo li" ).removeClass( "selected" );
            $("#tipo [idTipoMovimiento="+id+"]").addClass("selected");
           var tipo=$("#tipo [idTipoMovimiento="+id+"]").attr("tipo");

  if(tipo=='S'){
      $("#controlProveedor").hide();
  }else{

      llenarSelectProveedor();
      $("#controlProveedor").show();
  }



});

$(document).on("click","#clickMovimiento",function(){
          
llenarSelectAlmacen();
llenarSelectTipo();
           
});

$(document).on("click","#guardarMovimiento",function(){

if ($("#formNuevoMovimiento").valid()){

var datosIngreso=new FormData();
  datosIngreso.append("idAlmacen",  $('#nuevoAlmacenMovimiento').val());
  datosIngreso.append("idTipo",  $('#nuevoTipoMovimiento').val());
  datosIngreso.append("documento",  $('#nuevoDocumentoMovimiento').val());
  datosIngreso.append("idProveedor",  $('#nuevoProveedorMovimiento').val());
  datosIngreso.append("action", "insert");

$.ajax({

url:"controladores/movimientos_almacen.controlador.php",
method:"POST",
data:datosIngreso,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
if (respuesta>0){

console.log(respuesta);


  
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



$(document).on("click","#datosPrenda",function(){
llenarSelectPrenda('Seleccione Prenda',0);
llenarSelectLinea('Seleccione Linea',0);
llenarSelectGenero('Seleccione Genero',0);
llenarSelectTela('Seleccione Tela',0);
llenarSelectHilo('Seleccione Hilo',0);

$(".controlesDatosPrenda").show();

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