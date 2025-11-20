window.addEventListener("DOMContentLoaded", () => {
    //? VARIABLES GLOBALES 📝
    const url = CONFIG.API_URL
    const token = $('#userToken').val()
    const userActive = $('#userActive').val()
    $('#container-buttons').removeClass('d-flex').addClass('d-none')

    //? FUNCIONES 
    async function generarDashboard() {
        const resDashboard = await loadAPI(`${url}DAIMLER`, 'POST', jsonHeadCount, token, false)
        console.log(resDashboard)
        const headCount = resDashboard.response[0][0].HEAD_COUNT
        const entregaTotal = resDashboard.response[0][0].ENTREGADOS
        const entregadosDia = `Entregados Día (${moment(Date()).format('DD/MM/YYYY')})`
        if(resDashboard !== undefined) {
            $('#headCount').text(headCount)
            $('#fechaEntregadosDía').text(entregadosDia)
            $('#entregaTotal').text(entregaTotal)
        }
    }
    generarDashboard()
})