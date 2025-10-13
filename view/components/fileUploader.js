function loadFileUpload(strComponente, strTipoArchivo, blnMultiple, blnReadOnly) {
    $(strComponente).dxFileUploader({
        selectButtonText: "✅ Seleccionar archivo",
        labelText: "Arrastra y suelta el archivo aquí! 👇",
        accept: strTipoArchivo, // Puedes restringir tipos de archivos, por ejemplo: "image/*" o ".pdf"
        uploadMode: "instantly", //? Especifica la manera de cargar los archivos
        // uploadUrl: "tu_api_para_subir_archivos.php", // URL para procesar la subida
        multiple: blnMultiple,
        readOnly: blnReadOnly,
        onUploaded: function (e) {
            console.log(e)
        },
    })
}