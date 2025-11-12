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
    const llamadaAPI = (stored, opcion, extraParametros = {}) => {
        const baseBody = {
            Stored: stored,
            Opcion: opcion,
            Usuario: userActive,
            ...extraParametros
        }
        return loadAPI(`${url}DAIMLER`, 'POST', baseBody, token, false)
    }
    async function generateGrid(componente, dataJson, arrayColumnas) {
        //? JSON DATA
        const resData = await loadAPI(`${url}DAIMLER`, 'POST', dataJson, token, false)
        if (resData === undefined) {
            loadDataGrid(
                componente,
                [],
                'single',
                20,
                arrayColumnas,
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
                componente,
                resData.response[0],
                'single',
                20,
                arrayColumnas,
                'Entregas',
                false,
                null,
                false,
                500,
                true,
                `gridEntregas-${idPrograma}`, {
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
                        if (arrayDataRows.length > 0) {
                            idRow = data.ID
                            $('#addTitle').html(`<b>Entrega: </b><span class="infoEmpleado">E1</span><br>
                                                 <div class="d-flex" style="gap: 0.3rem">
                                                    <b>Número:</b> <span class="infoEmpleado">${data.NUMERO_EMPLEADO}</span>
                                                    <b>Empleado: </b><span class="infoEmpleado">${data.NOMBRE}</span><br>
                                                 </div>
                                                 <div class="d-flex" style="gap: 0.3rem">
                                                    <b>Area:</b><span class="infoEmpleado">${data.AREA}</span>
                                                    <b>Puesto:</b><span class="infoEmpleado">${data.PUESTO}</span>
                                                    <b>Turno:</b><span class="infoEmpleado">${data.TURNO}</span>
                                                </div>`)
                            $('#swPredeterminada').dxSwitch({
                                value: true
                            })
                            $('#textBoxEstiloTops').dxTextBox({
                                value: data.ESTILO_TOPS,
                            })
                            $('#textBoxPaqueteTops').dxTextBox({
                                value: data.PAQUETE_TOPS,
                            })
                            $('#textBoxTopsTallaML').dxTextBox({
                                value: data.TALLA_ML,
                            })
                            $('#textBoxTopsTallaMC').dxTextBox({
                                value: data.TALLA_MC,
                            })
                            $('#textBoxTopsTallaPLY').dxTextBox({
                                value: data.TALLA_PLY,
                            })
                            $('#textBoxEstiloPants').dxTextBox({
                                value: data.ESTILO_PANTS,
                            })
                            $('#textBoxPaquetePants').dxTextBox({
                                value: data.PAQUETE_PANTS,
                            })
                            $('#textBoxPantsTalla').dxTextBox({
                                value: data.TALLA_PANT,
                            })
                            const [resEstilos, resPaquete, resCantidad, resTallas] = await Promise.all([
                                llamadaAPI('PA_CORE_CapCatalogos', 'CC', {
                                    ClaveCatalogo: 'TOPS'
                                }),
                                llamadaAPI('PA_DAI_Paquetes', 'C', {
                                    IdRelacionCatalogos: 13
                                }),
                                llamadaAPI('PA_DAI_Paquetes', 'CI', {
                                    Paquetes: {
                                        Id: data.ID_PAQUETE_TOPS
                                    }
                                }),
                                llamadaAPI('PA_CORE_CapCatalogos', 'CC', {
                                    IdTipoCatalogo: 8,
                                    IdRelacionCatalogos: 158
                                }),
                            ])
                            const dataSource = [{
                                ESTILO: data.ID_ESTILO_TOPS,
                                PAQUETE: data.ID_PAQUETE_TOPS,
                                TALLA: data.TALLA_ML,
                                CAN_ML: resCantidad.response[0][0].CAN_ML,
                                CAN_MC: resCantidad.response[0][0].CAN_MC,
                                CAN_PLY: resCantidad.response[0][0].CAN_PLY,
                                CAN_SUD: resCantidad.response[0][0].CAN_SUD,
                                TOTAL: resCantidad.response[0][0].TOTAL,
                            }]
                            $('#dataGridCargaManual').dxDataGrid({
                                dataSource: dataSource,
                                showBorders: true,
                                columnFixing: {
                                    enabled: false
                                },
                                paging: {
                                    enabled: false
                                },
                                editing: {
                                    mode: 'cell',
                                    useIcons: true,
                                    allowUpdating: true,
                                    allowAdding: true,
                                    allowDeleting: true,
                                    selectTextOnEditStart: true,
                                    startEditAction: 'click',
                                },
                                columns: [{
                                        dataField: 'ESTILO',
                                        caption: 'ESTILO',
                                        lookup: {
                                            placeholder: false,
                                            dataSource: resEstilos.response[0],
                                            displayExpr: 'NOMBRE',
                                            valueExpr: 'Id',
                                        },
                                    },
                                    {
                                        dataField: 'PAQUETE',
                                        caption: 'PAQUETE',
                                        lookup: {
                                            placeholder: false,
                                            dataSource: resPaquete.response[0],
                                            displayExpr: 'NOMBRE',
                                            valueExpr: 'Id',
                                        },
                                    },
                                    {
                                        caption: 'TALLAS / CANTIDAD / INVENTARIO',
                                        allowEditing: false,
                                        alignment: 'center',
                                        columns: [{
                                                dataField: 'CAN_ML',
                                                caption: 'ML',
                                                alignment: 'center',
                                                visible: false
                                            },
                                            {
                                                dataField: 'TALLA_ML',
                                                caption: 'TALLA',
                                                alignment: 'center',
                                                visible: false,
                                                lookup: {
                                                    placeholder: false,
                                                    dataSource: resTallas.response[0],
                                                    displayExpr: 'CLAVE',
                                                    valueExpr: 'Id'
                                                }
                                            },
                                            {
                                                dataField: 'CAN_MC',
                                                caption: 'MC',
                                                alignment: 'center',
                                                visible: false
                                            },
                                            {
                                                dataField: 'TALLA_MC',
                                                caption: 'TALLA',
                                                alignment: 'center',
                                                visible: false,
                                                lookup: {
                                                    placeholder: false,
                                                    dataSource: resTallas.response[0],
                                                    displayExpr: 'CLAVE',
                                                    valueExpr: 'Id'
                                                }
                                            },
                                            {
                                                dataField: 'CAN_PLY',
                                                caption: 'PLY',
                                                alignment: 'center',
                                                visible: false
                                            },
                                            {
                                                dataField: 'TALLA_PLY',
                                                caption: 'TALLA',
                                                alignment: 'center',
                                                visible: false,
                                                lookup: {
                                                    placeholder: false,
                                                    dataSource: resTallas.response[0],
                                                    displayExpr: 'CLAVE',
                                                    valueExpr: 'Id'
                                                }
                                            },
                                            {
                                                dataField: 'CAN_SUD',
                                                caption: 'SUD',
                                                alignment: 'center',
                                                visible: false
                                            },
                                            {
                                                dataField: 'TALLA_SUD',
                                                caption: 'TALLA',
                                                alignment: 'center',
                                                visible: false,
                                                lookup: {
                                                    placeholder: false,
                                                    dataSource: resTallas.response[0],
                                                    displayExpr: 'CLAVE',
                                                    valueExpr: 'Id'
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        dataField: 'TOTAL',
                                        caption: 'TOTAL',
                                        alignment: 'center',
                                        width: 100,
                                        allowEditing: false
                                    }
                                ],
                                onInitialized: function (e) {
                                    window.gridCargaManual = e.component
                                },
                                onEditorPreparing(col) {
                                    if (col.parentType === 'dataRow' && col.dataField === 'PAQUETE') {
                                        col.editorOptions.onValueChanged = async (e) => {
                                            const jsonCanTallas = {
                                                Stored: 'PA_DAI_Paquetes',
                                                Opcion: 'CI',
                                                Paquetes: {
                                                    Id: e.value
                                                },
                                                Usuario: userActive
                                            }
                                            const dataCanTallas = await loadAPI(`${url}DAIMLER`, 'POST', jsonCanTallas, token, false)
                                            const canML = dataCanTallas.response[0][0].CAN_ML
                                            const canMC = dataCanTallas.response[0][0].CAN_MC
                                            const canPLY = dataCanTallas.response[0][0].CAN_PLY
                                            const canSUD = dataCanTallas.response[0][0].CAN_SUD

                                            const paqueteSeleccionado = resPaquete.response[0].find(paq => paq.Id === e.value)
                                            const rowIndex = col.row.rowIndex
                                            const dataGrid = col.component

                                            if (paqueteSeleccionado) {
                                                dataGrid.cellValue(rowIndex, 'PAQUETE', e.value)
                                                dataGrid.cellValue(rowIndex, 'CAN_ML', canML)
                                                dataGrid.cellValue(rowIndex, 'CAN_MC', canMC)
                                                dataGrid.cellValue(rowIndex, 'CAN_PLY', canPLY)
                                                dataGrid.cellValue(rowIndex, 'CAN_SUD', canSUD)
                                                dataGrid.cellValue(rowIndex, 'TOTAL', canML + canMC + canPLY + canSUD)
                                            }

                                            //? Control de visibilidad según el paquete
                                            toggleColumnsByPackage(e.value)
                                        }
                                    }
                                },
                                onCellPrepared: function (e) {
                                    if (e.rowType === 'data' && e.column.dataField === 'TOTAL') {
                                        const data = e.data
                                        const sumaActualizada = (data.CAN_ML || 0) + (data.CAN_MC || 0) + (data.CAN_PLY || 0) + (data.CAN_SUD || 0)
                                        e.cellElement.text(sumaActualizada)
                                    }
                                }
                            }).dxDataGrid('instance')

                            //? Función para mostrar/ocultar columnas según el paquete
                            function toggleColumnsByPackage(idPaquete) {
                                const grid = window.gridCargaManual
                                const columnas = ['CAN_ML', 'TALLA_ML', 'CAN_MC', 'TALLA_MC', 'CAN_PLY', 'TALLA_PLY', 'CAN_SUD', 'TALLA_SUD']

                                //? Oculta todas las columnas primero
                                columnas.forEach(c => grid.columnOption(c, 'visible', false))

                                //? Busca el paquete seleccionado
                                const paquete = resPaquete.response[0].find(p => p.Id === idPaquete)
                                if (!paquete) return

                                const nombre = paquete.NOMBRE.toUpperCase()

                                //? Detecta qué tallas aparecen en el nombre del paquete
                                const tieneML = nombre.includes('ML')
                                const tieneMC = nombre.includes('MC')
                                const tienePLY = nombre.includes('PLY')
                                const tieneSUD = nombre.includes('SUD')

                                //? Muestra solo las columnas correspondientes
                                if (tieneML) {
                                    grid.columnOption('CAN_ML', 'visible', true)
                                    grid.columnOption('TALLA_ML', 'visible', true)
                                }
                                if (tieneMC) {
                                    grid.columnOption('CAN_MC', 'visible', true)
                                    grid.columnOption('TALLA_MC', 'visible', true)
                                }
                                if (tienePLY) {
                                    grid.columnOption('CAN_PLY', 'visible', true)
                                    grid.columnOption('TALLA_PLY', 'visible', true)
                                }
                                if (tieneSUD || nombre.includes('SUDADERA')) {
                                    grid.columnOption('CAN_SUD', 'visible', true)
                                    grid.columnOption('TALLA_SUD', 'visible', true)
                                }

                                grid.repaint()
                            }
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
    const dataEntrega = {
        Stored: 'PA_DAI_Empleados',
        Opcion: 'C',
        Usuario: userActive
    }
    generateGrid('#dataGridEntregas', dataEntrega, arrayEntregas)
    loadSwitch("#swPredeterminada", false, false, false, false)
    loadTextArea('#textAreaComentariosEntrega', 100, 'Comentarios Entrega', false, false)
    loadButton('#btnAgregarRenglon', '', 'normal', false, true, false, 'plus', 'Agregar Renglon')
    loadButton('#btnGuardar', 'Guardar', 'success', true, true, false)
    
    //? ACCIONES
})