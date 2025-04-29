<?php
require_once "conexion.php";

class ModeloEmpleados
{

    static public function mdlMostrarEmpleados($jsonParametros)
    { 
        $jsonParametros=json_decode($jsonParametros);
        $query="CALL PA_DAICapEmpleados(:jsonParametros)";
        $stmt=Conexion::conectar()->prepare( $query);
        $stmt->bindParam(":jsonParametros", $jsonParametros,PDO::PARAM_STR);	
        if($stmt->execute())
        {
            return($stmt-> fetchAll());
            //return "ok";
            //return $stmt-> fetch();
            //echo "ok";
        }else
        {
            $arr = $stmt->errorInfo();
            return print_r($arr);
        }
   
            $stmt->close();
            $stmt=null;   
    }
    static public function mdlConsultarInformacion($jsonParametros)
    { 
        $jsonParametros=json_decode($jsonParametros);
       // echo $jsonParametros;
        $query="CALL PA_DAICapEmpleados(:jsonParametros)";
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
    static public function mdlGuardarTalla($jsonParametros)
    {
        $jsonParametros=json_decode($jsonParametros);
        $query="CALL PA_DAICapEmpleados(:jsonParametros)";
        $stmt=Conexion::conectar()->prepare( $query);
        $stmt->bindParam(":jsonParametros", $jsonParametros,PDO::PARAM_STR);	
        
        if($stmt->execute()){
            $array=array();
            do {
                $rows = $stmt->fetchAll();
                if ($rows) {

                    array_push($array,$rows);
                }
             } while ($stmt->nextRowset());
             //print_r($array);
             return ( $array);   
        }else
        {
            $arr = $stmt->errorInfo();
            return print_r($arr);
        }
        

        $stmt->close();
        $stmt=null;
    }
          
    

}