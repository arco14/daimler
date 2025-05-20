<?php

require_once "../modelos/entregas.modelo.php";
require_once "../extensiones/vendor/autoload.php";
use \Mike42\Escpos\Printer;
use Mike42\Escpos\EscposImage;
use Mike42\Escpos\PrintConnectors\FilePrintConnector;
use Mike42\Escpos\PrintConnectors\WindowsPrintConnector;

 class ControladorEntregas
 {
    static public function ctrConsultarOperativa($jsonParametros)
    {
		$respuesta= ModeloEntregas::mdlMostrarEmpleados($jsonParametros);
		//echo json_encode($respuesta);
		return $respuesta;
    }
    static public function ctrConsultarInformacion()
    {
		$jsonParametros=json_encode($_POST["data"]);
        //echo $jsonParametros;
        $respuesta= ModeloEntregas::mdlConsultarInformacion($jsonParametros);
        //print_r($respuesta);
		echo json_encode($respuesta);
		//return $respuesta;
    }
    static public function crtImpresionTicket(){
        $arrayMaestro=array();
        $arrayDetalle=array();
        $arrayMaestro=  json_decode($_POST["arrayMaestro"]);
        $arrayDetalle=json_decode($_POST["arrayDetalle"]);

        for($p=0; $p<2;$p++){
            $impresora = "EPSON TM-T20II Receipt5";      
            $conector = new WindowsPrintConnector($impresora);
            $printer = new Printer($conector);
            $printer -> setJustification(Printer::JUSTIFY_CENTER);
            $printer -> text("Entrega Anual 2025"."\n");//Nombre de la empresa
            $printer -> text($arrayMaestro[0]->FECHA."\n");//Fecha de la factura
            $printer -> text($arrayMaestro[0]->USUARIO."\n");//Fecha de la factura
            $printer -> feed(1); //Alimentamos el papel 1 vez
            $printer->setJustification(Printer::JUSTIFY_RIGHT);
            $printer -> text("Folio: ".$arrayMaestro[0]->Id."\n");//Número de factura
            $printer -> feed(1); //Alimentamos el papel 1 vez
            $printer->setJustification(Printer::JUSTIFY_LEFT);
            $printer -> text("No Empleado: ".$arrayMaestro[0]->NUMERO_EMPLEADO."\n");//Número de factura
            $printer -> text("Empleado: ".$arrayMaestro[0]->NOMBRE."\n");//Número de factura
            $printer -> setEmphasis(true);
            $printer -> text("Area: ".$arrayMaestro[0]->AREA.",Puesto: ".$arrayMaestro[0]->PUESTO."\n");//Número de factura
            $printer -> setEmphasis(false);
            $printer -> feed(1); //Alimentamos el papel 1 vez
            $printer -> setJustification(Printer::JUSTIFY_CENTER);
            $printer -> text("Prendas"."\n");//Nombre de la empresa
            $printer -> feed(1); //Alimentamos el papel 1 vez

            for($i=0; $i<count( $arrayDetalle);$i++){
                $printer->setJustification(Printer::JUSTIFY_LEFT);
                $printer->text($arrayDetalle[$i]->PRENDA.", TALLA ". $arrayDetalle[$i]->TALLA."\n");//Nombre del producto
                $printer->setJustification(Printer::JUSTIFY_RIGHT);
                $printer -> setEmphasis(true);
                $printer->text("Cantidad ". $arrayDetalle[$i]->CANTIDAD."\n");
                $printer -> setEmphasis(false); 
            }
            $printer -> feed(1); //Alimentamos el papel 1 vez

            $printer -> setJustification(Printer::JUSTIFY_LEFT);
            $printer->text("COMENTARIOS: ".$arrayMaestro[0]->COMENTARIOS."\n");
            $printer -> feed(1); //Alimentamos el papel 1 vez
            $printer -> cut(); //Cortamos el papel, si la impresora tiene la opción
            $printer -> close();

       
        }
       
    }
    static public function crtImpresionTicket2(){
        $arrayMaestro=array();
        $arrayDetalle=array();
        $arrayMaestro=  json_decode($_POST["arrayMaestro"]);
        $arrayDetalle=json_decode($_POST["arrayDetalle"]);


        for($p=0; $p<2;$p++){
            $impresora = "EPSON TM-T20II";      
            $conector = new WindowsPrintConnector($impresora);
            $printer = new Printer($conector);
            $printer -> setJustification(Printer::JUSTIFY_CENTER);
            $printer -> text("Entrega Anual 2025"."\n");//Nombre de la empresa
            $printer -> text($arrayMaestro[0]->FECHA."\n");//Fecha de la factura
            $printer -> text($arrayMaestro[0]->USUARIO."\n");//Fecha de la factura
            $printer -> feed(1); //Alimentamos el papel 1 vez
            $printer->setJustification(Printer::JUSTIFY_RIGHT);
            $printer -> text("Folio: ".$arrayMaestro[0]->Id."\n");//Número de factura
            $printer -> feed(1); //Alimentamos el papel 1 vez
            $printer->setJustification(Printer::JUSTIFY_LEFT);
            $printer -> text("No Empleado: ".$arrayMaestro[0]->NUMERO_EMPLEADO."\n");//Número de factura
            $printer -> text("Empleado: ".$arrayMaestro[0]->NOMBRE."\n");//Número de factura
            $printer -> setEmphasis(true);
            $printer -> text("Area: ".$arrayMaestro[0]->AREA.",Puesto: ".$arrayMaestro[0]->PUESTO."\n");//Número de factura
            $printer -> setEmphasis(false);
            $printer -> feed(1); //Alimentamos el papel 1 vez
            $printer -> setJustification(Printer::JUSTIFY_CENTER);
            $printer -> text("Prendas"."\n");//Nombre de la empresa
            $printer -> feed(1); //Alimentamos el papel 1 vez

            for($i=0; $i<count( $arrayDetalle);$i++){
                $printer->setJustification(Printer::JUSTIFY_LEFT);
                $printer->text($arrayDetalle[$i]->PRENDA.", TALLA ". $arrayDetalle[$i]->TALLA."\n");//Nombre del producto
                $printer->setJustification(Printer::JUSTIFY_RIGHT);
                $printer -> setEmphasis(true);
                $printer->text("Cantidad ". $arrayDetalle[$i]->CANTIDAD."\n");
                $printer -> setEmphasis(false); 
            }
            $printer -> feed(1); //Alimentamos el papel 1 vez
            $printer -> setJustification(Printer::JUSTIFY_LEFT);
            $printer->text("COMENTARIOS: ".$arrayMaestro[0]->COMENTARIOS."\n");
            $printer -> feed(1); //Alimentamos el papel 1 vez
            $printer -> cut(); //Cortamos el papel, si la impresora tiene la opción
            $printer -> close();

       
        }
       
    }
	static public function ctrGuardarEntrega()
    {
       // $guardarEntrega=new ControladorEntregas();
        $jsonParametros=json_encode($_POST["data"]);
        $respuesta=ModeloEntregas::mdlGuardar($jsonParametros);
        echo  json_encode ($respuesta);
 
    }
    static public function ctrGenerarSession()
    {

        session_start();
        $_SESSION["iniciarSesion"]="ok";
		$_SESSION["usuario"] = $_POST["data"];
        echo  json_encode( $_SESSION);
    }
    static public function ctrDestruirSession()
    {
        session_start();
        session_destroy();
        echo  json_encode( $_SESSION);

    }




}

if(isset($_POST["action"])){

	switch ($_POST["action"]) {	
			case 'consulta':
				$selectEntrega=new ControladorEntregas();
				$selectEntrega->ctrConsultarInformacion();
				break;
			
			case 'G':
				$guardarEntrega=new ControladorEntregas();
				$guardarEntrega->ctrGuardarEntrega();
				break;
            case 'I':
                    $imprimirEntrega=new ControladorEntregas();
                    $imprimirEntrega->crtImpresionTicket();
                    break;
                case 'I2':
                        $imprimirEntrega=new ControladorEntregas();
                        $imprimirEntrega->crtImpresionTicket2();
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



