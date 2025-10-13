function loadRadioButton(strComponente, arrayItems, intPosicion, strLayout, blnDisabled, blnValidacion, strValidationGroup) {
    if (blnValidacion) {
        $(strComponente).dxRadioGroup({
            items: arrayItems,
            value: arrayItems[intPosicion],
            layout: strLayout,
            disabled: blnDisabled,
        }).dxValidator({
            validationGroup: strValidationGroup,
            validationRules: [{
                type: 'required',
                message: 'Requerido',
            }]
        })
    } else {
        $(strComponente).dxRadioGroup({
            items: arrayItems,
            value: arrayItems[intPosicion],
            layout: strLayout,
            disabled: blnDisabled,
        })
    }
}