<?php

require_once "../modelos/reportes.modelo.php";

 class ControladorReportes
 {
    static public function ctrConsultarOperativa($strStored,$jsonParametros)
    {
		$respuesta= ModeloReportes::mdlConsultaOperativa($strStored,$jsonParametros);
		return $respuesta;
    }
    static public function ctrConsultarInformacion()
    {
		$jsonParametros=json_encode($_POST["data"]);
        $respuesta= ModeloReportes::mdlConsultarInformacion($_POST["stored"],$jsonParametros);
		echo json_encode($respuesta);
    }

}
if(isset($_POST["action"])){

switch ($_POST["action"]) {
	case 'consulta':
		$selectReporte=new ControladorReportes();
		$selectReporte->ctrConsultarInformacion();
		break;
	case 'G':
		$guardarEmpleado=new ControladorEmpleados();
		$guardarEmpleado->ctrGuardarTalla();
		break;
		default:
		break;

}

}



