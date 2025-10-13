function loadDateBox(strComponente, blnVisible, blnValidacion, strDisplayFormat, strType, strPickerType, blnReadOnly,strValidationGroup) {
    const now = new Date();
    if (blnValidacion) {
        $(strComponente).dxDateBox({
            displayFormat: strDisplayFormat,
            showClearButton: true,
            visible: blnVisible,
            readOnly: blnReadOnly,
            pickerType: strPickerType,
            value: now,
            type: strType,
        }).dxValidator({
            validationGroup: strValidationGroup,
            validationRules: [{
                type: 'required',
                message: 'Requerido',
            }],
        });
    } else {
        $(strComponente).dxDateBox({
            displayFormat: strDisplayFormat,
            showClearButton: true,
            visible: blnVisible,
            readOnly: blnReadOnly,
            pickerType: strPickerType,
            value: now,
            type: strType,
        })
    }
}