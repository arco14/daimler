const arrayPrendas = [{
    dataField: 'ID_CRM',
    caption: 'ID CRM',
    dataType: 'number',
}, {
    dataField: 'TIPO_ARTICULO',
    caption: 'Tipo Artículo',
    dataType: 'string',
}, {
    dataField: 'SKU',
    caption: 'SKU CRM',
    dataType: 'string',
}, {
    dataField: 'TIPO',
    caption: 'Tipo',
    dataType: 'string',
}, {
    dataField: 'CATEGORIA',
    caption: 'Categoría',
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
    dataField: 'SUB_COLOR',
    caption: 'Sub Color',
    dataType: 'string',
}, {
    dataField: 'GENERO',
    caption: 'Genero',
    dataType: 'string',
}, {
    dataField: 'USUARIO',
    caption: 'Usuario',
    dataType: 'string',
}, {
    dataField: 'FECHA',
    caption: 'Fecha',
    dataType: 'datetime',
    format: 'dd/mm/yyy HH:mm:ss'
},{ 
    dataField: 'ACTIVO',
    caption: 'Activo',
    dataType: 'boolean',
    calculateCellValue: function (data) {
        return data.ACTIVO === 1
    }
}]
const jsonDataTallas = {
    Stored: 'PA_CORE_CapCatalogos',
    Opcion: 'CC',
    Usuario: userActive,
    ClaveCatalogo: 'TALL'
}