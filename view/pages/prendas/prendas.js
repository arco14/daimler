window.addEventListener("DOMContentLoaded", () => {
    //? VARIABLES GLOBALES 📝
    const url = CONFIG.API_URL
    const token = $('#userToken').val()
    const userActive = $('#userActive').val()
    let idRow, dataGrid, arrayDataRows, blnDblClickGrid, idPrograma

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
            Stored: 'PA_OPE_CapDesarrollos',
            Opcion: option,
            Usuario: userActive
        }
        const resData = await loadAPI(`${url}OPERACIONES`, 'POST', data, token, false)
        console.log(resData)
        if (resData === undefined) {
            loadDataGrid(
                '#dataGridPrendas',
                [],
                'multiple',
                20,
                arrayPrendas,
                'Prendas',
                false,
                null,
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
                    }
                }
            )
        } else {}
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
    loadTextBox('#textBoxIdCrm', '', true, 'ID CRM', true, false)
    generarCatalogos({
        usarCatalogoEstandar: true,
        claveTipoCatalogo: 'TIPO',
        strEndpoint: 'DAIMLER',
        idComponente: '#lookUpTipoArticulo',
        displayExpr: 'NOMBRE',
        valueExpr: 'Id'
    })
    loadTextBox('#textBoxSKU', '', true, 'SKU CRM', true, false)
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
        claveTipoCatalogo: 'EST',
        strEndpoint: 'DAIMLER',
        idComponente: '#lookUpEstilo',
        displayExpr: 'NOMBRE',
        valueExpr: 'Id'
    })
    generarCatalogos({
        usarCatalogoEstandar: true,
        claveTipoCatalogo: 'COL',
        strEndpoint: 'DAIMLER',
        idComponente: '#lookUpColor',
        displayExpr: 'NOMBRE',
        valueExpr: 'Id'
    })
    generarCatalogos({
        usarCatalogoEstandar: true,
        claveTipoCatalogo: 'SUB_COL',
        strEndpoint: 'DAIMLER',
        idComponente: '#lookUpSubColor',
        displayExpr: 'NOMBRE',
        valueExpr: 'Id'
    })
    generarCatalogos({
        usarCatalogoEstandar: true,
        claveTipoCatalogo: 'GEN',
        strEndpoint: 'DAIMLER',
        idComponente: '#lookUpGenero',
        displayExpr: 'NOMBRE',
        valueExpr: 'Id'
    })
    generarSelectBox('DAIMLER', jsonDataTallas, '', '', false, '#selectTextBoxTallasCantidad', 'Id', 'Cantidad', 'CLAVE', false, 'CANTIDAD', false, 'textBox', '', '', 'ListBox')
})