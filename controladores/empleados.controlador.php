<?php

require_once "../modelos/empleados.modelo.php";

 class ControladorEmpleados
 {
    static public function ctrConsultarOperativa($jsonParametros)
    {
		$respuesta= ModeloEmpleados::mdlMostrarEmpleados($jsonParametros);
	
		return $respuesta;

    }
	static public function ctrConsultarInformacion()
    {
		$jsonParametros=json_encode($_POST["data"]);
        //echo $jsonParametros;
        $respuesta= ModeloEmpleados::mdlConsultarInformacion($jsonParametros);
        //print_r($respuesta);
		echo json_encode($respuesta);
		//return $respuesta;
    }
	static public function ctrGuardarTalla()
    {
       // $guardarEntrega=new ControladorEntregas();
        $jsonParametros=json_encode($_POST["data"]);
		//echo  ($jsonParametros);
        $respuesta=ModeloEmpleados::mdlGuardarTalla($jsonParametros);
        echo  json_encode ($respuesta);
 
    }

}

if(isset($_POST["action"])){

switch ($_POST["action"]) {
	case 'consulta':
		$selectEmpleado=new ControladorEmpleados();
		$selectEmpleado->ctrConsultarInformacion();
		break;
	case 'G':
		$guardarEmpleado=new ControladorEmpleados();
		$guardarEmpleado->ctrGuardarTalla();
		break;
		default:
		break;

}

}



