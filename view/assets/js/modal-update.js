window.addEventListener('DOMContentLoaded', () => {
    //? VARIABLES GLOBALES
    const url = CONFIG.API_URL

    const token = $('#userToken').val()
    const userActive = $('#userActive').val()

    //? Formulario update password
    loadTextBox('#password-container', 'password', true, 'Ingresa tu contraseña personal', false, false)
    const passwordInput = $('#password-container').dxTextBox({
        showClearButton: false,
        maxLength: 10,
        onValueChanged(e) {
            checkPasswordStrength(e.value)
        }
    }).dxTextBox('instance')

    //? Función para generar contraseñas seguras
    function generatePassword() {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-";
        let password = ""
        for (let i = 0; i < 10; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length))
        }
        return password
    }
    //? Función para verificar la fuerza de la contraseña
    function checkPasswordStrength(password) {
        const minLength = $("#min-length");
        const uppercase = $("#uppercase");
        const specialChar = $("#special-char");

        const hasMinLength = password.length >= 10;
        const hasUppercase = /[A-Z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+=\-{}[\]:;"'<>,.?/\\|`~]/.test(password);
        if (hasMinLength) {
            minLength.removeClass('invalid').addClass('valid');
        } else {
            minLength.removeClass('valid').addClass('invalid');
        }

        if (hasUppercase) {
            uppercase.removeClass('invalid').addClass('valid');
        } else {
            uppercase.removeClass('valid').addClass('invalid');
        }

        if (hasSpecialChar) {
            specialChar.removeClass('invalid').addClass('valid');
        } else {
            specialChar.removeClass('valid').addClass('invalid');
        }

        //? Retorna si la contraseña es válida
        return hasMinLength && hasUppercase && hasSpecialChar;
    }
    //? Generar password
    $('#generate-password').click(() => {
        const newPassword = generatePassword();
        passwordInput.option("value", newPassword);
        checkPasswordStrength(newPassword);
    })
    //? Agregar el ícono de ojo dentro del input
    const $inputElement = $("#password-container .dx-texteditor-input")
    const eyeIcon = $("<i class='fa fa-eye eye-icon'></i>")
    $inputElement.after(eyeIcon)
    //? Función para mostrar u ocultar la contraseña
    let isPasswordVisible = false
    eyeIcon.click(function () {
        isPasswordVisible = !isPasswordVisible;
        if (isPasswordVisible) {
            passwordInput.option("mode", "text")
            $(this).removeClass("fa-eye").addClass("fa-eye-slash")
        } else {
            passwordInput.option("mode", "password");
            $(this).removeClass("fa-eye-slash").addClass("fa-eye")
        }
    })
    loadButton('#btnUpdatePassword', 'Guardar', 'success', true, true, false)
    $('#password-form').on('submit', (e) => {
        e.preventDefault()
        const password = passwordInput.option("value")
        const isValid = checkPasswordStrength(password)
        if (isValid) {
            Swal.fire({
                icon: 'question',
                title: 'Deseas actualizar la contraseña?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'SI',
                denyButtonText: 'NO'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const jsonUpdate = {
                        Stored: 'PA_CORE_ConMenu',
                        Opcion: 'UP',
                        Usuario: userActive,
                        Password: password
                    }
                    const res = await loadAPI(`${url}CORE`, 'POST', jsonUpdate, token, false)
                    const estatus = res.response[0][0].ESTATUS
                    if (estatus !== 0) {
                        if (res !== undefined) {
                            passwordInput.option('value', '')
                            $('#modalUpdatePassword').modal('hide')
                            window.location.href = '/admin-daimler26'
                        }
                    } else {
                        const detalle = res.response[1][0].strDetalle
                        Swal.fire({
                            icon: 'warning',
                            title: detalle,
                        })
                    }

                } else if (result.isDenied) {
                    return
                }
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Contraseña inválida',
                text: 'La contraseña debe cumplir con los requisitos'
            })
        }
    })
})