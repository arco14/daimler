window.addEventListener('DOMContentLoaded', () => {
    //? VARIABLES GLOBALES 🌐
    const url = CONFIG.API_URL

    const urlFiles = 'http://localhost:3000/api/files/'
    const token = $('#userToken').val()
    const userActive = $('#userActive').val()
    const idPrograma = parent.document.querySelector('#idDatos_Fiscales').value
    let tipoDocumento, separacionCarpeta
    const urlModulo = window.location.href
    const formatUrl = urlModulo.split('/')
    const nombreModulo = formatUrl[formatUrl.length - 2]
    const arrayArchivos = [{
        dataField: 'NOMBRE',
        caption: 'Nombre',
        dataType: 'string',
    }, {
        dataField: 'TIPO',
        caption: 'Tipo Archivo',
        dataType: 'string',
    }, {
        dataField: 'DESCRIPCION',
        caption: 'Discripción',
        dataType: 'string',
    }, {
        dataField: 'RUTA',
        caption: 'Ruta',
        dataType: 'string',
        visible: false
    }, {
        dataField: 'EXTENSION',
        caption: 'Extensión',
        dataType: 'string',
    }, {
        dataField: 'PESO',
        caption: 'Peso',
        dataType: 'number',
        // format: '#.## MB',
        visible: false
    }, {
        dataField: 'ACTIVO',
        caption: 'Activo',
        dataType: 'boolean',
        width: 100,
        calculateCellValue: function (data) {
            return data.ACTIVO === 1
        },
        visible: false
    }, {
        caption: 'Acciones',
        type: 'buttons',
        buttons: [{
            icon: 'download',
            hint: 'Descargar Archivo',
            onClick(e) {
                const ruta = e.row.data.RUTA
                const urlArchivo = `${urlFiles}DOWNLOAD_FILE?path=${encodeURIComponent(ruta)}`
                fetch(urlArchivo, {
                        method: 'GET',
                        headers: {
                            'Authorization': token
                        }
                    })
                    .then(response => {
                        if (!response.ok) {
                            Swal.fire({
                                title: 'Error al descargar el archivo',
                                text: 'Ocurrió un error al descargar el archivo',
                                icon: 'error',
                            })
                        }
                        return response.blob()
                    })
                    .then(blob => {
                        const link = document.createElement('a')
                        link.href = URL.createObjectURL(blob)
                        link.download = ruta.split('/').pop()
                        document.body.appendChild(link)
                        link.click()
                        document.body.removeChild(link)
                    })
            }
        }, {
            icon: 'trash',
            hint: 'Eliminar Archivo',
            onClick(e) {
                const archivo = e.row.data.NOMBRE
                const id = e.row.data.Id
                const idRow = $('#idRow').val()
                Swal.fire({
                    icon: 'question',
                    title: `Deseas eliminar el archivo ${archivo}?`,
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: 'SI',
                    denyButtonText: 'NO'
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        const jsonData = {
                            Stored: 'PA_CORE_CapArchivos',
                            Opcion: 'DA',
                            Usuario: userActive,
                            Archivo: {
                                Id: id,
                                Motivo: 'Eliminado'
                            },
                            Token: token
                        }
                        await loadAPI(`${url}CORE`, 'POST', jsonData, token, true)
                        generarGridDoctos(idRow)
                    } else if (result.isDenied) {
                        $('#addDatosFiscales').modal('hide')
                    }
                });
            }
        }]
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
            dataField: 'MOTIVO',
            caption: 'Motivo Eliminación',
            dataType: 'string',
            allowEditing: false
        }]
    }]
    //? Componentes 🏗️
    const jsonData = {
        Stored: 'PA_CORE_CapArchivos',
        Opcion: 'CTA',
        Usuario: userActive,
        Archivo: {
            Id_Pro: idPrograma
        }
    }
    loadFileUpload('#fileUploader', '*', false, true)
    loadLookupData({
        strUrl: url,
        strEndpoint: 'CORE',
        jsonData: jsonData,
        strToken: token,
        blnValidacion: true,
        strComponente: '#lookUpTipoDocumento',
        strDisplayExpr: 'NOMBRE',
        strValueExpr: 'Id',
        blnVisible: true,
        blnReadOnly: false,
        strValidationGroup: 'archivos'
    })
    $('#lookUpTipoDocumento').dxLookup({
        onValueChanged(e) {
            if (e.value === undefined || e.value === '', e.value === null) {
                $("#fileUploader").dxFileUploader("instance").reset()
                $('#fileUploader').dxFileUploader({
                    readOnly: true
                })
                return
            } else {
                separacionCarpeta = e.value.SEPARACION
                tipoDocumento = e.value.FILTRO
                loadFileUpload('#fileUploader', tipoDocumento, true)
            }
        }
    })
    loadTextBox('#textBoxNombreDoc', '', true, 'Ingresa el nombre', true, false, 'archivos')
    loadTextArea('#textAreaDescripcionDoc', 120, 'Descripción', true, false, 'archivos')
    loadButton('#btnGuardarArchivo', 'Guardar', 'success', true, true, false)
    async function generarGridDoctos(idRow) {
        const jsonDataDocs = {
            Stored: 'PA_CORE_CapArchivos',
            Opcion: 'CTA',
            Usuario: userActive,
            Archivo: {
                Id: idRow,
                Id_Pro: idPrograma
            }
        }
        const resDataDocs = await loadAPI(`${url}CORE`, 'POST', jsonDataDocs, token, false)
        const response = resDataDocs.response[1]
        loadDataGrid('#dataGridArchivos', response, 'none', 20, arrayArchivos, 'Archivos-DatosFiscales', false, null, true, 350, true, `gridSatate-${idPrograma}`, {
            onCellPrepared(e) {
                if (e.rowType === 'header' && e.column.caption === 'Fecha Modificación' || e.rowType === 'header' && e.column.caption === 'Usuario Modifica') {
                    e.cellElement.css('background-color', '#d4edda')
                    e.cellElement.css('color', '#155724')
                    e.cellElement.css('border-color', '#c3e6cb')
                } else if (e.rowType === 'header' && e.column.caption === 'Fecha Eliminación' || e.rowType === 'header' && e.column.caption === 'Usuario Elimina' || e.rowType === 'header' && e.column.caption === 'Motivo Eliminación') {
                    e.cellElement.css('background-color', '#f8d7da')
                    e.cellElement.css('color', '#721c24')
                    e.cellElement.css('border-color', '#f5c6cb')
                }
            },
        })
    }

    //? Funciones 🛠️
    async function guardar() {
        let ruta, extension, peso, nombreArchivo
        const IdReferencia = $('#idRow').val()
        const tipoDocumento = $('#lookUpTipoDocumento').dxLookup('option', 'value')
        const nombre = $('#textBoxNombreDoc').dxTextBox('option', 'value')
        const descripcion = $('#textAreaDescripcionDoc').dxTextArea('option', 'value')
        const archivo = $('#fileUploader').dxFileUploader('option', 'value')
        const idRow = $('#idRow').val()
        if (archivo.length > 0) {
            const formData = new FormData()
            for (let i = 0; i < archivo.length; i++) {
                extension = archivo[i].name.split('.')[1]
                peso = archivo[i].size
                nombreArchivo = archivo[i].name
                formData.append('archivos', archivo[i])
                if (separacionCarpeta == 1) {
                    const year = new Date().getFullYear()
                    const month = String(new Date().getMonth() + 1).padStart(2, '0')
                    ruta = `${nombreModulo}/${year}/${month}/${nombreArchivo}`
                } else {
                    ruta = `${nombreModulo}/${nombreArchivo}`
                }
            }
            //? Guardar Archivo
            const responseFiles = await loadFiles(`${urlFiles}FILES`, 'POST', nombreModulo, separacionCarpeta, nombreArchivo, formData, token)
            if (responseFiles) {
                //? Guardar Registro BD
                const jsonFile = {
                    Stored: 'PA_CORE_CapArchivos',
                    Opcion: 'G',
                    Usuario: userActive,
                    Archivo: {
                        Id: 0,
                        ARN_Id: tipoDocumento.Id,
                        IdReferencia: IdReferencia,
                        Nombre: nombre,
                        Descripcion: descripcion,
                        Ruta: ruta,
                        Extension: extension,
                        Peso: peso
                    }
                }
                const response = await loadAPI(`${url}CORE`, 'POST', jsonFile, token, true)
                if (response !== undefined) {
                    $('#modalFile').modal('hide')
                    const jsonDataDocs = {
                        Stored: 'PA_CORE_CapArchivos',
                        Opcion: 'CTA',
                        Usuario: userActive,
                        Archivo: {
                            Id: idRow,
                            Id_Pro: idPrograma
                        }
                    }
                    const resDataDocs = await loadAPI(`${url}CORE`, 'POST', jsonDataDocs, token, false)
                    const response = resDataDocs.response[1]
                    loadDataGrid('#dataGridArchivos', response, 'none', 20, arrayArchivos, 'Archivos-DatosFiscales', false, null, true, 350, true, `gridSatate-${idPrograma}`, {
                        onCellPrepared(e) {
                            if (e.rowType === 'header' && e.column.caption === 'Fecha Modificación' || e.rowType === 'header' && e.column.caption === 'Usuario Modifica') {
                                e.cellElement.css('background-color', '#d4edda')
                                e.cellElement.css('color', '#155724')
                                e.cellElement.css('border-color', '#c3e6cb')
                            } else if (e.rowType === 'header' && e.column.caption === 'Fecha Eliminación' || e.rowType === 'header' && e.column.caption === 'Usuario Elimina' || e.rowType === 'header' && e.column.caption === 'Motivo Eliminación') {
                                e.cellElement.css('background-color', '#f8d7da')
                                e.cellElement.css('color', '#721c24')
                                e.cellElement.css('border-color', '#f5c6cb')
                            }
                        },
                    })
                } else {
                    return
                }
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Error al guardar el archivo',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    timer: 3500
                })
            }
        } else {
            Swal.fire({
                title: 'Advertencia',
                text: 'Debes seleccionar un archivo para guardar.',
                icon: 'warning',
                confirmButtonText: 'OK'
            })
        }
    }
    //? Acciones 🚀
    $('#btnAddFile').click(() => {
        $('#lookUpTipoDocumento').dxLookup('option', 'value', '')
        $('#textBoxNombreDoc').dxTextBox('option', 'value', '')
        $('#textAreaDescripcionDoc').dxTextArea('option', 'value', '')
        $('#fileUploader').dxFileUploader('option', 'value', [])
        $('#modalFile').modal('show')
    })
    $('#btnGuardarArchivo').dxButton({
        onClick: () => {
            const validarComponentes = DevExpress.validationEngine.validateGroup('archivos')
            if (validarComponentes.isValid) {
                guardar()
            }
        }
    })
})