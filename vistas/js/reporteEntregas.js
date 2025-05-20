$( document ).ready(function() {
    document.title = 'Resumen Entregas';
    var jsonParametros;

    consultarInformacion();
    $(document).on("click","#tabResumenFactura",function(){
        consultarInformacion();
        $('#tablaResumenFactura').DataTable({
            responsive: true,
            destroy: true,  
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'excelHtml5',
                    title: 'Resumen_Factura'
                },
                {
                    extend: 'pdfHtml5',
                    title: 'Resumen_Factura'
                }
            ],
            pageLength: 50,
            ajax:{
                url: "ajax/datatable-reportes.ajax.php",
                type:"POST",
                data: {"action": "consultaResumenFactura"}
              },
              order: [[0, 'desc']],
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
    $(document).on("click","#btnAjusteInventario",function(){
        $("#defaultModalLabel").text($(this).attr("prenda"));
        $("#idPrenda").val($(this).attr("idPrenda"));
        $("#idTalla").val($(this).attr("idTalla"));
        $("#comentariosAjuste").val("");
        $("#cantidadsAjuste").val(1);
        $("#tipoEntrega").attr("checked");
    
})
$(document).on("change","#tipoAjuste",function(){

    intId=$(this).attr("entrada");
    if (intId==0){
        $(this).attr("entrada","1")
    }
    else
    {
        $(this).attr("entrada","0")
    }


})
$(document).on("click","#guardarAjuste",function(){

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
            jsonParametros ='{"Opcion": "G","Usuario":"'+userActive+'", "Ajuste":{"Entrada": '+ $("#tipoAjuste").attr("entrada")+', "PRE_Id": '+ $("#idPrenda").val()+',"CAT_Talla": '+ $("#idTalla").val()+',"Comentarios": "'+ $("#comentariosAjuste").val()+'","Cantidad":'+ $("#cantidadAjuste").val()+' }}';
            var datos= new FormData();
            datos.append("data",  jsonParametros);
            datos.append("action","G");

            $.ajax({
                url:"controladores/inventarios.controlador.php",
                method:"POST",
                data:datos,
                cache:false,
                contentType:false,
                processData:false,
                dataType:"json",
                success:function(respuesta_datos){
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
                                 $("#cerrarModalAjuste").click();
                                 $('#tablaInventarios').DataTable().ajax.reload();

                         });

                       }
                       else
                       {
                        swal({
                            title: "!Correcto!",
                            text: '¡Información Guardada Correctamente!',
                            timer: 2000,
                            type:"success"
                        })
                        //$("#comentariosEntrega").val("");
                        $("#cerrarModalAjuste").click();


                       }
                    }
                })    

               
        }else
        {
            $("#cerrarModalAjuste").click();
        }
    })
    
    

})

    $(document).on("click","#tabInventarios",function(){

            consultarInformacion();
            jsonParametros ='{"Opcion": "RE","Usuario":"cruz.gonzalez"}';
            var datos= new FormData();
            datos.append("data",  jsonParametros);
            datos.append("action","G");
        
            $.ajax({
                url:"controladores/inventarios.controlador.php",
                method:"POST",
                data:datos,
                cache:false,
                contentType:false,
                processData:false,
                dataType:"json"
            });
         
            $('#tablaInventarios').DataTable({
                responsive: true,
                ajax:{
                    url: "ajax/datatable-inventarios.ajax.php",
                    type:"POST",
                    data: {"action": "consultaExistencia"}
                  },
                  dom: 'Bfrtip',
                  buttons: [
                      {
                          extend: 'excelHtml5',
                          title: 'Inventarios'
                      },
                      {
                          extend: 'pdfHtml5',
                          title: 'Inventarios'
                      }
                  ],
                deferRender:true,  
                retrive: true,
                destroy: true,  
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
    $(document).on("click","#tabRegistrados",function(){
        consultarInformacion();
        $('#tablaRegistrados').DataTable({
            responsive: true,
            destroy: true,  
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'excelHtml5',
                    title: 'Entregados'
                },
                {
                    extend: 'pdfHtml5',
                    title: 'Entregados'
                }
            ],
            pageLength: 50,
            ajax:{
                url: "ajax/datatable-reportes.ajax.php",
                type:"POST",
                data: {"action": "consultaRegistradosEntrega"}
              },
              order: [[2, 'asc']],
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
    $(document).on("click","#tabFaltantes",function(){
        consultarInformacion();
        $('#tablaFaltantes').DataTable({
            responsive: true,
            destroy: true,  
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'excelHtml5',
                    title: 'Faltantes_Entrega'
                },
                {
                    extend: 'pdfHtml5',
                    title: 'Faltantes_Entrega'
                }
            ],
            pageLength: 50,
            ajax:{
                url: "ajax/datatable-reportes.ajax.php",
                type:"POST",
                data: {"action": "consultaFaltantesEntrega"}
              },
              order: [[2, 'asc']],
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
    $(document).on("click","#tabResumenEspecialidades",function(){
        consultarInformacion();
        $('#tablaResumenEspecialidades').DataTable({
            responsive: true,
            destroy: true,  
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'excelHtml5',
                    title: 'Resumen_Entrega_Especialidades'
                },
                {
                    extend: 'pdfHtml5',
                    title: 'Resumen_Entrega_Especialidades'
                }
            ],
            pageLength: 50,
            ajax:{
                url: "ajax/datatable-reportes.ajax.php",
                type:"POST",
                data: {"action": "consultaResumenEntregaEspecialidades"}
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
    })

    function consultarInformacion(){

        jsonParametros ='{"Opcion": "C","Usuario":"cruz.gonzalez" }';
        var datos= new FormData();
        datos.append("data",  jsonParametros);
        datos.append("action","consulta");
        datos.append("stored","PA_DAIConReportesEntrega");
        
        $.ajax({
            url:"controladores/reportes.controlador.php",
            method:"POST",
            data:datos,
            cache:false,
            contentType:false,
            processData:false,
            dataType:"json",
            success:function(respuesta_datos){
                $('#tituloHC').text(respuesta_datos[0][0][0]);
                $('#tituloRegistrados').text(respuesta_datos[0][0][1]);
                $('#tituloRegistradosDia').text(respuesta_datos[0][0][2]);
                $('#tituloPorcentaje').text(respuesta_datos[0][0][3] +'%'); 

              /*  $('#tituloHC').text('5,112');
                $('#tituloRegistrados').text('5,112');
                $('#tituloRegistradosDia').text('0');
                $('#tituloPorcentaje').text('99.45%'); 
                   */ 
            }
        });   

        $('#tablaResumen').DataTable({
            responsive: true,
            destroy: true,  
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'excelHtml5',
                    title: 'Resumen_Entrega'
                },
                {
                    extend: 'pdfHtml5',
                    title: 'Resumen_Entrega'
                }
            ],

            pageLength: 30,
            ajax:{
                url: "ajax/datatable-reportes.ajax.php",
                type:"POST",
                data: {"action": "consultaResumenEntrega"}
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

             
        
    }
})