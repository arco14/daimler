//? ARRAY
const arrayCatalogoTipos = [{
    dataField: 'CLAVE',
    caption: 'Clave',
    dataType: 'string',
}, {
    dataField: 'NOMBRE',
    caption: 'Nombre',
    dataType: 'string',
}, {
    dataField: 'DESCRIPCION',
    caption: 'Descripcion',
    dataType: 'string',
}, {
    dataField: 'USUARIO',
    caption: 'Usuario',
    dataType: 'string',
}, {
    dataField: 'FECHA',
    caption: 'Fecha',
    dataType: 'datetime',
    format: 'dd/mm/yyyy HH:mm:ss'
}, {
    caption: 'Datos de control',
    alignment: 'center',
    visible: false,
    columns: [{
        dataField: 'FECHA_MODIFICA',
        caption: 'Fecha Modifica',
        dataType: 'datetime',
        format: 'dd/MM/yyyy HH:mm:ss',
        allowEditing: false
    }, {
        dataField: 'USUARIO_MODIFICA',
        caption: 'Usuario Modifica',
        dataType: 'string',
        allowEditing: false
    }, {
        dataField: 'FECHA_ELIMINA',
        caption: 'Fecha Eliminación',
        dataType: 'datetime',
        format: 'dd/MM/yyyy HH:mm:ss',
        allowEditing: false

    }, {
        dataField: 'USUARIO_ELIMINA',
        caption: 'Usuario Elimina',
        dataType: 'string',
        allowEditing: false
    }, {
        dataField: 'MOTIVO',
        caption: 'Motivo Eliminación',
        dataType: 'string',
        allowEditing: false
    }]
}]
const arrayCatalogos = [{
    dataField: 'CLAVE',
    caption: 'Clave',
    dataType: 'string',
}, {
    dataField: 'NOMBRE',
    caption: 'Nombre',
    dataType: 'string',
}, {
    dataField: 'DESCRIPCION',
    caption: 'Descripcion',
    dataType: 'string',
}, {
    dataField: 'USUARIO',
    caption: 'Usuario',
    dataType: 'string',
    allowEditing: false
}, {
    dataField: 'FECHA',
    caption: 'Fecha',
    dataType: 'datetime',
    format: 'dd/MM/yyyy HH:mm:ss',
    allowEditing: false
}, {
    dataField: 'ACTIVO',
    caption: 'Activo',
    dataType: 'boolean',
    calculateCellValue: function (data) {
        return data.ACTIVO === 1
    }
}, {
    caption: 'Datos de control',
    alignment: 'center',
    visible: false,
    columns: [{
        dataField: 'FECHA_MODIFICA',
        caption: 'Fecha Modifica',
        dataType: 'datetime',
        format: 'dd/MM/yyyy HH:mm:ss',
        allowEditing: false
    }, {
        dataField: 'USUARIO_MODIFICA',
        caption: 'Usuario Modifica',
        dataType: 'string',
        allowEditing: false
    }, {
        dataField: 'FECHA_ELIMINA',
        caption: 'Fecha Eliminación',
        dataType: 'datetime',
        format: 'dd/MM/yyyy HH:mm:ss',
        allowEditing: false

    }, {
        dataField: 'USUARIO_ELIMINA',
        caption: 'Usuario Elimina',
        dataType: 'string',
        allowEditing: false
    }, {
        dataField: 'MOTIVO',
        caption: 'Motivo Eliminación',
        dataType: 'string',
        allowEditing: false
    }]
}]