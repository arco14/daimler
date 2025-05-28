<?php

require_once "../controladores/reportes.controlador.php";

class TablasReportes{
    public function mostrarResumenTallas()
    {
        $jsonPrametros= json_encode('{"Opcion": "CR", "Usuario": "cruz.gonzalez"}');
        $reporte=ControladorReportes::ctrConsultarOperativa('PA_DAIConReportesTomaTallas',$jsonPrametros);
             $datosJson ='{"data":[';
        for($i=0; $i<count($reporte);$i++){
            $datosJson .= '[
            "'.$reporte[$i]["AREA"].'",
            "'.$reporte[$i]["PUESTO"].'",
            "'.$reporte[$i]["HC"].'",
            "'.$reporte[$i]["REGISTRADOS"].'",
            "'.$reporte[$i]["FALTANTES"].'",
            "'.number_format($reporte[$i]["PORCENTAJE"],0).'%"
            ],';
        }
            $datosJson=substr($datosJson, 0,-1);
            $datosJson .=   ']
            } ';
            echo $datosJson ;
    }
    public function mostrarResumenEntregas()
    {
        $jsonPrametros= json_encode('{"Opcion": "CR", "Usuario": "cruz.gonzalez"}');
        $reporte=ControladorReportes::ctrConsultarOperativa('PA_DAIConReportesEntrega',$jsonPrametros);
             $datosJson ='{"data":[';
        for($i=0; $i<count($reporte);$i++){
            $datosJson .= '[
            "'.$reporte[$i]["NUMERO_ENTREGA"].'",
            "'.$reporte[$i]["AREA"].'",
            "'.$reporte[$i]["HC"].'",
            "'.$reporte[$i]["REGISTRADOS"].'",
            "'.$reporte[$i]["FALTANTES"].'",
            "'.number_format($reporte[$i]["PORCENTAJE"],0).'%"
            ],';
        }
            $datosJson=substr($datosJson, 0,-1);
            $datosJson .=   ']
            } ';
            echo $datosJson ;
    }
    public function mostrarResumenEntregasEspecialidades()
    {
        $jsonPrametros= json_encode('{"Opcion": "CRE", "Usuario": "cruz.gonzalez"}');
        $reporte=ControladorReportes::ctrConsultarOperativa('PA_DAIConReportesEntrega',$jsonPrametros);
             $datosJson ='{"data":[';
        for($i=0; $i<count($reporte);$i++){
            $datosJson .= '[
            "'.$reporte[$i]["NUMERO_ENTREGA"].'",
            "'.$reporte[$i]["AREA"].'",
            "'.$reporte[$i]["PUESTO"].'",
            "'.$reporte[$i]["HC"].'",
            "'.$reporte[$i]["REGISTRADOS"].'",
            "'.$reporte[$i]["FALTANTES"].'",
            "'.number_format($reporte[$i]["PORCENTAJE"],0).'%"
            ],';
        }
            $datosJson=substr($datosJson, 0,-1);
            $datosJson .=   ']
            } ';
            echo $datosJson ;
    }
    public function mostrarFaltantesTallas()
    {
        $jsonPrametros= json_encode('{"Opcion": "CEF", "Usuario": "cruz.gonzalez"}');
        $reporte=ControladorReportes::ctrConsultarOperativa('PA_DAIConReportesTomaTallas',$jsonPrametros);
             $datosJson ='{"data":[';
        for($i=0; $i<count($reporte);$i++){
            $datosJson .= '[
            "'.$reporte[$i]["NUMERO_EMPLEADO"].'",
            "'.$reporte[$i]["NOMBRE"].'",
            "'.$reporte[$i]["AREA"].'",
            "'.$reporte[$i]["PUESTO"].'",
            "'.$reporte[$i]["TURNO"].'"
            ],';
        }
            $datosJson=substr($datosJson, 0,-1);
            $datosJson .=   ']
            } ';
            echo $datosJson ;
    }
    public function mostrarFaltantesEntrega()
    {
        $jsonPrametros= json_encode('{"Opcion": "CEF", "Usuario": "cruz.gonzalez"}');
        $reporte=ControladorReportes::ctrConsultarOperativa('PA_DAIConReportesEntrega',$jsonPrametros);
             $datosJson ='{"data":[';
        for($i=0; $i<count($reporte);$i++){
            $datosJson .= '[
            "'.$reporte[$i]["NUMERO_"].'",
            "'.$reporte[$i]["NUMERO_EMPLEADO"].'",
            "'.$reporte[$i]["NOMBRE"].'",
            "'.$reporte[$i]["AREA"].'",
            "'.$reporte[$i]["PUESTO"].'",
            "'.$reporte[$i]["TURNO"].'"
            ],';
        }
            $datosJson=substr($datosJson, 0,-1);
            $datosJson .=   ']
            } ';
            echo $datosJson ;
    }
    public function mostrarResumenFactura()
    {
        $jsonPrametros= json_encode('{"Opcion": "CRF", "Usuario": "cruz.gonzalez"}');
        $reporte=ControladorReportes::ctrConsultarOperativa('PA_DAIConReportesEntrega',$jsonPrametros);
             $datosJson ='{"data":[';
        for($i=0; $i<count($reporte);$i++){
            $datosJson .= '[
            "'.$reporte[$i]["ENTREGA"].'",
            "'.$reporte[$i]["PRENDA"].'",
            "'.$reporte[$i]["CANTIDAD"].'",
            "$'.number_format($reporte[$i]["PRECIO"],2).'",
            "$'.number_format($reporte[$i]["IMPORTE"],2).'"
            ],';
        }

        

            $datosJson=substr($datosJson, 0,-1);
            $datosJson .=   ']
            } ';
            echo $datosJson ;
    }
    public function mostrarRegistradosTallas()
    {
        $jsonPrametros= json_encode('{"Opcion": "CER", "Usuario": "cruz.gonzalez"}');
        $reporte=ControladorReportes::ctrConsultarOperativa('PA_DAIConReportesTomaTallas',$jsonPrametros);
             $datosJson ='{"data":[';
        for($i=0; $i<count($reporte);$i++){
            $datosJson .= '[
            "'.$reporte[$i]["NUMERO_EMPLEADO"].'",
            "'.$reporte[$i]["NOMBRE"].'",
            "'.$reporte[$i]["AREA"].'",
            "'.$reporte[$i]["PUESTO"].'",
            "'.$reporte[$i]["TURNO"].'",
            "'.$reporte[$i]["CAMISA"].'",
            "'.$reporte[$i]["PANTALON"].'",
              "'.$reporte[$i]["SUDADERA"].'",
            "'.$reporte[$i]["COMENTARIOS"].'"
            ],';
        }
            $datosJson=substr($datosJson, 0,-1);
            $datosJson .=   ']
            } ';
            echo $datosJson ;
    }
    public function mostrarRegistradosEntrega()
    {
        $jsonPrametros= json_encode('{"Opcion": "CER", "Usuario": "cruz.gonzalez"}');
        $reporte=ControladorReportes::ctrConsultarOperativa('PA_DAIConReportesEntrega',$jsonPrametros);
             $datosJson ='{"data":[';
        for($i=0; $i<count($reporte);$i++){
            $datosJson .= '[
            "'.$reporte[$i]["FECHA"].'",
            "'.$reporte[$i]["FOLIO"].'",   
            "'.$reporte[$i]["NUMERO_EMPLEADO"].'",
            "'.$reporte[$i]["NOMBRE"].'",
            "'.$reporte[$i]["AREA"].'",
            "'.$reporte[$i]["PUESTO"].'",
            "'.$reporte[$i]["COMENTARIOS"].'",
            "'.$reporte[$i]["CAMISA"].'",
            "'.$reporte[$i]["PANTALON_MEZC"].'",
            "'.$reporte[$i]["PANT_GAB"].'",
            "'.$reporte[$i]["PLAYERA"].'",
            "'.$reporte[$i]["CAMISA_BGD"].'",
            "'.$reporte[$i]["PANT_BGD"].'",
              "'.$reporte[$i]["SUDADERA"].'",
            "'.$reporte[$i]["TOTAL"].'"         
            ],';
        }
            $datosJson=substr($datosJson, 0,-1);
            $datosJson .=   ']
            } ';
            echo $datosJson ;
    }
}

if(isset($_POST["action"])){

	switch ($_POST["action"]) {
			case 'consultaResumenTomaTallas':
				$activarResumen=new TablasReportes();
                $activarResumen->mostrarResumenTallas();
				break;
            case 'consultaFaltantesTomaTallas':
                $activarFaltantes=new TablasReportes();
                $activarFaltantes->mostrarFaltantesTallas();
                break;
            case 'consultaRegistradosTomaTallas':
                $activarRegistrados=new TablasReportes();
                $activarRegistrados->mostrarRegistradosTallas();
                break; 
            case 'consultaResumenEntrega':
                $activarResumen=new TablasReportes();
                $activarResumen->mostrarResumenEntregas();
                break;
            case 'consultaResumenEntregaEspecialidades':
                $activarResumen=new TablasReportes();
                $activarResumen->mostrarResumenEntregasEspecialidades();
                break;
            case 'consultaFaltantesEntrega':
                $activarFaltantes=new TablasReportes();
                $activarFaltantes->mostrarFaltantesEntrega();
                break; 
            case 'consultaResumenFactura':
                $activarFaltantes=new TablasReportes();
                $activarFaltantes->mostrarResumenFactura();
                break;   
            case 'consultaRegistradosEntrega':
                    $activarRegistrados=new TablasReportes();
                    $activarRegistrados->mostrarRegistradosEntrega();
                break;               
			default:
			
				break;

}

}


