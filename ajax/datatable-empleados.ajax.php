<?php

require_once "../controladores/empleados.controlador.php";

class TablaEmpleados{
    public function mostrarEmpleados()
    {
        $jsonPrametros= json_encode('{"Opcion": "C", "Usuario": "cruz.gonzalez"}');
        $empleado=ControladorEmpleados::ctrConsultarOperativa($jsonPrametros);
       // print_r( $empleado);
             $datosJson ='{"data":[';
        //echo    $datosJson;      
        for($i=0; $i<count($empleado);$i++){
        //ACCIONES
        $botones=  "<div class='img-thumbnail'><button type='button' id='datosTomaTalla' class='btn btn-info btn-circle waves-effect waves-circle waves-float' idEmpleado='".$empleado[$i]["Id"]."' data-toggle='modal' data-target='#modalTomaTalla'><i class='material-icons'>create</i></button></div>";
            
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
            "'.$empleado[$i]["COMENTARIOS"].'"
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
           
            $datosJson .= '[
            "'.$entrega[$i]["FECHA"].'",
            "'.$entrega[$i]["FOLIO"].'",
            "'.$entrega[$i]["COMENTARIOS"].'",
            "'.$entrega[$i]["USUARIO"].'",
            "'.$entrega[$i]["PRENDA"].'",
            "'.$entrega[$i]["TALLA"].'",
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
            
			default:
			
				break;

}

}


