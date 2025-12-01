window.addEventListener("DOMContentLoaded", () => {
    //? VARIABLES GLOBALES 📝
    const url = CONFIG.API_URL
    const token = $('#userToken').val()
    let idRow, dataGrid, arrayDataRows, blnDblClickGrid, idPrograma, dataTallas

    //? VALIDAR QUE EL CONTENIDO ESTE DENTRO DEL IFRAME 🔍
    if (window.self !== window.top) {
        idPrograma = parent.document.querySelector('#idEmpleados').value
    } else {
        window.location = '/admin-daimler26'
    }
    $('#btnAdd').addClass('d-none')
    $('#btnUpdate').addClass('d-none')
    $('#btnTomatallas').removeClass('d-none')

    //? FUNCIONES 
    async function generateGrid(option) {
        //? JSON DATA
        const jsonData = {
            Stored: 'PA_DAI_Empleados',
            Opcion: option,
            Usuario: userActive
        }
        const resData = await loadAPI(`${url}DAIMLER`, 'POST', jsonData, token, false)
        console.log(resData)
        async function masterDetail(container, options) {
            idTipo = options.data.Id
            if (options.data.Id === null) {
                return
            } else {
                const jsonData = {
                    Stored: 'PA_DAI_Empleados',
                    Opcion: 'CI',
                    Usuario: userActive,
                    Empleado: {
                        EMP_Id: idTipo
                    }
                }
                const resData = await loadAPI(`${url}DAIMLER`, 'POST', jsonData, token, false)
                console.log(resData)
                const tabs = $("<div>").dxTabPanel({
                    dataSource: [{
                        title: "Toma Tallas",
                        template: (() => {
                            const dataGridContainer = $("<div id='dataGridCat' class='p-4'>")
                            loadDataGrid(
                                dataGridContainer,
                                resData === undefined ? [] : resData.response[0],
                                'none',
                                20,
                                arrayTomaTallas,
                                'Toma-Tallas',
                                false,
                                null,
                                true,
                                350,
                                true,
                                `gridSatateTomaTallas-${options.data.Id}`, {
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
                                    // async onRowUpdated(e) {
                                    //     const data = e.data
                                    //     const guardarCatalogo = {
                                    //         Stored: 'PA_CORE_CapCatalogos',
                                    //         Opcion: 'G',
                                    //         Usuario: userActive,
                                    //         Catalogo: {
                                    //             Id: data.Id,
                                    //             CLAVE: data.CLAVE,
                                    //             NOMBRE: data.NOMBRE,
                                    //             IdTipo: options.data.Id,
                                    //             DESCRIPCION: data.DESCRIPCION,
                                    //             ACTIVO: data.ACTIVO
                                    //         }
                                    //     }
                                    //     const response = await loadAPI(`${url}DAIMLER`, 'POST', guardarCatalogo, token, true)
                                    //     if (response.success) {
                                    //         generateGrid('CTT')
                                    //     } else {
                                    //         return
                                    //     }
                                    // },
                                    // async onRowRemoving(e) {
                                    //     e.cancel = true
                                    //     if (e.data.ACTIVO === 0) {
                                    //         Swal.fire({
                                    //             icon: 'warning',
                                    //             text: 'No puedes eliminar un registro que no esta activo!',
                                    //             showConfirmButton: true,
                                    //             timer: 5000
                                    //         })
                                    //     } else {
                                    //         arrayDataRowsCat = [e.data]
                                    //         $('#modalDeleteCatalogo').modal('show')
                                    //     }
                                    // },
                                    onRowDblClick(e) {
                                        e.event.preventDefault()
                                        e.event.stopPropagation()
                                    }
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
        loadDataGrid(
            '#dataGridEmpleados',
            resData === undefined ? [] : resData.response[0],
            'single',
            20,
            arrayEmpleados,
            'Empleados',
            true,
            masterDetail,
            false,
            500,
            true,
            `gridEmpleados-${idPrograma}`, {
                onSelectionChanged(e) {
                    const data = e.selectedRowsData[0]
                    console.log(data)
                    const blnTomarTalla = data.TOMAR_TALLAS
                    blnTomarTalla === 1 ? [$('#btnTomatallas').attr('disabled', false),
                            $('#dropDownEmpleado').dxDropDownBox("option", "value", parseInt(data.NUMERO_EMPLEADO))
                        ] :
                        $('#btnTomatallas').attr('disabled', true)
                }
            }
        )
    }
    async function generarDropDown(strEndPoint, jsonData, strComponente, intKey, arrayColumns, arraySummary, blnAutoWith, blnValidacion, blnReadOnly) {
        const resData = await loadAPI(`${url}${strEndPoint}`, 'POST', jsonData, token, false)
        loadDropDown(strComponente, intKey, resData.response[0], arrayColumns, arraySummary, blnAutoWith, blnValidacion, blnReadOnly)
    }

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
        IdTipo,
        blnParametrosExtra
    }) {
        let jsonData
        blnVacio
            ?
            jsonData = false :
            jsonData = {
                Stored: usarCatalogoEstandar ? 'PA_CORE_CapCatalogos' : strStored,
                Opcion: usarCatalogoEstandar ? 'CC' : strOption,
                Usuario: userActive,
                ...(blnParametrosExtra && {
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
    generateGrid('C')
    generarDropDown('DAIMLER', jsonEmpleado, '#dropDownEmpleado', 'Id', arrayEmpleado, [], true, true, false)
    generarCatalogos({
        usarCatalogoEstandar: true,
        blnParametrosExtra: true,
        claveTipoCatalogo: 'TIPO',
        strEndpoint: 'DAIMLER',
        idComponente: '#lookUpTipoPrenda',
        displayExpr: 'NOMBRE',
        valueExpr: 'Id',
    })
    generarCatalogos({
        idComponente: '#lookUpPrenda',
        blnVacio: true
    })
    generarCatalogos({
        idComponente: '#lookUpEstilos',
        blnVacio: true
    })
    generarCatalogos({
        idComponente: '#lookUpPaquete',
        blnVacio: true
    })
    generarCatalogos({
        idComponente: '#lookUpML',
        blnVacio: true
    })
    generarCatalogos({
        idComponente: '#lookUpMC',
        blnVacio: true
    })
    generarCatalogos({
        idComponente: '#lookUpPLY',
        blnVacio: true
    })
    generarCatalogos({
        idComponente: '#lookUpSUD',
        blnVacio: true
    })
    generarCatalogos({
        idComponente: '#lookUpPANT',
        blnVacio: true
    })
    $('#lookUpTipoPrenda').dxLookup({
        async onValueChanged(e) {
            const idRelacion = e.value
            if (idRelacion === "") {
                return
            } else {
                generarCatalogos({
                    usarCatalogoEstandar: true,
                    blnParametrosExtra: true,
                    claveTipoCatalogo: idRelacion === 158 ? 'TOPS' : 'PANTS',
                    strEndpoint: 'DAIMLER',
                    idComponente: '#lookUpEstilos',
                    displayExpr: 'NOMBRE',
                    valueExpr: 'Id',
                })
                generarCatalogos({
                    usarCatalogoEstandar: false,
                    blnParametrosExtra: true,
                    strStored: 'PA_DAI_Prendas',
                    strOption: 'CP',
                    IdRelCatalogo: idRelacion === 158 ? 158 : 159,
                    strEndpoint: 'DAIMLER',
                    idComponente: '#lookUpPrenda',
                    displayExpr: 'NOMBRE',
                    valueExpr: 'Id',
                })
                generarCatalogos({
                    usarCatalogoEstandar: false,
                    blnParametrosExtra: true,
                    strStored: 'PA_DAI_Paquetes',
                    strOption: 'C',
                    IdRelCatalogo: idRelacion === 158 ? 13 : 14,
                    strEndpoint: 'DAIMLER',
                    idComponente: '#lookUpPaquete',
                    displayExpr: 'NOMBRE',
                    valueExpr: 'Id',
                })
                //? Peticion para traer talla dependiento el tipo de prenda
                dataTallas = await loadAPI(`${url}DAIMLER`, 'POST', idRelacion === 158 ? jsonTallasTops : jsonTallasPants, token, false)
                $('#lookUpPaquete').dxLookup({
                    onValueChanged(e) {
                        console.log(e)
                        const tipoPaquete = {
                            1: ['#lookUpML'],
                            2: ['#lookUpML', '#lookUpMC'],
                            3: ['#lookUpML', '#lookUpPLY'],
                            4: ['#lookUpML', '#lookUpPLY'],
                            5: ['#lookUpML', '#lookUpMC'],
                            6: ['#lookUpSUD'],
                            7: ['#lookUpPANT']
                        }
                        const lookUpTallas = ['#lookUpML', '#lookUpMC', '#lookUpPLY', '#lookUpSUD', '#lookUpPANT']
                        //? Bloquear todos
                        lookUpTallas.forEach(id => {
                            $(id).dxLookup({
                                readOnly: true
                            }, "instance")
                        })
                        //?Activar solo los del paquete
                        const lookUpTallaSeleccion = tipoPaquete[e.value] || []
                        lookUpTallaSeleccion.forEach(id => {
                            $(id).dxLookup({
                                readOnly: false,
                                items: dataTallas.response[0],
                                displayExpr: 'CLAVE',
                                valueExpr: 'Id'
                            }, "instance")
                        })
                    }
                })
                idRelacion === 158 ? [$('#tallCanPants').removeClass('d-flex').addClass('d-none'),
                    $('#tallCanTops').addClass('d-flex').removeClass('d-none')
                ] : [$('#tallCanTops').removeClass('d-flex').addClass('d-none'),
                    $('#tallCanPants').addClass('d-flex').removeClass('d-none')
                ]
            }
        }
    })
    loadButton('#btnGuardarInv', 'Guardar', 'success', true, true, false)

    //? ACCIONES 
    $('#btnTomatallas').click(() => {
        $('#tomarTallas').modal('show')
    })
    async function guardarTomaTalla() {
        const empleado = $('#dropDownEmpleado').dxDropDownBox('option', 'value')
        const tipoPrenda = $('#lookUpTipoPrenda').dxLookup('option', 'value')
        const prenda = $('#lookUpPrenda').dxLookup('option', 'value')
        const estilo = $('#lookUpEstilos').dxLookup('option', 'value')
        const paquete = $('#lookUpPaquete').dxLookup('option', 'value')
        const tallaML = $('#lookUpML').dxLookup('option', 'value')
        const tallaMC = $('#lookUpMC').dxLookup('option', 'value')
        const tallaPLY = $('#lookUpPLY').dxLookup('option', 'value')
        const tallaSUD = $('#lookUpSUD').dxLookup('option', 'value')
        const tallaPANT = $('#lookUpPANT').dxLookup('option', 'value')
        const jsonGuardarTomaTalla = {
            Stored: 'PA_DAI_Empleados',
            Opcion: 'GTT',
            Usuario: userActive,
            Empleado: {
                EMP_Id: 0
            },
            TomaTalla: {
                EMPLEADO: empleado,
                TIPO_PRENDA: tipoPrenda,
                PRENDA: prenda,
                ESTILO: estilo,
                PAQUETE: paquete,
                TALLA_ML: tallaML,
                TALLA_MC: tallaMC,
                TALLA_PLY: tallaPLY,
                TALLA_SUD: tallaSUD,
                TALLA_PANT: tallaPANT
            }
        }
        console.log(jsonGuardarTomaTalla)
        const resTomaTalla = await loadAPI(`${url}DAIMLER`, 'POST', jsonGuardarTomaTalla, token, true)
        console.log(resTomaTalla)
    }
    $('#frmTomaTalla').on('submit', (e) => {
        e.preventDefault()
        guardarTomaTalla()
    })
})