async function loadFiles(strEndPoint, strMethod, strCarpetaRaiz, blnSubcarpeta, nombreArchivo, formData, strToken) {
    try {
        const response = await fetch(strEndPoint, {
            method: strMethod,
            headers: {
                'nombre-archivo': nombreArchivo,
                'carpeta-raiz': strCarpetaRaiz,
                'sub-carpetas': blnSubcarpeta,
                // 'Authorization': strToken
            },
            body: formData
        })
        console.log(response)
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`)
        }
        const dataFile = await response.json()
        return dataFile.success
    } catch (error) {
        Swal.fire({
            title: 'Error!',
            text: 'Error de servidor, contatcta a personal de sistemas',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }

}