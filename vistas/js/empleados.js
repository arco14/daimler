$(document).ready(function () {
    document.title = 'Empleados';
    var jsonParametros;
    var arrayTallasTop = [];
    var arrayTallasPant = [];
    var userActive = 'cruz.gonzalez';
    var strCodigoOP = '';
    var strDetalleOP = '';
    var intId;
    $("#firmaGafete").focus();
    $("#clickTomaTalla").hide();
    $(".readonly").attr('readonly', 'readonly');

    $('#tablaEmpleados').DataTable({
        responsive: true,
        ajax: {
            url: "ajax/datatable-empleados.ajax.php",
            type: "POST",
            data: {
                "action": "consultaEmpleados"
            }
        },
        dom: 'Bfrtip',
        buttons: [{
                extend: 'excelHtml5',
                title: 'Inventarios'
            },
            {
                extend: 'pdfHtml5',
                title: 'Inventarios'
            }
        ],
        deferRender: true,
        retrive: true,
        processing: true,
        language: {
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
            sLoadingRecords: "Cargando...",
            oPaginate: {
                sFirst: "Primero",
                sLast: "Ultimo",
                sNext: "Siguiente",
                sPrevious: "Anterior"
            },
            oAria: {
                sSortAscending: "Activar para ordenar la columna de manera ascendente",
                sSortDescending: "Activar para ordenar la columna de manera descendete"

            }
        }
    });

    $(document).on("change", "#firmaGafete", function () {
        $(".readonly").val("");
        $("#clickTomaTalla").click();
        jsonParametros = '{"Opcion": "CI","Usuario":"cruz.gonzalez" ,"Empleado":{"EMP_FirmaGafete":"' + $("#firmaGafete").val() + '"}}';
        consultarInformacion(jsonParametros);
    });
    $(document).on("click", "#datosTomaTalla", function () {
        $(".readonly").val("");
        //$("#clickTomaTalla").click();
        jsonParametros = '{"Opcion": "CI","Usuario":"cruz.gonzalez" ,"Empleado":{"EMP_Id":' + $(this).attr("idEmpleado") + '}}';
        consultarInformacion(jsonParametros);
    });

    $(document).on('keydown', function (event) {
        if (event.key == "Escape") {
            limpiarComponentes();
        }
    });
    $(document).on('hover', '.content', function () {
        console.log('Test');
        limpiarComponentes();
    });
    $(".content").hover(function () {
        //console.log('Test');
        limpiarComponentes();
    }, function () {
        //  console.log('Test');
        limpiarComponentes();
    });
    $(document).on("click", "#cerrarModal", function () {
        limpiarComponentes();
    });

    function limpiarComponentes() {
        $("#firmaGafete").val("");
        $("#firmaGafete").focus();
    }

    function consultarInformacion(jsonParametros) {
        var datos = new FormData();
        datos.append("data", jsonParametros);
        datos.append("action", "consulta");

        $.ajax({
            url: "controladores/empleados.controlador.php",
            method: "POST",
            data: datos,
            cache: false,
            contentType: false,
            processData: false,
            dataType: "json",
            success: function (respuesta_datos) {
                console.log(respuesta_datos)
                arrayTallasTop = respuesta_datos[1];
                arrayTallasPant = respuesta_datos[2];

                $.each(respuesta_datos[0], function (index, value) {
                    strCodigoOP = value.strCodigo;
                    strDetalleOP = value.strDetalle;

                });

                if (strCodigoOP != '' && strCodigoOP != undefined) {
                    //swal("¡Atención!", strDetalleOP, "error");

                    swal({
                        title: "¡Atención!",
                        text: strDetalleOP,
                        timer: 2000,
                        showConfirmButton: true
                    }).then(function () {
                        $("#cerrarModal").click();


                        //$("#firmaGafete").val("");
                        //$("#firmaGafete").focus();
                    });


                } else {
                    $.each(respuesta_datos[0], function (index, value) {
                        // alert(index + ': ' + value);
                        $("#idEmpleado").val(value.Id);
                        $("#numeroEmpleado").val(value.NUMERO_EMPLEADO);
                        $("#nombreEmpleado").val(value.NOMBRE_EMPLEADO);
                        $("#areaEmpleado").val(value.AREA);
                        $('#puestoEmpleado').val(value.PUESTO);
                        $('#fechaIngreso').val(value.FECHA_INGRESO);
                    });

                    $('#camisa .dropdown-menu .inner').html("");
                    $('#tallaCamisa').html("");
                    $('#camisa .filter-option').text('Seleccione Talla');
                    $('#camisa .dropdown-menu .inner').append('<li data-original-index="0" idTalla="0" class=" active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Talla</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
                    $('#tallaCamisa').append('<option value="0">Seleccione Talla</option>');

                    $.each(arrayTallasTop, function (i, item) {
                        $('#tallaCamisa').append('<option value="' + item.Id + '">' + item.NOMBRE + '</option>');
                        var index = parseInt(i) + 1

                        $('#camisa .dropdown-menu .inner').append('<li data-original-index="' + index + '" idTalla="' + item.Id + '"><a tabindex="' + index + '" class="" style="" data-tokens="null"><span class="text">' + item.NOMBRE + '</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
                    });
                    $('#sudadera .dropdown-menu .inner').html("");
                    $('#tallaSudadera').html("");
                    $('#sudadera .filter-option').text('Seleccione Talla');
                    $('#sudadera .dropdown-menu .inner').append('<li data-original-index="0" idTalla="0" class=" active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Talla</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
                    $('#tallaSudadera').append('<option value="0">Seleccione Talla</option>');

                    $.each(arrayTallasTop, function (i, item) {
                        $('#tallaSudadera').append('<option value="' + item.Id + '">' + item.NOMBRE + '</option>');
                        var index = parseInt(i) + 1

                        $('#sudadera .dropdown-menu .inner').append('<li data-original-index="' + index + '" idTalla="' + item.Id + '"><a tabindex="' + index + '" class="" style="" data-tokens="null"><span class="text">' + item.NOMBRE + '</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
                    });

                    $('#pantalon .dropdown-menu .inner').html("");
                    $('#tallaPantalon').html("");
                    $('#pantalon .filter-option').text('Seleccione Talla');
                    $('#pantalon .dropdown-menu .inner').append('<li data-original-index="0" idTalla="0" class=" active"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Seleccione Talla</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');
                    $('#tallaPantalon').append('<option value="0">Seleccione Talla</option>');

                    $.each(arrayTallasPant, function (i, item) {
                        $('#tallaPantalon').append('<option value="' + item.Id + '">' + item.NOMBRE + '</option>');
                        var index = parseInt(i) + 1

                        $('#pantalon .dropdown-menu .inner').append('<li data-original-index="' + index + '" idTalla="' + item.Id + '"><a tabindex="' + index + '" class="" style="" data-tokens="null"><span class="text">' + item.NOMBRE + '</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>');

                    });



                }



            }

        });


    }
    $(document).on("change", "#tallaCamisa", function () {
        intId = $("#tallaCamisa").val();
        $("#camisa li").removeClass("selected");
        $("[idTalla=" + intId + "]").addClass("selected");
    });
    $(document).on("change", "#tallaPantalon", function () {
        intId = $("#tallaPantalon").val();
        $("#pantalon li").removeClass("selected");
        $("[idTalla=" + intId + "]").addClass("selected");
    });

    $(document).on("click", "#guardar", function () {


        /*if ($("#tallaSudadera").val()==0 )
         {
             swal("¡Atención!", 'Debe seleccionar talla de sudadera', "error");
             return;   
         }*/
        if ($("#tallaCamisa").val() == 0) {
            swal("¡Atención!", 'Debe seleccionar talla camisa', "error");
            return;
        }
        if (($("#puestoEmpleado").val() == 'Brigada' || $("#puestoEmpleado").val() == 'CSH') && $("#tallaPantalon").val() == 0) {
            swal("¡Atención!", 'Debe seleccionar talla pantalon', "error");
            return;
        }

        jsonParametros = '{"Opcion": "G","Usuario":"' + userActive + '", "Empleado":{ "EMP_Id": ' + $("#idEmpleado").val() + ',"EMP_Comentarios": "' + $("#comentariosTomaTallas").val() + '","CAT_TallaCamisa":' + $("#tallaCamisa").val() + ',"CAT_TallaPantalon":' + $("#tallaPantalon").val() + '}}';
        // jsonParametros ='{"Opcion": "G","Usuario":"'+userActive+'", "Empleado":{ "EMP_Id": '+ $("#idEmpleado").val()+',"EMP_Comentarios": "'+ $("#comentariosTomaTallas").val()+'","CAT_TallaSudadera":'+ $("#tallaSudadera").val()+'}}';
        var datos = new FormData();
        datos.append("data", jsonParametros);
        datos.append("action", "G");

        $.ajax({
            url: "controladores/empleados.controlador.php",
            method: "POST",
            data: datos,
            cache: false,
            contentType: false,
            processData: false,
            dataType: "json",
            success: function (respuesta_datos) {
                console.log(respuesta_datos[0]);
                if (respuesta_datos[0][0]["strCodigo"] == 'ok') {
                    swal({
                        title: "!Correcto!",
                        text: respuesta_datos[0][0]["strDetalle"],
                        timer: 1000,
                        type: "success"
                    })
                    $("#comentariosTomaTallas").val("");
                    $("#cerrarModal").click();
                    $('#tablaEmpleados').DataTable().ajax.reload();

                } else {
                    //swal("¡Atención!", "¡Información Guardada Correctamente!", "success");   
                    swal({
                        title: "¡Atención!",
                        text: respuesta_datos
                    })
                    return;
                }




            }
        })


    });

})