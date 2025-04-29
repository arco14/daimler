$( document ).ready(function() {
    document.title = 'Resumen Toma Tallas';
    var jsonParametros;

    consultarInformacion();
   
            function consultarInformacion(){
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
                            title: 'Data export'
                        }
                    ],

                   
                    pageLength: 30,
                    ajax:{
                        url: "ajax/datatable-reportes.ajax.php",
                        type:"POST",
                        data: {"action": "consultaResumenTomaTallas"}
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
                        jsonParametros ='{"Opcion": "CRD","Usuario":"cruz.gonzalez" }';
                        var datos= new FormData();
                        datos.append("data",  jsonParametros);
                        datos.append("action","consulta");
                        datos.append("stored","PA_DAIConReportesTomaTallas");
        
                        $.ajax({
                            url:"controladores/reportes.controlador.php",
                            method:"POST",
                            data:datos,
                            cache:false,
                            contentType:false,
                            processData:false,
                            dataType:"json",
                            success:function(respuesta_datos){
                                //$('#tituloHC').attr('data-to',respuesta_datos[0][0][0]);
                                $('#tituloHC').text(respuesta_datos[0][0][0]);
                                $('#tituloRegistrados').text(respuesta_datos[0][0][1]);
                                $('#tituloRegistradosDia').text(respuesta_datos[0][0][2]);
                                //$('#tituloRegistrados').attr('data-to',respuesta_datos[0][0][1]);
                                $('#tituloMeta').text(respuesta_datos[0][0][3]); 
                              //  $('#tituloMeta').attr('data-to',respuesta_datos[0][0][2]);
                                //$('.count-to').countTo();

                                //$('#tituloHC').text(respuesta_datos[0][0][0]);
                               // $('#tituloRegistrados').text(respuesta_datos[0][0][1]);
                               
                               // $('#tituloPorcentaje').text(respuesta_datos[0][0][3] +'%'); 
                
                            }
                        });    
            }
        $(document).on("click","#tabFaltantes",function(){
            consultarInformacion();
                        $('#tablaFaltantes').DataTable({
                            responsive: true,
                            ajax:{
                                url: "ajax/datatable-reportes.ajax.php",
                                type:"POST",
                                data: {"action": "consultaFaltantesTomaTallas"}
                              },
                            deferRender:true,  
                            retrive: true,
                            processing:true,
                            destroy: true,
                            dom: 'Bfrtip',
                            buttons: [
                                'excel', 'pdf'
                            ],
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
                            ajax:{
                                url: "ajax/datatable-reportes.ajax.php",
                                type:"POST",
                                data: {"action": "consultaRegistradosTomaTallas"}
                              },
                            deferRender:true,  
                            retrive: true,
                            processing:true,
                            destroy: true,
                            dom: 'Bfrtip',
                            buttons: [
                                'excel', 'pdf'
                            ],
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
                    $(document).on("click","#tabResumen",function(){
                        consultarInformacion();
                      
                    })


});