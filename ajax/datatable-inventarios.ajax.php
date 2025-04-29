<?php

require_once "../controladores/inventarios.controlador.php";

class TablaInventarios{
    public function mostrarInventarios()
    {
        $jsonPrametros= json_encode('{"Opcion": "C", "Usuario": "cruz.gonzalez"}');
        $inventario=ControladorInventarios::ctrConsultarOperativa($jsonPrametros);
             $datosJson ='{"data":[';
        //echo    $datosJson;      
        for($i=0; $i<count($inventario);$i++){
            //ACCIONES
             $botones=  "<div class='img-thumbnail'><button type='button' id='btnAjusteInventario' class='btn btn-info btn-circle waves-effect waves-circle waves-float' idPrenda='".$inventario[$i]["Id"]."' idTalla='".$inventario[$i]["CAT_TALLA"]."' prenda='".$inventario[$i]["PRENDA_COMPLETA"]."' data-toggle='modal' data-target='#modalAjusteInventario'><i class='material-icons'>create</i></button></div>";
            //ESTATUS
        
            $datosJson .= '[
            "'.$botones.'",
            "'.$inventario[$i]["PRENDA"].'",
            "'.$inventario[$i]["TALLA"].'",
            "'.$inventario[$i]["CANTIDAD"].'"
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
			case 'consultaExistencia':
				$activarInventario=new TablaInventarios();
                $activarInventario->mostrarInventarios();
				break;
          
			default:
			
				break;

}

}


