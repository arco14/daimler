window.addEventListener("DOMContentLoaded", () => {
    //? VARIABLES GLOBALES 📝
    const url = CONFIG.API_URL
    const token = $('#userToken').val()
    const userActive = $('#userActive').val()
    let idRow, dataGrid, arrayDataRows, blnDblClickGrid, idPrograma

    //? VALIDAR QUE EL CONTENIDO ESTE DENTRO DEL IFRAME 🔍
    if (window.self !== window.top) {
        idPrograma = parent.document.querySelector('#idEmpleados').value
    } else {
        window.location = '/admin-daimler26'
    }
    $('#btnAdd').addClass('d-none')
    $('#btnUpdate').addClass('d-none')
    
    //? FUNCIONES 
    async function generateGrid(option) {
        //? JSON DATA
        const data = {
            Stored: 'PA_OPE_CapDesarrollos',
            Opcion: option,
            Usuario: userActive
        }
        const resData = await loadAPI(`${url}OPERACIONES`, 'POST', data, token, false)
        console.log(resData)
        if (resData === undefined) {
            loadDataGrid(
                '#dataGridEmpleados',
                [],
                'multiple',
                20,
                arrayEmpleados,
                'Empleados',
                false,
                null,
                false,
                500,
                true,
                `gridEmpleados-${idPrograma}`, {
                    editing: {
                        mode: 'popup',
                        useIcons: true,
                        allowAdding: true,
                        allowUpdating: true,
                        allowDeleting: true,
                        selectTextOnEditStart: true,
                        startEditAction: 'click',
                        confirmDelete: false
                    }
                }
            )
        } else {}
    }
    generateGrid('C')
})