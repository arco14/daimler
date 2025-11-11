window.addEventListener("DOMContentLoaded", () => {
    //? VARIABLES GLOBALES 📝
    const url = CONFIG.API_URL
    const token = $('#userToken').val()
    const userActive = $('#userActive').val()
    let idRow, idPrograma, blnDblClickGrid

    //? VALIDAR QUE EL CONTENIDO ESTE DENTRO DEL IFRAME 🔍
    if (window.self !== window.top) {
        idPrograma = parent.document.querySelector('#idPrendas').value
    } else {
        window.location = '/admin-daimler26'
    }

    //? FUNCIONES 
    async function generateGrid(option) {
        //? JSON DATA
        const data = {
            Stored: 'PA_DAI_Prendas',
            Opcion: option,
            Usuario: userActive
        }
        const resData = await loadAPI(`${url}DAIMLER`, 'POST', data, token, false)
        async function masterDetail(container, options) {
            const idTipo = options.data.Id

            function createTab(title, gridId, gridData, arrayData, gridName) {
                return {
                    title,
                    template: () => {
                        const $container = $(`<div id="${gridId}" class="p-4">`)
                        loadDataGrid(
                            $container,
                            gridData,
                            'none',
                            20,
                            arrayData,
                            gridName,
                            false,
                            null,
                            false,
                            100,
                            true,
                            `gridState-${idTipo}`, {
                                editing: {
                                    mode: 'form',
                                    useIcons: true,
                                    allowAdding: false,
                                    allowUpdating: false,
                                    allowDeleting: false,
                                    selectTextOnEditStart: true,
                                    startEditAction: 'click',
                                    confirmDelete: false
                                }
                            }
                        )
                        return $container
                    }
                }
            }
            if (options.data.Id === null) {
                return
            } else {
                const jsonData = {
                    Stored: 'PA_DAI_Prendas',
                    Opcion: 'CI',
                    Usuario: userActive,
                    Prendas: {
                        Id: idTipo
                    }
                }
                const resDataTallas = await loadAPI(`${url}DAIMLER`, 'POST', jsonData, token, false)
                if (resDataTallas === undefined || resDataTallas === '' || resDataTallas === null) {
                    return
                } else {
                    const tabs = $("<div>").dxTabPanel({
                        dataSource: [
                            createTab("Tallas", `gridTallas-${options.data.Id}`, resDataTallas.response[0], arrayTallas, "Ruta-Tallas")
                        ],
                        deferRendering: false,
                        showNavButtons: true,
                        loop: false
                    })
                    container.append(tabs)
                }
            }
        }
        loadDataGrid(
            '#dataGridPrendas',
            resData === undefined ? [] : resData.response[0],
            'single',
            20,
            arrayPrendas,
            'Prendas',
            true,
            masterDetail,
            false,
            500,
            true,
            `gridPrendas-${idPrograma}`, {
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
                        $('#textBoxSKU').dxTextBox({
                            value: data.SKU
                        })
                        $('#lookUpTipoArticulo').dxLookup({
                            value: data.ID_TIPO_ARTICULO
                        })
                        $('#lookUpCategoria').dxLookup({
                            value: data.ID_CATEGORIA
                        })
                        $('#numberBoxPrecio').dxNumberBox({
                            value: data.PRECIO
                        })
                        $('#lookUpEstilo').dxLookup({
                            value: data.ID_ESTILO
                        })
                        $('#lookUpColor').dxLookup({
                            value: data.ID_COLOR
                        })
                        $('#lookUpGenero').dxLookup({
                            value: data.ID_GENERO
                        })
                        $('#swSerigrafia').dxSwitch({
                            value: data.SERIGRAFIA
                        })
                        $('#textBoxSerigrafia').dxTextBox({
                            value: data.SERIGRAFIA_LEYENDA
                        })
                        const jsonData = {
                            Stored: 'PA_DAI_Prendas',
                            Opcion: 'CI',
                            Usuario: userActive,
                            Prendas: {
                                Id: idRow
                            }
                        }
                        const res = await loadAPI(`${url}DAIMLER`, 'POST', jsonData, token, false)
                        const dataTallas = res.response[1]
                        let tallas = []
                        for (i = 0; i < dataTallas.length; i++) {
                            tallas.push(dataTallas[i].Id)
                        }
                        $('#selectTextBoxTallas').dxList({
                            selectedItemKeys: tallas

                        })
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

    async function guardar() {
        const skuCrm = $('#textBoxSKU').dxTextBox('option', 'value')
        const tipoArticulo = $('#lookUpTipoArticulo').dxLookup('option', 'value')
        const categoria = $('#lookUpCategoria').dxLookup('option', 'value')
        const estilo = $('#lookUpEstilo').dxLookup('option', 'value')
        const color = $('#lookUpColor').dxLookup('option', 'value')
        const genero = $('#lookUpGenero').dxLookup('option', 'value')
        const precio = $('#numberBoxPrecio').dxNumberBox('option', 'value')
        const serigrafia = $('#swSerigrafia').dxSwitch('option', 'value')
        const serigrafiaLeyenda = $('#textBoxSerigrafia').dxTextBox('option', 'value')
        const selectedTallas = getFinalDataListBox()
            .filter(item => item.selected)
            .map(item => ({
                TALLAS: item.Id
            }))
        const jsonGuardarPrendas = {
            Stored: 'PA_DAI_Prendas',
            Opcion: 'G',
            Usuario: userActive,
            Prendas: {
                Id: idRow,
                SKU_CRM: skuCrm,
                TIPO_ARTICULO: tipoArticulo,
                CATEGORIA: categoria,
                ESTILO: estilo,
                COLOR: color,
                GENERO: genero,
                PRECIO: precio,
                SERIGRAFIA: serigrafia,
                SERIGRAFIA_LEYENDA: serigrafiaLeyenda,
                Prendas_Tallas: selectedTallas
            }
        }
        const response = await loadAPI(`${url}DAIMLER`, 'POST', jsonGuardarPrendas, token, true)
        if (response !== undefined) {
            generateGrid('C')
            $('#add').modal('hide')
        }
    }

    //? COMPONENTES
    generarCatalogos({
        usarCatalogoEstandar: true,
        claveTipoCatalogo: 'TIPO',
        strEndpoint: 'DAIMLER',
        idComponente: '#lookUpTipoArticulo',
        displayExpr: 'NOMBRE',
        valueExpr: 'Id',
    })
    loadTextBox('#textBoxSKU', '', true, 'SKU CRM', true, false)
    generarCatalogos({
        idComponente: '#lookUpCategoria',
        blnVacio: true
    })
    generarCatalogos({
        idComponente: '#lookUpEstilo',
        blnVacio: true
    })
    generarCatalogos({
        usarCatalogoEstandar: true,
        claveTipoCatalogo: 'COL',
        strEndpoint: 'DAIMLER',
        idComponente: '#lookUpColor',
        displayExpr: 'NOMBRE',
        valueExpr: 'Id',
    })
    generarCatalogos({
        usarCatalogoEstandar: true,
        claveTipoCatalogo: 'GEN',
        strEndpoint: 'DAIMLER',
        idComponente: '#lookUpGenero',
        displayExpr: 'NOMBRE',
        valueExpr: 'Id',
    })
    loadButton('#btnGuardar', 'Guardar', 'success', true, true, false)
    loadNumberBox('#numberBoxPrecio', 'requerido', true, '$ #0.##', '$ #0.##', false, 999999999, 1, true)
    loadSwitch('#swSerigrafia', false, false, false, false)
    loadTextBox('#textBoxSerigrafia', '', true, 'Texto serigrafía', false, true)

    //? Anidar lookUps
    $('#lookUpTipoArticulo').dxLookup({
        onValueChanged(e) {
            const idRelacion = e.value
            if (idRelacion !== null || idRelacion !== '') {
                generarCatalogos({
                    usarCatalogoEstandar: true,
                    claveTipoCatalogo: idRelacion === 158 ? 'TOPS' : 'PANTS',
                    strEndpoint: 'DAIMLER',
                    idComponente: '#lookUpEstilo',
                    displayExpr: 'NOMBRE',
                    valueExpr: 'Id',
                })
                generarCatalogos({
                    usarCatalogoEstandar: true,
                    IdTipo: 6,
                    IdRelCatalogo: idRelacion,
                    strEndpoint: 'DAIMLER',
                    idComponente: '#lookUpCategoria',
                    displayExpr: 'NOMBRE',
                    valueExpr: 'Id',
                })
                const jsonDataTallas = {
                    Stored: 'PA_CORE_CapCatalogos',
                    Opcion: 'CC',
                    Usuario: userActive,
                    IdTipoCatalogo: 8,
                    IdRelacionCatalogos: idRelacion
                }
                generarSelectBox('DAIMLER', jsonDataTallas, '', '', true, '#selectTextBoxTallas', 'Id', 'Cantidad', 'CLAVE', false, '', false, '', '', '', 'ListBox')
            }
        }
    })
    //? Validar si lleva serigrafia 
    $('#swSerigrafia').dxSwitch({
        onValueChanged(e) {
            e.value ?
                $('#textBoxSerigrafia').dxTextBox({
                    readOnly: false
                }) :
                $('#textBoxSerigrafia').dxTextBox({
                    readOnly: true
                })
        }
    })
    loadButton('#btnMotivo', 'Eliminar', 'danger', false, true, false)

    //?Acciones
    $('#btnAdd').click(() => {
        idRow = 0
        $('#addTitle').text('Crear nuevo programa')
        $(".nav-link").removeClass("active")
        $(".nav-link").first().addClass("active")
        const dataGrid = $('#dataGridPrendas').dxDataGrid('instance')
        dataGrid.clearSelection()
        $('#textBoxSKU').dxTextBox('option', 'value', '')
        $('#lookUpTipoArticulo').dxLookup('option', 'value', '')
        $('#lookUpCategoria').dxLookup('option', 'value', '')
        $('#lookUpEstilo').dxLookup('option', 'value', '')
        $('#lookUpColor').dxLookup('option', 'value', '')
        $('#lookUpGenero').dxLookup('option', 'value', '')
        $('#numberBoxPrecio').dxNumberBox('option', 'value', 0)
        $('#swSerigrafia').dxSwitch('option', 'value', '')
        $('#textBoxSerigrafia').dxTextBox('option', 'value', '')
        generarSelectBox('DAIMLER', jsonDataTallas, '', '', true, '#selectTextBoxTallas', 'Id', 'Cantidad', 'CLAVE', false, '', false, '', '', '', 'ListBox')
    })
    $('#frmPrendas').on('submit', (e) => {
        e.preventDefault()
        guardar()
    })
    $('#btnUpdate').click(() => {
        $('#add').modal('show')
    })
    $('#btnDelete').click(() => {
        $('#textAreaMotivo').dxTextArea({
            value: '',
            placeholder: 'Motivo para eliminar',
            height: 100
        })
        $('#modalDelete').modal('show')
    })
    $('#btnMotivo').click(() => {
        const motivo = $('#textAreaMotivo').dxTextArea('option', 'value')
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
                    const deleteSelected = arrayDataRows.map(item => {
                        return {
                            Id: item.Id,
                            Motivo: motivo
                        }
                    })
                    const jsonSelected = {
                        Stored: 'PA_DAI_Prendas',
                        Opcion: 'D',
                        Usuario: userActive,
                        Prendas: deleteSelected,
                        Token: token
                    }
                    await loadAPI(`${url}DAIMLER`, 'POST', jsonSelected, token, true)
                    generateGrid('CT')
                    $('#modalDelete').modal('hide')
                } else if (result.isDenied) {
                    $('#modalDelete').modal('hide')
                }
            })
        }
    })
    $('#consultar').click(() => {
        const dataGrid = $('#dataGridPrendas').dxDataGrid('instance')
        dataGrid.clearSelection()
        generateGrid('C')
    })
    $('#consultarTodo').click(() => {
        const dataGrid = $('#dataGridPrendas').dxDataGrid('instance')
        dataGrid.clearSelection()
        generateGrid('CT')
    })
})