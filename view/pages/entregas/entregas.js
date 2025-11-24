window.addEventListener("DOMContentLoaded", () => {
    //? VARIABLES GLOBALES 📝
    const url = CONFIG.API_URL
    const token = $('#userToken').val()
    const userActive = $('#userActive').val()
    let idPrograma, blnDblClickGrid, arrayDataRows, dataFinalTops

    //? VALIDAR QUE EL CONTENIDO ESTE DENTRO DEL IFRAME 🔍
    if (window.self !== window.top) {
        idPrograma = parent.document.querySelector('#idEmpleados').value
    } else {
        window.location = '/admin-daimler26'
    }
    $('#btnAdd').addClass('d-none')
    $('#btnProgramarFechaEntrega').removeClass('d-none').attr('disabled', false)


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
    async function generateGrid(componente, dataJson, arrayColumnas, blnModal, intHeigth) {
        //? JSON DATA
        const resData = await loadAPI(`${url}DAIMLER`, 'POST', dataJson, token, false)
        loadDataGrid(
                componente,
                resData === undefined ? []: resData.response[0],
                'single',
                20,
                arrayColumnas,
                'Entregas',
                false,   
                null,
                blnModal,
                intHeigth,
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
                            const [resEstilos, resPaquete, resCantidad, resTallas, resEstiloPants, resPaquetePants] = await Promise.all([
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
                                //? LLAMADA PARA PANTS
                                llamadaAPI('PA_CORE_CapCatalogos', 'CC', {
                                    ClaveCatalogo: 'PANTS'
                                }),
                            ])
                            const dataSourceTops = [{
                                ESTILO: data.ID_ESTILO_TOPS,
                                PAQUETE: data.ID_PAQUETE_TOPS,
                                TALLA: data.TALLA_ML,
                                CAN_ML: resCantidad.response[0][0].CAN_ML,
                                CAN_MC: resCantidad.response[0][0].CAN_MC,
                                CAN_PLY: resCantidad.response[0][0].CAN_PLY,
                                CAN_SUD: resCantidad.response[0][0].CAN_SUD,
                                TOTAL: resCantidad.response[0][0].TOTAL,
                            }]

                            const dataSourcePants = [{
                                ESTILO: data.ID_ESTILO_PANTS,
                                // PAQUETE: data.ID_PAQUETE_PANTS
                            }]

                            //? DATAGRID TOPS
                            $('#dataGridTops').dxDataGrid({
                                dataSource: dataSourceTops,
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
                                        caption: 'CANTIDAD / TALLA / INVENTARIO',
                                        allowEditing: true,
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
                                                    valueExpr: 'Id',
                                                }
                                            }, {
                                                dataField: 'INV_ML',
                                                caption: 'Inventario',
                                                alignment: 'center',
                                                visible: false,
                                                allowEditing: false
                                            },
                                            //? MANGA CORTA
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
                                            }, {
                                                dataField: 'INV_MC',
                                                caption: 'Inventario',
                                                alignment: 'center',
                                                visible: false,
                                                allowEditing: false
                                            },
                                            //? PLAYERA
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
                                            }, {
                                                dataField: 'INV_PLY',
                                                caption: 'Inventario',
                                                alignment: 'center',
                                                visible: false,
                                                allowEditing: false
                                            },
                                            //? SUADADERA
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
                                            }, {
                                                dataField: 'INV_SUD',
                                                caption: 'Inventario',
                                                alignment: 'center',
                                                visible: false,
                                                allowEditing: false
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
                                            mostrarOcultarColTops(e.value)
                                        }
                                    }
                                    //? Consultar inventario al cambiar talla
                                    const columnasTalla = ["TALLA_ML", "TALLA_MC", "TALLA_PLY", "TALLA_SUD"]

                                    //? Mapeo de columnas de talla a sus respectivas columnas de inventario
                                    const mapeoInventario = {
                                        'TALLA_ML': 'INV_ML',
                                        'TALLA_MC': 'INV_MC',
                                        'TALLA_PLY': 'INV_PLY',
                                        'TALLA_SUD': 'INV_SUD'
                                    }
                                    if (col.parentType === 'dataRow' && columnasTalla.includes(col.dataField)) {
                                        const originalHandler = col.editorOptions.onValueChanged
                                        col.editorOptions.onValueChanged = async (event) => {
                                            if (originalHandler) originalHandler(event)

                                            const resultadoInventario = await consultarInventario(col, event)

                                            //? Obtener la columna de inventario correspondiente
                                            const columnaInventario = mapeoInventario[col.dataField]

                                            if (columnaInventario) {
                                                const rowIndex = col.row.rowIndex
                                                const dataGrid = col.component
                                                dataGrid.cellValue(rowIndex, columnaInventario, resultadoInventario)
                                            }
                                        }
                                    }

                                },
                                //? Actualizar total al cambiar cantidades
                                onCellPrepared: function (e) {
                                    if (e.rowType === 'data' && e.column.dataField === 'TOTAL') {
                                        dataFinalTops = e.data
                                        const sumaActualizada = (dataFinalTops.CAN_ML || 0) + (dataFinalTops.CAN_MC || 0) + (dataFinalTops.CAN_PLY || 0) + (dataFinalTops.CAN_SUD || 0)
                                        e.cellElement.text(sumaActualizada)
                                    }
                                },
                            }).dxDataGrid('instance')

                            $('#dataGridPants').dxDataGrid({
                                dataSource: dataSourcePants,
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
                                        dataSource: resEstiloPants.response[0],
                                        displayExpr: 'NOMBRE',
                                        valueExpr: 'Id',
                                    },
                                }, {
                                    caption: 'CANTIDAD / TALLA / INVENTARIO',
                                    allowEditing: true,
                                    alignment: 'center',
                                    columns: [{
                                        dataField: 'CAN_PANT',
                                        caption: 'Cantidad',
                                        alignment: 'center',
                                        visible: true
                                    }, {
                                        dataField: 'TALLA_PANT',
                                        caption: 'TALLA',
                                        alignment: 'center',
                                        visible: true
                                    }, {
                                        dataField: 'INV_PANT',
                                        caption: 'INVENTARIO',
                                        alignment: 'center',
                                        visible: true
                                    }]
                                }, {
                                    dataField: 'TOTAL_PANT',
                                    caption: 'TOTAL',
                                    alignment: 'center',
                                    width: 100,
                                    allowEditing: false
                                }],
                                // onInitialized: function (e) {
                                //     window.gridCargaManual = e.component
                                // },
                                // onEditorPreparing(col) {
                                //     if (col.parentType === 'dataRow' && col.dataField === 'PAQUETE') {
                                //         col.editorOptions.onValueChanged = async (e) => {
                                //             const jsonCanTallas = {
                                //                 Stored: 'PA_DAI_Paquetes',
                                //                 Opcion: 'CI',
                                //                 Paquetes: {
                                //                     Id: e.value
                                //                 },
                                //                 Usuario: userActive
                                //             }
                                //             const dataCanTallas = await loadAPI(`${url}DAIMLER`, 'POST', jsonCanTallas, token, false)
                                //             const canML = dataCanTallas.response[0][0].CAN_ML
                                //             const canMC = dataCanTallas.response[0][0].CAN_MC
                                //             const canPLY = dataCanTallas.response[0][0].CAN_PLY
                                //             const canSUD = dataCanTallas.response[0][0].CAN_SUD

                                //             const paqueteSeleccionado = resPaquete.response[0].find(paq => paq.Id === e.value)
                                //             const rowIndex = col.row.rowIndex
                                //             const dataGrid = col.component

                                //             if (paqueteSeleccionado) {
                                //                 dataGrid.cellValue(rowIndex, 'PAQUETE', e.value)
                                //                 dataGrid.cellValue(rowIndex, 'CAN_ML', canML)
                                //                 dataGrid.cellValue(rowIndex, 'CAN_MC', canMC)
                                //                 dataGrid.cellValue(rowIndex, 'CAN_PLY', canPLY)
                                //                 dataGrid.cellValue(rowIndex, 'CAN_SUD', canSUD)
                                //                 dataGrid.cellValue(rowIndex, 'TOTAL', canML + canMC + canPLY + canSUD)
                                //             }
                                //             //? Control de visibilidad según el paquete
                                //             mostrarOcultarColTops(e.value)
                                //         }
                                //     }
                                //     //? Consultar inventario al cambiar talla
                                //     const columnasTalla = ["TALLA_ML", "TALLA_MC", "TALLA_PLY", "TALLA_SUD"]

                                //     //? Mapeo de columnas de talla a sus respectivas columnas de inventario
                                //     const mapeoInventario = {
                                //         'TALLA_ML': 'INV_ML',
                                //         'TALLA_MC': 'INV_MC',
                                //         'TALLA_PLY': 'INV_PLY',
                                //         'TALLA_SUD': 'INV_SUD'
                                //     }
                                //     if (col.parentType === 'dataRow' && columnasTalla.includes(col.dataField)) {
                                //         const originalHandler = col.editorOptions.onValueChanged
                                //         col.editorOptions.onValueChanged = async (event) => {
                                //             if (originalHandler) originalHandler(event)

                                //             const resultadoInventario = await consultarInventario(col, event)

                                //             //? Obtener la columna de inventario correspondiente
                                //             const columnaInventario = mapeoInventario[col.dataField]

                                //             if (columnaInventario) {
                                //                 const rowIndex = col.row.rowIndex
                                //                 const dataGrid = col.component
                                //                 dataGrid.cellValue(rowIndex, columnaInventario, resultadoInventario)
                                //             }
                                //         }
                                //     }

                                // },
                                // //? Actualizar total al cambiar cantidades
                                // onCellPrepared: function (e) {
                                //     if (e.rowType === 'data' && e.column.dataField === 'TOTAL') {
                                //         dataFinalTops = e.data
                                //         const sumaActualizada = (dataFinalTops.CAN_ML || 0) + (dataFinalTops.CAN_MC || 0) + (dataFinalTops.CAN_PLY || 0) + (dataFinalTops.CAN_SUD || 0)
                                //         e.cellElement.text(sumaActualizada)
                                //     }
                                // },
                            }).dxDataGrid('instance')

                            //? Si ya esta creado el dataGrid, se manda a llamar la función para mostrar/ocultar columnas según el paquete
                            mostrarOcultarColTops(data.ID_PAQUETE_TOPS)

                            //? Función para consultar inventario (relacion ESTILO/TALLA)
                            async function consultarInventario(col, e) {
                                const fila = col.row.data
                                //? Mantener displayExpr de cada lookup
                                col.setValue(e.value)
                                const jsonInventario = {
                                    Stored: 'PA_DAI_Inventario',
                                    Opcion: 'IET',
                                    Inventario: {
                                        IdEstilo: fila.ESTILO,
                                        IdTalla: e.value
                                    },
                                    Usuario: userActive
                                }
                                const resInventario = await loadAPI(`${url}DAIMLER`, 'POST', jsonInventario, token, false)
                                if (resInventario !== undefined) {
                                    return resInventario.response[0][0].CANTIDAD
                                } else if (resInventario === 0) {
                                    return 0
                                } else {
                                    Swal.fire({
                                        title: 'Advertencia!',
                                        text: 'No se encuentra relación, (ESTILO / TALLA), para consultar inventario.',
                                        icon: 'warning',
                                        confirmButtonText: 'Aceptar'
                                    });
                                }
                            }

                            //? Función para mostrar/ocultar columnas según el paquete
                            function mostrarOcultarColTops(idPaquete) {
                                const grid = window.gridCargaManual
                                const columnas = ['CAN_ML', 'TALLA_ML', 'INV_ML', 'CAN_MC', 'TALLA_MC', 'CAN_PLY', 'TALLA_PLY', 'CAN_SUD', 'TALLA_SUD']

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
                                    grid.columnOption('INV_ML', 'visible', true)
                                }
                                if (tieneMC) {
                                    grid.columnOption('CAN_MC', 'visible', true)
                                    grid.columnOption('TALLA_MC', 'visible', true)
                                    grid.columnOption('INV_MC', 'visible', true)
                                }
                                if (tienePLY) {
                                    grid.columnOption('CAN_PLY', 'visible', true)
                                    grid.columnOption('TALLA_PLY', 'visible', true)
                                    grid.columnOption('INV_PLY', 'visible', true)
                                }
                                if (tieneSUD || nombre.includes('SUDADERA')) {
                                    grid.columnOption('CAN_SUD', 'visible', true)
                                    grid.columnOption('TALLA_SUD', 'visible', true)
                                    grid.columnOption('INV_SUD', 'visible', true)
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

    //? COMPONENTES
    const dataEntrega = {
        Stored: 'PA_DAI_Empleados',
        Opcion: 'C',
        Usuario: userActive
    }
    generateGrid('#dataGridEntregas', dataEntrega, arrayEntregas, false, 500)
    loadSwitch("#swPredeterminada", false, false, false, false)
    loadTextArea('#textAreaComentariosEntrega', 100, 'Comentarios Entrega', false, false)
    loadButton('#btnAgregarRenglon', '', 'normal', false, true, false, 'plus', 'Agregar Renglon')
    loadButton('#btnGuardar', 'Guardar', 'success', false, true, false, '', '')

    //? Programar fechas
    loadTextBox('#textBoxNombreEntrega', '', true, 'Nombre Entrega', true, false)
    $('#dateBoxFechaEntrega').dxDateRangeBox({
        startDateLabel: "Inicio",
        endDateLabel: "Fin",
        labelMode: "floating"
    })
    loadTextArea('#textAreaComentariosFechaEntrega', 100, 'Comentarios', false, false)
    loadButton('#btnGuardarFechaEntrega', 'Guardar', 'success', false, true, false, '', '')

    //? ACCIONES
    $('#btnGuardar').dxButton({
        onClick() {
        }
    })
    $('#btnProgramarFechaEntrega').click(() => {
        $('#modalFechaEntrega').modal('show')
    })
    generateGrid('#dataGridFechaEntregas', jsonEntregaFecha, arrayFechaEntregas, true, 350)
    $('#btnGuardarFechaEntrega').dxButton({
        async onClick() {
            const nombre = $('#textBoxNombreEntrega').dxTextBox('option', 'value')
            const fechas = $('#dateBoxFechaEntrega').dxDateRangeBox('option', 'value')
            const comentarios = $('#textAreaComentariosFechaEntrega').dxTextArea('option', 'value')
            const jsonFechaEntrega = {
                Stored: 'PA_DAI_Entregas',
                Opcion: 'GFE',
                Usuario: userActive,
                Entrega: {
                    Id: 0,
                },
                FechaEntrega: {
                    NOMBRE: nombre,
                    FECHA_INICIO: fechas[0],
                    FECHA_FIN: fechas[1],
                    DESCRIPCION: comentarios
                }
            }
            const resFechaEntrega = await loadAPI(`${url}DAIMLER`, 'POST', jsonFechaEntrega, token, true)
            if (resFechaEntrega !== undefined) {
                generateGrid('#dataGridFechaEntregas', jsonEntregaFecha, arrayFechaEntregas, true, 350)
                $('#modalFechaEntrega').modal('hide')
            }
        }
    })
})