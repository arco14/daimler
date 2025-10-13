async function loadTagBox({
    strUrl,
    strEndpoint,
    jsonData,
    strToken,
    strComponente,
    blnValidation,
    strDisplayExpr,
    strValueExpr,
    strValidationGroup
}) {
    const resData = await loadAPI(`${strUrl}${strEndpoint}`, "POST", jsonData, strToken, false)
    const dataSource = blnValidation ? resData.response[0] : resData.response[0]
    $(strComponente).dxTagBox({
        dataSource: dataSource,
        displayExpr: strDisplayExpr,
        valueExpr: strValueExpr,
        showSelectionControls: true,
        applyValueMode: 'useButtons',
        searchEnabled: true,
        maxFilterQueryLength: 15000,
    })
    //? Agregar validador si se requiere validación
    if (blnValidation) {
        $(strComponente).dxValidator({
            validationGroup: strValidationGroup,
            validationRules: [{
                type: "required",
                message: "Este campo no puede ir vacío"
            }]
        })
    }
}