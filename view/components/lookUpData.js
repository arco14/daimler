async function loadLookupData({
    strUrl,
    strEndpoint,
    jsonData,
    strToken,
    blnValidacion,
    strComponente,
    strDisplayExpr,
    strValueExpr,
    blnVisible,
    blnReadOnly,
    strValidationGroup
}) {
    //? Si no hay datos, inicializar el dxLookup vacío
    if (!jsonData) {
        $(strComponente).dxLookup({
            dataSource: '',
            placeholder: "Selecciona",
            value: null,
            readOnly: true
        })
        return //? Salir de la función, ya que no hay datos para procesar
    }

    //? Obtener los datos del API
    const resData = await loadAPI(`${strUrl}${strEndpoint}`, "POST", jsonData, strToken, false)

    //? Determinar la fuente de datos según la validación
    const dataSource = blnValidacion ? resData.response[0] : resData.response[0]

    //? Configurar el dxLookup con los datos obtenidos
    $(strComponente).dxLookup({
        dataSource: new DevExpress.data.DataSource({
            store: dataSource,
            key: strValueExpr,
        }),
        displayExpr: strDisplayExpr,
        showClearButton: true,
        visible: blnVisible,
        readOnly: blnReadOnly,
    })

    //? Agregar validador si se requiere validación
    if (blnValidacion) {
        $(strComponente).dxValidator({
            validationGroup: strValidationGroup,
            validationRules: [{
                type: "required",
                message: "Este campo no puede ir vacío"
            }]
        })
    }
}