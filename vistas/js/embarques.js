window.addEventListener('DOMContentLoaded', async () => {
    //? VARIABLES
    const url = 'http://localhost:3000/api/'
    //? FUNCIONES 
    async function generarGrid(opcion) {
        const dataDaimler = {
            Stored: 'PA_DAI_CapEmbarque',
            Opcion: opcion,
            Usuario: 'cruz.gonzalez',
        }
        const resDataDaimler = await loadAPI(`${url}DAIMLER`, 'POST', dataDaimler, '', false)
        const embarque = resDataDaimler.response[0] || []
        console.log(embarque)
        if ($.fn.DataTable.isDataTable('#tablaEmbarques')) {
            $('#tablaEmbarques').DataTable().clear().destroy()
        }
        $('#tablaEmbarques').DataTable({
            data: embarque,
            responsive: true,
            dom: 'Bfrtip',
            columns: [{
                    data: 'NOMBRE',
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
                    data: 'COMENTARIO',
                    defaultContent: ''
                },
                {
                    data: null,
                    defaultContent: '',
                    render: function (row) {
                        return `<div style='display: flex gap: 1rem'>
                                    <button type='button' 
                                            data-id='${row.ID}'
                                            data-nombre='${row.NOMBRE}'  
                                            data-usuario='${row.USUARIO}'
                                            data-fecha='${row.FECHA}' 
                                            data-comentario='${row.COMENTARIO}' 
                                            class='btn btn-warning btn-circle waves-effect waves-circle waves-float edit-btnEmbarque'>
                                        <i class='material-icons'>edit</i>
                                    </button>
                                    <button type='button' id='datosEmbarque' class='btn btn-danger btn-circle waves-effect waves-circle waves-float'>
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
    //? ACCIONES
    $('#guardar').click(async () => {
        const nombre = $('#embarque').val()
        const fecha = $('#fecha').val()
        const comentarios = $('#comentarios').val()
        const dataEmbarque = {
            Stored: 'PA_DAI_CapEmbarque',
            Opcion: 'G',
            Embarque: {
                Id: 0,
                Embarque: nombre,
                Usuario: nombre,
                Fecha: fecha,
                Comentario: comentarios
            },
        }
        console.log(dataEmbarque)
        const resDataDaimler = await loadAPI(`${url}DAIMLER`, 'POST', dataEmbarque, '', true)
        console.log(resDataDaimler)
        generarGrid('C')
        $('#modalEmbarque').modal('hide')
    })
    $(document).on('click', '.edit-btnEmbarque', function() {
        const id = $(this).data('id')
        const nombre = $(this).data('nombre')
        const usuario = $(this).data('usuario')
        const fecha = $(this).data('fecha')
        const fechaFormateada = new Date(fecha).toISOString().slice(0, 10)
        const comentario = $(this).data('comentario')
        $('#modalEmbarque').modal('show')
        $('#embarque').val(nombre)
        $('#usuario').val(usuario)
        $('#fecha').val(fechaFormateada)
        $('#comentarios').val(comentario)
    })
})