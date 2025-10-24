window.addEventListener("DOMContentLoaded", () => {
    //? VARIABLES GLOBALES 📝
    const url = CONFIG.API_URL
    const token = $('#userToken').val()
    const userActive = $('#userActive').val()
    let idPrograma, blnDblClickGrid, arrayDataRows

    //? VALIDAR QUE EL CONTENIDO ESTE DENTRO DEL IFRAME 🔍
    if (window.self !== window.top) {
        idPrograma = parent.document.querySelector('#idEmpleados').value
    } else {
        window.location = '/admin-daimler26'
    }
    $('#btnAdd').addClass('d-none')

    //? FUNCIONES 
    async function tallasPaquete(id) {
        const jsonTallaCantidad = {
            Stored: 'PA_DAI_Paquetes',
            Opcion: 'CI',
            Paquetes: {
                Id: id
            }
        }
        resData = await loadAPI(`${url}DAIMLER`, 'POST', jsonTallaCantidad, token, false)
        console.log(resData)
    }
    async function generateGrid(option) {
        //? JSON DATA
        const data = {
            Stored: 'PA_DAI_Empleados',
            Opcion: option,
            Usuario: userActive
        }
        const resData = await loadAPI(`${url}DAIMLER`, 'POST', data, token, false)
        console.log(resData)
        if (resData === undefined) {
            loadDataGrid(
                '#dataGridEntregas',
                [],
                'single',
                20,
                arrayEntregas,
                'Entregas',
                false,
                null,
                false,
                500,
                true,
                `gridEntregas-${idPrograma}`, {
                    editing: {
                        mode: 'popup',
                        useIcons: true,
                        allowAdding: true,
                        allowUpdating: true,
                        allowDeleting: true,
                        selectTextOnEditStart: true,
                        startEditAction: 'click',
                        confirmDelete: false
                    }
                }
            )
        } else {
            loadDataGrid(
                '#dataGridEntregas',
                resData.response[0],
                'single',
                20,
                arrayEntregas,
                'Entregas',
                false,
                null,
                false,
                500,
                true,
                `gridEntregas-${idPrograma}`, {
                    onCellPrepared(e) {
                        if (e.rowType === 'header') {
                            const styles = {
                                'Etapas': {
                                    bg: '#cfe2ff',
                                    color: '#084298',
                                    border: '#b6d4fe'
                                },
                                'Datos de control': {
                                    bg: '#cfe2ff',
                                    color: '#084298',
                                    border: '#b6d4fe'
                                },
                                'Desarrollo': {
                                    bg: '#fff3cd',
                                    color: '#664d03',
                                    border: '#ffecb5'
                                },
                                'Producción': {
                                    bg: '#d4edda',
                                    color: '#155724',
                                    border: '#c3e6cb'
                                },
                                'Fecha': {
                                    bg: '#d4edda',
                                    color: '#155724',
                                    border: '#c3e6cb'
                                },
                                'Usuario': {
                                    bg: '#d4edda',
                                    color: '#155724',
                                    border: '#c3e6cb'
                                },
                                'Fecha Creación': {
                                    bg: '#fff3cd',
                                    color: '#664d03',
                                    border: '#ffecb5'
                                },
                                'Usuario Crea': {
                                    bg: '#fff3cd',
                                    color: '#664d03',
                                    border: '#ffecb5'
                                },
                                'Fecha Eliminación': {
                                    bg: '#f8d7da',
                                    color: '#721c24',
                                    border: '#f5c6cb'
                                },
                                'Usuario Elimina': {
                                    bg: '#f8d7da',
                                    color: '#721c24',
                                    border: '#f5c6cb'
                                },
                                'Motivo Eliminación': {
                                    bg: '#f8d7da',
                                    color: '#721c24',
                                    border: '#f5c6cb'
                                }
                            }
                            const style = styles[e.column.caption]
                            if (style) {
                                e.cellElement.css({
                                    'background-color': style.bg,
                                    'color': style.color,
                                    'border-color': style.border
                                })
                            }
                        }
                    },
                    editing: {
                        mode: 'form',
                        useIcons: true,
                        allowAdding: false,
                        allowUpdating: false,
                        allowDeleting: false,
                        selectTextOnEditStart: true,
                        startEditAction: 'click',
                    },
                    async onSelectionChanged(e) {
                        arrayDataRows = e.selectedRowsData
                        const data = e.selectedRowsData[0]
                        console.log(data)
                        if (arrayDataRows.length > 0) {
                            idRow = data.ID
                            $('#addTitle').html(`<b>Entrega: </b><span class="infoEmpleado">E1</span><br>
                                                 <div class="d-flex" style="gap: 0.3rem">
                                                    <b>Número:</b> <span class="infoEmpleado">${data.NUMERO_EMPLEADO}</span>
                                                    <b>Empleado: </b><span class="infoEmpleado">${data.NOMBRE}</span><br>
                                                 </div>
                                                 <div class="d-flex" style="gap: 0.3rem;">
                                                    <b>Area:</b><span class="infoEmpleado">${data.AREA}</span>
                                                    <b>Puesto:</b><span class="infoEmpleado">${data.PUESTO}</span>
                                                    <b>Turno:</b><span class="infoEmpleado">${data.TURNO}</span>
                                                </div>`)
                            $('#textBoxEstiloTops').dxTextBox({
                                value: data.ESTILO_TOPS
                            })
                            $('#textBoxPaqueteTops').dxTextBox({
                                value: data.PAQUETE_TOPS
                            })
                            //? TALLAS TOPS

                            $('#textBoxEstiloPants').dxTextBox({
                                value: data.ESTILO_PANTS
                            })
                            $('#textBoxPaquetePants').dxTextBox({
                                value: data.PAQUETE_PANTS
                            })
                            $('#btnUpdate').removeClass('d-none').prop('disabled', false)
                        } else {
                            $('#btnDelete').addClass('d-none').prop('disabled', true)
                            $('#btnUpdate').removeClass('d-none').prop('disabled', true)
                        }
                    },
                    onRowDblClick(e) {
                        if (blnDblClickGrid) {
                            e.event.preventDefault()
                        } else {
                            $('#add').modal('show')
                        }
                    }
                }
            )
        }
    }
    generateGrid('C')

    function generarCatalogos({
        usarCatalogoEstandar = false,
        strStored,
        strOption,
        strEndpoint,
        idComponente,
        displayExpr,
        valueExpr,
        claveTipoCatalogo,
        blnVacio = false,
        IdRelCatalogo,
        IdTipo
    }) {
        let jsonData
        blnVacio
            ?
            jsonData = false :
            jsonData = {
                Stored: usarCatalogoEstandar ? 'PA_CORE_CapCatalogos' : strStored,
                Opcion: usarCatalogoEstandar ? 'CC' : strOption,
                Usuario: userActive,
                ...(usarCatalogoEstandar && {
                    ClaveCatalogo: claveTipoCatalogo,
                    IdRelacionCatalogos: IdRelCatalogo,
                    IdTipoCatalogo: IdTipo
                }),
            }
        loadLookup({
            strUrl: url,
            strEndpoint,
            jsonData,
            strToken: token,
            blnValidacion: true,
            strComponente: idComponente,
            strDisplayExpr: displayExpr,
            strValueExpr: valueExpr,
            blnVisible: true,
            blnReadOnly: false,
        })
    }

    //? COMPONENTES
    generarCatalogos({
        strStored: 'PA_DAI_OrdenesCompra',
        strOption: 'C',
        strEndpoint: 'DAIMLER',
        idComponente: '#lookUpEntrega',
        displayExpr: 'NOMBRE',
        valueExpr: 'Id'
    })
    loadSwitch("#swPredeterminada", false, false, false, false)
    loadTextArea('#textAreaComentariosEntrega', 100, 'Comentarios Entrega', false, false)
    loadButton('#btnGuardar', 'Guardar', 'success', true, true, false)

    //? ACCIONES
})