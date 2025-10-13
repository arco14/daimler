function loadTextArea(strComponente, intHeight, placeholder, blnValidacion, blnReadOnly, strValidationGroup) {
    if (blnValidacion) {
        $(strComponente).dxTextArea({
            height: intHeight,
            readOnly: blnReadOnly,
            showClearButton: true,
            placeholder: placeholder 
        }).dxValidator({
            validationGroup: strValidationGroup,
            validationRules: [{
                type: 'required',
                message: 'Requerido',
            }],
        })
    } else {
        $(strComponente).dxTextArea({
            height: intHeight,
            readOnly: blnReadOnly,
            showClearButton: true,
            placeholder: placeholder
        })
    }
}