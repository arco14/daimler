<?php
//? Leer los datos enviados por POST
$inputData = file_get_contents("php://input");
$data = json_decode($inputData, true);

//? Inicializar un array para la respuesta
$response = [
    'success' => false,
    'message' => '',
    'details' => []
];

//? Verificar que se reciban los datos necesarios
if (isset($data['carpeta']) && isset($data['archivos']) && is_array($data['archivos'])) {
    $folderName = $data['carpeta']; // Nombre de la carpeta
    $folderPath = "../pages/" . $folderName;

    //? Verificar si la carpeta ya existe
    if (file_exists($folderPath)) {
        $response['message'] = "La carpeta ya existe: $folderPath";
    } else {
        //? Crear la carpeta si no existe
        if (!mkdir($folderPath, 0777, true)) {
            $response['message'] = "Error al crear la carpeta: $folderPath";
        } else {
            $response['success'] = true;
            $response['message'] = "Carpeta creada con éxito: $folderPath";
        }
    }

    //? Procesar los archivos
    foreach ($data['archivos'] as $archivo) {
        //? Verificar que el archivo tenga nombre y contenido
        if (isset($archivo['nombre']) && isset($archivo['contenido'])) {
            $filePath = $folderPath . "/" . $archivo['nombre'];

            //? Verificar si el archivo ya existe
            if (file_exists($filePath)) {
                $response['details'][] = "El archivo ya existe, no se sobrescribió: $filePath";
            } else {
                //? Crear el archivo si no existe
                if (file_put_contents($filePath, $archivo['contenido'])) {
                    $response['details'][] = "Archivo creado con éxito: $filePath";
                } else {
                    $response['details'][] = "Error al crear el archivo: $filePath";
                }
            }
        } else {
            $response['details'][] = "Datos incompletos para un archivo.";
        }
    }
} else {
    $response['message'] = "No se recibieron datos válidos.";
}

//? Devolver la respuesta en formato JSON
header('Content-Type: application/json');
echo json_encode($response);
?>