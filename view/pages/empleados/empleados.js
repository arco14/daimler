window.addEventListener("DOMContentLoaded", () => {
    //? VARIABLES GLOBALES 📝
    const url = CONFIG.API_URL
    const token = $('#userToken').val()
    let idRow, dataGrid, arrayDataRows, blnDblClickGrid, idPrograma

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
        loadDataGrid(
            '#dataGridEmpleados',
            resData === undefined ? [] : resData.response[0],
            'multiple',
            20,
            arrayEmpleados,
            'Empleados',
            false,
            null,
            false,
            500,
            true,
            `gridEmpleados-${idPrograma}`, { }
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
        idComponente: '#lookUpPrenda',
        displayExpr: 'NOMBRE',
        valueExpr: 'Id',
    })
    generarCatalogos({
        idComponente: '#lookUpEstilos',
        blnVacio: true
    })
    generarCatalogos({
        idComponente: '#lookUpPaquete',
        blnVacio: true
    })
    $('#lookUpPrenda').dxLookup({
        onValueChanged(e) {
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
                    strStored: 'PA_DAI_Paquetes',
                    strOption: 'C',
                    IdRelCatalogo: idRelacion === 158 ? 13 : 14,
                    strEndpoint: 'DAIMLER',
                    idComponente: '#lookUpPaquete',
                    displayExpr: 'NOMBRE',
                    valueExpr: 'Id',
                })
                // const jsonPaquete = [{
                //     Stored: 'PA_DAI_Paquetes',
                //     Opcion: 'C',
                //     Usuario: userActive,
                //     IdRelacionCatalogos: idRelacion === 158 ? 13 : 14
                // }]
            }
        }
    })

    //? ACCIONES 
    $('#btnTomatallas').click(() => {
        $('#tomarTallas').modal('show')
    })
})