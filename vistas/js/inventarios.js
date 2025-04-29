$( document ).ready(function() {
    document.title = 'Inventarios';
    var userActive = $('#nombreUsuario').text()
    var jsonParametros='';
    var intId;
    var strCodigoOP='';
    var strDetalleOP='';

    if ( userActive!='' && userActive != undefined){
        $("#panelUsuario").hide();
    }else{
        $("#guardarAjuste").hide();
    }
    jsonParametros ='{"Opcion": "RE","Usuario":"'+userActive+'"}';
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
        deferRender:true,  
        retrive: true,
        processing:true,
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

})