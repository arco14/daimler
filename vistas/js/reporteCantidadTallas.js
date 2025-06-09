window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:3000/api/'

    const dataNumeroEntrega = {
        Stored: 'PA_DAIConReportesEntrega',
        Opcion: 'CNE',
        Usuario: 'christian.acosta',
    }
    generarCatalogo('DAIMLER', dataNumeroEntrega, 'numEntrega', 'selectNumEntrega ', 'Número de entrega')
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
            if (divPadre === 'numEntrega') {
                itemNombre = item.NUMERO_ENTREGA
            } else {
                itemNombre = ''
            }
            $(`#${idComponente}`).append(`<option value='${item.Id}'>${itemNombre}</option>`)
            const index = parseInt(i) + 1
            $(`#${divPadre} .dropdown-menu .inner`).append(`<li data-original-index='${index}' idEmpleado='${item.Id}'><a tabindex='${index}' data-tokens='null'><span class='text'>${itemNombre}</span><span class='glyphicon glyphicon-ok check-mark'></span></a></li>`)

        })
    }
    async function guardar() {
        const fechaIncial = $('#fechaInicial').val()
        const fechaFinal = $('#fechaFinal').val()
        const numEntrega = $('#selectNumEntrega').val()
        const guardarJson = {
            Stored: 'PA_DAIConReportesEntrega',
            Opcion: 'CRT',
            Usuario: 'christian.acosta',
            FECHA_INICIAL: fechaIncial,
            FECHA_FINAL: fechaFinal,
            NUMERO_ENTREGA: numEntrega
        }
        const res = await loadAPI(`${url}DAIMLER`, 'POST', guardarJson, '', false)
        const reporte = res.response[0] || []
        console.log(reporte)
        if ($.fn.DataTable.isDataTable('#tabEntregadosCanTall')) {
            $('#tabEntregadosCanTall').DataTable().clear().destroy()
        }
        $('#tabEntregadosCanTall').DataTable({
            data: reporte,
            responsive: true,
            dom: 'Bfrtip',
            columns: [{
                    data: 'PRENDA',
                    defaultContent: ''
                },
                {
                    data: 'TALLA',
                    defaultContent: ''
                },
                {
                    data: 'CANTIDAD_TOTAL',
                    defaultContent: '',
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
            },
            footerCallback: function (row, data, start, end, display) {
                var api = this.api();
                // Sumar los valores de la columna 2 (CANTIDAD_TOTAL)
                var total = api
                    .column(2, {
                        page: 'current'
                    })
                    .data()
                    .reduce(function (a, b) {
                        return parseInt(a) + parseInt(b);
                    }, 0);

                // Mostrar el total en el footer
                $(api.column(2).footer()).html('TOTAL: ' + total);
            }
        })
    }
    $('#btnConsultar').click(() => {
        guardar()
    })
})