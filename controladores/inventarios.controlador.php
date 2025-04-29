<?php

require_once "../modelos/inventarios.modelo.php";

 class ControladorInventarios
 {
    static public function ctrConsultarOperativa($jsonParametros)
    {
		$respuesta= ModeloInventarios::mdlConsultaOperativa($jsonParametros);
		//echo json_encode($respuesta);
		return $respuesta;
    }
   
	static public function ctrGuardar()
    {
       // $guardarEntrega=new ControladorEntregas();
        $jsonParametros=json_encode($_POST["data"]);
        $respuesta=ModeloInventarios::mdlGuardar($jsonParametros);
        echo  json_encode ($respuesta);
 
    }
  
}

if(isset($_POST["action"])){

	switch ($_POST["action"]) {	
			case 'consulta':
				$selectEntrega=new ControladorEntregas();
				$selectEntrega->ctrConsultarInformacion();
				break;	
			case 'G':
				$guardarAjuste=new ControladorInventarios();
				$guardarAjuste->ctrGuardar();
				break;
            case 'I':
                $imprimirEntrega=new ControladorEntregas();
                $imprimirEntrega->crtImpresionTicket();
                break;
            case 'SS':
                $generarSession=new ControladorEntregas();
                $generarSession->ctrGenerarSession();
                 break;
            case 'SE':
                 $generarSession=new ControladorEntregas();
                 $generarSession->ctrDestruirSession();
                 break;    
			default:
			
				break;

}

}



