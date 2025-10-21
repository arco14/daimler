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
                'multiple',
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
                'multiple',
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
                            $('#addTitle').html(`<b>Número:</b> <span style="color: #0960AE;">${data.NUMERO_EMPLEADO}</span> <br> <b>Empleado: </b><span style="color: #0960AE;">${data.NOMBRE}</span>`)
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
        claveTipoCatalogo
    }) {
        const jsonData = {
            Stored: usarCatalogoEstandar ? 'PA_CORE_CapCatalogos' : strStored,
            Opcion: usarCatalogoEstandar ? 'CC' : strOption,
            Usuario: userActive,
            ...(usarCatalogoEstandar && {
                ClaveCatalogo: claveTipoCatalogo
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
    async function generarSelectBox(strEndpoint, json, strEndpointSublist, jsonSublist, blnSoloLista, strComponente, strKeyExpr, strPlaceholder, strSearchExpr, blnSeleccionados, strValueTextBox, blnSublist, strTipoComponente, strDisplayExprSub, strKeyExprSub, strGetter) {
        const data = await loadAPI(`${url}${strEndpoint}`, 'POST', json, token, false)
        if (data !== undefined) {
            const arrayData = data.response[0]
            console.log(arrayData)
            let dataSublist
            if (blnSublist) {
                const responseSublist = await loadAPI(`${url}${strEndpointSublist}`, 'POST', jsonSublist, token, false)
                dataSublist = responseSublist.response[0]
            }
            loadSelectTextBox(blnSoloLista, strComponente, arrayData, strKeyExpr, strPlaceholder, strSearchExpr, blnSeleccionados, strValueTextBox, dataSublist, strTipoComponente, strDisplayExprSub, strKeyExprSub, strGetter)
        } else {
            return
        }
    }

    //? COMPONENTES
    generarCatalogos({
        usarCatalogoEstandar: true,
        claveTipoCatalogo: 'EST',
        strEndpoint: 'DAIMLER',
        idComponente: '#lookUpEstilo',
        displayExpr: 'NOMBRE',
        valueExpr: 'Id'
    })
    generarCatalogos({
        usarCatalogoEstandar: true,
        claveTipoCatalogo: 'CATE',
        strEndpoint: 'DAIMLER',
        idComponente: '#lookUpCategoria',
        displayExpr: 'NOMBRE',
        valueExpr: 'Id'
    })
    generarCatalogos({
        usarCatalogoEstandar: true,
        claveTipoCatalogo: 'SUBC',
        strEndpoint: 'DAIMLER',
        idComponente: '#lookUpSubCategoria',
        displayExpr: 'NOMBRE',
        valueExpr: 'Id'
    })
    generarSelectBox('DAIMLER', jsonDataTallas, '', '', false, '#selectTextBoxTallasCantidad', 'Id', 'Cantidad', 'CLAVE', false, 'CANTIDAD', false, 'textBox', '', '', 'ListBox')
    loadTextArea('#textAreaObservaciones', 100, 'Observaciones', false, false)

    //? ACCIONES
})