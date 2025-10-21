window.addEventListener('DOMContentLoaded', () => {
    //? VARIABLES GLOBALES
    const url = CONFIG.API_URL
    const token = $('#userToken').val()
    const userActive = $('#userActive').val()
    let idRow, arrayDataRows, arrayDataRowsCat, blnDblClickGrid, idPrograma
    
    //? VALIDAR QUE EL CONTENIDO ESTE DENTRO DEL IFRAME
    if (window.self !== window.top) {
        idPrograma = parent.document.querySelector('#idCore').value
    } else {
        window.location = '/admin-daimler26'
    }
    
    //? Componentes
    loadTextBox('#textBoxClave', '', true, 'Ingresa la clave', true, false, 'catalogoTipo')
    loadTextBox('#textBoxNombre', '', true, 'Ingresa el nombre', true, false, 'catalogoTipo')
    loadTextArea('#textAreaDescripcion', 100, 'Descripción', true, false, 'catalogoTipo')
    
    //? Catalogo tipo
    const jsonData = {
        Stored: 'PA_CORE_CapCatalogoTipo',
        Opcion: 'CCT',
        Usuario: userActive,
    }
    loadLookup({
        strUrl: url,
        strEndpoint: 'DAIMLER',
        jsonData: jsonData,
        strToken: token,
        blnValidacion: true,
        strComponente: '#lookUpClaveTipo',
        strDisplayExpr: 'NOMBRE',
        strValueExpr: 'Id',
        blnVisible: true,
        blnReadOnly: false,
        strValidationGroup: 'catalogo'
    })
    loadTextBox('#textBoxNombreCat', '', true, 'Ingresa el nombre', true, false, 'catalogo')
    loadTextBox('#textBoxClaveCat', '', true, 'Ingresa la clave', true, false, 'catalogo')
    loadTextArea('#textAreaDescripcionCat', 100, 'Descripción', true, false, 'catalogo')
    loadTextBox('#textBoxUsuario', '', true, 'Ingresa el usuario', false, true)
    loadDateBox('#dateBoxCrea', true, false, 'dd/MM/yyyy', 'date', 'calendar', true)
    loadTextBox('#textBoxUsuarioMod', '', true, 'Ingresa el usuario', false, true)
    loadDateBox('#dateBoxCreaMod', true, false, 'dd/MM/yyyy', 'date', 'calendar', true)
    loadTextBox('#textBoxUsuarioEli', '', true, 'Ingresa el usuario', false, true)
    loadDateBox('#dateBoxCreaEli', true, false, 'dd/MM/yyyy', 'date', 'calendar', true)
    loadTextArea('#textAreaMotivoEli', 100, 'Escribe el motivo de eliminación', false, true)
    loadTextArea('#textAreaMotivo', 100, 'Motivo', false, false)
    loadButton('#btnMotivo', 'Eliminar', 'danger', false, true, false)
    
    //? Modal eliminación catalogo
    loadTextArea('#textAreaMotivoEliCatalogo', 100, 'Motivo', false, false)
    loadButton('#btnMotivoCatalogo', 'Eliminar', 'danger', false, true, false)
    loadButton('#btnCtaTipo', 'Guardar', 'success', true, true, false)
    loadButton('#btnCatalogo', 'Guardar', 'success', true, true, false)
    
    //? Funciones
    async function generateGrid(option) {
        //? JSON DATA
        const data = {
            Stored: 'PA_CORE_CapCatalogoTipo',
            Opcion: option,
            Usuario: userActive
        }
        const resData = await loadAPI(`${url}DAIMLER`, 'POST', data, token, false)
        console.log(resData)
        const dataCatalogos = resData.response[0]
        async function masterDetail(container, options) {
            idTipo = options.data.Id
            if (options.data.Id === null) {
                return
            } else {
                const jsonData = {
                    Stored: 'PA_CORE_CapCatalogos',
                    Opcion: 'CI',
                    Usuario: userActive,
                    Catalogo: {
                        Id: idTipo
                    }
                }
                const resData = await loadAPI(`${url}DAIMLER`, 'POST', jsonData, token, false)
                if (resData === undefined || resData === '' || resData === null) {
                    return
                } else {
                    const tabs = $("<div>").dxTabPanel({
                        dataSource: [{
                            title: "Catalogos",
                            template: (() => {
                                const dataGridContainer = $("<div id='dataGridCat' class='p-4'>")
                                loadDataGrid(
                                    dataGridContainer,
                                    resData.response[0],
                                    'none',
                                    20,
                                    arrayCatalogos,
                                    'Catalogos',
                                    false,
                                    null,
                                    false,
                                    100,
                                    true,
                                    `gridSatateCore-${options.data.Id}`, {
                                        editing: {
                                            mode: 'form',
                                            useIcons: true,
                                            allowAdding: false,
                                            allowUpdating: true,
                                            allowDeleting: true,
                                            selectTextOnEditStart: true,
                                            startEditAction: 'click',
                                            confirmDelete: false
                                        },
                                        async onRowUpdated(e) {
                                            const data = e.data
                                            const guardarCatalogo = {
                                                Stored: 'PA_CORE_CapCatalogos',
                                                Opcion: 'G',
                                                Usuario: userActive,
                                                Catalogo: {
                                                    Id: data.Id,
                                                    CLAVE: data.CLAVE,
                                                    NOMBRE: data.NOMBRE,
                                                    IdTipo: options.data.Id,
                                                    DESCRIPCION: data.DESCRIPCION,
                                                    ACTIVO: data.ACTIVO
                                                }
                                            }
                                            const response = await loadAPI(`${url}CORE`, 'POST', guardarCatalogo, token, true)
                                            if (response.success) {
                                                generateGrid('CTT')
                                            } else {
                                                return
                                            }
                                        },
                                        async onRowRemoving(e) {
                                            e.cancel = true
                                            if (e.data.ACTIVO === 0) {
                                                Swal.fire({
                                                    icon: 'warning',
                                                    text: 'No puedes eliminar un registro que no esta activo!',
                                                    showConfirmButton: true,
                                                    timer: 5000
                                                })
                                            } else {
                                                arrayDataRowsCat = [e.data]
                                                $('#modalDeleteCatalogo').modal('show')
                                            }
                                        },
                                        onRowDblClick(e) {
                                            e.event.preventDefault()
                                            e.event.stopPropagation()
                                        },
                                        onCellPrepared(e) {
                                            if (e.rowType === 'header' && e.column.caption === 'Fecha Modifica' || e.rowType === 'header' && e.column.caption === 'Usuario Modifica') {
                                                e.cellElement.css('background-color', '#d4edda')
                                                e.cellElement.css('color', '#155724')
                                                e.cellElement.css('border-color', '#c3e6cb')
                                            } else if (e.rowType === 'header' && e.column.caption === 'Fecha Eliminación' || e.rowType === 'header' && e.column.caption === 'Usuario Elimina' || e.rowType === 'header' && e.column.caption === 'Motivo Eliminación') {
                                                e.cellElement.css('background-color', '#f8d7da')
                                                e.cellElement.css('color', '#721c24')
                                                e.cellElement.css('border-color', '#f5c6cb')
                                            }
                                        },
                                    }
                                )
                                return dataGridContainer
                            })
                        }],
                        deferRendering: false,
                        showNavButtons: true,
                        loop: false
                    })
                    container.append(tabs)
                }
            }
        }
        loadDataGrid(
            '#dataGridCoreCatalogos',
            dataCatalogos,
            'multiple',
            20,
            arrayCatalogoTipos,
            'CatalogosTipos',
            true,
            masterDetail,
            false,
            500, true, `gridSatate-${idPrograma}`, {
                onCellPrepared(e) {
                    if (e.rowType === 'header' && e.column.caption === 'Fecha Modifica' || e.rowType === 'header' && e.column.caption === 'Usuario Modifica') {
                        e.cellElement.css('background-color', '#d4edda')
                        e.cellElement.css('color', '#155724')
                        e.cellElement.css('border-color', '#c3e6cb')
                    } else if (e.rowType === 'header' && e.column.caption === 'Fecha Eliminación' || e.rowType === 'header' && e.column.caption === 'Usuario Elimina' || e.rowType === 'header' && e.column.caption === 'Motivo Eliminación') {
                        e.cellElement.css('background-color', '#f8d7da')
                        e.cellElement.css('color', '#721c24')
                        e.cellElement.css('border-color', '#f5c6cb')
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
                    if (arrayDataRows.length > 0) {
                        idRow = data.Id
                        $('#addTitle').text('Modificar catalogo')
                        //? Componentes con data
                        $('#textBoxClave').dxTextBox({
                            value: data.CLAVE,
                        })
                        $('#textBoxNombre').dxTextBox({
                            value: data.NOMBRE,
                        })
                        $('#textAreaDescripcion').dxTextArea({
                            value: data.DESCRIPCION,
                        })
                        $('#textBoxUsuario').dxTextBox({
                            value: data.USUARIO,
                        })
                        $('#dateBoxCrea').dxDateBox({
                            value: data.FECHA,
                        })
                        $('#textBoxUsuarioMod').dxTextBox({
                            value: data.USUARIO_MODIFICA,
                        })
                        $('#dateBoxCreaMod').dxDateBox({
                            value: data.FECHA_MODIFICA,
                        })
                        $('#textBoxUsuarioEli').dxTextBox({
                            value: data.USUARIO_ELIMINA,
                        })
                        $('#dateBoxCreaEli').dxDateBox({
                            value: data.FECHA_ELIMINA,
                        })
                        $('#textAreaMotivoEli').dxTextArea({
                            value: data.MOTIVO_ELIMINACION,
                        })
                        $('#item-datosControl').prop('disabled', false)
                        $('#item-catalogo').addClass('d-none').prop('disabled', true)
                        $('#btnDelete').removeClass('d-none').prop('disabled', false)
                        $('#btnUpdate').removeClass('d-none').prop('disabled', false)
                    } else {
                        $('#item-datosControl').prop('disabled', true)
                        $('#item-catalogo').removeClass('d-none').prop('disabled', false)
                        $('#btnDelete').addClass('d-none').prop('disabled', true)
                        $('#btnUpdate').removeClass('d-none').prop('disabled', true)
                    }
                },
                onRowDblClick(e) {
                    if (blnDblClickGrid) {
                        e.event.preventDefault()
                        e.event.stopPropagation()
                    } else {
                        $('#add').modal('show')
                    }
                }
            }
        )
    }
    generateGrid('CCT')
    async function guardar(jsonData, strTipoCatalogo) {
        const response = await loadAPI(`${url}DAIMLER`, 'POST', jsonData, token, true)
        if (response !== undefined && strTipoCatalogo === 'catalogoTipo') {
            generateGrid('CCT')
            $('#add').modal('hide')
            const jsonData = {
                Stored: 'PA_CORE_CapCatalogoTipo',
                Opcion: 'CCT',
                Usuario: userActive,
            }
            loadLookup({
                strUrl: url,
                strEndpoint: 'DAIMLER',
                jsonData: jsonData,
                strToken: token,
                blnValidacion: true,
                strComponente: '#lookUpClaveTipo',
                strDisplayExpr: 'NOMBRE',
                strValueExpr: 'Id',
                blnVisible: true,
                blnReadOnly: false,
                strValidationGroup: 'catalogo'
            })
        } else if (response !== undefined && strTipoCatalogo === 'catalogo') {
            $('#add').modal('hide')
        } else {
            return
        }
    }
    //? Acciones
    $('#btnAdd').click(() => {
        $(".nav-link").removeClass("active")
        $(".nav-link").first().addClass("active")
        const dataGrid = $('#dataGridCoreCatalogos').dxDataGrid('instance')
        dataGrid.clearSelection()
        $('#addTitle').text('Crear nuevo catalogo')
        idRow = 0
        $('#textBoxClave').dxTextBox('option', 'value', '')
        $('#textBoxNombre').dxTextBox('option', 'value', '')
        $('#textAreaDescripcion').dxTextArea('option', 'value', '')
        $('#lookUpClaveTipo').dxLookup('option', 'value', '')
        $('#textBoxClaveCat').dxTextBox('option', 'value', '')
        $('#textBoxNombreCat').dxTextBox('option', 'value', '')
        $('#textAreaDescripcionCat').dxTextArea('option', 'value', '')
        $('#item-datosControl').prop('disabled', true)
    })
    $('#btnUpdate').click(() => {
        $('#add').modal('show')
    })
    $('#btnCtaTipo').dxButton({
        onClick: function () {
            const strCat = 'catalogoTipo'
            const validarComponentes = DevExpress.validationEngine.validateGroup("catalogoTipo")
            if (validarComponentes.isValid) {
                const clave = $('#textBoxClave').dxTextBox('option', 'value')
                const nombre = $('#textBoxNombre').dxTextBox('option', 'value')
                const descripcion = $('#textAreaDescripcion').dxTextArea('option', 'value')
                const guardarCatalogoTipo = {
                    Stored: 'PA_CORE_CapCatalogoTipo',
                    Opcion: 'G',
                    Usuario: userActive,
                    Catalogo: {
                        Id: idRow,
                        CLAVE: clave,
                        NOMBRE: nombre,
                        DESCRIPCION: descripcion,
                    }
                }
                guardar(guardarCatalogoTipo, strCat)
            }
        }
    })
    $('#btnCatalogo').dxButton({
        onClick: function () {
            const strCat = 'catalogo'
            const validarComponentes = DevExpress.validationEngine.validateGroup("catalogo")
            if (validarComponentes.isValid) {
                const claveTipo = $('#lookUpClaveTipo').dxLookup('option', 'value')
                const clave = $('#textBoxClaveCat').dxTextBox('option', 'value')
                const nombre = $('#textBoxNombreCat').dxTextBox('option', 'value')
                const descripcion = $('#textAreaDescripcionCat').dxTextArea('option', 'value')
                const guardarCatalogoTipo = {
                    Stored: 'PA_CORE_CapCatalogos',
                    Opcion: 'G',
                    Usuario: userActive,
                    Catalogo: {
                        Id: idRow,
                        CLAVE_TIPO: claveTipo,
                        CLAVE: clave,
                        NOMBRE: nombre,
                        DESCRIPCION: descripcion,
                    }
                }
                guardar(guardarCatalogoTipo, strCat)
            }
        }
    })
    $('#btnDelete').click(() => {
        $('#textAreaMotivo').dxTextArea({
            value: ''
        })
        $('#modalDelete').modal('show')
    })

    function motivoEliminacion(jsonData, strMotivo, strModal) {
        const motivo = $(strMotivo).dxTextArea('option', 'value')
        if (motivo === '' || motivo === null || motivo === undefined) {
            Swal.fire({
                title: 'Advertencia',
                text: 'Debes ingresar un motivo para eliminar.',
                icon: 'warning',
                confirmButtonText: 'OK'
            })
            return
        } else {
            Swal.fire({
                icon: 'question',
                title: 'Deseas eliminar los registros seleccionados?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'SI',
                denyButtonText: 'NO'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const response = await loadAPI(`${url}CORE`, 'POST', jsonData, token, true)
                    if (response !== undefined && strMotivo === '#textAreaMotivoEliCatalogo') {
                        const dataGridCat = $("#dataGridCat").dxDataGrid("instance")
                        if (dataGridCat) {
                            const newData = await loadAPI(`${url}CORE`, "POST", {
                                Stored: "PA_CORE_CapCatalogos",
                                Opcion: "CI",
                                Usuario: userActive,
                                Catalogo: {
                                    Id: arrayDataRowsCat[0].IdTipo, // ID del catálogo actualizado
                                },
                            }, token, false)
                            if (newData && newData.response && newData.response[0]) {
                                dataGridCat.option("dataSource", []) // Reseteamos el dataSource a un array vacío primero
                                dataGridCat.option("dataSource", newData.response[0]) // Luego le asignamos los nuevos datos
                                dataGridCat.refresh() // Forzamos un refresh completo
                            }
                        }
                        $(strModal).modal('hide')
                    }
                } else if (result.isDenied) {
                    $(strModal).modal('hide')
                }
            })
        }
    }
    //? btn motivo catalogo tipo
    $('#btnMotivo').click(() => {
        const motivo = $('#textAreaMotivo').dxTextArea('option', 'value')
        const deleteSelected = arrayDataRows.map(item => {
            return {
                Id: item.Id,
                Motivo: motivo
            }
        })
        const jsonSelected = {
            Stored: 'Stored Actual',
            Opcion: 'Opcion stored',
            Usuario: userActive,
            catalogos: deleteSelected,
            Token: token
        }
        motivoEliminacion(jsonSelected, '#textAreaMotivo', '#modalDelete')
    })
    //? btn motivo catalogo
    $('#btnMotivoCatalogo').click(() => {
        const motivo = $('#textAreaMotivoEliCatalogo').dxTextArea('option', 'value')
        const deleteSelected = arrayDataRowsCat.map(item => {
            return {
                Id: item.Id,
                Motivo: motivo
            }
        })
        const jsonSelected = {
            Stored: 'PA_CORE_CapCatalogos',
            Opcion: 'DC',
            Usuario: userActive,
            Catalogo: deleteSelected,
            Token: token
        }
        motivoEliminacion(jsonSelected, '#textAreaMotivoEliCatalogo', '#modalDeleteCatalogo')

    })
    $('#consultar').click(() => {
        const dataGrid = $('#dataGridCoreCatalogos').dxDataGrid('instance')
        dataGrid.clearSelection()
        generateGrid('CTT')
    })
    $('#consultarTodo').click(() => {
        const dataGrid = $('#dataGridCoreCatalogos').dxDataGrid('instance')
        dataGrid.clearSelection()
        generateGrid('CTT')
    })
})