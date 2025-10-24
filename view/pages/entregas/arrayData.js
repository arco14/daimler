const userActive = $('#userActive').val()
//? DATAGRID 📚
const arrayEntregas = [{
    dataField: 'ENTREGA',
    caption: 'Entrega',
    dataType: 'string',
},{
    dataField: 'Id',
    caption: 'ID',
    dataType: 'number',
}, {
    dataField: 'NOMBRE',
    caption: 'Nombre',
    dataType: 'string',
}, {
    dataField: 'AREA',
    caption: 'Area',
    dataType: 'string',
}, {
    dataField: 'PUESTO',
    caption: 'Puesto',
    dataType: 'string',
}, {
    dataField: 'TURNO',
    caption: 'Turno',
    dataType: 'number',
}, {
    dataField: 'ESTILO',
    caption: 'Estilo',
    dataType: 'string'
}, {
    dataField: 'COLOR',
    caption: 'Color',
    dataType: 'string'
}, {
    dataField: 'TIPO_PAQUETE',
    caption: 'Tipo Paquete',
    dataType: 'string'
}, {
    dataField: 'TALLA',
    caption: 'Talla',
    dataType: 'string'
}, {
    dataField: 'CANTIDAD',
    caption: 'Cantidad',
    dataType: 'string'
}, {
    dataField: 'COMENTARIOS',
    caption: 'Comentarios',
    dataType: 'string',
}, {
    dataField: 'ESTATUS',
    caption: 'Estatus',
    dataType: 'string',
}, {
    dataField: 'USUARIO',
    caption: 'Usuario',
    dataType: 'string',
}, {
    dataField: 'FECHA',
    caption: 'Fecha',
    dataType: 'datetime',
    format: 'dd/MM/yyyy HH:mm:ss',
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
        caption: 'Fecha Modificación',
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
        dataField: 'MOTIVO_ELIMINACION',
        caption: 'Motivo Eliminación',
        dataType: 'string',
        allowEditing: false
    }]
}]
const jsonDataTallas = {
    Stored: 'PA_CORE_CapCatalogos',
    Opcion: 'CC',
    Usuario: userActive,
    ClaveCatalogo: 'TALL'
}
const jsonOrdenCompra = {
    Stored: 'PA_DAI_OrdenesCompra',
    Opcion: 'C',
    Usuario: userActive
}
