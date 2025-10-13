window.addEventListener('DOMContentLoaded', async () => {
    //? VARIABLES GLOBALES
    const url = CONFIG.API_URL

    const token = $('#userToken').val()
    const userActive = $('#userActive').val()
    let idMenu, nameMenu
    //? VALIDAR SI EL USUARIO ES NUEVO 
    const dataToken = {
        Stored: 'PA_CORE_ConMenu',
        Opcion: "UT",
        Usuario: userActive,
        Token: token
    }
    const dataUser = await loadAPI(`${url}DAIMLER`, 'POST', dataToken, token, false)
    const password = dataUser.response[0][0].USUARIO_NUEVO
    if (password === 1) {
        $('#modalUpdatePassword').modal({
            backdrop: 'static',
            keyboard: false
        }).modal('show')
    } else {
        //? LLAMADA API Y GENERAR MODULOS
        async function generateMenu() {
            const dataMenu = {
                Stored: 'PA_CORE_ConMenu',
                Opcion: 'VUS',
                Usuario: userActive,
            }
            const loadMenu = await loadAPI(`${url}DAIMLER`, 'POST', dataMenu, token, false)
            const menuAppend = $('#menuItems')
            const menu = loadMenu.response[0]
            const subMenu = loadMenu.response[1]
            if (loadMenu !== undefined) {
                for (let i = 0; i < menu.length; i++) {
                    idMenu = menu[i].Id
                    nameMenu = menu[i].Nombre.replace(/\s+/g, '')

                    //? Verifica si el módulo ya está en el DOM
                    if (menu[i].Activo === 1 && $(`#module${nameMenu}`).length === 0) {
                        menuAppend.append(`
                        <li class="nav-item mt-2">
                            <a href="#" class="nav-link modules">
                                <img width="30" height="30" src="${menu[i].Icono}" alt="Icon-Modules">
                                <p class="ml-1">
                                    ${menu[i].NombreMenu}
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview" id="module${nameMenu}"></ul>
                        </li>
                    `)
                    }

                    //? Agrega submenús solo si no existen
                    for (let j = 0; j < subMenu.length; j++) {
                        if (subMenu[j].IdModulo === idMenu && subMenu[j].Activo === 1) {
                            const subMenuId = `id${subMenu[j].Nombre}`
                            if ($(`#${subMenuId}`).length === 0) {
                                let ruta = subMenu[j].Ruta ? `./view/pages/${subMenu[j].Nombre}/${subMenu[j].Nombre}.php` : "#"
                                $(`#module${nameMenu}`).append(`
                                <input type="hidden" value="${subMenu[j].Id}" id="${subMenuId}">
                                <li class="nav-item mt-2">
                                    <a href="${ruta}" class="nav-link" target="miIframe">
                                        <i class="fas fa-folder-open"></i>
                                        <p>${subMenu[j].NombreMenu}</p>
                                    </a>
                                </li>
                            `)
                            }
                        }
                    }
                }
            }
        }

        generateMenu()
        $('#btnActualizarAccesos').click(() => {
            generateMenu()
        })
    }
})