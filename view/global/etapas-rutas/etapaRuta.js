window.addEventListener('DOMContentLoaded', () => {
    //? VARIABLES GLOBALES
    const url = CONFIG.API_URL

    const token = $('#userToken').val()
    const userActive = $('#userActive').val()
    loadTextBox('#textBoxNombreEtapa', '', true, 'Ingresa el nombre', false, false, '')
    loadButton('#btnGuardarEtapa', 'Guardar', 'success', false, true, false)
    $('#btnGuardarEtapa').dxButton({
        async onClick() {
            const etapa = $('#textBoxNombreEtapa').dxTextBox('option', 'value')
            const jsonData = {
                Stored: 'PA_OPE_CapGlobales',
                Opcion: 'AER',
                Usuario: userActive,
                Global: {
                    Etapa: etapa
                }
            }
            const res = await loadAPI(`${url}OPERACIONES`, 'POST', jsonData, token, true)
            console.log(res)
            if (res.response !== undefined || res.response !== null) {
                $('#add').modal('hide')
                $('#modalEtapa').modal('hide')
            } else {
                return
            }
        }
    })
})