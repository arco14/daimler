<?php

require_once "../controladores/entregas.controlador.php";

class TablaEmpleados{
    public function mostrarEmpleados()
    {
        $jsonPrametros= json_encode('{"Opcion": "C", "Usuario": "cruz.gonzalez"}');
        $empleado=ControladorEntregas::ctrConsultarOperativa($jsonPrametros);
             $datosJson ='{"data":[';
        //echo    $datosJson;      
        for($i=0; $i<count($empleado);$i++){
            //ACCIONES
             $botones=  "<div class='img-thumbnail'><button type='button' id='datosEntrega' class='btn btn-info btn-circle waves-effect waves-circle waves-float' idEmpleado='".$empleado[$i]["Id"]."' data-toggle='modal' data-target='#modalEntrega'><i class='material-icons'>create</i></button></div><div class='img-thumbnail'><button type='button' id='datosResumenEntregas' class='btn bg-amber btn-circle waves-effect waves-circle waves-float' idEmpleado='".$empleado[$i]["Id"]."' data-toggle='modal' data-target='#modalResumenEntrega'><i class='material-icons'>help</i></button></div>";
            //ESTATUS
        
            if($empleado[$i]["ACTIVO"])
            {
                $activo="<div class='switch'><label><input type='checkbox' class='estatusPrenda' checked idEmpleado='".$empleado[$i]["Id"]."' estatusEmpleado='0'><span class='lever switch-col-light-blue' ></span></label></div>";
            }else
            {
                $activo="<div class='switch'><label><input type='checkbox' class='estatusPrenda' idEmpleado='".$empleado[$i]["Id"]."' estatusEmpleado='1'><span class='lever switch-col-light-blue' ></span></label></div>";	
            }
            $datosJson .= '[
                "'.$botones.'",
            "'.$empleado[$i]["NUMERO_EMPLEADO"].'",
            "'.$empleado[$i]["NOMBRE"].'",
            "'.$empleado[$i]["AREA"].'",
            "'.$empleado[$i]["PUESTO"].'",
            "'.$empleado[$i]["TURNO"].'",
            "'.$empleado[$i]["CAMISA"].'",
            "'.$empleado[$i]["PANTALON"].'",
             "'.$empleado[$i]["SUDADERA"].'",
            "'.$empleado[$i]["ESTATUS"].'",
            "'.$activo.'"
            ],';
        }
            $datosJson=substr($datosJson, 0,-1);
            $datosJson .=   ']
            } ';
            echo $datosJson ;
    }
    public function mostrarEntregas()
    {
      
        $jsonPrametros= json_encode('{"Opcion": "CEE","Entrega":{"EMP_Id":'.$_POST["idEmpleado"] .' }}');
        $entrega=ControladorEntregas::ctrConsultarOperativa($jsonPrametros);
             $datosJson ='{"data":[';     
        for($i=0; $i<count($entrega);$i++){
            $botones=  "<div class='img-thumbnail'><button type='button' id='eliminarEntrega' class='btn btn-danger btn-circle waves-effect waves-circle waves-float' idEntrega='".$entrega[$i]["Id"]."' ><i class='material-icons'>delete</i></button></div>";
            
            $datosJson .= '[
            "'.$entrega[$i]["FECHA"].'",
            "'.$entrega[$i]["FOLIO"].'",
            "'.$entrega[$i]["COMENTARIOS"].'",
            "'.$entrega[$i]["USUARIO"].'",
            "'.$entrega[$i]["CANTIDAD"].'",
            "'.$botones.'"
            ],';
        }
            $datosJson=substr($datosJson, 0,-1);
            $datosJson .=   ']
            } ';
            echo $datosJson ;
    }
    public function mostrarDetalleEntrega()
    {
      
        $jsonPrametros= json_encode('{"Opcion": "CDE","Entrega":{"EMP_Id":'.$_POST["idEmpleado"] .' }}');
        $entrega=ControladorEntregas::ctrConsultarOperativa($jsonPrametros);
             $datosJson ='{"data":[';     
        for($i=0; $i<count($entrega);$i++){

            $datosJson .= '[
            "'.$entrega[$i]["PRENDA"].'",
            "'.$entrega[$i]["CANTIDAD"].'"
            ],';
        }
            $datosJson=substr($datosJson, 0,-1);
            $datosJson .=   ']
            } ';
            echo $datosJson ;
    }
    // $row['date_field'])

    

}
if(isset($_POST["action"])){

	switch ($_POST["action"]) {
			case 'consultaEmpleados':
				$activarEmpleado=new TablaEmpleados();
                $activarEmpleado->mostrarEmpleados();
				break;
            case 'consultaEntregas':
                $activarEmpleado=new TablaEmpleados();
                $activarEmpleado->mostrarEntregas();
                 break;
                 case 'consultaDetalleEntrega':
                    $activarEmpleado=new TablaEmpleados();
                    $activarEmpleado->mostrarDetalleEntrega();
                     break;
			default:
			
				break;

}

}


