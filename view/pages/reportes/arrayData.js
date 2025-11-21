const userActive = $('#userActive').val()
const jsonHeadCount = {
    Stored: 'PA_DAI_Empleados', 
    Opcion: 'EED', 
    Usuario: userActive
}
const jsonResumen = {
    Stored: 'PA_DAI_Empleados', 
    Opcion: 'EED', 
    Usuario: userActive
}
const arrayResumen = [{
    dataField: 'NUMERO_ENTREGA',
    caption: '# Entrega',
    dataType: 'number'
},{
    dataField: 'AREA',
    caption: 'Area',
    dataType: 'string'
}, {
    dataField: 'HC',
    caption: 'HC',
    dataType: 'number',
    // width: 80
}, {
    dataField: 'REGISTRADOS',
    caption: 'Registrados',
    dataType: 'number',
    // width: 80
}, {
    dataField: 'FALTANTES',
    caption: 'Faltantes',
    dataType: 'number',
    // width: 80
}, {
    dataField: 'PORCENTAJE',
    caption: 'Porcentaje',
    dataType: 'number',
    // width: 80
}]
const arrayFaltantes = [{
    dataField: 'NUMERO_ENTREGA',
    caption: '# Entrega',
    dataType: 'number'
},{
    dataField: 'NUMERO_EMPLEADO',
    caption: 'Num Empleado',
    dataType: 'number'
}, {
    dataField: 'NOMBRE',
    caption: 'Nombre',
    dataType: 'string'
}, {
    dataField: 'AREA',
    caption: 'Area',
    dataType: 'string'
}, {
    dataField: 'PUESTO',
    caption: 'Puesto',
    dataType: 'string'
}, {
    dataField: 'TURNO',
    caption: 'Turno',
    dataType: 'string'
}]

