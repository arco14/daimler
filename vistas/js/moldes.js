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
      $('#nuevaPrendaMolde').html(""); 
      $('#prenda .filter-option').text('Seleccione Prenda');
      $('#prenda .dropdown-menu .inner').append('<li data-original-index="0" idPrenda="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Prenda</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevaPrendaMolde').append('<option value="">Seleccione Prenda</option>');
    $.each(res, function(i, item){
      $('#nuevaPrendaMolde').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      var index=parseInt(i)+1
      $('#prenda .dropdown-menu .inner').append('<li data-original-index="'+index+'" idPrenda="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
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
      $('#nuevaGeneroMolde').html(""); 
      $('#genero .filter-option').text('Seleccione Genero');
      $('#genero .dropdown-menu .inner').append('<li data-original-index="0" idGenero="0" class="selected active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Genero</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
      $('#nuevaGeneroMolde').append('<option value="">Seleccione Genero</option>');
    $.each(res, function(i, item){
      $('#nuevaGeneroMolde').append('<option value="'+item.id+'">'+item.descripcion+'</option>');
      var index=parseInt(i)+1
      $('#genero .dropdown-menu .inner').append('<li data-original-index="'+index+'" idGenero="'+item.id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.descripcion+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
          });
}
       });
}





$( document ).ready(function() {

  llenarSelectGenero();
  llenarSelectPrenda();
$('#tablaMoldes').DataTable({
responsive: true,
ajax: "ajax/datatable-moldes.ajax.php",

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

$(document).on("change","#nuevaGeneroMolde",function(){
            var id=$("#nuevaGeneroMolde").val();
            $("#genero li" ).removeClass( "selected" );
            $("[idGenero="+id+"]").addClass("selected");
});
$(document).on("change","#nuevaPrendaMolde",function(){
            var id=$("#nuevaPrendaMolde").val();
            $("#prenda li" ).removeClass( "selected" );
            $("[idPrenda="+id+"]").addClass("selected");
});


 var archivo="";
 $(document).on("change","#nuevoArchivo",function(){
 archivo=this.files[0];

if(archivo["type"] !="application/pdf" ){

  $("#nuevoArchivo").val("");
swal({
          icon:"error",
          title:"¡El archivo debe estar en formato PDF!",
          })
}else if(archivo["size"] > 2000000){
$("#nuevoArchivo").val("");
swal({
          icon:"error",
          title:"¡El archivo no debe pesar más de 2MB!",  
          });
}
})
  var zip="";
 $(document).on("change","#nuevoZip",function(){
 zip=this.files[0];
console.log(zip);

if(zip["type"] !="application/x-zip-compressed" && zip["type"] !="application/x-rar-compressed"  ){

  $("#nuevoZip").val("");
swal({
          icon:"error",
          title:"¡El archivo debe estar en formato Comprimido!",
          })
}else if(archivo["size"] > 2000000){
$("#nuevoZip").val("");
swal({
          icon:"error",
          title:"¡El archivo no debe pesar más de 2MB!",  
          });
}
})


 function limpiarControlesMolde(){
$("#nuevaClaveMolde").val("");
$("#idMolde").val(0);

$("#nuevoMolde").val("");
llenarSelectGenero();
llenarSelectPrenda();
$("#nuevoConsumoPrincipal").val(0.3);
$("#nuevoAnchoPrincipal").val(1);
$("#nuevoConsumoContraste").val(0);
$("#nuevoAnchoContraste").val(0);
$("#versionMolde").val(1);
var fechaActual = new Date().toISOString().split('T')[0]
$("#nuevaFechaVersion").val(fechaActual);
$("#agregarVersionMolde").hide();
$("#tablaVersiones").hide();
$("#bodyTablaVersion").html("");

$("#collapseVersion").addClass("in");
$("#collapseBoton").hide();
 }

$(document).on("click","#clickMolde",function(){
    limpiarControlesMolde();
})

 $(document).on("change","#nuevaClaveMolde",function(){


var datos=new FormData();
datos.append("clave",$("#nuevaClaveMolde").val());
datos.append("action","validate");


$.ajax({
url:"controladores/moldes.controlador.php",
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
        $("#nuevaClaveMolde").val("");
        

}
}
})

});
$(document).on("click","#guardarMolde",function(){


if($("#formNuevoMolde").valid()){
  var datos=new FormData();
datos.append("clave",$("#nuevaClaveMolde").val());
datos.append("descripcion",$("#nuevoMolde").val());
datos.append("id_prenda",$("#nuevaPrendaMolde").val());
datos.append("id_genero",$("#nuevaGeneroMolde").val());
datos.append("consumo_principal",$("#nuevoConsumoPrincipal").val());
datos.append("ancho_principal",$("#nuevoAnchoPrincipal").val());
datos.append("consumo_contraste",$("#nuevoConsumoContraste").val());
datos.append("ancho_contraste",$("#nuevoAnchoContraste").val());
datos.append("fecha_version",$("#nuevaFechaVersion").val());
datos.append("version",$("#versionMolde").val());
datos.append("observaciones_version",$("#nuevaObservacionVersion").val());
datos.append("archivo",archivo);
datos.append("zip",zip);



if ($("#idMolde").val()>0){
datos.append("id",$("#idMolde").val());
datos.append("action","update");

}else
{
datos.append("action","insert");  
}




$.ajax({
url:"controladores/moldes.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
if(respuesta=="ok")
{
      swal({
        title: "¡El molde ha sido guardado correctamente!",
        icon: "vistas/img/thumbs-up.png"
    }).then(function(result){    

        $('#tablaMoldes').DataTable().ajax.reload();
            limpiarControlesMolde();
            $(".cerrarModal").click();
        })

}else{

swal({
            title: respuesta,
            icon: "error",  
          });
     
}



}
})

}



});
$(document).on("click","#datosMolde",function(){
  $("#agregarVersionMolde").show();
  $("#collapseVersion").removeClass("in");
  $("#collapseBoton").show();



var fechaActual = new Date().toISOString().split('T')[0]
$("#nuevaFechaVersion").val(fechaActual);

var datos=new FormData();
datos.append("idMolde",$(this).attr("idMolde"));
datos.append("action","select");



$.ajax({
url:"controladores/moldes.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
dataType:"json",
success:function(respuesta){


 	  $("#nuevaClaveMolde").val(respuesta["clave"]);
    $("#nuevoMolde").val(respuesta["descripcion"]);
    $("#nuevoPrecio").val(respuesta["precio"]);   
    $("#nuevoConsumoPrincipal").val(respuesta["consumo_principal"]);
    $("#nuevoAnchoPrincipal").val(respuesta["ancho_principal"]);
    $("#nuevoConsumoContraste").val(respuesta["consumo_contraste"]);
    $("#nuevoAnchoContraste").val(respuesta["ancho_contraste"]);
    $("#versionMolde").val(respuesta["version"]);

    $("#idMolde").val(respuesta["id"]);
  

    $('#nuevaPrendaMolde').val(respuesta["id_prenda"]);
    $("#prenda li" ).removeClass("selected" );
    $('#prenda .filter-option').text(respuesta["categoria"]);
    $("#prenda [idPrenda="+respuesta["id_prenda"]+"]").addClass("selected");
  

    $('#nuevaGeneroMolde').val(respuesta["id_genero"]);
    $("#genero li" ).removeClass("selected" );
    $('#genero .filter-option').text(respuesta["genero"]);
    $("#genero [idGenero="+respuesta["id_genero"]+"]").addClass("selected");
   


}
})

  })

$(document).on("click","#versionesMolde",function(){

$('#tablaVersiones').DataTable({
  destroy:true,
responsive: true,
deferRender:true,  
retrive: true,
processing:true,
ajax:{
  url: "ajax/datatable-versiones-molde.ajax.php",
  type:"POST",
  data: {"idMolde":$(this).attr("idMolde")}
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
$(document).on("click","#agregarVersionMolde",function(){


if($("#formNuevoMolde").valid()){   

var datos=new FormData();
datos.append("clave",$("#nuevaClaveMolde").val());
datos.append("fecha_version",$("#nuevaFechaVersion").val());
datos.append("version",$("#versionMolde").val());
datos.append("observaciones_version",$("#nuevaObservacionVersion").val());
datos.append("archivo",archivo);
datos.append("zip",zip);

datos.append("id_molde",$("#idMolde").val());
datos.append("action","insertVersion");	


$.ajax({
url:"controladores/moldes.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){
if(respuesta=="ok")
{
      swal({
        title: "¡La version ha sido guardada correctamente!",
        icon: "vistas/img/thumbs-up.png"
    }).then(function(result){    

    		$("#nuevaObservacionVersion").val("");
			  $("#nuevoArchivo").val("");
        $("#nuevoZip").val("");
        $(".cerrarModal").click();



        })

}else{

swal({
            title: respuesta,
            icon: "error",  
          });
     
}



}
})

}


})


 $(document).on("change",".estatusMolde",function(){
 
    var datos=new FormData();
    datos.append("activarId",$(this).attr("idMolde"));
    datos.append("activarMolde",$(this).attr("estadoMolde"));
   datos.append("action","activate");
    $.ajax({
url:"controladores/moldes.controlador.php",
method:"POST",
data:datos,
cache:false,
contentType:false,
processData:false,
success:function(respuesta){ 
   
if (respuesta=="ok")
{
swal({               
     title: "¡El molde ha sido actualizado!",
      icon: "success",
                    }).then(function(result){       
                    
                         $('#tablaMolde').DataTable().ajax.reload();     

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