const arrayPrendas = [{
    dataField: 'TIPO_ARTICULO',
    caption: 'Tipo Artículo',
    dataType: 'string',
    groupIndex: 0
}, {
    dataField: 'SKU',
    caption: 'SKU CRM',
    dataType: 'string',
}, {
    dataField: 'NOMBRE',
    caption: 'Nombre',
    dataType: 'string'
}, {
    dataField: 'CATEGORIA',
    caption: 'Categoría',
    dataType: 'string',
    groupIndex: 1
}, {
    dataField: 'SUBCATEGORIA',
    caption: 'Sub Categoría',
    dataType: 'string',
}, {
    dataField: 'ESTILO',
    caption: 'Estilo',
    dataType: 'string',
}, {
    dataField: 'COLOR',
    caption: 'Color',
    dataType: 'string',
}, {
    dataField: 'GENERO',
    caption: 'Genero',
    dataType: 'string',
}, {
    dataField: 'PRECIO',
    caption: 'Precio',
    dataType: 'number',
    format: '$ #0.##'
}, {
    dataField: 'SERIGRAFIA',
    caption: 'Serigrafía',
    dataType: 'boolean'
}, {
    dataField: 'SERIGRAFIA_LEYENDA',
    caption: 'Texto Serigrafía',
    dataType: 'string'
}, {
    dataField: 'USUARIO',
    caption: 'Usuario',
    dataType: 'string',
}, {
    dataField: 'FECHA',
    caption: 'Fecha',
    dataType: 'datetime',
    format: 'dd/MM/yyy HH:mm:ss'
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
        caption: 'Fecha Creación',
        dataType: 'datetime',
        format: 'dd/MM/yyyy HH:mm:ss',
        allowEditing: false
    }, {
        dataField: 'USUARIO_MODIFICA',
        caption: 'Usuario Crea',
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
const arrayTallas = [{
    dataField: 'TALLA',
    caption: 'Tallas',
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
}]

const jsonDataTallas = {
    Stored: 'PA_CORE_CapCatalogos',
    Opcion: 'CC',
    Usuario: userActive,
    ClaveCatalogo: 'TALL'
}