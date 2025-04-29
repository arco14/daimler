async function loadAPI(strEndpoint, strMethod, jsonData, strToken, blnAlert) {
    let resData, resStatus
    try {
        const res = await fetch(strEndpoint, {
            method: strMethod,
            headers: {
                'Authorization': strToken, // token obtenido en /api/login
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData),
        })

        if (!res.ok) {
            resStatus = res.status
            throw new Error(`Error en la solicitud: ${res.status}`)
        }

        // Procesar la respuesta como JSON
        const data = await res.json()
        resData = data
        if (blnAlert && data.success) {
            Swal.fire({
                icon: 'success',
                title: 'Éxito!',
                text: 'Los datos se procesaron con exito',
                confirmButtonText: 'Ok',
                timer: 2000
            })
        }
    } catch (error) {
        if (resStatus === 401) {
            Swal.fire({
                title: 'Error!',
                text: 'Token no propocinado, vuelve a iniciar sesión!',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        } else if (resStatus === 403) {
            Swal.fire({
                title: 'Error!',
                text: 'El token caduco o no tienes permiso para la accion solicitada, vuelve a iniciar sesión!',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Error de servidor, contatcta a personal de sistemas',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
    }
    if (resData.response[0].length === 0) {
        return
    } else if (resData.response[0][0].intEstatus === 0) {
        Swal.fire({
            text: resData.response[0][0].strDetalle,
            icon: 'warning',
            confirmButtonText: 'OK'
        })
    } else {
        return resData
    }
}