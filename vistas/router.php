<?php
/** Esta vista va controlar mis vistas*/

class Router {

    public static function getVistas($ruta)
    {
        switch ($ruta) {
            case "empleados":
                include("modulos/empleados.php");
                break;
                case "entregas":
                    include("modulos/entregas.php");
                    break;
                case "reporteTomaTallas":
                        include("modulos/reporteTomaTallas.php");
                        break;
                case "reporteEntregas":
                            include("modulos/reporteEntregas.php");
                            break;       
                case "inventarios":
                        include("modulos/inventarios.php");
                        break;
                case "Embarques":
                    include("modulos/embarques.php");
                    break;
            default:
            include("modulos/404.php");
                break;
        }
    }
    public static function getEncabezados($ruta)
    {
        switch ($ruta) {
            case "empleados":
                include("modulos/encabezados/empleados.php");
                break;
                case "entregas":
                    include("modulos/encabezados/entregas.php");
                    break; 
                case "inventarios":
                        include("modulos/encabezados/inventarios.php");
                        break;     
                case "reporteTomaTallas":
                    include("modulos/encabezados/reporteTomaTallas.php");
                    break;  
                case "reporteEntregas":
                    include("modulos/encabezados/reporteEntregas.php");
                    break; 
                case "Embarques":
                    include("modulos/encabezados/embarques.php");
                    break;     
            default:
                break;
        }
    }

}