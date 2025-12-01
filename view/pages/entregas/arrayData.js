const userActive = $('#userActive').val()
//? DATAGRID 📚
const arrayEntregas = [{
    dataField: 'NOMBRE',
    caption: 'Nombre',
    dataType: 'string',
}, {
    dataField: 'BADGE',
    caption: 'Badge',
    dataType: 'number',
}, {
    dataField: 'NUMERO_EMPLEADO',
    caption: 'Num. Empleado',
    dataType: 'number',
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
    dataField: 'FECHA_ENTREGA',
    caption: 'Fecha Entrega',
    dataType: 'datetime',
    format: "dd/mm/yyyy HH:MM:SS"
}, {
    dataField: 'ENTREGA',
    caption: 'Entrega',
    dataType: 'string',
}, {
    dataField: 'TOMAR_TALLAS',
    caption: 'Tomar Tallas',
    dataType: 'boolean',
    calculateCellValue: function (data) {
        return data.TOMAR_TALLAS === 1
    }
}, {
    dataField: 'USUARIO',
    caption: 'Usuario',
    dataType: 'string',
    visible: false
}, {
    dataField: 'FECHA',
    caption: 'Fecha',
    dataType: 'datetime',
    format: 'dd/MM/yyyy HH:mm:ss',
    visible: false
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
const arrayTomaTallas = [{
    dataField: 'TIPO_PRENDA',
    caption: 'Tipo Prenda',
    dataType: 'string'
}, {
    dataField: 'PRENDA',
    caption: 'Prenda',
    dataType: 'string'
}, {
    dataField: 'ESTILO',
    caption: 'Estilo',
    dataType: 'string'
}, {
    dataField: 'PAQUETE',
    caption: 'Paquete',
    dataType: 'string'
}, {
    dataField: 'TALLA_ML',
    caption: 'ML',
    dataType: 'string',
}, {
    dataField: 'TALLA_MC',
    caption: 'MC',
    dataType: 'string',
}, {
    dataField: 'TALLA_PLY',
    caption: 'PLY',
    dataType: 'string',
}, {
    dataField: 'TALLA_SUD',
    caption: 'SUD',
    dataType: 'string',
}, {
    dataField: 'TALLA_PANT',
    caption: 'PANT',
    dataType: 'string',
}, {
    dataField: 'TOTAL',
    caption: 'TOTAL',
    dataType: 'number',
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
const jsonEntregaFecha = {
    Stored: 'PA_DAI_Entregas',
    Opcion: 'CFE',
    Usuario: userActive
}
const arrayFechaEntregas = [{
    dataField: 'NOMBRE',
    caption: 'Nombre',
    dataType: 'string'
}, {
    dataField: 'FECHA_INICIAL',
    caption: 'Fecha Inicio',
    dataType: 'datetime',
    format: 'dd/MM/yyyy HH:mm:ss'
}, {
    dataField: 'FECHA_FIN',
    caption: 'Fecha FIN',
    dataType: 'datetime',
    format: 'dd/MM/yyyy HH:mm:ss'
}, {
    dataField: 'DESCRIPCION',
    caption: 'Comentarios',
    dataType: 'string'
}, {
    dataField: 'USUARIO',
    caption: 'Usuario',
    dataType: 'string',
    visible: false
}, {
    dataField: 'FECHA',
    caption: 'Fecha Crea',
    dataType: 'datetime',
    format: 'dd/MM/yyyy',
    visible: false
}]