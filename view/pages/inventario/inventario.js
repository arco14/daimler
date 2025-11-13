window.addEventListener("DOMContentLoaded", () => {
    //? VARIABLES GLOBALES 📝
    const url = CONFIG.API_URL
    const token = $('#userToken').val()
    const userActive = $('#userActive').val()
    let idPrograma, estiloPrenda, subCategoria

    //? VALIDAR QUE EL CONTENIDO ESTE DENTRO DEL IFRAME 🔍
    if (window.self !== window.top) {
        idPrograma = parent.document.querySelector('#idInventario').value
    } else {
        window.location = '/admin-daimler26'
    }

    //? ARREGLOS
    const arrayInventario = [{
        dataField: 'PRENDA',
        caption: 'Prenda',
        dataType: 'string',
        groupIndex: 0
    }, {
        dataField: 'TIPO_MOVIMIENTO',
        caption: 'Tipo Movimiento',
        dataType: 'string',
    }, {
        dataField: 'ESTILO',
        caption: 'Estilo',
        dataType: 'string'
    }, {
        dataField: 'CATEGORIA',
        caption: 'Categoría',
        dataType: 'string'
    }, {
        dataField: 'SUBCATEGORIA',
        caption: 'Sub Categoría',
        dataType: 'string'
    }, {
        dataField: 'TALLA',
        caption: 'Talla',
        dataType: 'string',
        alignment: 'center',
    }, {
        dataField: 'CANTIDAD',
        caption: 'Cantidad',
        dataType: 'number',
        alignment: 'center',
    }, {
        dataField: 'COMENTARIOS',
        caption: 'Comentarios',
        dataType: 'string',
    }, {
        dataField: 'USUARIO',
        caption: 'Usuario',
        dataType: 'string',
    }, {
        dataField: 'FECHA',
        caption: 'Fecha',
        dataType: 'datetime',
        format: 'dd/MMM/yyyy HH:ss:mm',
    }, {
        caption: 'Datos de control',
        alignment: 'center',
        visible: false,
        columns: [{
            dataField: 'FECHA_CREACION',
            caption: 'Fecha Creación',
            dataType: 'datetime',
            format: 'dd/MM/yyyy HH:mm:ss',
            allowEditing: false
        }, {
            dataField: 'USUARIO_CREACION',
            caption: 'Usuario Crea',
            dataType: 'string',
            allowEditing: false
        }, {
            dataField: 'FECHA_ELIMINA',
            caption: 'Fecha Eliminación',
            dataType: 'datetime',
            format: 'dd/MM/yyyy HH:mm:ss',
            allowEditing: false

        }, {
            dataField: 'USUARIO_ELIMINA',
            caption: 'Usuario Elimina',
            dataType: 'string',
            allowEditing: false
        }, {
            dataField: 'MOTIVO',
            caption: 'Motivo Eliminación',
            dataType: 'string',
            allowEditing: false
        }]
    }]
    const jsonDataCustomer = {
        Stored: 'PA_DAI_Prendas',
        Opcion: 'C',
        Usuario: userActive
    }
    const arrayCustomer = [{
        dataField: 'NOMBRE',
        caption: 'Nombre',
        dataType: 'string'
    }]

    //? FUNCIONES
    async function generateGrid(option) {
        //? JSON DATA
        const data = {
            Stored: 'PA_DAI_Inventario',
            Opcion: option,
            Usuario: userActive
        }
        const resData = await loadAPI(`${url}DAIMLER`, 'POST', data, token, false)
        console.log(resData)
        loadDataGrid(
            '#dataGridInventario',
            resData === undefined ? [] : resData.response[0],
            'single',
            20,
            arrayInventario,
            'Inventario',
            false,
            '',
            false,
            500,
            true,
            `gridInventario-${idPrograma}`, {
                editing: {
                    mode: 'popup',
                    useIcons: true,
                    allowAdding: false,
                    allowUpdating: false,
                    allowDeleting: false,
                    selectTextOnEditStart: true,
                    startEditAction: 'click',
                    confirmDelete: false
                },
                async onSelectionChanged(e) {
                    arrayDataRows = e.selectedRowsData
                    const data = e.selectedRowsData[0]
                    if (arrayDataRows.length > 0) {
                        idRow = data.Id
                        $('#btnDelete').removeClass('d-none').prop('disabled', false)
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
    async function generarSelectBox(strEndpoint, json, strEndpointSublist, jsonSublist, blnSoloLista, strComponente, strKeyExpr, strPlaceholder, strSearchExpr, blnSeleccionados, strValueTextBox, blnSublist, strTipoComponente, strDisplayExprSub, strKeyExprSub, strGetter) {
        const data = await loadAPI(`${url}${strEndpoint}`, 'POST', json, token, false)
        if (data !== undefined) {
            const arrayData = data.response[0]
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
    async function generarDropDown(strEndPoint, jsonData, strComponente, intKey, arrayColumns, arraySummary, blnAutoWith, blnValidacion, blnReadOnly) {
        const resData = await loadAPI(`${url}${strEndPoint}`, 'POST', jsonData, token, false)
        loadDropDown(strComponente, intKey, resData.response[0], arrayColumns, arraySummary, blnAutoWith, blnValidacion, blnReadOnly)
    }

    //? COMPONENTES
    generarCatalogos({
        usarCatalogoEstandar: true,
        claveTipoCatalogo: 'TIP_MOV',
        strEndpoint: 'DAIMLER',
        idComponente: '#lookUpTipoMov',
        displayExpr: 'NOMBRE',
        valueExpr: 'Id',
    })
    generarDropDown('DAIMLER', jsonDataCustomer, '#lookUpPrenda', 'Id', arrayCustomer, [], true, true, false)
    $('#lookUpPrenda').dxDropDownBox({
        onValueChanged(e) {
            const selectedId = e.value
            const dataSource = e.component.getDataSource()
            dataSource.load().then(items => {
                const selectedItem = items.find(item => item.Id === selectedId)
                console.log(selectedItem)
                estiloPrenda = selectedItem.ID_ESTILO
                subCategoria = selectedItem.ID_SUBCATEGORIA
                const jsonDataTallas = {
                    Stored: 'PA_CORE_CapCatalogos',
                    Opcion: 'CC',
                    Usuario: userActive,
                    IdTipoCatalogo: 8,
                    IdRelacionCatalogos: selectedItem.ID_TIPO_ARTICULO
                }
                generarSelectBox('DAIMLER', jsonDataTallas, '', '', false, "#selectTextBoxTallasCantidad", 'Id', 'Cantidad', 'CLAVE', false, 'CANTIDAD', false, 'textBox', '', '', 'ListBox')
            })
        }
    })
    loadTextArea('#textAreaComentarios', 100, 'Comentarios', false, false)
    loadButton('#btnGuardarInv', 'Guardar', 'success', true, true, false)

    //? ACCIONES
    async function guardar() {
        const tipoMovimiento = $('#lookUpTipoMov').dxLookup('option', 'value')
        const prenda = $('#lookUpPrenda').dxDropDownBox('option', 'value')
        const selectedTallasCantidad = getFinalDataListBox()
            .filter(item => item.selected)
            .map(item => ({
                TALLA: item.Id,
                CANTIDAD: parseInt(item.CANTIDAD)
            }))
        const comentarios = $('#textAreaComentarios').dxTextArea('option', 'value')
        const jsonGuardarInventario = {
            Stored: 'PA_DAI_Inventario',
            Opcion: 'G',
            Usuario: userActive,
            Inventario: {
                Id: idRow,
                TIPO_MOVIMIENTO: tipoMovimiento,
                PRENDA: prenda,
                ESTILO: estiloPrenda,
                SUBCATEGORIA: subCategoria,
                Talla_Cant: selectedTallasCantidad,
                COMENTARIOS: comentarios
            }
        }
        console.log(jsonGuardarInventario)
        const resInventario = await loadAPI(`${url}DAIMLER`, 'POST', jsonGuardarInventario, token, true)
        console.log(resInventario)
        if (resInventario !== undefined) {
            generateGrid('C')
            $('#add').modal('hide')
        }
    }
    $('#frmInventario').on('submit', (e) => {
        e.preventDefault()
        guardar()
    })
    $('#btnUpdate').click(() => {
        $('#add').modal('show')
    })
    $('#btnAdd').click(() => {
        idRow = 0
        $('#addTitle').text('Crear nuevo inventario')
        $(".nav-link").removeClass("active")
        $(".nav-link").first().addClass("active")
        // const dataGrid = $('#dataGridInventario').dxDataGrid('instance')
        // dataGrid.clearSelection()
        $('#lookUpTipoMov').dxLookup('option', 'value', '')
    })
    $('#consultar').click(() => {
        // const dataGrid = $('#dataGridInventario').dxDataGrid('instance')
        // dataGrid.clearSelection()
        generateGrid('C')
    })
    $('#consultarTodo').click(() => {
        // const dataGrid = $('#dataGridInventario').dxDataGrid('instance')
        // dataGrid.clearSelection()
        generateGrid('CT')
    })
})