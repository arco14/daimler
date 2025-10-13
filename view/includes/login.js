window.addEventListener('DOMContentLoaded', () => {
    //? VARIABLES
    const url = CONFIG.API_URL

    //? COMPONENTS
    loadTextBox('#textBoxUser', '', true, 'Ingresa tu usuario', true, false)
    loadTextBox('#textBoxPassword', 'password', true, 'Ingresa tu password', true, false)
    loadButton('#btnValidate', 'Entrar', 'default', true, true, false)

    //? FUNCTIONS
    async function sendDataApi(user, password) {
        const login = {
            Stored: 'PA_dai_ConMenu',
            Opcion: "VU",
            Usuario: user,
            Password: password
        }
        const dataLogin = await loadAPI(`${url}DAIMLER`, 'POST', login, '', false)
        console.log(dataLogin)
        if (dataLogin === undefined) {
            return
        } else {
            const dataToken = {
                Stored: 'PA_CORE_ConMenu',
                Opcion: "UT",
                Usuario: user,
                Token: dataLogin.token
            }
            const updateToken = await loadAPI(`${url}DAIMLER`, 'POST', dataToken, dataLogin.token, false)
            const infoUser = updateToken.response[0][0]
            console.log(infoUser)
            if(infoUser.TokenAPI === null  || infoUser.TokenAPI === '' || infoUser.TokenAPI === undefined){
                Swal.fire({
                    title: 'Error!',
                    text: 'EL token esta vacío, contacta a personal de sistemas',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                return
            } else {
                if (updateToken !== undefined) {
                    $.post("./view/includes/post.php", {
                        user: infoUser.UserActive,
                        token: infoUser.TokenAPI,
                        area: infoUser.AREA,
                        nombre: infoUser.NOMBRE,
                        puesto: infoUser.PUESTO,
                        userCorreo: infoUser.CORREO,
                        userImg: infoUser.IMG
                    }, function () {
                        window.location.href = '/daimler26'
                    })
                }
            }
        }
    }

    function validate() {
        const user = $('#textBoxUser').dxTextBox('option', 'value')
        const password = $('#textBoxPassword').dxTextBox('option', 'value')
        sendDataApi(user, password)
    }

    //? ACTIONS
    $('#validateUser').on('submit', (e) => {
        e.preventDefault()
        validate()
    })
})