<?php
require_once "conexion.php";

class ModeloReportes
{
    static public function mdlConsultaOperativa($strStored,$jsonParametros)
    { 
        $jsonParametros=json_decode($jsonParametros);
        $query="CALL ".$strStored."(:jsonParametros)";
        $stmt=Conexion::conectar()->prepare( $query);
        $stmt->bindParam(":jsonParametros", $jsonParametros,PDO::PARAM_STR);	
        if($stmt->execute())
        {   
            return($stmt-> fetchAll());
        }else
        {
            $arr = $stmt->errorInfo();
            return print_r($arr);
        }
   
            $stmt->close();
            $stmt=null;   
    }
    static public function mdlConsultarInformacion($strStored,$jsonParametros)
    { 
        $jsonParametros=json_decode($jsonParametros);
       // echo $jsonParametros;
        $query="CALL ".$strStored."(:jsonParametros)";
        $stmt=Conexion::conectar()->prepare( $query);
        $stmt->bindParam(":jsonParametros", $jsonParametros,PDO::PARAM_STR);	
        if($stmt->execute())
        {
            $array=array();
            do {
                $rows = $stmt->fetchAll();
                if ($rows) {

                    array_push($array,$rows);
                }
             } while ($stmt->nextRowset());
             
             return ( $array);   

        }else
        {
            $arr = $stmt->errorInfo();
            return print_r($arr);
            //echo ($arr);
        }
   
            $stmt->close();
            $stmt=null;   
    }
 

}