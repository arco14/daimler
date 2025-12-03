window.addEventListener("DOMContentLoaded", () => {
    //? VARIABLES GLOBALES 📝
    const url = CONFIG.API_URL
    const token = $('#userToken').val()
    const userActive = $('#userActive').val()
    
    //? VALIDAR QUE EL CONTENIDO ESTE DENTRO DEL IFRAME 🔍
    if (window.self !== window.top) {
        idPrograma = parent.document.querySelector('#idReportes').value
    } else {
        window.location = '/admin-daimler26'
    }
    $('#container-buttons').removeClass('d-flex').addClass('d-none')
    

    //? FUNCIONES 
    async function generarDashboard() {
        const resDashboard = await loadAPI(`${url}DAIMLER`, 'POST', jsonHeadCount, token, false)
        console.log(resDashboard)
        const headCount = resDashboard.response[0][0].HEAD_COUNT
        const entregaTotal = resDashboard.response[0][0].ENTREGADOS
        const entregadosDia = `Entregados Día (${moment(Date()).format('L')})`
        if (resDashboard !== undefined) {
            $('#headCount').text(headCount)
            $('#fechaEntregadosDía').text(entregadosDia)
            $('#entregaTotal').text(entregaTotal)
        }
    }
    async function generarDataGrid(strComponente, jsonDataRepo, arrayDataRepo, strNomExcel, blnModal, intHeigth) {
        const resReportes = await loadAPI(`${url}DAIMLER`, 'POST', jsonDataRepo, token, false)
        console.log(resReportes)
        loadDataGrid(
            strComponente,
            resReportes === undefined ? [] : resReportes.response[0],
            'multiple',
            20,
            arrayDataRepo,
            strNomExcel,
            false,
            null,
            blnModal,
            intHeigth,
            true,
            `grid${strNomExcel}-${idPrograma}`,
        )
    }

    //? COMPONENTES
    generarDashboard()
    generarDataGrid('#dataGridResumen', jsonResumen, arrayResumen, 'resumen', true, 500)
    generarDataGrid('#dataGridFaltantes', jsonResumen, arrayFaltantes, 'faltantes', true, 500)
})