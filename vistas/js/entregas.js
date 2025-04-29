$( document ).ready(function() {


    /*$_SESSION["iniciarSesion"]="ok";
 					$_SESSION["id"]=$respuesta["id"];
 					$_SESSION["nombre"]=$respuesta["nombre"];
 					$_SESSION["usuario"]=$respuesta["usuario"];*/


     document.title = 'Entregas';
    var userActive = $('#nombreUsuario').text()
    if ( userActive!='' && userActive != undefined){
        $("#panelUsuario").hide();

        
    }else{
        $("#guardarEntrega").hide();
    }
 
    var strCodigoOP='';
    var strDetalleOP='';
    var arrayTallasTop=[];
    var arrayTallasPant=[];
    var arrayEntregaEmpleado=[];
    var arrayEntregaDetalle=[];
    var arrayPrendasExtra=[]; 
    var arrayGenerico=[];
    var jsonParametros;
    var intId; 
    var strTexto='';
    var jsonResult;
    $("#firmaGafete").focus();
   $(".panelEntrega").hide();
   $("#clickEntrega").hide();
   
   $(".readonly").attr('readonly', 'readonly');

   $('#tablaEntregas').DataTable({
        responsive: true,
        ajax:{
            url: "ajax/datatable-entregas.ajax.php",
            type:"POST",
            data: {"action": "consultaEmpleados"}
          },
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
    $(document).on("click","#btnUltimaEntrega",function(){
        $('#tablaDetalleEntrega').DataTable({
            responsive: true,
            destroy: true,
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
            },            
            ajax:{
                url: "ajax/datatable-entregas.ajax.php",
                type:"POST",
                data: {"action": "consultaDetalleEntrega","idEmpleado":$("#idEmpleado").val()}
              }  
        
        });
    
    })
    $(document).on("click","#datosResumenEntregas",function(){

   
        $('#tablaResumenEntregas').DataTable({
            responsive: true,
            destroy: true,
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
            },            
            ajax:{
                url: "ajax/datatable-entregas.ajax.php",
                type:"POST",
                data: {"action": "consultaEntregas","idEmpleado":$(this).attr("idEmpleado")}
              }  
        
        });
        //$(".columnasResumen").hide();

    })   
    
    $(document).on("click","#btnSalir",function(){
        
        var datos= new FormData();
        datos.append("data",  $("#usuarioSession").val());
        datos.append("action","SE");

        $.ajax({
            url:"controladores/entregas.controlador.php",
            method:"POST",
            data:datos,
            cache:false,
            contentType:false,
            processData:false,
            dataType:"json",
            success:function(){
                location.reload(true);

            }
        });
    
    })
    $(document).on("click","#btnGenerarSession",function(){
        
        var datos= new FormData();
        datos.append("data",  $("#usuarioSession").val());
        datos.append("action","SS");

        $.ajax({
            url:"controladores/entregas.controlador.php",
            method:"POST",
            data:datos,
            cache:false,
            contentType:false,
            processData:false,
            dataType:"json",
            success:function(){
                location.reload(true);
                //swal("¡Atención!", 'Debe seleccionar talla pantalon', "error");

            }
        });
    
    })
    $(document).on("click","#datosEntrega",function(){
            $(".readonly").val(""); 
            jsonParametros ='{"Opcion": "CI","Usuario":"cruz.gonzalez" ,"Entrega":{"EMP_Id":'+ $(this).attr("idEmpleado")+'}}';
            generarEntrega(jsonParametros);
    })
    $(document).on("change","#firmaGafete",function(){
            $(".readonly").val("");
            if  ($("#firmaGafete").val() ==''){
                return;
            }
            $("#clickEntrega").click();
           
             jsonParametros ='{"Opcion": "CI","Usuario":"cruz.gonzalez" ,"Entrega":{"EMP_FirmaGafete":'+ $("#firmaGafete").val() +'}}';
             generarEntrega(jsonParametros);
    });
    $(document).on("change","#paqueteEmpleado",function(){
        $(".cantidadEntrega").val(0);
        intId=$("#paqueteEmpleado").val();
        $( "#paquete li" ).removeClass( "selected" );
        $("[idPaquete="+intId+"]").addClass("selected");
        jsonParametros ='{"Opcion": "CIP","Usuario":"cruz.gonzalez" , "Entrega":{"EMP_Id":'+ $("#idEmpleado").val()+',"PAQ_Id":'+ intId +'}}';
        var datos= new FormData();
        datos.append("data",  jsonParametros);
        datos.append("action","consulta");
        //Consultar detalle paquete
        $.ajax({
            url:"controladores/entregas.controlador.php",
            method:"POST",
            data:datos,
            cache:false,
            contentType:false,
            processData:false,
            dataType:"json",
            success:function(respuesta_datos){
                console.log(respuesta_datos);
                $(".panelEntrega").hide();
                generarDetalleEntrega(respuesta_datos[0]);
            }
        });
    });
    $(document).on("change","#paquetePantalon",function(){

        intId=$("#paquetePantalon").val();
        $( "#pantalon li" ).removeClass( "selected" );
        $("#pantalon [idTalla="+intId+"]").addClass("selected");

        jsonParametros ='{"Opcion": "CET","Usuario":"cruz.gonzalez" , "IdTalla":'+ intId +',"IdPrenda":'+ $(this).attr("idPrenda") +' }';
        var datos= new FormData();
        datos.append("data",  jsonParametros);
        datos.append("action","consulta");
        consultarExistencia(datos,"#paquetePantalonExistencia");
  
    });

    $(document).on("change","#paquetePrendaExtra",function(){
        intId=$("#paquetePrendaExtra").val();
        $( "#prendaExtra li" ).removeClass( "selected" );
        $("prendaExtra [idTalla="+intId+"]").addClass("selected");

        jsonParametros ='{"Opcion": "CET","Usuario":"cruz.gonzalez" , "IdTalla":'+ intId +',"IdPrenda":'+ $(this).attr("idPrenda") +' }';
        var datos= new FormData();
        datos.append("data",  jsonParametros);
        datos.append("action","consulta");
        consultarExistencia(datos,"#paqueteExtraExistencia");
     
    });
    function consultarExistencia(datos,controlador)
    {
        $.ajax({
            url:"controladores/entregas.controlador.php",
            method:"POST",
            data:datos,
            cache:false,
            contentType:false,
            processData:false,
            dataType:"json",
            success:function(respuesta_datos){
               arrayGenerico=respuesta_datos[0][0];
                $(controlador).val(arrayGenerico[0]);
            }
           
        });

    }
    $(document).on("click","#btnEliminarPantalon",function(){
        $("#paquetePantalonCantidad").val(0);
        $("#entregaPantalon").hide();
    });
    $(document).on("click","#btnEliminarCamisaMangaLarga",function(){
        $("#paqueteCamisaMangaLargaCantidad").val(0);
        $("#entregaCamisaMangaLarga").hide();
    });
    $(document).on("click","#btnEliminarCamisaMangaCorta",function(){
       $("#paqueteCamisaMangaCortaCantidad").val(0);
        $("#entregaCamisaMangaCorta").hide();
    });
    $(document).on("click","#btnEliminarPlayera",function(){
        $("#paquetePlayeraCantidad").val(0);
        $("#entregaPlayera").hide();
    });
    $(document).on("change","#paqueteCamisaMangaLarga",function(){
        var datos= new FormData();
        intId=$("#paqueteCamisaMangaLarga").val();

        $( "#camisaMangaLarga li" ).removeClass( "selected" );
        $("#camisaMangaLarga [idTalla="+intId+"]").addClass("selected");
        strTexto=$("#camisaMangaLarga [idTalla="+intId+"]").text();
        jsonParametros ='{"Opcion": "CET","Usuario":"cruz.gonzalez" , "IdTalla":'+ intId +',"IdPrenda":'+ $(this).attr("idPrenda") +' }';
        datos= new FormData();
        datos.append("data",  jsonParametros);
        datos.append("action","consulta");
        consultarExistencia(datos,"#paqueteCamisaMangaLargaExistencia");

        $("#paqueteCamisaMangaCorta").val(intId);
        $("#camisaMangaCorta li" ).removeClass( "selected" );
        $("#camisaMangaCorta [idTalla="+intId+"]").addClass("selected");
        $('#camisaMangaCorta .filter-option').text(strTexto);
        datos= new FormData();
        jsonParametros ='{"Opcion": "CET","Usuario":"cruz.gonzalez" , "IdTalla":'+ intId +',"IdPrenda":'+ $("#paqueteCamisaMangaCorta").attr("idPrenda") +' }';
        datos= new FormData();
        datos.append("data",  jsonParametros);
        datos.append("action","consulta");
        consultarExistencia(datos,"#paqueteCamisaMangaCortaExistencia");

        $("#paquetePlayera").val(intId);
        $("#playera li" ).removeClass( "selected" );
        $("#playera [idTalla="+intId+"]").addClass("selected");
        $('#playera .filter-option').text(strTexto);
        datos= new FormData();
        jsonParametros ='{"Opcion": "CET","Usuario":"cruz.gonzalez" , "IdTalla":'+ intId +',"IdPrenda":'+ $("#paquetePlayera").attr("idPrenda") +' }';
        datos= new FormData();
        datos.append("data",  jsonParametros);
        datos.append("action","consulta");
        consultarExistencia(datos,"#paquetePlayeraExistencia");

    });
    $(document).on("change","#paqueteCamisaMangaCorta",function(){
        intId=$("#paqueteCamisaMangaCorta").val();
        $( "#camisaMangaCorta li" ).removeClass( "selected" );
        $("#camisaMangaCorta [idTalla="+intId+"]").addClass("selected");
    });
    $(document).on("change","#paquetePlayera",function(){
        intId=$("#paquetePlayera").val();
        $( "#playera li" ).removeClass( "selected" );
        $("#playera [idTalla="+intId+"]").addClass("selected");
        
        strTexto=$("#playera [idTalla="+intId+"]").text();
        //console.log(intId);
    });
    $(document).on("change","#paqueteSudadera",function(){
        intId=$("#paqueteSudadera").val();
        $( "#sudadera li" ).removeClass( "selected" );
        $("#sudadera [idTalla="+intId+"]").addClass("selected");
        
        strTexto=$("#sudadera [idTalla="+intId+"]").text();
        //console.log(intId);
    });
    $(document).on("click","#cerrarModalEntrega",function(){
        limpiarComponentes();
    });
    $(document).on('keydown', function(event) {
        if (event.key == "Escape") {
            limpiarComponentes();
        }
    });
    $(document).on('hover','.content', function() {
            limpiarComponentes();      
    });
    $(".content").hover(function(){
            limpiarComponentes();   
        }, function(){
            limpiarComponentes();   
      });
    $(document).on("click","#guardarPrenda", function(event) {
        intId=$("#paqueteExtra").val();
        var arrayPrenda = arrayPrendasExtra.find((prenda) => prenda.Id == intId);
          // console.log(array); 
           $("#entregaExtra").show();
           $("#entregaExtraTitulo").html('<b>'+arrayPrenda[1]+'</b>');
           $("#paquetePrendaExtra").attr('idPrenda', intId);
    
            $('#prendaExtra .dropdown-menu .inner').html(""); 
            $('#paquetePrendaExtra').html(""); 
            $('#prendaExtra .dropdown-menu .inner').append('<li data-original-index="0" idTalla="0" class="active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Talla</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
            

            /*if(value.CAT_TALLA==item.Id){
                $('#pantalon .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTalla="'+item.Id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.NOMBRE+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
            }else{
                $('#pantalon .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTalla="'+item.Id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.NOMBRE+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');  
            }*/
    
        if (arrayPrenda[2]=='TOP'){

            $("#paqueteExtraCantidad").val(1);     
            if (arrayEntregaEmpleado[0]["CAT_TALLA_CAMISA"]>0)   
                {
                    $('#prendaExtra .filter-option').text(arrayEntregaEmpleado[0]["TALLA_CAMISA"]);
                    $('#paquetePrendaExtra').append('<option value="'+arrayEntregaEmpleado[0]["CAT_TALLA_CAMISA"]+'">'+arrayEntregaEmpleado[0]["TALLA_CAMISA"]+'</option>');    
                }
                else{
                    $('#prendaExtra .filter-option').text('Seleccione Talla');
                    $('#paquetePrendaExtra').append('<option value="0">Seleccione Talla</option>');    
                }


            $.each(arrayTallasTop, function(i, item){


                $('#paquetePrendaExtra').append('<option value="'+item.Id+'">'+item.NOMBRE+'</option>');
                var index=parseInt(i)+1

                if(arrayEntregaEmpleado[0]["CAT_TALLA_CAMISA"]==item.Id){
                    $('#prendaExtra .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTalla="'+item.Id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.NOMBRE+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
                }else{
                    $('#prendaExtra .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTalla="'+item.Id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.NOMBRE+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');  
                }
            
                });  
          
        }
        else{
            $("#paqueteExtraCantidad").val(5);     
            if (arrayEntregaEmpleado[0]["CAT_TALLA_PANTALON"]>0)   
                {
                    $('#prendaExtra .filter-option').text(arrayEntregaEmpleado[0]["TALLA_PANTALON"]);
                    $('#paquetePrendaExtra').append('<option value="'+arrayEntregaEmpleado[0]["CAT_TALLA_PANTALON"]+'">'+arrayEntregaEmpleado[0]["TALLA_PANTALON"]+'</option>');    
                }
                else{
                    $('#prendaExtra .filter-option').text('Seleccione Talla');
                    $('#paquetePrendaExtra').append('<option value="0">Seleccione Talla</option>');    
                }

            $.each(arrayTallasPant, function(i, item){
                $('#paquetePrendaExtra').append('<option value="'+item.Id+'">'+item.NOMBRE+'</option>');
                var index=parseInt(i)+1
                   
                if(arrayEntregaEmpleado[0]["CAT_TALLA_PANTALON"]==item.Id){
                    $('#prendaExtra .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTalla="'+item.Id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.NOMBRE+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
                }else{
                    $('#prendaExtra .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTalla="'+item.Id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.NOMBRE+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');  
                }
            
                });  
        }

        intId=$("#paquetePrendaExtra").val();
        jsonParametros ='{"Opcion": "CET","Usuario":"cruz.gonzalez" , "IdTalla":'+ intId +',"IdPrenda":'+ $("#paquetePrendaExtra").attr("idPrenda") +' }';
        var datos= new FormData();
        datos.append("data",  jsonParametros);
        datos.append("action","consulta");
        consultarExistencia(datos,"#paqueteExtraExistencia");

        $("#cerrarModalPrenda").click();

    });
 
    function limpiarComponentes(){
        $("#firmaGafete").val("");
        $("#firmaGafete").focus();
        $("#tipoEntrega").removeAttr("checked");
        $("#tipoEntrega").attr("cambioPrendas","0");
        $(".botonesEliminar").show();
        $(".retornos").hide();
        $("#retornoPantalon").removeAttr("checked");
        $("#paquetePantalon").removeAttr("disabled");
        $("#retornoCamisaMangaLarga").removeAttr("checked");
        $("#paqueteCamisaMangaLarga").removeAttr("disabled");
        $("#retornoCamisaMangaCorta").removeAttr("checked");
        $("#paqueteCamisaMangaCorta").removeAttr("disabled");
    }
    function generarEntrega(jsonParametros){
        var datos= new FormData();
        var intIdPaquete,strPaquete;
        datos.append("data",  jsonParametros);
        datos.append("action","consulta");
        $(".cantidadEntrega").val(0);
        $("#panelComentariosTalla").hide();
        $("#collapseDatosEmpleados").attr("class","collapse");
        $("#collapseUltimaEntrega").attr("class","collapse");
        $.ajax({
            url:"controladores/entregas.controlador.php",
            method:"POST",
            data:datos,
            cache:false,
            contentType:false,
            processData:false,
            dataType:"json",
            success:function(respuesta_datos){
                //Revisar la respuesta del stored 
                arrayEntregaEmpleado=respuesta_datos[0];
               
                arrayTallasTop =respuesta_datos[2];   
                arrayTallasPant=  respuesta_datos[3] ;
                arrayPrendasExtra=  respuesta_datos[4] ;
                arrayEntregaDetalle=respuesta_datos[5];
                
                 $.each(respuesta_datos[0], function(index, value) {
                    strCodigoOP=value.strCodigo;
                    strDetalleOP=value.strDetalle;     

                   });

                 if   (strCodigoOP!='' && strCodigoOP != undefined)
                  {
                    //swal("¡Atención!", strDetalleOP, "error");

                    swal({
                        title: "¡Atención!",
                        text: strDetalleOP,
                        timer: 2000,
                        showConfirmButton: true
                    }).then (function () {
                            $("#cerrarModalEntrega").click();
                   
                            //$("#firmaGafete").val("");
                            //$("#firmaGafete").focus();
                    });

             
                  }else
                  {
                        $(".panelEntrega").hide();
                        $.each(respuesta_datos[0], function(index, value) {
                           // alert(index + ': ' + value);
                            $("#idEmpleado").val(value.Id);
                            $("#numeroEmpleado").val(value.NUMERO_EMPLEADO);
                            $("#nombreEmpleado").val(value.NOMBRE_EMPLEADO);
                            $("#areaEmpleado").val(value.AREA);
                            $('#puestoEmpleado').val(value.PUESTO);      
                            $('#fechaIngreso').val(value.FECHA_INGRESO);  
                            $('#comentariosEntrega').val(value.COMENTARIOS_ENTREGA);  
                            $('#fechaUltimaEntrega').val(value.FECHA_ULTIMA_ENTREGA);  
                                console.log(respuesta_datos[0]);

                            if (value.COMENTARIOS_TOMA_TALLA !='')
                            {
                                $('#comentariosTomaTalla').val(value.COMENTARIOS_TOMA_TALLA);  
                                $("#panelComentariosTalla").show();
                            }
                            if (value.ESTATUS!="Entrega Pendiente")
                            {
                                $('#estatusTitulo').text(value.ESTATUS);  
                                $("#estatusTitulo").show();
                            }
                            else
                            {
                                $("#estatusTitulo").hide();
                            }
                            
                            intIdPaquete= value.PAQ_Id;
                            strPaquete= value.PAQUETE;
                          });

                          $('#paquete .dropdown-menu .inner').html(""); 
                          $('#paqueteEmpleado').html(""); 
                          $('#paquete .filter-option').text(strPaquete);
                         // $('#paquete .dropdown-menu .inner').append('<li data-original-index="0" idPaquete="0" class=" active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Paquete</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
                          $('#paqueteEmpleado').append('<option value="'+intIdPaquete+'">'+strPaquete+'</option>');
                         
                          $.each(respuesta_datos[1], function(i, item){
                                $('#paqueteEmpleado').append('<option value="'+item.Id+'">'+item.NOMBRE+'</option>');
                                var index=parseInt(i)+1
                            
                                if(intIdPaquete==item.Id){
                                    $('#paquete .dropdown-menu .inner').append('<li data-original-index="'+index+'" idPaquete="'+item.Id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.NOMBRE+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
                                }else{
                                    $('#paquete .dropdown-menu .inner').append('<li data-original-index="'+index+'" idPaquete="'+item.Id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.NOMBRE+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');  
                                }
                                
                            });     

                            $('#extra .dropdown-menu .inner').html(""); 
                            $('#paqueteExtra').html(""); 
                            $('#extra .filter-option').text('Seleccione Prenda');
                            $('#extra .dropdown-menu .inner').append('<li data-original-index="0" idPrenda="0" class=" active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Prenda</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
                            $('#paqueteExtra').append('<option value="0">Seleccione Prenda</option>');
                           
                            $.each(arrayPrendasExtra, function(i, item){
                                  $('#paqueteExtra').append('<option value="'+item.Id+'">'+item.NOMBRE+'</option>');
                                  var index=parseInt(i)+1
                              
                                 // if(intIdPaquete==item.Id){
                                     // $('#extra .dropdown-menu .inner').append('<li data-original-index="'+index+'" idPrenda="'+item.Id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.NOMBRE+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
                                 // }else{
                                      $('#extra .dropdown-menu .inner').append('<li data-original-index="'+index+'" idPrenda="'+item.Id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.NOMBRE+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');  
                                  //}
                                  
                              });       

                             //$("#panelPrendas").html('');
                           // console.log(arrayEntregaDetalle);
                            generarDetalleEntrega(arrayEntregaDetalle);        
                           //                                 
                          // let dteFechaIngreso= new Date(respuesta_datos["FECHA_INGRESO"]);
                         //$('#fechaIngreso').val(dteFechaIngreso.toString('dd/MMM/yyyy'));
                        
                  }


            
            }
            
            });    
    
    }
    function generarDetalleEntrega(arrayEntregaDetalle){
       // $("#detalleEntrega" ).html("");
       var intPosicion=0;
       
        $.each(arrayEntregaDetalle, function(index, value){
                
            switch(value.CATEGORIA) {
                case 'PANTALON' :
                    $("#btnEliminarPantalon").attr('index', intPosicion);
                    $("#btnEliminarPantalon").attr('idPrenda', value.Id);
                    $("#entregaPantalon").attr('index', intPosicion);
                    $("#paquetePantalon").attr('idPrenda', value.Id);
                    $("#entregaPantalon").show();
                    $("#entregaPantalonTitulo").html('<b>'+value.NOMBRE+'</b>');
                    $("#paquetePantalonCantidad").val(value.CANTIDAD_ENTREGA);     
                    $("#paquetePantalonExistencia").val(value.EXISTENCIA);    
                    $('#pantalon .dropdown-menu .inner').html(""); 
                    $('#paquetePantalon').html(""); 
                    $("#idTallaPantalon").val(value.CAT_TALLA);  
                    $('#pantalon .dropdown-menu .inner').append('<li data-original-index="0" idTalla="0" class="active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Talla</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
                   
                    if (value.CAT_TALLA>0)
                    {
                        $('#pantalon .filter-option').text(value.TALLA);
                        $('#paquetePantalon').append('<option value="'+value.CAT_TALLA+'">"'+value.TALLA+'"</option>')    
                    }
                    else{
                        $('#pantalon .filter-option').text('Seleccione Talla');
                        $('#paquetePantalon').append('<option value="0">Seleccione Talla</option>');
                    }
    
                    $.each(arrayTallasPant, function(i, item){
                        $('#paquetePantalon').append('<option value="'+item.Id+'">'+item.NOMBRE+'</option>');
                        var index=parseInt(i)+1
                        if(value.CAT_TALLA==item.Id){
                            $('#pantalon .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTalla="'+item.Id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.NOMBRE+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
                        }else{
                            $('#pantalon .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTalla="'+item.Id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.NOMBRE+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');  
                        }

                            //$('#pantalon .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTalla="'+item.Id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.NOMBRE+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');  
                    });  

                    break;
                case 'CAMISA MANGA LARGA':
                    $("#btnEliminarCamisaMangaLarga").attr('idPrenda', value.Id);
                    $("#paqueteCamisaMangaLarga").attr('idPrenda', value.Id);
                    $("#entregaCamisaMangaLarga").show();
                    $("#entregaCamisaMangaLargaTitulo").html('<b>'+value.NOMBRE+'</b>');
                    $("#paqueteCamisaMangaLargaCantidad").val(value.CANTIDAD_ENTREGA);  
                
                    $("#paqueteCamisaMangaLargaExistencia").val(value.EXISTENCIA);    
                    $('#camisaMangaLarga .dropdown-menu .inner').html(""); 
                    $('#paqueteCamisaMangaLarga').html(""); 
                    $("#idTallaCamisaMangaLarga").val(value.CAT_TALLA);  
                    $('#camisaMangaLarga .dropdown-menu .inner').append('<li data-original-index="0" idTalla="0" class="active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Talla</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
                    if (value.CAT_TALLA>0)
                    {
                        $('#camisaMangaLarga .filter-option').text(value.TALLA);
                        $('#paqueteCamisaMangaLarga').append('<option value="'+value.CAT_TALLA+'">"'+value.TALLA+'"</option>')    
                    }
                    else
                    {
                        $('#camisaMangaLarga .filter-option').text('Seleccione Talla');
                        $('#paqueteCamisaMangaLarga').append('<option value="0">Seleccione Talla</option>');     
                    }
                    
         
                    $.each(arrayTallasTop, function(i, item){
                        $('#paqueteCamisaMangaLarga').append('<option value="'+item.Id+'">'+item.NOMBRE+'</option>');
                        var index=parseInt(i)+1
                        if(value.CAT_TALLA==item.Id){
                            $('#camisaMangaLarga .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTalla="'+item.Id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.NOMBRE+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
                        }
                        else{
                            $('#camisaMangaLarga .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTalla="'+item.Id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.NOMBRE+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');  
                        }
                  
                            
                    });  
                  break;
                  case 'CAMISA MANGA CORTA':
                    $("#btnEliminarCamisaMangaCorta").attr('idPrenda', value.Id);
                    $("#paqueteCamisaMangaCorta").attr('idPrenda', value.Id);
                    $("#entregaCamisaMangaCorta").show();
                    $("#entregaCamisaMangaCortaTitulo").html('<b>'+value.NOMBRE+'</b>');
                    $("#paqueteCamisaMangaCortaCantidad").val(value.CANTIDAD_ENTREGA);  
                    $("#paqueteCamisaMangaCortaExistencia").val(value.EXISTENCIA);    
                   // $("#paqueteCamisaCantidad").attr('data-max', value.CANTIDAD);
                    $('#camisaMangaCorta .dropdown-menu .inner').html(""); 
                    $('#paqueteCamisaMangaCorta').html(""); 
                    $('#camisaMangaCorta .dropdown-menu .inner').append('<li data-original-index="0" idTalla="0" class="active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Talla</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
                    $("#idTallaCamisaMangaCorta").val(value.CAT_TALLA);  
                    if (value.CAT_TALLA>0)
                    {
                        $('#camisaMangaCorta .filter-option').text(value.TALLA);
                        $('#paqueteCamisaMangaCorta').append('<option value="'+value.CAT_TALLA+'">"'+value.TALLA+'"</option>')    
                    }
                    else
                    {
                        $('#camisaMangaCorta .filter-option').text('Seleccione Talla');
                        $('#paqueteCamisaMangaCorta').append('<option value="0">Seleccione Talla</option>');     
                    }
                    $.each(arrayTallasTop, function(i, item){
                        $('#paqueteCamisaMangaCorta').append('<option value="'+item.Id+'">'+item.NOMBRE+'</option>');
                        var index=parseInt(i)+1
                        if(value.CAT_TALLA==item.Id){
                            $('#camisaMangaCorta .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTalla="'+item.Id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.NOMBRE+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
                        }
                        else{
                            $('#camisaMangaCorta .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTalla="'+item.Id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.NOMBRE+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');  
                        }
                  
                    });  
                  break;
                  case 'PLAYERA':
                    $("#btnEliminarPlayera").attr('idPrenda', value.Id);
                    $("#paquetePlayera").attr('idPrenda', value.Id);
                    $("#entregaPlayera").show();
                    $("#entregaPlayeraTitulo").html('<b>'+value.NOMBRE+'</b>');
                    $("#paquetePlayeraCantidad").val(value.CANTIDAD_ENTREGA);  
                    $("#paquetePlayeraExistencia").val(value.EXISTENCIA);    
                   // $("#paqueteCamisaCantidad").attr('data-max', value.CANTIDAD);
                    $('#playera .dropdown-menu .inner').html(""); 
                    $('#paqueteCamisaMangaCorta').html(""); 
                    $('#playera .dropdown-menu .inner').append('<li data-original-index="0" idTalla="0" class="active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Talla</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
                    
                    if (value.CAT_TALLA>0)
                        {
                            $('#playera .filter-option').text(value.TALLA);
                            $('#paquetePlayera').append('<option value="'+value.CAT_TALLA+'">"'+value.TALLA+'"</option>')    
                        }
                        else
                        {
                            $('#playera .filter-option').text('Seleccione Talla');
                            $('#paquetePlayera').append('<option value="0">Seleccione Talla</option>');     
                        }
                   
                    $("#idTallaPlayera").val(value.CAT_TALLA);  
                    $.each(arrayTallasTop, function(i, item){
                        $('#paquetePlayera').append('<option value="'+item.Id+'">'+item.NOMBRE+'</option>');
                        var index=parseInt(i)+1
                        if(value.CAT_TALLA==item.Id){
                            $('#playera .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTalla="'+item.Id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.NOMBRE+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
                        }
                        else{
                            $('#playera .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTalla="'+item.Id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.NOMBRE+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');  
                        }    
                        });  


                  break;
                  case 'SUDADERA':
                    $("#btnEliminarSudadera").attr('idPrenda', value.Id);
                    $("#paqueteSudadera").attr('idPrenda', value.Id);
                    $("#entregaSudadera").show();
                    $("#entregaSudaderaTitulo").html('<b>'+value.NOMBRE+'</b>');
                    $("#paqueteSudaderaCantidad").val(value.CANTIDAD_ENTREGA);  
                    $("#paqueteSudaderaExistencia").val(value.EXISTENCIA);    
                   // $("#paqueteCamisaCantidad").attr('data-max', value.CANTIDAD);
                    $('#sudadera .dropdown-menu .inner').html(""); 
                    $('#paqueteSudadera').html(""); 
                    $('#sudadera .dropdown-menu .inner').append('<li data-original-index="0" idTalla="0" class="active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Talla</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
                    
                    if (value.CAT_TALLA>0)
                        {
                            $('#sudadera .filter-option').text(value.TALLA);
                            $('#paqueteSudadera').append('<option value="'+value.CAT_TALLA+'">"'+value.TALLA+'"</option>')    
                        }
                        else
                        {
                            $('#sudadera .filter-option').text('Seleccione Talla');
                            $('#paqueteSudadera').append('<option value="0">Seleccione Talla</option>');     
                        }
                   
                    $("#idTallaSudadera").val(value.CAT_TALLA);  
                    $.each(arrayTallasTop, function(i, item){
                        $('#paqueteSudadera').append('<option value="'+item.Id+'">'+item.NOMBRE+'</option>');
                        var index=parseInt(i)+1
                        if(value.CAT_TALLA==item.Id){
                            $('#sudadera .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTalla="'+item.Id+'" class="selected"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.NOMBRE+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
                        }
                        else{
                            $('#sudadera .dropdown-menu .inner').append('<li data-original-index="'+index+'" idTalla="'+item.Id+'"><a tabindex="'+index+'" class="" style="" data-tokens="null"><span class="text">'+item.NOMBRE+'</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');  
                        }    
                        });  

                        
                  break;
                default:
                
              }
            //$("#panelPrendas").append('<b>'+value.NOMBRE+'</b><div class="row clearfix"><div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 form-control-label"><i class="material-icons">check_circle</i></div><div class="col-lg-11 col-md-11 col-sm-10 col-xs-9"><div class="form-group"><div id="'+value.CATEGORIA+'"><select class="form-control show-tick" required id="paquete'+value.CATEGORIA+'" name="paquete'+value.CATEGORIA+'"></select></div></div></div></div>');
             
             
            intPosicion=intPosicion+1;           

        });        
    }
    
    $(document).on("click","#eliminarEntrega",function(){
        intId=$(this).attr("idEntrega")
        jsonParametros ='{"Opcion": "EE","Usuario":"'+userActive+'", "Entrega":{ "Id": '+ intId +'}}';
        swal({
            title: "¿Esta seguro de cancelar la entrega?",
            text: "Si no esta seguro puede cancelar!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar"
        }).then(function(isConfirm){
            console.log(isConfirm);
            if (isConfirm) {
                var datos= new FormData();
                datos.append("data",  jsonParametros);
                datos.append("action","G");
                $.ajax({
                    url:"controladores/entregas.controlador.php",
                    method:"POST",
                    data:datos,
                    cache:false,
                    contentType:false,
                    processData:false,
                    dataType:"json",
                    success:function(respuesta_datos){
                        //console.log(respuesta_datos[0]);
                        $.each(respuesta_datos[0], function(index, value) {
                            strCodigoOP=value.strCodigo;
                            strDetalleOP=value.strDetalle;     
        
                           });
                           if   (strCodigoOP!='' && strCodigoOP != undefined)
                           {

                             swal({
                                 title: "¡Atención!",
                                 text: strDetalleOP,
                                 timer: 2000,
                                 showConfirmButton: true
                             })

                           }
                           else{
                                swal({
                                    title: "!Correcto!",
                                    text: '¡Información Guardada Correctamente!',
                                    timer: 2000,
                                    type:"success"
                                })
                              //  $("#comentariosEntrega").val("");
                                $("#modalResumenEntregas").click();


                               
                           }        
                      

                      
                   
                    }
                })

            
            }
        })



    })
    $(document).on("change","#retornoPantalon",function(){
        intId=$(this).attr("retorno")
        if (intId==0){
            $(this).attr("retorno","1")
            $("#paquetePantalon").attr("disabled","true");
            $("#paquetePantalonCantidad").attr("disabled","true");
        
        }
        else
        {
            $(this).attr("retorno","0")
            $("#paquetePantalon").removeAttr("disabled");
            $("#paquetePantalonCantidad").removeAttr("disabled");
        }
      

    })
    $(document).on("change","#tipoEntrega",function(){
       intId=$(this).attr("cambioPrendas")
     
        if (intId==0){
            $(this).attr("cambioPrendas","1")
            jsonParametros ='{"Opcion": "CCA","Usuario":"cruz.gonzalez" ,"Entrega":{"EMP_Id":'+ $("#idEmpleado").val() +'}}';
            $(".botonesEliminar").hide();
            $(".retornos").show();
            $("#paqueteEmpleado").attr("disabled","true");
        }
        else
        {
            $(this).attr("cambioPrendas","0")
            jsonParametros ='{"Opcion": "CI","Usuario":"cruz.gonzalez" ,"Entrega":{"EMP_Id":'+ $("#idEmpleado").val() +'}}';
            $("#paqueteEmpleado").removeAttr("disabled");
            $(".botonesEliminar").show();
            $(".retornos").hide();
        }
         generarEntrega(jsonParametros);

       
    })
    $(document).on("click","#guardarEntrega",function(){
        intId=$("#tipoEntrega").attr("cambioPrendas")
        if (intId==0)
        {

                 //Validaciones
          if ($("#paquetePantalonCantidad").val() > 0 &&  $("#paquetePantalon").val()==0 )
          {
               swal("¡Atención!", 'Debe seleccionar talla pantalon', "error");
               return;
          }
          if ($("#paqueteMangaLargaCantidad").val() > 0 &&  $("#paqueteCamisaMangaLarga").val()==0 )
          {
               swal("¡Atención!", 'Debe seleccionar talla camisa', "error");
               return;
          }
          if ($("#paqueteMangaCortaCantidad").val() > 0 &&  $("#paqueteCamisaMangaCorta").val()==0 )
          {
               swal("¡Atención!", 'Debe seleccionar talla camisa', "error");
               return;
          }
          if ($("#paquetePlayeraCantidad").val() > 0 &&  $("#paquetePlayera").val()==0 )
          {
               swal("¡Atención!", 'Debe seleccionar talla playera', "error");
               return;
          }

          if ($("#paqueteExtraCantidad").val() > 0 &&  $("#paquetePrendaExtra").val()==0 )
          {
               swal("¡Atención!", 'Debe seleccionar talla prenda extra', "error");
               return;
          }
          if ($("#paqueteSudaderaCantidad").val() > 0 &&  $("#paqueteSudadera").val()==0 )
            {
                 swal("¡Atención!", 'Debe seleccionar talla sudadera', "error");
                 return;
            }
           swal({
                title: "¿Esta seguro de realizar la entrega?",
                text: "Si no esta seguro puede cancelar!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Confirmar",
                cancelButtonText: "Cancelar"
            }).then(function(isConfirm){
                if (isConfirm.value==true) {
                   
                    jsonParametros ='{"Opcion": "G","Usuario":"'+userActive+'", "Entrega":{ "EMP_Id": '+ $("#idEmpleado").val()+',"PAQ_Id": '+ $("#paqueteEmpleado").val()+',"ENT_Comentarios": "'+ $("#comentariosEntrega").val()+'","Detalle":[';
                    if ($("#paquetePantalonCantidad").val() > 0)
                    {
                        jsonParametros +='{"PRE_Id":'+  $("#paquetePantalon").attr('idPrenda')+' , "CAT_Talla": '+  $("#paquetePantalon").val()+',"Cantidad":'+  $("#paquetePantalonCantidad").val()+' }';                         
                    }
                    if ($("#paqueteSudaderaCantidad").val() > 0)
                        {
                            jsonParametros +='{"PRE_Id":'+  $("#paqueteSudadera").attr('idPrenda')+' , "CAT_Talla": '+  $("#paqueteSudadera").val()+',"Cantidad":'+  $("#paqueteSudaderaCantidad").val()+' }';                         
                        }
                    if ($("#paqueteCamisaMangaLargaCantidad").val() > 0)
                    {
                        if ($("#paquetePantalonCantidad").val() > 0){
                            jsonParametros +=','
                        }
                        jsonParametros +='{"PRE_Id":'+  $("#paqueteCamisaMangaLarga").attr('idPrenda')+' , "CAT_Talla": '+  $("#paqueteCamisaMangaLarga").val()+',"Cantidad":'+  $("#paqueteCamisaMangaLargaCantidad").val()+' }';                         
                    }
                    if ( $("#paqueteCamisaMangaCortaCantidad").val() > 0)
                    {
                        if ($("#paqueteCamisaMangaLargaCantidad").val() > 0 || $("#paquetePantalonCantidad").val() > 0){
                            jsonParametros +=','
                        } 
                        jsonParametros +='{"PRE_Id":'+  $("#paqueteCamisaMangaCorta").attr('idPrenda')+' , "CAT_Talla": '+  $("#paqueteCamisaMangaCorta").val()+',"Cantidad":'+  $("#paqueteCamisaMangaCortaCantidad").val()+' }';                         
                    } 
                    if ($("#paquetePlayeraCantidad").val() > 0)
                    {
                        if ($("#paqueteCamisaMangaCortaCantidad").val() > 0  || $("#paqueteCamisaMangaLargaCantidad").val() > 0 || $("#paquetePantalonCantidad").val() > 0){
                            jsonParametros +=','
                        } 
                        jsonParametros +='{"PRE_Id":'+  $("#paquetePlayera").attr('idPrenda')+' , "CAT_Talla": '+  $("#paquetePlayera").val()+',"Cantidad":'+  $("#paquetePlayeraCantidad").val()+' }';                        
                    }
                    if ($("#paqueteExtraCantidad").val() > 0)
                    {
                        if ($("#paqueteCamisaMangaCortaCantidad").val() > 0  || $("#paqueteCamisaMangaLargaCantidad").val() > 0 || $("#paquetePantalonCantidad").val() > 0 || $("#paquetePlayeraCantidad").val() > 0){
                            jsonParametros +=','
                        } 
                        jsonParametros +='{"PRE_Id":'+  $("#paquetePrendaExtra").attr('idPrenda')+' , "CAT_Talla": '+  $("#paquetePrendaExtra").val()+',"Cantidad":'+  $("#paqueteExtraCantidad").val()+' }';                        
                    }
                    jsonParametros +=']}}';
                    var datos= new FormData();
                    datos.append("data",  jsonParametros);
                    datos.append("action","G");
                    $.ajax({
                        url:"controladores/entregas.controlador.php",
                        method:"POST",
                        data:datos,
                        cache:false,
                        contentType:false,
                        processData:false,
                        dataType:"json",
                        success:function(respuesta_datos){
                            //console.log(respuesta_datos[0]);
                            $.each(respuesta_datos[0], function(index, value) {
                                strCodigoOP=value.strCodigo;
                                strDetalleOP=value.strDetalle;     
            
                               });
                               if   (strCodigoOP!='' && strCodigoOP != undefined)
                               {

                                 swal({
                                     title: "¡Atención!",
                                     text: strDetalleOP,
                                     timer: 2000,
                                     showConfirmButton: true
                                 }).then (function () {
                                         $("#cerrarModalEntrega").click();
                                         $('#tablaEntregas').DataTable().ajax.reload();

                                 });

                               }
                               else{
                                    swal({
                                        title: "!Correcto!",
                                        text: '¡Información Guardada Correctamente!',
                                        timer: 2000,
                                        type:"success"
                                    })
                                    $("#comentariosEntrega").val("");
                                    $("#cerrarModalEntrega").click();
                                    $('#tablaEntregas').DataTable().ajax.reload();   
                                    datos= new FormData();
                                    if (userActive=="antonio")
                                        {
                                            datos.append("action","I");
                                        }else
                                        {
                                            datos.append("action","I2");
                                        }
                                  
                                    datos.append("arrayMaestro",JSON.stringify(respuesta_datos[0]));
                                    datos.append("arrayDetalle",JSON.stringify(respuesta_datos[1]));
                                    datos.append("usuario",$('#nombreUsuario').text());
                                    
                                    
                                    $.ajax({
                                        url:"controladores/entregas.controlador.php",
                                        method:"POST",
                                        data:datos,
                                        cache:false,
                                        contentType:false,
                                        processData:false,
                                        dataType:"json",
                                        success:function(respuesta_datos){
                                        
                                        }
                                    })
                               }        
                          

                          
                       
                        }
                    })

                  
                } else {
                   
                    $("#cerrarModalEntrega").click();
                }
            });

        
        

            
        }//Validacion tipo de entrega
        else //guadarCambio de prendas
        { 
            if (($("#idTallaPantalon").val() ==   $("#paquetePantalon").val() ) && ($("#idTallaCamisaMangaLarga").val() ==   $("#paqueteCamisaMangaLarga").val() ) && ($("#idTallaCamisaMangaCorta").val() ==   $("#paqueteCamisaMangaCorta").val() ) && ($("#idTallaPlayera").val() ==   $("#paquetePlayera").val() )  )
            {
                 swal("¡Atención!", 'Debe cambiar por lo menos una talla', "error");
                 return;
            }
            var jsonEntrada, jsonSalida;
            jsonParametros ='{"Opcion": "GC","Usuario":"'+userActive+'", "Entrega":{ "EMP_Id": '+ $("#idEmpleado").val()+',"ENT_Comentarios": "'+ $("#comentariosEntrega").val()+'"';
            jsonEntrada=',"Entrada":[';
            jsonSalida=',"Salida":[';

            if  (($("#idTallaPantalon").val()>0) && ($("#idTallaPantalon").val() !=   $("#paquetePantalon").val() )) 
            {

                jsonEntrada +='{"PRE_Id":'+  $("#paquetePantalon").attr('idPrenda')+' , "CAT_Talla": '+  $("#idTallaPantalon").val()+',"Cantidad":'+  $("#paquetePantalonCantidad").val()+' }';                                   
                jsonSalida +='{"PRE_Id":'+  $("#paquetePantalon").attr('idPrenda')+' , "CAT_Talla": '+  $("#paquetePantalon").val()+',"Cantidad":'+  $("#paquetePantalonCantidad").val()+' }';
            }  
            if ( $("#retornoPantalon").attr("retorno")==1)
            {
                jsonEntrada +='{"PRE_Id":'+  $("#paquetePantalon").attr('idPrenda')+' , "CAT_Talla": '+  $("#idTallaPantalon").val()+',"Cantidad":'+  $("#paquetePantalonCantidad").val()+' }';                                   
            }
            
            if (($("#idTallaCamisaMangaLarga").val()>0) && ($("#idTallaCamisaMangaLarga").val() !=   $("#paqueteCamisaMangaLarga").val() ))
            {
                if ($("#idTallaPantalon").val() !=   $("#paquetePantalon").val() )
                {
                    jsonEntrada +=',';
                    jsonSalida +=',';
                }   
                jsonEntrada +='{"PRE_Id":'+  $("#paqueteCamisaMangaLarga").attr('idPrenda')+' , "CAT_Talla": '+  $("#idTallaCamisaMangaLarga").val()+',"Cantidad":'+  $("#paqueteCamisaMangaLargaCantidad").val()+' }';                               
                jsonSalida +='{"PRE_Id":'+  $("#paqueteCamisaMangaLarga").attr('idPrenda')+' , "CAT_Talla": '+  $("#paqueteCamisaMangaLarga").val()+',"Cantidad":'+  $("#paqueteCamisaMangaLargaCantidad").val()+' }';                               
                
            }  
            if ( $("#retornoCamisaMangaLarga").attr("retorno")==1)
            {
                if ( $("#retornoPantalon").attr("retorno")==1)
                {
                    jsonEntrada +=',';
                }

                jsonEntrada +='{"PRE_Id":'+  $("#paqueteCamisaMangaLarga").attr('idPrenda')+' , "CAT_Talla": '+  $("#idTallaCamisaMangaLarga").val()+',"Cantidad":'+  $("#paqueteCamisaMangaLargaCantidad").val()+' }';                                                                 
            } 

            if (($("#idTallaCamisaMangaCorta").val()>0) && ($("#idTallaCamisaMangaCorta").val() !=   $("#paqueteCamisaMangaCorta").val() ))
            {
                if ($("#idTallaPantalon").val() !=   $("#paquetePantalon").val()  ||  $("#idTallaCamisaMangaLarga").val() !=   $("#paqueteCamisaMangaLarga").val() )
                {
                    jsonEntrada +=',';
                    jsonSalida +=',';
                }   
                jsonEntrada +='{"PRE_Id":'+  $("#paqueteCamisaMangaCorta").attr('idPrenda')+' , "CAT_Talla": '+  $("#idTallaCamisaMangaCorta").val()+',"Cantidad":'+  $("#paqueteCamisaMangaCortaCantidad").val()+' }';                               
                jsonSalida +='{"PRE_Id":'+  $("#paqueteCamisaMangaCorta").attr('idPrenda')+' , "CAT_Talla": '+  $("#paqueteCamisaMangaCorta").val()+',"Cantidad":'+  $("#paqueteCamisaMangaCortaCantidad").val()+' }';  
            } 
            if ( $("#retornoCamisaMangaCorta").attr("retorno")==1)
                {
                    if ( $("#retornoPantalon").attr("retorno")==1     ||  $("#retornoCamisaMangaLarga").attr("retorno")==1 )
                    {
                        jsonEntrada +=',';
                    }
                    jsonEntrada +='{"PRE_Id":'+  $("#paqueteCamisaMangaCorta").attr('idPrenda')+' , "CAT_Talla": '+  $("#idTallaCamisaMangaCorta").val()+',"Cantidad":'+  $("#paqueteCamisaMangaCortaCantidad").val()+' }';                                                                 
                }
            
            
            if ($("#idTallaPlayera").val()>0 && ($("#idTallaPlayera").val() !=   $("#paquetePlayera").val() ))
            {
                if ($("#idTallaPantalon").val() !=   $("#paquetePantalon").val()  ||  $("#idTallaCamisaMangaLarga").val() !=   $("#paqueteCamisaMangaLarga").val() || $("#idTallaCamisaMangaCorta").val() !=   $("#paqueteCamisaMangaCorta").val()  )
                {
                    jsonEntrada +=',';
                    jsonSalida +=',';
                }   
                jsonEntrada +='{"PRE_Id":'+  $("#paquetePlayera").attr('idPrenda')+' , "CAT_Talla": '+  $("#idTallaPlayera").val()+',"Cantidad":'+  $("#paquetePlayeraCantidad").val()+' }';                               
                jsonSalida +='{"PRE_Id":'+  $("#paquetePlayera").attr('idPrenda')+' , "CAT_Talla": '+  $("#paquetePlayera").val()+',"Cantidad":'+  $("#paquetePlayeraCantidad").val()+' }';  
            } 


            if ( $("#retornoPlayera").attr("retorno")==1)
                {
                    if ( $("#retornoPantalon").attr("retorno")==1     ||  $("#retornoCamisaMangaLarga").attr("retorno")==1 || $("#retornoCamisaMangaCorta").attr("retorno")==1 )
                        {
                            jsonEntrada +=',';
                        }
                        jsonEntrada +='{"PRE_Id":'+  $("#paquetePlayera").attr('idPrenda')+' , "CAT_Talla": '+  $("#idTallaPlayera").val()+',"Cantidad":'+  $("#paquetePlayeraCantidad").val()+' }';                                                                 
                }
                if ($("#paqueteExtraCantidad").val() > 0)
                    {
                        if ($("#idTallaPantalon").val() !=   $("#paquetePantalon").val()  ||  $("#idTallaCamisaMangaLarga").val() !=   $("#paqueteCamisaMangaLarga").val() || ($("#idTallaCamisaMangaCorta").val()>0 &&  $("#idTallaCamisaMangaCorta").val() !=   $("#paqueteCamisaMangaCorta").val()) || ($("#idTallaPlayera").val()>0 && ($("#idTallaPlayera").val() !=   $("#paquetePlayera").val() ))  )
                            {
                                console.log($("#idTallaPlayera").val()) ;
                                console.log( $("#paquetePlayera").val()  );
                                jsonSalida +=',';

                            }  
                            jsonSalida +='{"PRE_Id":'+  $("#paquetePrendaExtra").attr('idPrenda')+' , "CAT_Talla": '+  $("#paquetePrendaExtra").val()+',"Cantidad":'+  $("#paqueteExtraCantidad").val()+' }';                        
                    
                            /*if ( $("#retornoPantalon").attr("retorno")==1     ||  $("#retornoCamisaMangaLarga").attr("retorno")==1 || $("#retornoCamisaMangaCorta").attr("retorno")==1  || $("#retornoPlayera").attr("retorno")==1)
                                {
                                    jsonSalida +=',';
                                }*/
                    
                            }

            jsonEntrada+=']';
            jsonSalida+=']';
            
            jsonParametros+=jsonEntrada;
            jsonParametros+=jsonSalida;
            
            jsonParametros+='}}';
            console.log(jsonParametros);
            var datos= new FormData();
                    datos.append("data",  jsonParametros);
                    datos.append("action","G");
                    $.ajax({
                        url:"controladores/entregas.controlador.php",
                        method:"POST",
                        data:datos,
                        cache:false,
                        contentType:false,
                        processData:false,
                        dataType:"json",
                        success:function(respuesta_datos){
                            //console.log(respuesta_datos[0]);
                            $.each(respuesta_datos[0], function(index, value) {
                                strCodigoOP=value.strCodigo;
                                strDetalleOP=value.strDetalle;     
            
                               });
                               if   (strCodigoOP!='' && strCodigoOP != undefined)
                               {

                                 swal({
                                     title: "¡Atención!",
                                     text: strDetalleOP,
                                     timer: 2000,
                                     showConfirmButton: true
                                 }).then (function () {
                                         $("#cerrarModalEntrega").click();
                                         $('#tablaEntregas').DataTable().ajax.reload();
                                         limpiarComponentes();

                                 });

                               }
                               else{
                                    swal({
                                        title: "!Correcto!",
                                        text: '¡Información Guardada Correctamente!',
                                        timer: 2000,
                                        type:"success"
                                    })
                                    $("#comentariosEntrega").val("");
                                    $("#cerrarModalEntrega").click();
                                    $('#tablaEntregas').DataTable().ajax.reload();   
                                  
                               }        
                          

                          
                       
                        }
                    })
            

        }    

     
        
    })

})