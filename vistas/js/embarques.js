window.addEventListener('DOMContentLoaded', async () => {
    //? ------------------- VARIABLES---------------- //
    const url = 'http://localhost:3000/api/'
    let idRow, idMov

    //? ------------------- COMPONENTES ---------------- //
    const dataTipoCatalogo = {
        Stored: 'PA_DAI_CapCatalogos',
        Opcion: 'CC',
        Usuario: 'christian.acosta',
        ClaveCatalogo: 'MOV'
    }
    generarCatalogo('DAIMLER', dataTipoCatalogo, 'tipo', 'selectTipo', 'Selecciona tipo de catalogo')
    const dataTallas = {
        Stored: 'PA_DAI_CapCatalogos',
        Opcion: 'CC',
        Usuario: 'christian.acosta',
        ClaveCatalogo: 'TALL'
    }
    generarCatalogo('DAIMLER', dataTallas, 'tallas', 'selectTalla', 'Selecciona una talla')
    const dataPrendas = {
        Stored: 'PA_DAI_CapCatalogos',
        Opcion: 'CP',
        Usuario: 'christian.acosta',
    }
    generarCatalogo('DAIMLER', dataPrendas, 'prendas', 'selectPrendas', 'Selecciona una prenda')

    //? ------------------- FUNCIONES ---------------- //
    async function generarCatalogo(strEndpoint, jsonData, divPadre, idComponente, strTexto) {
        const res = await loadAPI(`${url}${strEndpoint}`, 'POST', jsonData, '', false)
        const data = res.response[0] || []
        $(`#${divPadre} .dropdown-menu .inner`).html('')
        $(`#${idComponente}`).html('')
        $(`#${divPadre} .filter-option`).text(`${strTexto}`)
        $(`#${divPadre} .dropdown-menu .inner`).append(`<li data-original-index='0' idEmpleado='0' class=' active'><a tabindex='0' class='' style='' data-tokens='null'><span class='text'>${strTexto}</span><span class='glyphicon glyphicon-ok check-mark'></span></a></li>`)
        $(`#${idComponente}`).append(`<option value='0'>${strTexto}</option>`)
        $.each(data, function (i, item) {
            let itemNombre = ''
            if(divPadre === 'tallas'){
                itemNombre = item.CLAVE
            } else {
                itemNombre = item.NOMBRE
            }
            $(`#${idComponente}`).append(`<option value='${item.Id}'>${itemNombre}</option>`)
            const index = parseInt(i) + 1
            $(`#${divPadre} .dropdown-menu .inner`).append(`<li data-original-index='${index}' idEmpleado='${item.Id}'><a tabindex='${index}' data-tokens='null'><span class='text'>${itemNombre}</span><span class='glyphicon glyphicon-ok check-mark'></span></a></li>`)

        })
    }
    async function generarGrid(opcion) {
        const dataDaimler = {
            Stored: 'PA_DAI_CapEmbarque',
            Opcion: opcion,
            Usuario: 'cruz.gonzalez',
        }
        const consultaEmbarques = await loadAPI(`${url}DAIMLER`, 'POST', dataDaimler, '', false)
        const embarque = consultaEmbarques.response[0] || []
        if ($.fn.DataTable.isDataTable('#tablaEmbarques')) {
            $('#tablaEmbarques').DataTable().clear().destroy()
        }
        $('#tablaEmbarques').DataTable({
            data: embarque,
            responsive: true,
            dom: 'Bfrtip',
            columns: [{
                    data: 'ID',
                    defaultContent: '',
                    visible: false
                }, {
                    data: 'ID_TIPO_CATALOGO',
                    defaultContent: '',
                    visible: false
                }, {
                    data: 'TIPO_CATALOGO',
                    defaultContent: ''
                },
                {
                    data: 'USUARIO',
                    defaultContent: ''
                },
                {
                    data: 'FECHA',
                    defaultContent: '',
                    render: function (data) {
                        if (!data) return ''
                        const fecha = new Date(data)
                        return fecha.toLocaleDateString()
                    }
                },
                {
                    data: 'COMENTARIOS',
                    defaultContent: ''
                },
                {
                    data: null,
                    defaultContent: '',
                    render: function (row) {
                        return `<div style='display: flex gap: 1rem'>
                                    <button type='button' 
                                            data-id='${row.ID}'
                                            class='btn btn-info btn-circle waves-effect waves-circle waves-float add-btnEmbarque' title='Agregar Detalle'>
                                        <i class='material-icons'>add</i>
                                    </button>
                                    <button type='button' 
                                            data-id = '${row.ID}'
                                            data-idTipoCatalogo = '${row.ID_TIPO_CATALOGO}'  
                                            data-tipoCatalogo = '${row.TIPO_CATALOGO}'  
                                            data-usuario = '${row.USUARIO}'
                                            data-fecha = '${row.FECHA}' 
                                            data-comentarios = '${row.COMENTARIOS}' 
                                            class='btn btn-warning btn-circle waves-effect waves-circle waves-float edit-btnEmbarque' title='Editar Maestro'>
                                        <i class='material-icons'>edit</i>
                                    </button>
                                    <button type='button' data-id='${row.ID}' class='btn btn-danger btn-circle waves-effect waves-circle waves-float delete-btnEmbarque' title='Eliminar'>
                                        <i class='material-icons'>close</i>
                                    </button>
                                </div>
                    `
                    }
                },
            ],
            buttons: [{
                    extend: 'excelHtml5',
                    title: 'Embarques'
                },
                {
                    extend: 'pdfHtml5',
                    title: 'Embarques'
                }
            ],
            language: {
                sProcessing: 'Procesando...',
                sLengthMenu: 'Mostrar _MENU_ registros',
                sZeroRecords: 'No se encontraron resultados',
                sEmptyTable: 'Ningún dato disponible en esta tabla',
                sInfo: 'Registros del _START_ al _END_ de _TOTAL_',
                sInfoEmpty: 'Registros del 0 al 0 de 0',
                sInfoFiltered: '(filtrado de un total de _MAX_ registros)',
                sSearch: 'Buscar',
                oPaginate: {
                    sFirst: 'Primero',
                    sLast: 'Último',
                    sNext: 'Siguiente',
                    sPrevious: 'Anterior'
                },
                oAria: {
                    sSortAscending: 'Activar para ordenar la columna ascendente',
                    sSortDescending: 'Activar para ordenar la columna descendente'
                }
            }
        })
    }
    generarGrid('C')
    async function generarGridDetalle(opcion, id) {
        const dataDaimler = {
            Stored: 'PA_DAI_CapEmbarque',
            Opcion: opcion,
            Usuario: 'cruz.gonzalez',
            Embarque: {
                Id: id
            }
        }
        const consultaEmbarquesDetalle = await loadAPI(`${url}DAIMLER`, 'POST', dataDaimler, '', false)
        if (consultaEmbarquesDetalle !== undefined) {
            const embarque = consultaEmbarquesDetalle.response[0] || []
            if ($.fn.DataTable.isDataTable('#tablaEmbarquesDetalle')) {
                $('#tablaEmbarquesDetalle').DataTable().clear().destroy()
            }
            $('#tablaEmbarquesDetalle').DataTable({
                data: embarque,
                responsive: true,
                dom: 'Bfrtip',
                columns: [{
                        data: 'PRENDA',
                        defaultContent: ''
                    }, {
                        data: 'TALLA',
                        defaultContent: ''
                    }, {
                        data: 'CANTIDAD',
                        defaultContent: ''
                    },
                    {
                        data: null,
                        defaultContent: '',
                        render: function (row) {
                            return `<div style='display: flex gap: 1rem'>
                                        <button type='button' 
                                                data-id = '${row.ID}'
                                                data-idPrenda = '${row.ID_PRENDA}'  
                                                data-idTalla = '${row.ID_TALLA}'  
                                                data-cantidad = '${row.CANTIDAD}' 
                                                class='btn btn-warning btn-circle waves-effect waves-circle waves-float edit-btnDetalle' title='Editar Detalle'>
                                            <i class='material-icons'>edit</i>
                                        </button>
                                        <button type='button' data-id='${row.ID}' class='btn btn-danger btn-circle waves-effect waves-circle waves-float delete-btnDetalle' title='Eliminar'>
                                            <i class='material-icons'>close</i>
                                        </button>
                                    </div>`
                        }
                    },
                ],
                buttons: [{
                        extend: 'excelHtml5',
                        title: 'Embarques'
                    },
                    {
                        extend: 'pdfHtml5',
                        title: 'Embarques'
                    }
                ],
                language: {
                    sProcessing: 'Procesando...',
                    sLengthMenu: 'Mostrar _MENU_ registros',
                    sZeroRecords: 'No se encontraron resultados',
                    sEmptyTable: 'Ningún dato disponible en esta tabla',
                    sInfo: 'Registros del _START_ al _END_ de _TOTAL_',
                    sInfoEmpty: 'Registros del 0 al 0 de 0',
                    sInfoFiltered: '(filtrado de un total de _MAX_ registros)',
                    sSearch: 'Buscar',
                    oPaginate: {
                        sFirst: 'Primero',
                        sLast: 'Último',
                        sNext: 'Siguiente',
                        sPrevious: 'Anterior'
                    },
                    oAria: {
                        sSortAscending: 'Activar para ordenar la columna ascendente',
                        sSortDescending: 'Activar para ordenar la columna descendente'
                    }
                }
            })
        } else {
            $('#tablaEmbarquesDetalle').DataTable().clear().destroy()
        }
    }
    //? ------------------- LIMPIAR---------------- //
    $('#add').click(() => {
        idRow = 0
        $('#selectTipo').val(0)
        $('#fecha').val('')
        $('#comentarios').val('')
        $('#usuario').val('')
    })
    //? ------------------- GUARDAR---------------- //
    $('#btnGuardar').click(async () => {
        const fecha = $('#fecha').val()
        const usuario = $('#usuario').val()
        const comentarios = $('#comentarios').val()
        const tipoCatalogo = $('#selectTipo').val()
        const gurdarEmbarque = {
            Stored: 'PA_DAI_CapEmbarque',
            Opcion: 'G',
            Embarque: {
                Id: idRow,
                Fecha: fecha,
                Usuario: usuario,
                Comentario: comentarios,
                Tipo_Catalogo: tipoCatalogo,
            },
        }
        await loadAPI(`${url}DAIMLER`, 'POST', gurdarEmbarque, '', true)
        generarGrid('C')
        $('#modalEmbarque').modal('hide')
    })

    //? ------------------- EDITAR MAESTRO ---------------- //
    $(document).on('click', '.edit-btnEmbarque', function () {
        const idMov = $(this).data('id')
        idRow = idMov
        const usuario = $(this).data('usuario')
        const fecha = $(this).data('fecha')
        const fechaFormateada = new Date(fecha).toISOString().slice(0, 10)
        const comentarios = $(this).data('comentarios')
        const idTipoCatalogo = $(this).data('idtipocatalogo')
        $('#modalEmbarque').modal('show')
        $('#usuario').val(usuario)
        $('#fecha').val(fechaFormateada)
        $('#comentarios').val(comentarios)
        $('#selectTipo').val(idTipoCatalogo).change()
    })

    //? ------------------- ELIMINAR MAESTRO---------------- //
    $(document).on('click', '.delete-btnEmbarque', function () {
        const id = $(this).data('id')
        Swal.fire({
            icon: 'question',
            title: 'Deseas eliminar el registro?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'SI',
            denyButtonText: 'NO'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const eliminarEmbarque = {
                    Stored: 'PA_DAI_CapEmbarque',
                    Opcion: 'D',
                    Embarque: {
                        Id: id,
                    }
                }
                await loadAPI(`${url}DAIMLER`, 'POST', eliminarEmbarque, '', true)
                generarGrid('C')
            } else if (result.isDenied) {
                alert('No se elimino el registro')
            }
        })
    })

    //? ------------------- AGREGAR DETALLE ---------------- //
    $(document).on('click', '.add-btnEmbarque', function () {
        idRow = 0
        idMov = $(this).data('id')
        $('#modalEntregaManual').modal('show')
        $('#selectPrendas').val(0)
        $('#selectTalla').val(0)
        $('#cantidad').val('')
        generarGridDetalle('CD', idMov)
    })
    $('#btnGuardarEntrega').click(async () => {
        const idPrenda = $('#selectPrendas').val()
        const idTalla = $('#selectTalla').val()
        const cantidad = $('#cantidad').val()
        const guardarEmbarqueDetalle = {
            Stored: 'PA_DAI_CapEmbarque',
            Opcion: 'GD',
            Embarque: {
                Id: idRow,
                Movimiento: idMov,
                Prenda: idPrenda,
                Talla: idTalla,
                Cantidad: cantidad
            },
        }
        await loadAPI(`${url}DAIMLER`, 'POST', guardarEmbarqueDetalle, '', true)
        generarGridDetalle('CD', idMov)
    })
    //? ------------------- EDITAR DETALLE ---------------- //
    $(document).on('click', '.edit-btnDetalle', function () {
        const idMov = $(this).data('id')
        idRow = idMov
        const prenda = $(this).data('idprenda')
        const talla = $(this).data('idtalla')
        const cantidad = $(this).data('cantidad')
        $('#modalEntregaManual').modal('show')
        $('#selectPrendas').val(prenda).change()
        $('#selectTalla').val(talla).change()
        $('#cantidad').val(cantidad)
    })
    //? ------------------- ELIMINAR DETALLE ---------------- //
    $(document).on('click', '.delete-btnDetalle', function () {
        const id = $(this).data('id')
        Swal.fire({
            icon: 'question',
            title: 'Deseas eliminar el registro?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'SI',
            denyButtonText: 'NO'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const eliminarEmbarque = {
                    Stored: 'PA_DAI_CapEmbarque',
                    Opcion: 'Dd',
                    Embarque: {
                        Id: id,
                    }
                }
                await loadAPI(`${url}DAIMLER`, 'POST', eliminarEmbarque, '', true)
                generarGridDetalle('CD', idMov)
            } else if (result.isDenied) {
                alert('No se elimino el registro')
            }
        })
    })
})